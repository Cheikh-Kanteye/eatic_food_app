import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart, Favorite, Home, Profile } from "@src/screens";
import colors from "@src/theme/colors";
import { TabParamList } from "@src/utils/type";
import { setBackgroundColorAsync, setPositionAsync } from "expo-navigation-bar";
import { useEffect } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";

const Tab = createBottomTabNavigator<TabParamList>();
const Indicator = styled.View`
  background-color: ${colors.primary};
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  bottom: -5px;
  transform: rotate(45deg);
`;

const BottomTabNavigator = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      setPositionAsync("relative");
      setBackgroundColorAsync(colors.white);
    }
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarLabel: ({ focused }: any) => {
          return focused ? <Indicator /> : null;
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }: any) => (
            <Feather name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color }: any) => (
            <Feather name="heart" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }: any) => (
            <Feather name="shopping-cart" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }: any) => (
            <Feather name="user" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
