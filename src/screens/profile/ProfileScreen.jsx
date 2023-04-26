import React from "react";
import { LoginScreen } from "../login/LoginScreen";
import { RegisterScreen } from "../register/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const ProfileScreen = ({ route }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
