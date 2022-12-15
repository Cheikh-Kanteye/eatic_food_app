import { NavigationContainer } from "@react-navigation/native";
import { LoadAssets, Provider } from "@src/components";
import StackNavigation from "@src/navigation/StackNavigation";
import {
  setBackgroundColorAsync,
  setButtonStyleAsync,
  setPositionAsync,
} from "expo-navigation-bar";
import React from "react";
import { Platform } from "react-native";

if (Platform.OS == "android") {
  setPositionAsync("absolute");
  setBackgroundColorAsync("rgba(255,255,255,.1)");
  setButtonStyleAsync("dark");
}

const App = () => {
  return (
    <Provider>
      <LoadAssets>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </LoadAssets>
    </Provider>
  );
};

export default App;
