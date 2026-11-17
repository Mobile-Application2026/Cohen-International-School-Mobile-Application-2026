
import React from "react";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import ParentDrawerNavigator
  from "./ParentDrawerNavigator";

import NotificationScreen
  from "../../screens/parent/notification/NotificationScreen";

import Header
  from "../../components/Header/Header";

export type ParentStackParamList = {
  ParentDrawer: undefined;
  Notifications: undefined;
};

const Stack =
  createNativeStackNavigator<ParentStackParamList>();

const ParentStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Main parent module */}
      <Stack.Screen
        name="ParentDrawer"
        component={ParentDrawerNavigator}
      />

      {/* Parent notifications screen */}
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerShown: true,
          header: () => (
            <Header title="Notifications" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ParentStackNavigator;
