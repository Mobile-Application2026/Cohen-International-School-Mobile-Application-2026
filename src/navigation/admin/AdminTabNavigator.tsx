import React from "react";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import {
  Ionicons,
} from "@expo/vector-icons";

import {
  Platform,
} from "react-native";

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import AdminDashboardScreen
  from "../../screens/admin/dashboard/AdminDashboardScreen";

import StudentsNavigator
  from "./stacks/StudentsNavigator";

import AcademicYearsScreen
  from "../../screens/admin/academics/academicyears/AcademicYearsScreen";

import ProfileScreen
  from "../../screens/admin/profile/AdminProfileScreen";

import Header
  from "../../components/Header/Header";

import { COLORS } from "../../theme/colors";


const Tab =
  createBottomTabNavigator();


export default function TabNavigator() {

  const insets =
    useSafeAreaInsets();

  const bottomInset =
    insets.bottom;

  const tabBarHeight =
    50 + bottomInset;


  return (

    <Tab.Navigator

      screenOptions={({ route }) => ({

        // =====================================================
        // GLOBAL HEADER
        // =====================================================

        header: () => (
          <Header
            title={route.name}
            isHome={
              route.name === "Dashboard"
            }
          />
        ),


        // =====================================================
        // TAB BAR COLORS
        // =====================================================

        tabBarActiveTintColor:
          COLORS.dark,

        tabBarInactiveTintColor:
          COLORS.textMuted,


        // =====================================================
        // TAB LABEL
        // =====================================================

        tabBarLabelStyle: {

          fontSize: 11,

          fontWeight: "600",

          marginTop: 2,

          paddingBottom: 2,
        },


        // =====================================================
        // TAB BAR
        // =====================================================

        tabBarStyle: {

          height:
            tabBarHeight,

          paddingTop: 1,

          paddingBottom:
            Math.max(
              bottomInset,
              6
            ),

          backgroundColor:
            COLORS.background,

          borderTopWidth: 1,

          borderTopColor:
            COLORS.border,

          elevation: 10,

          shadowColor:
            "#000000",

          shadowOffset: {
            width: 0,
            height: -3,
          },

          shadowOpacity:
            0.08,

          shadowRadius: 8,

          ...(Platform.OS === "android"
            ? {
                elevation: 10,
              }
            : {}),
        },


        // =====================================================
        // TAB ICON
        // =====================================================

        tabBarIcon: ({
          color,
          size,
          focused,
        }) => {

          let iconName:
            keyof typeof Ionicons.glyphMap =
            "home-outline";


          switch (route.name) {

            // -------------------------------------------------
            // DASHBOARD
            // -------------------------------------------------

            case "Dashboard":

              iconName =
                focused
                  ? "home"
                  : "home-outline";

              break;


            // -------------------------------------------------
            // STUDENTS
            // -------------------------------------------------

            case "Students":

              iconName =
                focused
                  ? "people"
                  : "people-outline";

              break;


            // -------------------------------------------------
            // ACADEMICS
            // -------------------------------------------------

            case "Academics":

              iconName =
                focused
                  ? "school"
                  : "school-outline";

              break;


            // -------------------------------------------------
            // PROFILE
            // -------------------------------------------------

            case "Profile":

              iconName =
                focused
                  ? "person"
                  : "person-outline";

              break;
          }


          return (

            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />

          );
        },

      })}

    >

      {/* =====================================================
          DASHBOARD
      ====================================================== */}

      <Tab.Screen
        name="Dashboard"
        component={
          AdminDashboardScreen
        }

        options={{
          tabBarLabel: "Home",
        }}
      />


      {/* =====================================================
          STUDENTS
      ====================================================== */}

      <Tab.Screen
        name="Students"
        component={
          StudentsNavigator
        }

        options={{
          tabBarLabel: "Students",

          // StudentsNavigator has its own Header
          headerShown: false,
        }}
      />


      {/* =====================================================
          ACADEMICS
      ====================================================== */}

      <Tab.Screen
        name="Academics"
        component={
          AcademicYearsScreen
        }

        options={{
          tabBarLabel: "Academics",
        }}
      />


      {/* =====================================================
          PROFILE
      ====================================================== */}

      <Tab.Screen
        name="Profile"
        component={
          ProfileScreen
        }

        options={{
          tabBarLabel: "Profile",
        }}
      />

    </Tab.Navigator>
  );
}