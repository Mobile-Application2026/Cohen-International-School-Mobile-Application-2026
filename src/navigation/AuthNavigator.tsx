import React from "react";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import SplashScreen from "../screens/auth/SplashScreen/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen/LoginScreen";
import SignInScreen from "../screens/auth/SignInScreen/SignInScreen";
// import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
      />

      {/* Add later */}
      {/* 
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
      */}
    </Stack.Navigator>
  );
}