import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackScreen } from "./src/screens/events-list/MainStackScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventsDetailScreen } from "./src/screens/events-detail/EventsDetailScreen";
import { EventsDetailWebScreen } from "./src/screens/events-detail/EventsDetailWebScreen";
import { LoginScreen } from "./src/screens/login/LoginScreen";
import { RegisterScreen } from "./src/screens/register/RegisterScreen";

import { UserProvider } from "./src/contexts/UserContext";

const EventsListStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <EventsListStack.Navigator screenOptions={{ headerShown: false }}>
            {/* //Pantallas con Tab bar */}
            <EventsListStack.Screen name="Main" component={MainStackScreen} />
            {/* //Pantallas sin Tab bar */}
            <EventsListStack.Screen
              name="EventsDetail"
              component={EventsDetailScreen}
            />
            <EventsListStack.Screen
              name="EventsDetailWeb"
              component={EventsDetailWebScreen}
            />
          </EventsListStack.Navigator>
        </NavigationContainer>
      </UserProvider>

      <StatusBar style="auto" />
    </>
  );
}
