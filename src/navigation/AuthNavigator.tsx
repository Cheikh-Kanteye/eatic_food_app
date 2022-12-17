import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OTP, SignIn, Signup } from "@src/screens";
import { AuthStackParamList } from "@src/utils/type";
import {
  setBackgroundColorAsync,
  setButtonStyleAsync,
  setPositionAsync,
} from "expo-navigation-bar";
import React, { useEffect } from "react";
import { Platform } from "react-native";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  useEffect(() => {
    if (Platform.OS == "android") {
      setPositionAsync("absolute");
      setBackgroundColorAsync("rgba(255,255,255, 0.01)");
      setButtonStyleAsync("dark");
    }
  }, []);

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Log_in" component={SignIn} />
      <AuthStack.Screen name="Sign_up" component={Signup} />
      <AuthStack.Screen name="OTP" component={OTP} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
