import React from "react";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import StudentListScreen
  from "../../../screens/admin/students/StudentList/StudentListScreen";

import StudentDetailsScreen
  from "../../../screens/admin/students/StudentDetails/StudentDetailsScreen";

import AddStudentScreen
  from "../../../screens/admin/students/Add Student/AddStudentScreen";

import Header
  from "../../../components/Header/Header";


const Stack =
  createNativeStackNavigator();


export default function StudentsNavigator() {

  return (

    <Stack.Navigator

      initialRouteName="StudentList"

      screenOptions={{
        headerShown: true,

        header: ({ route }) => (
          <Header
            title={
              route.name === "StudentList"
                ? "Students"
                : route.name === "StudentDetails"
                ? "Student Details"
                : "Add Student"
            }
          />
        ),
      }}

    >

      {/* =====================================================
          STUDENT LIST
      ====================================================== */}

      <Stack.Screen
        name="StudentList"
        component={StudentListScreen}
      />


      {/* =====================================================
          STUDENT DETAILS
      ====================================================== */}

      <Stack.Screen
        name="StudentDetails"
        component={StudentDetailsScreen}
      />


      {/* =====================================================
          ADD STUDENT
      ====================================================== */}

      <Stack.Screen
        name="AddStudent"
        component={AddStudentScreen}
      />

    </Stack.Navigator>
  );
}