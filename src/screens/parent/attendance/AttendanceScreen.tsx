import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useParent } from '../../../context/ParentContext';
import { COLORS } from '../../../theme';
import { styles } from './style';

// Reusable Button
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

// ---------------------------------------------------------------------------
// Attendance Screen
// ---------------------------------------------------------------------------

export default function AttendanceScreen() {
  const {
    children,
    selectedChild,
    selectChild,
  } = useParent();

  const hasMultipleChildren = children.length > 1;

  // -------------------------------------------------------------------------
  // Safety check
  // -------------------------------------------------------------------------

  if (!selectedChild) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No child selected
          </Text>
        </View>
      </View>
    );
  }

  const child = selectedChild;

  return (
    <View style={styles.container}>
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
        {/* =============================================================== */}
        {/* Child Selector */}
        {/* =============================================================== */}

        {hasMultipleChildren && (
          <View style={styles.childTabsWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.childTabsContent}
            >
              {children.map((currentChild) => {
                const isActive =
                  currentChild.id === selectedChild.id;

                return (
                  <TouchableOpacity
                    key={currentChild.id}
                    activeOpacity={0.8}
                    style={[
                      styles.childTab,
                      isActive && styles.childTabActive,
                    ]}
                    onPress={() =>
                      selectChild(currentChild.id)
                    }
                  >
                    <Text
                      style={[
                        styles.childTabText,
                        isActive &&
                          styles.childTabTextActive,
                      ]}
                    >
                      {currentChild.firstName} (
                      {currentChild.classLabel})
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}

        {/* =============================================================== */}
        {/* Ward Summary */}
        {/* =============================================================== */}

        <Text style={styles.wardLine}>
          Ward:{' '}
          <Text style={styles.wardName}>
            {child.fullName}
          </Text>
          {' · '}
          {child.daysPresent}/{child.totalDays} days
        </Text>

        {/* =============================================================== */}
        {/* Attendance Summary */}
        {/* =============================================================== */}

        <View style={styles.statsRow}>
          {/* Present */}
          <View style={styles.statCard}>
            <Text
              style={[
                styles.statValue,
                styles.statValuePresent,
              ]}
            >
              {child.presentPercent}
            </Text>

            <Text style={styles.statLabel}>
              Present
            </Text>
          </View>

          {/* Absent */}
          <View style={styles.statCard}>
            <Text
              style={[
                styles.statValue,
                styles.statValueAbsent,
              ]}
            >
              {child.absentDays}
            </Text>

            <Text style={styles.statLabel}>
              Absent
            </Text>
          </View>

          {/* Leaves */}
          <View style={styles.statCard}>
            <Text
              style={[
                styles.statValue,
                styles.statValueLeave,
              ]}
            >
              {child.leaveDays}
            </Text>

            <Text style={styles.statLabel}>
              Leaves
            </Text>
          </View>
        </View>

        {/* =============================================================== */}
        {/* Recent Biometric Log */}
        {/* =============================================================== */}

        <Text style={styles.sectionTitle}>
          Recent biometric log
        </Text>

        {child.biometricLog.map((entry) => (
          <View
            key={entry.id}
            style={styles.logCard}
          >
            <View style={styles.logInfo}>
              <Text style={styles.logDate}>
                {entry.dateLabel}
              </Text>

              <Text style={styles.logTime}>
                In {entry.timeIn} · Out{' '}
                {entry.timeOut
                  ? entry.timeOut
                  : 'In Classroom'}
              </Text>
            </View>

            <View style={styles.statusPill}>
              <Text style={styles.statusPillText}>
                {entry.status}
              </Text>
            </View>
          </View>
        ))}

       
      </ScrollView>
       {/* =============================================================== */}
        {/* Apply Leave Exemption */}
        {/* =============================================================== */}

        <View style={styles.leaveButtonWrapper}>
          <PrimaryButton
            title="Apply leave exemption"
            icon="shield-checkmark-outline"
            onPress={() => {
              // Navigate to leave exemption screen
            }}
          />
        </View>
    </View>
  );
}