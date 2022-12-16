import { Feather, Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { images } from "@src/assets";
import {
  BackButton,
  Button,
  Input,
  OTPInput,
  WaveBackdrop,
} from "@src/components";
import { circleSize } from "@src/components/WaveBackdrop";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import { StackParamList } from "@src/utils/type";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface OTPProps {
  navigation: NativeStackNavigationProp<StackParamList, "OTP">;
  route: RouteProp<StackParamList, "OTP">;
}

const OTP = ({ navigation, route }: OTPProps) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState("");
  const [pinReady, setPinReady] = useState(false);
  const maxCodeLength = 4;
  const [resendOtp, setResendOtp] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const timer = `0${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  const resetCountdown = () => {
    setResendOtp(false);
    setMinutes(1);
    setSeconds(59);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          setResendOtp(true);
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <Container>
      <WaveBackdrop style={styles.backdrop1} />
      <WaveBackdrop style={styles.backdrop2} />
      <RowBetween>
        <BackButton />
        <HeaderText>OTP</HeaderText>
        <EmptyView />
      </RowBetween>
      <Form behavior={Platform.OS == "android" ? "padding" : "height"}>
        <TextLarge>Confirm Your OTP Here</TextLarge>
        <Label>OTP Sent to {phoneNumber}</Label>
        <OTPInput
          otp={otp}
          setOtp={setOtp}
          codeLength={maxCodeLength}
          setPinReady={setPinReady}
        />
        <RowBetween>
          <ResendOTP activeOpacity={0.7} onPress={resetCountdown}>
            <Label
              style={{ color: resendOtp ? colors.primary : colors.textGrey }}
            >
              {timer} Resend OTP
            </Label>
          </ResendOTP>
          <VerifyWithCall activeOpacity={1}>
            <Label>Verify with call</Label>
          </VerifyWithCall>
        </RowBetween>
      </Form>
      <Button
        onPress={() => null}
        btnType={pinReady ? "solid" : "disabled"}
        label="Connfirm OTP"
      />
    </Container>
  );
};

export default OTP;
const styles = StyleSheet.create({
  backdrop1: {
    position: "absolute",
    top: -circleSize / 2,
    right: -circleSize / 2,
  },
  backdrop2: {
    position: "absolute",
    left: -circleSize / 2,
    bottom: -circleSize / 2,
  },
});

const EmptyView = styled.View`
  width: 40px;
`;

const ResendOTP = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Label = styled.Text`
  font-size: 14px;
  font-family: "SF_MEDIUM";
  color: ${colors.textGrey};
`;

const VerifyWithCall = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const RowBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${metrics.screenWidth - metrics.spacing * 2}px;
`;

const TextLarge = styled.Text`
  font-size: 28px;
  width: ${metrics.screenWidth / 1.5}px;
  font-family: "SF_MEDIUM";
  color: ${colors.primary};
  padding-bottom: ${metrics.spacing}px;
`;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.white};
  padding: 0 ${metrics.spacing}px;
`;

const HeaderText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: "SF_SEMIBOLD";
`;

const Form = styled.KeyboardAvoidingView`
  flex: 0.7;
  padding-top: ${metrics.spacing * 2}px;
`;