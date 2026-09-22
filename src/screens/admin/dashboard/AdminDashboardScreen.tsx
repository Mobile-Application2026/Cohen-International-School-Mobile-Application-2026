import React from "react";
import {
  ScrollView,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import DashboardStatCard from "../../../components/cards/DashboardStatCard";
import QuickAccessCard from "../../../components/cards/QuickAccessCard";

import { COLORS } from "../../../theme/colors";

import { styles } from "./styles";

const Dashboard = () => {
  const navigation = useNavigation<any>();

  // ==========================================
  // QUICK ACCESS NAVIGATION
  // ==========================================

  const navigateTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
    

<View style={styles.header}>
  <Text style={styles.greeting}>
    Welcome
  </Text>

  <Text style={styles.title}>
    Admin
  </Text>

  <Text style={styles.subtitle}>
    Manage your school activities and performance
  </Text>
</View>

        {/* =====================================
            OVERVIEW CARDS
        ===================================== */}

        <View style={styles.statsContainer}>

          {/* ROW 1 */}

          <View style={styles.statsRow}>

            <DashboardStatCard
              title="Students"
              value="1,250"
              icon="people-outline"
              iconColor={COLORS.info}
            />

            <DashboardStatCard
              title="Teachers"
              value="85"
              icon="school-outline"
              iconColor={COLORS.primary}
            />

          </View>

          {/* ROW 2 */}

          <View style={styles.statsRow}>

            <DashboardStatCard
              title="Attendance"
              value="92%"
              icon="checkmark-circle-outline"
              iconColor={COLORS.success}
            />

            <DashboardStatCard
              title="Fees Collected"
              value="₹8.5L"
              icon="wallet-outline"
              iconColor={COLORS.warning}
            />

          </View>

        </View>

        {/* =====================================
            QUICK ACCESS
        ===================================== */}

<View style={styles.sectionHeader}>
  <View style={styles.sectionAccent} />
  <Text style={styles.sectionTitle}>
    Quick Action
  </Text>
</View>

        <View style={styles.quickAccessContainer}>

          <QuickAccessCard
            title="Students"
            icon="people-outline"
            iconColor={COLORS.info}
            onPress={() => navigateTo("Students")}
          />

          <QuickAccessCard
            title="Teachers"
            icon="school-outline"
            iconColor={COLORS.primary}
            onPress={() => navigateTo("Teachers")}
          />

          <QuickAccessCard
            title="Exams"
            icon="document-text-outline"
            iconColor={COLORS.danger}
            onPress={() => navigateTo("Exams")}
          />

          <QuickAccessCard
            title="Attendance"
            icon="checkmark-done-outline"
            iconColor={COLORS.success}
            onPress={() => navigateTo("Attendance")}
          />

          <QuickAccessCard
            title="Reports"
            icon="bar-chart-outline"
            iconColor={COLORS.info}
            onPress={() => navigateTo("Reports")}
          />

          <QuickAccessCard
            title="Calendar"
            icon="calendar-outline"
            iconColor={COLORS.warning}
            onPress={() => navigateTo("Calendar")}
          />

        </View>

      </ScrollView>
    </View>
  );
};

export default Dashboard;