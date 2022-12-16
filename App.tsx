import { NavigationContainer } from "@react-navigation/native";
import { LoadAssets, Provider } from "@src/components";
import StackNavigation from "@src/navigation/StackNavigation";
import { setBackgroundColorAsync, setPositionAsync } from "expo-navigation-bar";
import React from "react";
import { Platform } from "react-native";

if (Platform.OS == "android") {
  setPositionAsync("absolute");
  setBackgroundColorAsync("rgba(0,0,0,.1)");
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
