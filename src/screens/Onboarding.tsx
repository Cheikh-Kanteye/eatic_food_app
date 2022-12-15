import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useRef, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import { AppContextInterface, Context } from "@src/components/Provider";
import metrics from "@src/theme/metrics";
import colors from "@theme/colors";
import ONBOARDING_DATA from "@utils/onboardingData";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  const scrollRef = useRef<Animated.ScrollView>(null);
  const scrollX = useSharedValue(0);
  const { setOnBoarded } = useContext(Context) as AppContextInterface;
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });
  const [index, setIndex] = useState(1);
  const nextSlide = () => {
    scrollRef.current?.scrollTo({ x: metrics.screenWidth * index });
    if (index <= ONBOARDING_DATA.length - 1) {
      setIndex(index + 1);
    } else setIndex(index);
  };

  const onSkip = async () => {
    try {
      setOnBoarded(true);
      await AsyncStorage.setItem("@onboarding", "DUMMY DATA");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        <SkipButton onPress={onSkip}>
          <SkipText>Skip</SkipText>
        </SkipButton>
      </Header>
      <SlidesContainer
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={metrics.screenWidth}
        scrollEventThrottle={16}
        decelerationRate="fast"
        onScroll={scrollHandler}
        onScrollEndDrag={(e) => {
          setIndex(
            Math.floor(e.nativeEvent.contentOffset.x / metrics.screenWidth) + 1
          );
        }}
      >
        {ONBOARDING_DATA.map((item) => {
          return (
            <Slide key={`slide-${item.id}`}>
              <SlideImg source={item.image} resizeMode="contain" />
              <SlideTitle>{item.title}</SlideTitle>
              <SlideSubTitle>{item.subtitle}</SlideSubTitle>
            </Slide>
          );
        })}
      </SlidesContainer>
      <Footer>
        <View style={{ flex: 1 }} />
        <DotContainer>
          {ONBOARDING_DATA.map((_, index) => {
            return <Paginator key={index} scrollX={scrollX} index={index} />;
          })}
        </DotContainer>
        <NextButton
          onPress={() => {
            if (index !== 3) {
              nextSlide;
            } else onSkip;
          }}
        >
          <NextText>{index === 3 ? "Skip" : "Next"}</NextText>
          <Feather name="chevron-right" size={20} color={colors.primary} />
        </NextButton>
      </Footer>
    </Container>
  );
};

interface PaginatorProps {
  index: number;
  scrollX: Animated.SharedValue<number>;
}

const Paginator = ({ index, scrollX }: PaginatorProps) => {
  const dotAnimatedStyle = useAnimatedStyle(() => {
    const inputRang = [
      (index - 1) * metrics.screenWidth,
      index * metrics.screenWidth,
      (index + 1) * metrics.screenWidth,
    ];
    return {
      width: interpolate(
        scrollX.value,
        inputRang,
        [8, 16, 8],
        Extrapolate.CLAMP
      ),
      backgroundColor: interpolateColor(scrollX.value, inputRang, [
        colors.lightgrey,
        colors.primary,
        colors.lightgrey,
      ]),
    };
  });
  return (
    <Animated.View
      style={[
        { height: 8, borderRadius: 4, marginHorizontal: 4 },
        dotAnimatedStyle,
      ]}
    ></Animated.View>
  );
};

export default Onboarding;

const imageW = metrics.screenWidth - metrics.spacing * 2;

const Footer = styled.View`
  height: ${metrics.screenHeight * 0.1}px;
  width: 100%;
  padding: 0 ${metrics.spacing}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DotContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const NextText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  font-family: "SF_REGULAR";
`;

const SlidesContainer = styled(Animated.ScrollView)`
  flex: 1;
`;

const Slide = styled.View`
  height: ${metrics.screenHeight * 0.8}px;
  width: ${metrics.screenWidth}px;
  justify-content: center;
  align-items: center;
`;

const SlideImg = styled.Image`
  width: ${imageW}px;
  height: ${imageW * 0.8}px;
`;

const SlideTitle = styled.Text`
  font-size: 18px;
  font-family: "SF_SEMIBOLD";
  padding-bottom: ${metrics.spacing}px;
`;
const SlideSubTitle = styled.Text`
  font-size: 16px;
  font-family: "SF_REGULAR";
  text-align: center;
  width: ${metrics.screenWidth * 0.65}px;
  color: ${colors.textGrey};
`;

const Container = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  background-color: ${colors.white};
`;

const Header = styled.View`
  padding: 0 ${metrics.spacing}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${metrics.screenHeight * 0.1}px;
`;

const SkipButton = styled.TouchableOpacity`
  width: 40px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
`;
const SkipText = styled.Text`
  font-size: 16px;
  color: ${colors.textGrey};
  font-family: "SF_REGULAR";
  text-decoration: underline;
`;
