
import React from "react";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  useFonts,
} from "expo-font";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

import {
  useAuth,
} from "../context/AuthContext";


const RootNavigator = () => {

  // =========================================================
  // AUTH
  // =========================================================

  const {
    isLoggedIn,
    isLoading,
  } = useAuth();


  // =========================================================
  // LOAD APPLICATION FONTS
  // =========================================================

  const [fontsLoaded] = useFonts({

    // =======================================================
    // POPPINS
    // =======================================================

    "Poppins-Regular":
      require("../../assets/fonts/Poppins-Regular.ttf"),

    "Poppins-Medium":
      require("../../assets/fonts/Poppins-Medium.ttf"),

    "Poppins-SemiBold":
      require("../../assets/fonts/Poppins-SemiBold.ttf"),

    "Poppins-Bold":
      require("../../assets/fonts/Poppins-Bold.ttf"),


    // =======================================================
    // INTER
    // =======================================================

    "Inter-Regular":
      Inter_400Regular,

    "Inter-Medium":
      Inter_500Medium,

    "Inter-SemiBold":
      Inter_600SemiBold,

    "Inter-Bold":
      Inter_700Bold,
  });


  // =========================================================
  // WAIT UNTIL FONTS ARE LOADED
  // =========================================================

  if (!fontsLoaded) {
    return null;
  }


  // =========================================================
  // WAIT UNTIL SAVED LOGIN IS CHECKED
  // =========================================================

  if (isLoading) {
    return null;
  }


  // =========================================================
  // ROOT NAVIGATION
  // =========================================================

  return (

    <NavigationContainer>

      {isLoggedIn ? (

        <MainNavigator />

      ) : (

        <AuthNavigator />

      )}

    </NavigationContainer>
  );
};


export default RootNavigator;

