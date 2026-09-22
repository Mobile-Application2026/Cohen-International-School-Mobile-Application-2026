// import React from "react";

// import {
//   createNativeStackNavigator,
// } from "@react-navigation/native-stack";

// import AcademicYearsScreen
//   from "../../screens/admin/academics/academicyears/AcademicYearsScreen";
//     ``
// import ClassesScreen
//   from "../../screens/admin/academics/classes/ClassesScreen";

// import SectionsScreen
//   from "../../screens/admin/academics/sections/SectionScreen";

// import SubjectsScreen
//   from "../../screens/admin/academics/subject/SubjectsScreen";

// import TeacherAssignmentScreen
//   from "../../screens/admin/academics/TeacherAssigned/TeacherAssignmentScreen";

// import SyllabusScreen
//   from "../../screens/admin/academics/syllabus/SyllabusScreen";

// import Header
//   from "../../components/Header/Header";


// const Stack =
//   createNativeStackNavigator();


// export default function AcademicsNavigator() {

//   return (

//     <Stack.Navigator

//       initialRouteName="AcademicYears"

//       screenOptions={{
//         headerShown: true,

//         header: ({ route }) => (
//           <Header
//             title={
//               route.name === "AcademicYears"
//                 ? "Academic Years"
//                 : route.name === "Classes"
//                 ? "Classes"
//                 : route.name === "Sections"
//                 ? "Sections"
//                 : route.name === "Subjects"
//                 ? "Subjects"
//                 : route.name === "TeacherAssignment"
//                 ? "Teacher Assignment"
//                 : "Syllabus"
//             }
//           />
//         ),
//       }}

//     >

//       {/* =====================================================
//           07. ACADEMIC YEARS
//       ====================================================== */}

//       <Stack.Screen
//         name="AcademicYears"
//         component={AcademicYearsScreen}
//       />


//       {/* =====================================================
//           08. CLASSES
//       ====================================================== */}

//       <Stack.Screen
//         name="Classes"
//         component={ClassesScreen}
//       />


//       {/* =====================================================
//           09. SECTIONS
//       ====================================================== */}

//       <Stack.Screen
//         name="Sections"
//         component={SectionsScreen}
//       />


//       {/* =====================================================
//           10. SUBJECTS
//       ====================================================== */}

//       <Stack.Screen
//         name="Subjects"
//         component={SubjectsScreen}
//       />


//       {/* =====================================================
//           11. TEACHER ASSIGNMENT
//       ====================================================== */}

//       <Stack.Screen
//         name="TeacherAssignment"
//         component={TeacherAssignmentScreen}
//       />


//       {/* =====================================================
//           12. SYLLABUS
//       ====================================================== */}

//       <Stack.Screen
//         name="Syllabus"
//         component={SyllabusScreen}
//       />

//     </Stack.Navigator>
//   );
// }