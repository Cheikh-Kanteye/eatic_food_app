import { Feather } from "@expo/vector-icons";
import { BackButton, MainContainer } from "@src/components";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import { Helps } from "@src/utils/ProfileData";
import React from "react";
import styled from "styled-components/native";

const Help = () => {
  return (
    <MainContainer showHeader LeftIcon={BackButton} label="Help">
      <TextLarge>How can we help you?</TextLarge>
      {Helps.map((item) => {
        return (
          <Item key={item.id} style={{ elevation: 4 }}>
            <Label>{item.label}</Label>
            <Button>
              <Feather
                name={"chevron-right"}
                size={22}
                color={colors.primary}
              />
            </Button>
          </Item>
        );
      })}
    </MainContainer>
  );
};

export default Help;

const TextLarge = styled.Text`
  font-size: 18px;
  font-family: "SF_REGULAR";
  color: ${colors.primary};
  margin: ${metrics.spacing}px 0;
`;
const Label = styled.Text`
  font-size: 16px;
  font-family: "SF_REGULAR";
  color: ${colors.textGrey};
`;
const Item = styled.View`
  background-color: ${colors.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  padding-left: ${metrics.spacing}px;
  margin-bottom: ${metrics.spacing}px;
`;
const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
