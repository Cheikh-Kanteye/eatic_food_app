import { Platform } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LoadAssets } from "./src/components";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import colors from "@src/theme/colors";
import StackNavigation from "@src/navigation/StackNavigation";

if (Platform.OS == "android") {
  setBackgroundColorAsync(colors.white);
}

const App = () => {
  return (
    <LoadAssets>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </LoadAssets>
  );
};

export default App;
