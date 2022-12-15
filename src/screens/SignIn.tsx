import { images } from "@src/assets";
import { Button, Input } from "@src/components";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import React from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const SignIn = () => {
  return (
    <Container>
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

        <Input iconName="mail" />
        <Input iconName="lock" />
      </Form>
      <ButtonGroup>
        <Button onPress={() => null} btnType="solid" label="Login" />
        <Button onPress={() => null} btnType="outline" label="Sign Up" />
      </ButtonGroup>
    </Container>
  );
};

export default SignIn;

const ButtonGroup = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: flex-end;
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
