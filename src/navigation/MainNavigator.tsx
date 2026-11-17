
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

import ParentStackNavigator
  from "./Parent/ParentStackNavigator";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const { user } = useAuth();

  // =====================================================
  // ADMIN MODULE
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
          component={AdminDrawerNavigator}
        />
      </Stack.Navigator>
    );
  }

  // =====================================================
  // PARENT MODULE
  // =====================================================

  if (user?.role === "parent") {
    return (
      <ParentProvider>
        <ParentStackNavigator />
      </ParentProvider>
    );
  }

  return null;
}