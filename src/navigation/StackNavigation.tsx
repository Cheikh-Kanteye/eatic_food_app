import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContextInterface, Context } from "@src/components/Provider";
import { Onboarding } from "@src/screens";
import { StackParamList } from "@src/utils/type";
import React, { useContext, useEffect } from "react";
import AuthNavigator from "./AuthNavigator";
import BottomTabNavigator from "./BottomTabNavigation";

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
          <Stack.Screen name="Auth" component={AuthNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
