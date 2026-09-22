
import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

import {
  DrawerActions,
} from "@react-navigation/native";

import {
  Ionicons,
} from "@expo/vector-icons";

import ParentTabNavigator
  from "./ParentTabNavigator";

import TimetableScreen
  from "../../screens/parent/TimeTable/TimetableScreen";

import ReportCardsScreen
  from "../../screens/parent/ReportCards/ReportCardsScreen";

import FeeGatewayScreen
  from "../../screens/parent/Fees/FeeGatewayScreen";

import BusTrackingScreen
  from "../../screens/parent/BusTracking/BusTrackingScreen";

import HostelMessScreen
  from "../../screens/parent/hostel&Mess/HostelMessScreen";

import MyProfileScreen
  from "../../screens/parent/myProfile/ProfileScreen";

import TeacherMessagesScreen
  from "../../screens/parent/teacherMessages/TeacherMessagesScreen";

import Header
  from "../../components/Header/Header";

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
} from "../../theme";


const Drawer =
  createDrawerNavigator();


// =====================================================
// DRAWER ITEM TYPE
// =====================================================

type DrawerItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
};


// =====================================================
// DRAWER ITEM
// =====================================================

const DrawerItem = ({
  icon,
  label,
  onPress,
}: DrawerItemProps) => {

  return (
    <TouchableOpacity
      style={styles.drawerItem}
      onPress={onPress}
      activeOpacity={0.7}
    >

      <Ionicons
        name={icon}
        size={21}
        color={COLORS.textSecondary}
      />

      <Text style={styles.drawerItemText}>
        {label}
      </Text>

    </TouchableOpacity>
  );
};


// =====================================================
// DRAWER CONTENT
// =====================================================

const ParentDrawerContent = (
  props: DrawerContentComponentProps
) => {

  // ===================================================
  // NAVIGATION
  // ===================================================

  const navigateToScreen = (
    screenName: string
  ) => {

    props.navigation.dispatch(
      DrawerActions.closeDrawer()
    );

    props.navigation.navigate(
      screenName as never
    );
  };


  return (

    <View style={styles.container}>

      {/* =================================================
          TOP BRAND SECTION
      ================================================= */}

      <View style={styles.drawerHeader}>

        <View style={styles.brandIcon}>

          <Ionicons
            name="school-outline"
            size={26}
            color={COLORS.primary}
          />

        </View>


        <View style={styles.brandTextContainer}>

          <Text style={styles.brandTitle}>
            ParentConnect
          </Text>

          <Text style={styles.brandSubtitle}>
            Parent Portal
          </Text>

        </View>

      </View>


      {/* =================================================
          MENU SECTION
      ================================================= */}

      <View style={styles.menuWrapper}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            styles.menuContainer
          }
        >

          {/* =============================================
              MAIN
          ============================================= */}

          <Text style={styles.sectionTitle}>
            MAIN
          </Text>


          <DrawerItem
            icon="grid-outline"
            label="Dashboard"
            onPress={() =>
              navigateToScreen(
                "ParentMainTabs"
              )
            }
          />


          <DrawerItem
            icon="people-outline"
            label="My Childs"
            onPress={() => {

              props.navigation.dispatch(
                DrawerActions.closeDrawer()
              );

              props.navigation.navigate(
                "ParentMainTabs",
                {
                  screen: "Childs",
                }
              );

            }}
          />


          <DrawerItem
            icon="calendar-outline"
            label="Timetable"
            onPress={() =>
              navigateToScreen(
                "Timetable"
              )
            }
          />


          {/* =============================================
              STUDENT OVERSIGHT
          ============================================= */}

          <Text style={styles.sectionTitle}>
            STUDENT OVERSIGHT
          </Text>


          <DrawerItem
            icon="checkmark-circle-outline"
            label="Attendance"
            onPress={() => {

              props.navigation.dispatch(
                DrawerActions.closeDrawer()
              );

              props.navigation.navigate(
                "ParentMainTabs",
                {
                  screen: "Attendance",
                }
              );

            }}
          />


          <DrawerItem
            icon="document-text-outline"
            label="Report Cards"
            onPress={() =>
              navigateToScreen(
                "ReportCards"
              )
            }
          />


          <DrawerItem
            icon="card-outline"
            label="Fee Gateway"
            onPress={() =>
              navigateToScreen(
                "FeeGateway"
              )
            }
          />


          {/* =============================================
              CAMPUS SERVICES
          ============================================= */}

          <Text style={styles.sectionTitle}>
            CAMPUS SERVICES
          </Text>


          <DrawerItem
            icon="bus-outline"
            label="Bus Tracking"
            onPress={() =>
              navigateToScreen(
                "BusTracking"
              )
            }
          />


          <DrawerItem
            icon="bed-outline"
            label="Hostel & Mess"
            onPress={() =>
              navigateToScreen(
                "HostelMess"
              )
            }
          />


          {/* =============================================
              ACCOUNT & CONNECT
          ============================================= */}

          <Text style={styles.sectionTitle}>
            ACCOUNT & CONNECT
          </Text>


          <DrawerItem
            icon="person-outline"
            label="My Profile"
            onPress={() =>
              navigateToScreen(
                "MyProfile"
              )
            }
          />


          <DrawerItem
            icon="chatbubbles-outline"
            label="Teacher Messages"
            onPress={() =>
              navigateToScreen(
                "TeacherMessages"
              )
            }
          />

        </ScrollView>

      </View>


      {/* =================================================
          FIXED BOTTOM SECTION
      ================================================= */}

      <View style={styles.footer}>

        {/* ===============================================
            SIGN OUT
        =============================================== */}

        <TouchableOpacity
          style={styles.signOutButton}
          activeOpacity={0.7}
        >

          <Ionicons
            name="log-out-outline"
            size={21}
            color={COLORS.danger}
          />

          <Text style={styles.signOutText}>
            Sign out
          </Text>

        </TouchableOpacity>


        {/* ===============================================
            USER
        =============================================== */}

        <View style={styles.userContainer}>

          <View style={styles.userAvatar}>

            <Ionicons
              name="person"
              size={20}
              color={COLORS.white}
            />

          </View>


          <View style={styles.userInfo}>

            <Text
              style={styles.userName}
              numberOfLines={1}
            >
              Dr. Alok Mohanty
            </Text>

            <Text
              style={styles.userRole}
              numberOfLines={1}
            >
              Parent Guardian
            </Text>

          </View>

        </View>

      </View>

    </View>
  );
};


