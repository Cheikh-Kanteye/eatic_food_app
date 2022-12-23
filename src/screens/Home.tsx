import { Feather } from "@expo/vector-icons";
import { FoodItems, IconButton, Input, MainContainer } from "@src/components";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import React, { useState } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import styled from "styled-components/native";

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

const Paginator = () => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      // to be animate
      transform: [{ scale: 1 }],
      backgroundColor: colors.lightgrey,
    };
  });

  return (
    <PaginatorContainer>
      {new Array(5).fill(0).map((_, index) => {
        return <DotIndicator key={index} style={animatedStyle} />;
      })}
    </PaginatorContainer>
  );
};

const Home = () => {
  const [location, setLocation] = useState("PJWC+9QC, Pikine");
  const [searchValue, setSearchValue] = useState("");
  return (
    <MainContainer>
      <Header {...{ location, searchValue, setSearchValue }} />
      <PromoCard></PromoCard>
      <Paginator />
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

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Location = styled.Text`
  font-size: 16px;
  font-family: "SF_REGULAR";
  color: ${colors.primary};
  margin-left: 8px;
`;

const PromoCard = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  background-color: ${colors.lightgrey};
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
