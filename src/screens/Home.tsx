import { Feather } from "@expo/vector-icons";
import { images } from "@src/assets";
import { FoodItems, IconButton, Input, MainContainer } from "@src/components";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import DiscountData from "@src/utils/DiscountData";
import React, { useRef, useState } from "react";
import { ImageSourcePropType } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import styled from "styled-components/native";

const CARD_WIDTH = metrics.screenWidth - metrics.spacing * 2;

interface HeaderProps {
  location: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

interface CardHeaderProps {
  label: string;
}

const CardHeader = ({ label }: CardHeaderProps) => {
  return (
    <HeaderRow>
      <Label>{label}</Label>
      <MoreBtn>
        <MoreBtnLabel>View All</MoreBtnLabel>
      </MoreBtn>
    </HeaderRow>
  );
};

const Header = ({ location, searchValue, setSearchValue }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderRow>
        <Row>
          <Feather name="map-pin" color={colors.primary} size={22} />
          <Location>{location}</Location>
        </Row>
        <Row>
          <IconButton icon="bell" />
          <XSpacer />
          <IconButton icon="grid" />
        </Row>
      </HeaderRow>
      <Row>
        <Input
          iconName="search"
          placeholder="Search Foods & Restaurant"
          value={searchValue}
          setValue={setSearchValue}
          wd={metrics.inputSize - 56}
        />
        <XSpacer />
        <IconButton
          primary
          bd={8}
          size={50}
          icon="equalizer"
          onPress={() => console.log("filtering")}
        />
      </Row>
    </HeaderContainer>
  );
};

type PaginatorProps = {
  scrollX: Animated.SharedValue<number>;
};

const Paginator = ({ scrollX }: PaginatorProps) => {
  const animatedStyle = (i: number) =>
    useAnimatedStyle(() => {
      const inputRange = [
        (i - 1) * CARD_WIDTH,
        i * CARD_WIDTH,
        (i + 1) * CARD_WIDTH,
      ];
      const scale = interpolate(
        scrollX.value,
        inputRange,
        [0.6, 1.1, 0.6],
        Extrapolate.CLAMP
      );
      return {
        // to be animate
        transform: [{ scale }],
        backgroundColor: interpolateColor(scrollX.value, inputRange, [
          colors.lightgrey,
          colors.primary,
          colors.lightgrey,
        ]),
      };
    });

  return (
    <PaginatorContainer>
      {new Array(5).fill(0).map((_, index) => {
        return <DotIndicator key={index} style={animatedStyle(index)} />;
      })}
    </PaginatorContainer>
  );
};
type PromoProps = {
  percent: number;
  image: ImageSourcePropType;
};

const Promo = ({ percent, image }: PromoProps) => {
  return (
    <PromoCard>
      <Coloumn style={{ alignItems: "flex-start" }}>
        <Text>Get special discount</Text>
        <Percent>Up to {percent}%</Percent>
        <Explore style={{ elevation: 4 }}>
          <Text style={{ color: colors.primary }}>Explore Now</Text>
        </Explore>
      </Coloumn>
      <Coloumn style={{ alignItems: "center" }}>
        <PromoImg source={image} resizeMode="contain" />
      </Coloumn>
    </PromoCard>
  );
};

const Home = () => {
  const [location, setLocation] = useState("PJWC+9QC, Pikine");
  const [searchValue, setSearchValue] = useState("");
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });
  return (
    <MainContainer>
      <Header {...{ location, searchValue, setSearchValue }} />
      <Discounts
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH}
        onScroll={scrollHandler}
      >
        {DiscountData.map((discount, index) => {
          return (
            <Promo
              key={index}
              percent={discount.percent}
              image={discount.image}
            />
          );
        })}
      </Discounts>
      <Paginator scrollX={scrollX} />
      <CardHeader label="Food Items" />
      <FoodItems />
      <CardHeader label="Popular Food" />
    </MainContainer>
  );
};

const XSpacer = styled.View`
  width: 8px;
`;
export default Home;

const HeaderContainer = styled.View`
  width: 100%;
`;
const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: ${metrics.spacing}px;
`;
const Location = styled.Text`
  font-size: 16px;
  font-family: "SF_REGULAR";
  color: ${colors.primary};
  margin-left: 8px;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const Discounts = styled(Animated.ScrollView)`
  width: 100%;
  max-height: 150px;
`;

const Coloumn = styled.View`
  flex: 1;
  justify-content: center;
`;

const PromoCard = styled.View`
  width: ${CARD_WIDTH}px;
  height: 150px;
  border-radius: 10px;
  flex-direction: row;
  background-color: #f1f1f1;
  padding: 0 14px;
`;
const PromoImg = styled.Image`
  width: 80%;
  height: 80%;
`;
const Text = styled.Text`
  font-size: 16px;
  font-family: "SF_REGULAR";
  color: ${colors.textGrey};
`;
const Percent = styled.Text`
  font-size: 24px;
  font-family: "SF_SEMIBOLD";
  margin-top: 6px;
  color: ${colors.primary};
`;

const Explore = styled.TouchableOpacity`
  padding: 0 18px;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 8px;
  border-radius: 6px;
  background-color: ${colors.white};
`;

const PaginatorContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
const DotIndicator = styled(Animated.View)`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 0 2px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-family: "SF_REGULAR";
  color: ${colors.textGrey};
`;
const MoreBtn = styled.TouchableOpacity``;

const MoreBtnLabel = styled.Text`
  font-size: 14px;
  font-family: "SF_REGULAR";
  color: ${colors.primary};
`;