// =====================================================
// NAVIGATOR
// =====================================================

const ParentDrawerNavigator = () => {

  return (

    <Drawer.Navigator

      drawerContent={(props) => (
        <ParentDrawerContent
          {...props}
        />
      )}

      screenOptions={({ route }) => ({

        // =================================================
        // GLOBAL HEADER
        // =================================================

        header: () => (
          <Header
            title={route.name}
            isHome={
              route.name === "ParentMainTabs"
            }
          />
        ),

        headerShown: true,


        // =================================================
        // DRAWER
        // =================================================

        drawerType: "front",

        swipeEnabled: false,

        overlayColor:
          "rgba(0,0,0,0.45)",

        drawerStyle: {
          width: "78%",

          backgroundColor:
            COLORS.white,
        },

      })}
    >

      {/* =================================================
          MAIN TABS
      ================================================= */}

      <Drawer.Screen
        name="ParentMainTabs"
        component={ParentTabNavigator}

        options={{
          headerShown: false,
        }}
      />


      {/* =================================================
          TIMETABLE
      ================================================= */}

      <Drawer.Screen
        name="Timetable"
        component={TimetableScreen}

        options={{
          title: "Timetable",
          headerShown: true,
        }}
      />


      {/* =================================================
          REPORT CARDS
      ================================================= */}

      <Drawer.Screen
        name="ReportCards"
        component={ReportCardsScreen}

        options={{
          title: "Report Cards",
          headerShown: true,
        }}
      />


      {/* =================================================
          FEE GATEWAY
      ================================================= */}

      <Drawer.Screen
        name="FeeGateway"
        component={FeeGatewayScreen}

        options={{
          title: "Fee Gateway",
          headerShown: true,
        }}
      />


      {/* =================================================
          BUS TRACKING
      ================================================= */}

      <Drawer.Screen
        name="BusTracking"
        component={BusTrackingScreen}

        options={{
          title: "Bus Tracking",
          headerShown: true,
        }}
      />


      {/* =================================================
          HOSTEL & MESS
      ================================================= */}

      <Drawer.Screen
        name="HostelMess"
        component={HostelMessScreen}

        options={{
          title: "Hostel & Mess",
          headerShown: true,
        }}
      />


      {/* =================================================
          MY PROFILE
      ================================================= */}

      <Drawer.Screen
        name="MyProfile"
        component={MyProfileScreen}

        options={{
          title: "My Profile",
          headerShown: true,
        }}
      />


      {/* =================================================
          TEACHER MESSAGES
      ================================================= */}

      <Drawer.Screen
        name="TeacherMessages"
        component={TeacherMessagesScreen}

        options={{
          title: "Teacher Messages",
          headerShown: true,
        }}
      />

    </Drawer.Navigator>
  );
};


