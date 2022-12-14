import React, { useCallback } from "react";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import styled from "styled-components/native";
import colors from "@theme/colors";

SplashScreen.preventAutoHideAsync();

const LoadAssets = ({ children }: { children: React.ReactNode }) => {
  const [fontsLoaded] = useFonts({
    SF_BOLD: require("../assets/fonts/SFPRODISPLAYBOLD.ttf"),
    SF_SEMIBOLD: require("../assets/fonts/SFPRODISPLAYSEMIBOLD.ttf"),
    SF_MEDIUM: require("../assets/fonts/SFPRODISPLAYMEDIUM.ttf"),
    SF_REGULAR: require("../assets/fonts/SFPRODISPLAYREGULAR.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <FontsLoader>
        <ActivityIndicator size={"large"} color={colors.primary} />
      </FontsLoader>
    );
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};

const FontsLoader = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadAssets;
