import { Feather } from "@expo/vector-icons";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

interface inputProps {
  iconName: keyof typeof Feather.glyphMap;
}

const Input = ({ iconName }: inputProps) => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };
  return (
    <InputContainer
      style={{ borderColor: focused ? colors.primary : colors.gray }}
    >
      <Feather
        name={iconName}
        color={focused ? colors.primary : colors.gray}
        size={22}
      />
      <InputField {...{ onFocus, onBlur }} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.View`
  width: ${metrics.screenWidth - metrics.spacing * 2}px;
  height: 50px;
  border-radius: 8px;
  border-width: ${StyleSheet.hairlineWidth}px;
  margin-bottom: ${metrics.spacing}px;
  flex-direction: row;
  align-items: center;
  padding: 0 ${metrics.spacing * 0.3}px;
`;
const InputField = styled.TextInput`
  flex: 1;
  padding-left: 10px;
`;
