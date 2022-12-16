import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "@src/utils/type";
import { Home, Onboarding, OTP, SignIn } from "@src/screens";
import { AppContextInterface, Context } from "@src/components/Provider";
import SignUp from "@src/screens/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  const { onboarded, isLogedIn, setOnBoarded } = useContext(
    Context
  ) as AppContextInterface;

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@onboarding");
      if (value !== null) {
        setOnBoarded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!onboarded ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : !isLogedIn ? (
        <>
          <Stack.Screen name="Log_in" component={SignIn} />
          <Stack.Screen name="Sign_up" component={SignUp} />
          <Stack.Screen name="OTP" component={OTP} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
