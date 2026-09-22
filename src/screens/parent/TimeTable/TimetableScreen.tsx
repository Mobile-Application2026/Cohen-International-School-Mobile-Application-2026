import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useParent } from '../../../context/ParentContext';
import { COLORS } from '../../../theme';
import { styles } from './style';

// ---------------------------------------------------------------------------
// Days
// ---------------------------------------------------------------------------

const DAYS = [
  { key: 'monday', label: 'Mon' },
  { key: 'tuesday', label: 'Tue' },
  { key: 'wednesday', label: 'Wed' },
  { key: 'thursday', label: 'Thu' },
  { key: 'friday', label: 'Fri' },
  { key: 'saturday', label: 'Sat' },
] as const;

type DayKey = (typeof DAYS)[number]['key'];

// ---------------------------------------------------------------------------
// Timetable Screen
// ---------------------------------------------------------------------------

const TimetableScreen = () => {
  const { selectedChild } = useParent();

  const [activeDay, setActiveDay] =
    useState<DayKey>('monday');

  // -------------------------------------------------------------------------
  // No child selected
  // -------------------------------------------------------------------------

  if (!selectedChild) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyState}>
          <Ionicons
            name="person-outline"
            size={28}
            color={COLORS.textMuted}
          />

          <Text style={styles.emptyTitle}>
            No child selected
          </Text>

          <Text style={styles.emptyText}>
            Please select a child to view the timetable.
          </Text>
        </View>
      </View>
    );
  }

  // -------------------------------------------------------------------------
  // Selected child's timetable
  // -------------------------------------------------------------------------

  const periods =
    selectedChild.timetable[activeDay] ?? [];

  return (
    <View style={styles.container}>

      {/* =============================================================== */}
      {/* Day Tabs */}
      {/* =============================================================== */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.dayTabsRow}
        contentContainerStyle={styles.dayTabsContent}
      >
        {DAYS.map((day) => {
          const isActive =
            activeDay === day.key;

          return (
            <TouchableOpacity
              key={day.key}
              activeOpacity={0.8}
              onPress={() =>
                setActiveDay(day.key)
              }
              style={[
                styles.dayTab,
                isActive &&
                  styles.dayTabActive,
              ]}
            >
              <Text
                style={[
                  styles.dayTabText,
                  isActive &&
                    styles.dayTabTextActive,
                ]}
              >
                {day.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* =============================================================== */}
      {/* Schedule List */}
      {/* =============================================================== */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        {periods.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons
              name="calendar-outline"
              size={28}
              color={COLORS.textMuted}
            />

            <Text style={styles.emptyTitle}>
              No classes scheduled
            </Text>

            <Text style={styles.emptyText}>
              There are no classes scheduled for{' '}
              {DAYS.find(
                (day) =>
                  day.key === activeDay
              )?.label ?? ''}
              .
            </Text>
          </View>
        ) : (
          periods.map((item) => (
            <View
              key={item.id}
              style={styles.periodCard}
            >
              {/* ------------------------------------------------------- */}
              {/* Time Icon */}
              {/* ------------------------------------------------------- */}

              <View style={styles.clockIconWrap}>
                <Ionicons
                  name="time-outline"
                  size={18}
                  color={COLORS.textSecondary}
                />
              </View>

              {/* ------------------------------------------------------- */}
              {/* Subject Information */}
              {/* ------------------------------------------------------- */}

              <View style={styles.periodInfo}>
                <Text
                  style={styles.periodTitle}
                  numberOfLines={2}
                >
                  {item.section
                    ? `${item.section} · ${item.title}`
                    : item.title}
                </Text>

                <Text style={styles.periodSubtitle}>
                  {item.time}
                  {item.location
                    ? ` · ${item.location}`
                    : ''}
                </Text>
              </View>

              {/* ------------------------------------------------------- */}
              {/* Period Number */}
              {/* ------------------------------------------------------- */}

              {item.period ? (
                <View style={styles.periodBadge}>
                  <Text style={styles.periodBadgeText}>
                    {item.period}
                  </Text>
                </View>
              ) : null}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default TimetableScreen;