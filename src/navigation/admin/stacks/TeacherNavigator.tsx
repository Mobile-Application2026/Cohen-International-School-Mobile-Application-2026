import React from "react";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import TeacherListScreen
  from "../../../screens/admin/teachers/TeacherList/TeacherListScreen";

import TeacherDetailsScreen
  from "../../../screens/admin/teachers/TeacherDetails/TeacherDetailsScreen";

import AddTeacherScreen
  from "../../../screens/admin/teachers/AddTeacher/AddTeacherScreen";

import Header
  from "../../../components/Header/Header";


const Stack =
  createNativeStackNavigator();


export default function TeacherNavigator() {

  return (

    <Stack.Navigator

      initialRouteName="TeacherList"

      screenOptions={{
        headerShown: true,

        header: ({ route }) => (

          <Header
            title={
              route.name === "TeacherList"
                ? "Teachers"
                : route.name === "TeacherDetails"
                ? "Teacher Details"
                : "Add Teacher"
            }
          />

        ),
      }}

    >

      {/* =====================================================
          TEACHER LIST
      ====================================================== */}

      <Stack.Screen
        name="TeacherList"
        component={TeacherListScreen}
      />


      {/* =====================================================
          TEACHER DETAILS
      ====================================================== */}

      <Stack.Screen
        name="TeacherDetails"
        component={TeacherDetailsScreen}
      />


      {/* =====================================================
          ADD TEACHER
      ====================================================== */}

      <Stack.Screen
        name="AddTeacher"
        component={AddTeacherScreen}
      />

    </Stack.Navigator>

  );
}