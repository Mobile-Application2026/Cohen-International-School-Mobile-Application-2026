import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../../theme';
import { styles } from './styles';

// Parent Context
import { useParent } from '../../../context/ParentContext';

// Reusable dashboard components
import DashboardStatCard from '../../../components/cards/DashboardStatCard';
import DashboardActionCard from '../../../components/cards/DashboardActionCard';

// ---------------------------------------------------------------------------
// Dashboard Screen
// ---------------------------------------------------------------------------

export default function DashboardScreen() {

  // -------------------------------------------------------------------------
  // Parent Context
  // -------------------------------------------------------------------------

  const {
    children,
    selectedChild,
    selectChild,
  } = useParent();


  // -------------------------------------------------------------------------
  // Dropdown state
  // -------------------------------------------------------------------------

  const [isChildDropdownOpen, setIsChildDropdownOpen] =
    useState(false);


  // -------------------------------------------------------------------------
  // Safety check
  // -------------------------------------------------------------------------

  if (!selectedChild) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No child is linked to this account.
        </Text>
      </View>
    );
  }


  // -------------------------------------------------------------------------
  // Child count
  // -------------------------------------------------------------------------

  const hasMultipleChildren = children.length > 1;


  // -------------------------------------------------------------------------
  // Today's schedule
  //
  // Mock data currently contains Monday timetable data.
  // Later this can be replaced with API-based today's schedule.
  // -------------------------------------------------------------------------

  const todaySchedule =
    selectedChild.timetable.monday;


  // -------------------------------------------------------------------------
  // Handle child selection
  // -------------------------------------------------------------------------

  const handleChildSelect = (childId: string) => {

    selectChild(childId);

    setIsChildDropdownOpen(false);
  };


  return (
    <View style={styles.container}>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* =============================================================== */}
        {/* CHILD SELECTOR */}
        {/* =============================================================== */}

        {children.length === 1 ? (

          // ---------------------------------------------------------------
          // Single child
          // ---------------------------------------------------------------

          <View style={styles.singleChildSelector}>

            <View style={styles.singleChildAvatar}>
              <Text style={styles.singleChildAvatarText}>
                {selectedChild.initials}
              </Text>
            </View>

            <View style={styles.singleChildInfo}>

              <Text style={styles.singleChildName}>
                {selectedChild.fullName}
              </Text>

              <Text style={styles.singleChildMeta}>
                Class {selectedChild.classLabel} ·{' '}
                {selectedChild.board}
              </Text>

            </View>

          </View>

        ) : (

          // ---------------------------------------------------------------
          // Multiple children
          // ---------------------------------------------------------------

          <View style={styles.childSelectorContainer}>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.childSelector}
              onPress={() =>
                setIsChildDropdownOpen(
                  previous => !previous
                )
              }
            >

              <View style={styles.childSelectorLeft}>

                <View style={styles.childAvatar}>
                  <Text style={styles.childAvatarText}>
                    {selectedChild.initials}
                  </Text>
                </View>

                <View style={styles.childSelectorInfo}>

                  <Text
                    style={styles.childSelectorName}
                    numberOfLines={1}
                  >
                    {selectedChild.fullName}
                  </Text>

                  <Text style={styles.childSelectorMeta}>
                    Class {selectedChild.classLabel} ·{' '}
                    {selectedChild.board}
                  </Text>

                </View>

              </View>

              <Ionicons
                name={
                  isChildDropdownOpen
                    ? 'chevron-up'
                    : 'chevron-down'
                }
                size={20}
                color={COLORS.textSecondary}
              />

            </TouchableOpacity>


            {/* ----------------------------------------------------------- */}
            {/* Dropdown */}
            {/* ----------------------------------------------------------- */}

            {isChildDropdownOpen && (

              <View style={styles.dropdown}>

                {children.map((child) => {

                  const isSelected =
                    child.id === selectedChild.id;

                  return (
                    <TouchableOpacity
                      key={child.id}
                      activeOpacity={0.8}
                      style={[
                        styles.dropdownItem,
                        isSelected &&
                          styles.dropdownItemSelected,
                      ]}
                      onPress={() =>
                        handleChildSelect(child.id)
                      }
                    >

                      <View style={styles.dropdownAvatar}>

                        <Text
                          style={[
                            styles.dropdownAvatarText,
                            isSelected &&
                              styles.dropdownAvatarTextSelected,
                          ]}
                        >
                          {child.initials}
                        </Text>

                      </View>


                      <View style={styles.dropdownInfo}>

                        <Text
                          style={[
                            styles.dropdownName,
                            isSelected &&
                              styles.dropdownNameSelected,
                          ]}
                        >
                          {child.fullName}
                        </Text>

                        <Text style={styles.dropdownMeta}>
                          Class {child.classLabel} ·{' '}
                          {child.board}
                        </Text>

                      </View>


                      {isSelected && (
                        <Ionicons
                          name="checkmark-circle"
                          size={20}
                          color={COLORS.primary}
                        />
                      )}

                    </TouchableOpacity>
                  );
                })}

              </View>

            )}

          </View>

        )}


        {/* =============================================================== */}
        {/* GREETING */}
        {/* =============================================================== */}

        <View style={styles.greetingCard}>

          <Text style={styles.greetingLabel}>
            Good morning
          </Text>


          <Text style={styles.teacherName}>
            {selectedChild.teacherName}
          </Text>


          <Text style={styles.studentMeta}>
            {selectedChild.fullName} · Class{' '}
            {selectedChild.classLabel} ·{' '}
            {selectedChild.board}
          </Text>


          {selectedChild.presentToday && (

            <View style={styles.presentBadge}>

              <Ionicons
                name="checkmark-circle"
                size={15}
                color={COLORS.primary}
              />

              <Text style={styles.presentBadgeText}>
                Present today ·{' '}
                {selectedChild.checkInTime}
              </Text>

            </View>

          )}

        </View>


        {/* =============================================================== */}
        {/* STATISTICS */}
        {/* =============================================================== */}

        <View style={styles.statsGrid}>

          <DashboardStatCard
            title="Attendance"
            value={selectedChild.attendance}
            icon="calendar-outline"
            iconColor={COLORS.primary}
          />


          <DashboardStatCard
            title="Class Rank"
            value={selectedChild.classRank}
            icon="trophy-outline"
            iconColor={COLORS.primary}
          />


          <DashboardStatCard
            title="Fee Dues"
            value={selectedChild.feeDues}
            icon="wallet-outline"
            iconColor={COLORS.success}
          />


          <DashboardStatCard
            title="Hostel"
            value={selectedChild.hostel}
            icon="bed-outline"
            iconColor={COLORS.primary}
          />

        </View>


        {/* =============================================================== */}
        {/* TODAY'S SCHEDULE */}
        {/* =============================================================== */}

        <View style={styles.sectionHeaderRow}>

          <Text style={styles.sectionTitle}>
            Today's schedule
          </Text>


          <TouchableOpacity
            activeOpacity={0.7}
          >
            <Text style={styles.sectionLink}>
              Full timetable
            </Text>
          </TouchableOpacity>

        </View>


        {todaySchedule.map((item) => {

          const isNext =
            item.status === 'Next';


          return (

            <View
              key={item.id}
              style={styles.scheduleCard}
            >

              {/* Icon */}

              <View style={styles.scheduleIconWrap}>

                <Ionicons
                  name="time-outline"
                  size={18}
                  color={COLORS.dark}
                />

              </View>


              {/* Information */}

              <View style={styles.scheduleInfo}>

                <Text
                  style={styles.scheduleTitle}
                  numberOfLines={1}
                >
                  {item.section
                    ? `${item.section} · ${item.title}`
                    : item.title}
                </Text>


                <Text
                  style={styles.scheduleSubtitle}
                  numberOfLines={1}
                >
                  {item.time}

                  {item.location
                    ? ` · ${item.location}`
                    : ''}
                </Text>

              </View>


              {/* Status */}

              <Text
                style={[
                  styles.scheduleStatus,
                  isNext &&
                    styles.scheduleStatusNext,
                ]}
              >
                {item.status}
              </Text>

            </View>

          );

        })}


        {/* =============================================================== */}
        {/* QUICK ACTIONS */}
        {/* =============================================================== */}

        <Text
          style={[
            styles.sectionTitle,
            styles.quickActionsTitle,
          ]}
        >
          Quick actions
        </Text>


        <View style={styles.quickActionsContainer}>

          <DashboardActionCard
            title="Pay fees online"
            subtitle="Eduqfix Gateway"
            icon="card-outline"
            iconColor={COLORS.primary}
            onPress={() => {
              // Navigate to fee payment screen
            }}
          />


          <DashboardActionCard
            title="Live GPS bus tracking"
            subtitle="Route #4 · Telemetry active"
            icon="bus-outline"
            iconColor={COLORS.primary}
            onPress={() => {
              // Navigate to bus tracking screen
            }}
          />


          <DashboardActionCard
            title="Download report card"
            subtitle="Term 2 · 2026-27"
            icon="download-outline"
            iconColor={COLORS.primary}
            onPress={() => {
              // Navigate to report card screen
            }}
          />

        </View>

      </ScrollView>

    </View>
  );
}