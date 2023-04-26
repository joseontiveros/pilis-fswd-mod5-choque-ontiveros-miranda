import React from "react";
import { StyleSheet } from "react-native";
import { EventsListScreen } from "./EventsListScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SPACING } from "../../utils/theme";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { HomeScreen } from "../home/HomeScreen";
import { ProfileScreen } from "../profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Profile: "person",
  Events: "event-available",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]; // TAB_ICON[Home]
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.darkblue,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar,
  };
};
export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        options={{ title: "Inicio" }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Events"
        options={{ title: "Eventos / Festivales" }}
        component={EventsListScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{ title: "Perfil" }}
        component={ProfileScreen}
        initialParams={{ screen: 'Login' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs,
  },
});
