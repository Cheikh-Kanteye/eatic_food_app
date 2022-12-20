import { NavigationContainer } from "@react-navigation/native";
import { LoadAssets, Provider } from "@src/components";
import StackNavigation from "@src/navigation/StackNavigation";
import { StatusBar } from "expo-status-bar";
import React from "react";

const App = () => {
  return (
    <Provider>
      <LoadAssets>
        <StatusBar style="light" />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </LoadAssets>
    </Provider>
  );
};

export default App;
