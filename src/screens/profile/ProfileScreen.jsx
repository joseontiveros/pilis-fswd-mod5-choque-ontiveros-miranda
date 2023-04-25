import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserInfoScreen } from "../user/UserInfoScreen";
import { LoginScreen } from "../login/LoginScreen";
import { RegisterScreen } from "../register/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { AuthStackScreen } from "../login/AuthStackScreen";

export const ProfileScreen = ({ route }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
      <Stack.Screen name='Register' options={{ headerShown: false }} component={RegisterScreen} />
    </Stack.Navigator>
  )
};

// export const ProfileScreen = ({ route }) => {
//   const { currentUser } = useContext(UserContext);
//   return (
//     <>{currentUser
//       ? <UserInfoScreen />
//       : <LoginScreen />}
//     </>
// )};
