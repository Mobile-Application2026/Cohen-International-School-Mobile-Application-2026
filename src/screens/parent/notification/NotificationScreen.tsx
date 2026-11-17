import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../theme';
import { styles } from './style';

// ==========================================
// NOTIFICATION DATA (inline placeholder values)
// ==========================================
type Category = 'fees' | 'attendance' | 'academics' | 'events' | 'transport' | 'circular';
type Group = 'Today' | 'Yesterday' | 'Earlier';
type IconName = React.ComponentProps<typeof Ionicons>['name'];

type NotificationItem = {
  id: string;
  category: Category;
  title: string;
  message: string;
  time: string;
  group: Group;
  unread: boolean;
};

const GROUPS: Group[] = ['Today', 'Yesterday', 'Earlier'];

const FILTERS: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'unread', label: 'Unread' },
  { key: 'fees', label: 'Fees' },
  { key: 'academics', label: 'Academics' },
  { key: 'attendance', label: 'Attendance' },
  { key: 'events', label: 'Events' },
  { key: 'transport', label: 'Transport' },
  { key: 'circular', label: 'Circulars' },
];

const CATEGORY_CONFIG: Record<
  Category,
  {
    label: string;
    icon: IconName;
    iconColor: string;
    iconWrap: StyleProp<ViewStyle>;
    accent: StyleProp<ViewStyle>;
  }
> = {
  fees: {
    label: 'Fees',
    icon: 'wallet-outline',
    iconColor: COLORS.warning,
    iconWrap: styles.iconFees,
    accent: styles.accentFees,
  },
  attendance: {
    label: 'Attendance',
    icon: 'checkmark-done-outline',
    iconColor: COLORS.success,
    iconWrap: styles.iconAttendance,
    accent: styles.accentAttendance,
  },
  academics: {
    label: 'Academics',
    icon: 'book-outline',
    iconColor: COLORS.info,
    iconWrap: styles.iconAcademics,
    accent: styles.accentAcademics,
  },
  events: {
    label: 'Events',
    icon: 'calendar-outline',
    iconColor: COLORS.purple,
    iconWrap: styles.iconEvents,
    accent: styles.accentEvents,
  },
  transport: {
    label: 'Transport',
    icon: 'bus-outline',
    iconColor: COLORS.teal,
    iconWrap: styles.iconTransport,
    accent: styles.accentTransport,
  },
  circular: {
    label: 'Circular',
    icon: 'megaphone-outline',
    iconColor: COLORS.primaryDark,
    iconWrap: styles.iconCircular,
    accent: styles.accentCircular,
  },
};

const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    category: 'fees',
    title: 'Term II fee due soon',
    message: 'The Term II tuition fee of ₹12,500 is due on 20 Oct 2026. Please pay on time to avoid a late fine.',
    time: '9:30 AM',
    group: 'Today',
    unread: true,
  },
  {
    id: 'n2',
    category: 'attendance',
    title: 'Absence marked today',
    message: 'Your child was marked absent today. If this was planned, please send a leave note to the class teacher.',
    time: '9:05 AM',
    group: 'Today',
    unread: true,
  },
  {
    id: 'n3',
    category: 'transport',
    title: 'Bus Route 07 running late',
    message: 'Route 07 is delayed by about 15 minutes due to traffic near Jatani Chowk. Revised pickup time is 7:45 AM.',
    time: '7:20 AM',
    group: 'Today',
    unread: true,
  },
  {
    id: 'n4',
    category: 'academics',
    title: 'Progress report published',
    message: 'The Annual Examination 2025-26 progress report is now available under Report Cards.',
    time: '4:10 PM',
    group: 'Yesterday',
    unread: true,
  },
  {
    id: 'n5',
    category: 'events',
    title: 'Parent-teacher meeting on Saturday',
    message: 'PTM is scheduled for Saturday, 17 Oct, 10:00 AM to 1:00 PM. Please attend with your child\'s school diary.',
    time: '11:45 AM',
    group: 'Yesterday',
    unread: false,
  },
  {
    id: 'n6',
    category: 'academics',
    title: 'Homework: Mathematics',
    message: 'Complete Exercise 4.2 (pages 38-39) in the notebook. Submission is due on Thursday.',
    time: '2:15 PM',
    group: 'Yesterday',
    unread: false,
  },
  {
    id: 'n7',
    category: 'circular',
    title: 'Winter uniform from 1 November',
    message: 'Students should wear the winter uniform from 1 Nov. Blazers and sweaters must be in the school colours.',
    time: '10 Oct',
    group: 'Earlier',
    unread: false,
  },
  {
    id: 'n8',
    category: 'fees',
    title: 'Payment received',
    message: 'We have received ₹12,500 towards the Term I fee. The receipt is available in the Fees section.',
    time: '6 Oct',
    group: 'Earlier',
    unread: false,
  },
  {
    id: 'n9',
    category: 'events',
    title: 'Holiday on 20 October',
    message: 'The school will remain closed on 20 Oct for Dussehra. Classes will resume on 21 Oct.',
    time: '4 Oct',
    group: 'Earlier',
    unread: false,
  },
];

