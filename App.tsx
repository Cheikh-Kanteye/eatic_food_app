import { NavigationContainer } from "@react-navigation/native";
import { LoadAssets, Provider } from "@src/components";
import StackNavigation from "@src/navigation/StackNavigation";
import colors from "@src/theme/colors";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import React from "react";
import { Platform } from "react-native";

if (Platform.OS == "android") {
  setBackgroundColorAsync(colors.white);
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
