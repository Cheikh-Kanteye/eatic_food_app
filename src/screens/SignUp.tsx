import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { images } from "@src/assets";
import { BackButton, Button, Input, WaveBackdrop } from "@src/components";
import { circleSize } from "@src/components/WaveBackdrop";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import { StackParamList } from "@src/utils/type";
import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface SignUpProps {
  navigation: NativeStackNavigationProp<StackParamList, "Sign_up">;
}

const SignUp = ({ navigation }: SignUpProps) => {
  const [userName, setUserName] = useState("");
  const [countryCode, setCountryCode] = useState("+221");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <Container>
      <WaveBackdrop style={styles.backdrop1} />
      <WaveBackdrop style={styles.backdrop2} />
      <Row style={{ justifyContent: "space-between" }}>
        <BackButton />
        <HeaderText>Sign up</HeaderText>
        <EmptyView />
      </Row>
      <Form behavior={Platform.OS == "android" ? "padding" : "height"}>
        <LogoContainer>
          <Logo
            source={images.logo}
            resizeMode="contain"
            style={{ tintColor: colors.primary }}
          />
          <LogoName>eatic</LogoName>
        </LogoContainer>

        <Input
          value={userName}
          setValue={setUserName}
          placeholder="Enter your name"
          iconName="user"
        />
        <Input
          value={phoneNumber}
          setValue={setPhoneNumber}
          placeholder="Enter your phone number"
          iconName="phone"
        />
        <Input
          value={email}
          setValue={setEmail}
          placeholder="Enter your email address"
          iconName="mail"
        />
        <Input
          value={password}
          setValue={setPassword}
          secure
          placeholder="Enter your password"
          iconName="lock"
        />
        <Input
          value={confirmPassword}
          setValue={setConfirmPassword}
          secure
          placeholder="Confirm your password"
          iconName="lock"
        />
      </Form>
      <ButtonGroup>
        <Button
          onPress={() =>
            navigation.navigate("OTP", {
              phoneNumber: `${countryCode}${phoneNumber}`,
            })
          }
          btnType="solid"
          label="Send OTP"
        />
        <Row>
          <StyledText>Already have an account?</StyledText>
          <GotoSignIn onPress={() => navigation.navigate("Log_in")}>
            <GotoSignInLabel>Login</GotoSignInLabel>
          </GotoSignIn>
        </Row>
      </ButtonGroup>
    </Container>
  );
};

export default SignUp;
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
const Row = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const EmptyView = styled.View`
  width: 40px;
`;

const StyledText = styled.Text`
  font-size: 18px;
  font-family: "SF_REGULAR";
`;
const GotoSignInLabel = styled.Text`
  font-family: "SF_SEMIBOLD";
  font-size: 16px;
  text-decoration: underline;
`;
const GotoSignIn = styled.TouchableOpacity`
  margin-left: 2px;
`;

const RememberMe = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Label = styled.Text`
  font-size: 14px;
  font-family: "SF_MEDIUM";
  color: ${colors.textGrey};
`;

const ForgotPassword = styled.TouchableOpacity`
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

const ButtonGroup = styled.View`
  /* flex: 0.4; */
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: ${metrics.spacing * 3}px;
`;
const LogoContainer = styled.View`
  margin-bottom: ${metrics.spacing}px;
`;
const Logo = styled.Image`
  width: ${metrics.screenWidth * 0.3}px;
  height: ${metrics.screenWidth * 0.3}px;
`;
const LogoName = styled.Text`
  font-size: 48px;
  letter-spacing: 2px;
  font-family: "SF_MEDIUM";
  color: ${colors.primary};
  margin-top: -20px;
  margin-left: -10px;
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
  flex: 1;
  justify-content: center;
  align-items: center;
`;
