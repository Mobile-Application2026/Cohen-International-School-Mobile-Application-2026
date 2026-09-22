import React from "react";

import {
  createDrawerNavigator,
} from "@react-navigation/drawer";

import TabNavigator from "./AdminTabNavigator";

import TeacherNavigator
  from "./stacks/TeacherNavigator";
// import ExaminationNavigator from "./stacks/ExaminationNavigator";


const Drawer =
  createDrawerNavigator();


export default function DrawerNavigator() {

  return (

    <Drawer.Navigator

      screenOptions={{
        headerShown: false,

        drawerType: "front",

        swipeEnabled: false,

        overlayColor:
          "rgba(0,0,0,0.35)",

        drawerStyle: {
          width: "78%",
        },
      }}

    >

      {/* =====================================================
          MAIN APPLICATION
      ====================================================== */}

      <Drawer.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{
          title: "Dashboard",
        }}
      />


      {/* =====================================================
          TEACHER MANAGEMENT
      ====================================================== */}

      <Drawer.Screen
        name="TeacherManagement"
        component={TeacherNavigator}
        options={{
          title: "Teacher Management",
        }}
      />

      {/* =====================================================
          Examination Management
      ====================================================== */}

{/* 
<Drawer.Screen
        name="Examination Management"
        component={ExaminationNavigator}
        options={{
          title: "Examination Management",
        }}
      /> */}

    </Drawer.Navigator>

  );
}