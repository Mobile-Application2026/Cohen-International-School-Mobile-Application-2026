import React from "react";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import {
  Ionicons,
} from "@expo/vector-icons";

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import Header from "../../components/Header/Header";

import DashboardScreen
  from "../../screens/parent/dashboard/DashboardScreen";

import MyChildrenScreen
  from "../../screens/parent/childs/MyChildrenScreen";

import AttendanceScreen
  from "../../screens/parent/attendance/AttendanceScreen";

import FeeGatewayScreen
  from "../../screens/parent/Fees/FeeGatewayScreen";

import {
  COLORS,
  TYPOGRAPHY,
} from "../../theme";


const Tab = createBottomTabNavigator();


const ParentTabNavigator = () => {

  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        // =================================================
        // GLOBAL HEADER
        // =================================================

        header: () => (
          <Header
            title={route.name}
            isHome={route.name === "Home"}
          />
        ),

        // =================================================
        // TAB COLORS
        // =================================================

        tabBarActiveTintColor:
          COLORS.dark,

        tabBarInactiveTintColor:
          COLORS.textMuted,

        // =================================================
        // TAB BAR
        // =================================================

        tabBarStyle: {
          height: 50 + insets.bottom,

          paddingBottom:
            insets.bottom,

          paddingTop: 4,

          borderTopWidth: 1,

          borderTopColor:
            COLORS.border,

          backgroundColor:
            COLORS.white,

          elevation: 8,
        },

        // =================================================
        // TAB LABEL
        // =================================================

        tabBarLabelStyle: {
          fontFamily:
            TYPOGRAPHY.fontFamily.medium,

          fontSize:
            TYPOGRAPHY.fontSize.xs,
        },

        tabBarHideOnKeyboard: true,
      })}
    >

      {/* =================================================
          HOME
      ================================================= */}

      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          title: "Home",

          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />


      {/* =================================================
          CHILDS
      ================================================= */}

      <Tab.Screen
        name="Childs"
        component={MyChildrenScreen}
        options={{
          title: "Childs",

          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="people-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />


      {/* =================================================
          ATTENDANCE
      ================================================= */}

      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          title: "Attendance",

          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="checkmark-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />


      {/* =================================================
          FEES
      ================================================= */}

      <Tab.Screen
        name="Fees"
        component={FeeGatewayScreen}
        options={{
          title: "Fees",

          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="card-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};


export default ParentTabNavigator;