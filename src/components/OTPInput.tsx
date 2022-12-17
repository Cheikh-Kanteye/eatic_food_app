import { OTP } from "@src/screens";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import React, { useRef, useEffect } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

interface OTPInputProps {
  otp: string;
  codeLength: number;
  setPinReady: (value: boolean) => void;
  setOtp: (value: string) => void;
}

const OTPInput = ({ otp, codeLength, setOtp, setPinReady }: OTPInputProps) => {
  const inputRef = useRef<TextInput>(null);

  const onPress = () => {
    inputRef.current?.focus();
  };
  useEffect(() => {
    setPinReady(codeLength === otp.length);
    return () => {
      setPinReady(false);
    };
  }, [otp]);

  return (
    <Container>
      <HiddenInput
        ref={inputRef}
        value={otp}
        onChangeText={setOtp}
        maxLength={codeLength}
        keyboardType="numbers-and-punctuation"
        keyboardAppearance="light"
        autoFocus
      />
      <SplitFieldContainer>
        {new Array(codeLength).fill(0).map((_, index) => {
          const fieldTouch = otp.length + 1;

          return (
            <Input
              onPress={onPress}
              activeOpacity={1}
              key={index}
              style={{
                backgroundColor:
                  index < otp.length && otp.length != 0 ? "red" : "white",
                elevation: 6,
              }}
            >
              <InputValue>{otp[index] || ""}</InputValue>
            </Input>
          );
        })}
      </SplitFieldContainer>
    </Container>
  );
};

export default OTPInput;

const InputValue = styled.Text`
  font-size: 16px;
  font-family: "SF_SEMIBOLD";
  color: ${colors.white};
`;

const SplitFieldContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  background: ${colors.white};
`;

const Input = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-right: ${metrics.spacing}px;
`;

const Container = styled.View`
  width: ${metrics.screenWidth - metrics.spacing * 2}px;
  height: 45px;
  margin: ${metrics.spacing}px 0;
`;
const HiddenInput = styled.TextInput`
  background-color: papayawhip;
  position: absolute;
  width: 100%;
  height: 100%;
`;
