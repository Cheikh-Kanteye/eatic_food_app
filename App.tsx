import { NavigationContainer } from "@react-navigation/native";
import { LoadAssets, Provider } from "@src/components";
import StackNavigation from "@src/navigation/StackNavigation";
import React from "react";

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
