import React from "react";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import {
  useAuth,
} from "../context/AuthContext";

import {
  ParentProvider,
} from "../context/ParentContext";

import AdminDrawerNavigator
  from "./admin/AdminDrawerNavigator";

import ParentDrawerNavigator
  from "./Parent/ParentDrawerNavigator";


const Stack =
  createNativeStackNavigator();


export default function MainNavigator() {

  const {
    user,
  } = useAuth();


  // =====================================================
  // ADMIN
  // =====================================================

  if (user?.role === "admin") {

    return (

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name="AdminDrawer"
          component={
            AdminDrawerNavigator
          }
        />

      </Stack.Navigator>

    );

  }


  // =====================================================
  // PARENT
  // =====================================================

  if (user?.role === "parent") {

    return (

      <ParentProvider>

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >

          <Stack.Screen
            name="ParentDrawer"
            component={
              ParentDrawerNavigator
            }
          />

        </Stack.Navigator>

      </ParentProvider>

    );

  }


  return null;

}