// ==========================================
// SCREEN
// ==========================================
const NotificationScreen = () => {
  const [items, setItems] = useState<NotificationItem[]>(NOTIFICATIONS);
  const [filter, setFilter] = useState<string>('all');

  const unreadCount = items.filter((item) => item.unread).length;

  const visibleItems = items.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return item.unread;
    return item.category === filter;
  });

  const markAsRead = (id: string) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, unread: false } : item)));
    // TODO: navigate to the related screen (fees, report card, bus tracking, etc.)
  };

  const markAllAsRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  return (
    <View style={styles.container}>
      {/* Summary + mark all */}
      <View style={styles.header}>
        <View style={styles.summaryRow}>
          <View style={styles.summaryInfo}>
            <View style={styles.summaryTitleRow}>
              <Text style={styles.summaryTitle}>
                {unreadCount > 0 ? 'Unread' : 'All caught up'}
              </Text>
              {unreadCount > 0 && (
                <View style={styles.countBadge}>
                  <Text style={styles.countBadgeText}>{unreadCount}</Text>
                </View>
              )}
            </View>
            <Text style={styles.summarySub}>Updates from school for you and your child</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.markAllBtn, unreadCount === 0 && styles.markAllBtnDisabled]}
            disabled={unreadCount === 0}
            onPress={markAllAsRead}
          >
            <Ionicons name="checkmark-done-outline" size={16} color={COLORS.primaryDark} />
            <Text style={styles.markAllText}>Mark all read</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipScroll}
        contentContainerStyle={styles.chipRow}
      >
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <TouchableOpacity
              key={f.key}
              activeOpacity={0.8}
              style={[styles.chip, active && styles.chipActive]}
              onPress={() => setFilter(f.key)}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {f.key === 'unread' && unreadCount > 0 ? `${f.label} (${unreadCount})` : f.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Notification list grouped by day */}
      <ScrollView
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {visibleItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="notifications-off-outline" size={28} color={COLORS.textMuted} />
            <Text style={styles.emptyText}>No notifications here</Text>
          </View>
        ) : (
          GROUPS.map((group) => {
            const groupItems = visibleItems.filter((item) => item.group === group);
            if (groupItems.length === 0) return null;

            return (
              <View key={group}>
                <Text style={styles.groupTitle}>{group}</Text>

                {groupItems.map((item) => {
                  const config = CATEGORY_CONFIG[item.category];
                  return (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.8}
                      style={[styles.card, config.accent, item.unread && styles.cardUnread]}
                      onPress={() => markAsRead(item.id)}
                    >
                      <View style={[styles.iconWrap, config.iconWrap]}>
                        <Ionicons name={config.icon} size={22} color={config.iconColor} />
                      </View>

                      <View style={styles.body}>
                        <View style={styles.titleRow}>
                          <Text
                            style={[styles.title, !item.unread && styles.titleRead]}
                            numberOfLines={2}
                          >
                            {item.title}
                          </Text>
                          {item.unread && <View style={styles.unreadDot} />}
                        </View>

                        <Text style={styles.message} numberOfLines={3}>
                          {item.message}
                        </Text>

                        <Text style={styles.metaText}>
                          {config.label}  •  {item.time}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;