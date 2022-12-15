import { Feather, Ionicons } from "@expo/vector-icons";
import { images } from "@src/assets";
import { Button, Input, WaveBackdrop } from "@src/components";
import { circleSize } from "@src/components/WaveBackdrop";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  return (
    <Container>
      <WaveBackdrop style={styles.backdrop1} />
      <WaveBackdrop style={styles.backdrop2} />
      <HeaderText>Login</HeaderText>
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
        <RowBetween>
          <RememberMe
            activeOpacity={0.7}
            onPress={() => setRemember(!remember)}
          >
            <Label>Remember me</Label>
            <Feather
              style={{ marginLeft: 8 }}
              name={remember ? "check-circle" : "circle"}
              size={18}
              color={colors.textGrey}
            />
          </RememberMe>
          <ForgotPassword activeOpacity={1}>
            <Label>Forgot password?</Label>
          </ForgotPassword>
        </RowBetween>
      </Form>
      <ButtonGroup>
        <Button onPress={() => null} btnType="solid" label="Login" />
        <Row>
          <StyledText>Don't have an account?</StyledText>
          <GotoSignup>
            <GotoSignupLabel>Sign up</GotoSignupLabel>
          </GotoSignup>
        </Row>
      </ButtonGroup>
    </Container>
  );
};

export default SignIn;
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

const StyledText = styled.Text`
  font-size: 18px;
  font-family: "SF_REGULAR";
`;
const GotoSignupLabel = styled.Text`
  font-family: "SF_SEMIBOLD";
  font-size: 16px;
  text-decoration: underline;
`;
const GotoSignup = styled.TouchableOpacity`
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
  flex: 0.5;
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
