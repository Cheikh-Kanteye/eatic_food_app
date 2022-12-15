import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components/native";
import metrics from "@src/theme/metrics";
import colors from "@src/theme/colors";

interface ButtonProps {
  onPress: () => void;
  btnType: "solid" | "outline" | "disabled";
  label: string;
}

const Button = ({ onPress, btnType, label }: ButtonProps) => {
  const StyledButton =
    btnType === "solid"
      ? ButtonSolid
      : btnType === "outline"
      ? ButtonOutline
      : ButtonDisabled;
  const fg =
    btnType === "solid"
      ? colors.white
      : btnType === "outline"
      ? colors.primary
      : colors.lightgrey;
  return (
    <StyledButton disabled={btnType === "disabled"} onPress={onPress}>
      <Buttonlabel style={{ color: fg }}>{label}</Buttonlabel>
    </StyledButton>
  );
};

export default Button;

const ButtonSolid = styled.TouchableOpacity`
  width: ${metrics.screenWidth - metrics.spacing * 2}px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 8px;
  margin-bottom: ${metrics.spacing}px;
`;
const ButtonOutline = styled.TouchableOpacity`
  width: ${metrics.screenWidth - metrics.spacing * 2}px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${colors.primary};
  color: ${colors.primary};
  margin-bottom: ${metrics.spacing}px;
  border-radius: 8px;
`;
const ButtonDisabled = styled.TouchableOpacity`
  width: ${metrics.screenWidth - metrics.spacing * 2}px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: rgba(221, 60, 54, 0.1);
  border-radius: 8px;
  margin-bottom: ${metrics.spacing}px;
`;

const Buttonlabel = styled.Text`
  font-size: 16px;
  font-family: "SF_MEDIUM";
`;
