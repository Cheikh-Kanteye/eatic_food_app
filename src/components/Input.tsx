import { Feather } from "@expo/vector-icons";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

interface inputProps {
  iconName: keyof typeof Feather.glyphMap;
  placeholder: string;
  value: string;
  secure?: boolean;
  setValue: (value: string) => void;
}

const Input = ({
  iconName,
  placeholder,
  value,
  secure,
  setValue,
}: inputProps) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
      <InputField
        value={value}
        onChangeText={setValue}
        secureTextEntry={secure && !showPassword}
        {...{ onFocus, onBlur, placeholder }}
      />
      {secure && (
        <Feather
          onPress={() => setShowPassword(!showPassword)}
          name={showPassword ? "eye-off" : "eye"}
          size={22}
          color={focused ? colors.primary : colors.gray}
        />
      )}
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
  padding: 0 ${metrics.spacing * 0.6}px;
`;
const InputField = styled.TextInput`
  flex: 1;
  padding-left: 10px;
`;