export default ParentDrawerNavigator;


// =====================================================
// STYLES
// =====================================================

const styles = StyleSheet.create({

  // ===================================================
  // MAIN CONTAINER
  // ===================================================

  container: {

    flex: 1,

    backgroundColor:
      COLORS.white,
  },


  // ===================================================
  // TOP BRAND SECTION
  // ===================================================

  drawerHeader: {

    backgroundColor:
      COLORS.dark,

    paddingHorizontal:
      SPACING.lg,

    paddingVertical:
      SPACING.xl,

    flexDirection:
      "row",

    alignItems:
      "center",
  },


  brandIcon: {

    width: 48,

    height: 48,

    borderRadius:
      RADIUS.md,

    backgroundColor:
      COLORS.darkLight,

    alignItems:
      "center",

    justifyContent:
      "center",

    marginRight:
      SPACING.md,
  },


  brandTextContainer: {

    flex: 1,
  },


  brandTitle: {

    color:
      COLORS.white,

    fontSize:
      TYPOGRAPHY.fontSize.lg,

    fontFamily:
      TYPOGRAPHY.fontFamily.semiBold,
  },


  brandSubtitle: {

    color:
      COLORS.textOnDarkSecondary,

    fontSize:
      TYPOGRAPHY.fontSize.sm,

    fontFamily:
      TYPOGRAPHY.fontFamily.headingRegular,

    marginTop: 2,
  },


  // ===================================================
  // MENU WRAPPER
  // ===================================================

  menuWrapper: {

    flex: 1,

    minHeight: 0,
  },


  // ===================================================
  // MENU
  // ===================================================

  menuContainer: {

    paddingTop:
      SPACING.sm,

    paddingBottom:
      SPACING.md,
  },


  // ===================================================
  // SECTION TITLE
  // ===================================================

  sectionTitle: {

    fontSize:
      TYPOGRAPHY.fontSize.xs,

    fontFamily:
      TYPOGRAPHY.fontFamily.headingSemiBold,

    color:
      COLORS.textMuted,

    letterSpacing: 0.8,

    marginTop:
      SPACING.lg,

    marginBottom:
      SPACING.xs,

    paddingHorizontal:
      SPACING.lg,
  },


  // ===================================================
  // DRAWER ITEM
  // ===================================================

  drawerItem: {

    height: 48,

    flexDirection:
      "row",

    alignItems:
      "center",

    paddingHorizontal:
      SPACING.lg,
  },


  drawerItemText: {

    marginLeft:
      SPACING.md,

    fontSize:
      TYPOGRAPHY.fontSize.md,

    fontFamily:
      TYPOGRAPHY.fontFamily.headingMedium,

    color:
      COLORS.textPrimary,
  },


  // ===================================================
  // FIXED FOOTER
  // ===================================================

  footer: {

    borderTopWidth: 1,

    borderTopColor:
      COLORS.border,

    paddingHorizontal:
      SPACING.lg,

    paddingTop:
      SPACING.md,

    paddingBottom:
      SPACING.lg,

    backgroundColor:
      COLORS.white,
  },


  // ===================================================
  // SIGN OUT
  // ===================================================

  signOutButton: {

    flexDirection:
      "row",

    alignItems:
      "center",

    marginBottom:
      SPACING.lg,
  },


  signOutText: {

    marginLeft:
      SPACING.sm,

    fontSize:
      TYPOGRAPHY.fontSize.md,

    fontFamily:
      TYPOGRAPHY.fontFamily.headingMedium,

    color:
      COLORS.danger,
  },


  // ===================================================
  // USER
  // ===================================================

  userContainer: {

    flexDirection:
      "row",

    alignItems:
      "center",
  },


  userAvatar: {

    width: 42,

    height: 42,

    borderRadius:
      RADIUS.round,

    backgroundColor:
      COLORS.dark,

    alignItems:
      "center",

    justifyContent:
      "center",
  },


  userInfo: {

    marginLeft:
      SPACING.sm,

    flex: 1,

    minWidth: 0,
  },


  userName: {

    fontSize:
      TYPOGRAPHY.fontSize.sm,

    fontFamily:
      TYPOGRAPHY.fontFamily.headingSemiBold,

    color:
      COLORS.textPrimary,
  },


  userRole: {

    fontSize:
      TYPOGRAPHY.fontSize.xs,

    fontFamily:
      TYPOGRAPHY.fontFamily.regular,

    color:
      COLORS.textSecondary,

    marginTop: 2,
  },

});


