import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from '../../../theme';

interface ChildCardProps {
  initials: string;
  name: string;
  classLabel: string;
  board: string;
  rollNumber: string;
  attendance: string;
  gradeScore: string;
  feeStatus: string;
  isActive: boolean;
  onPress: () => void;
}

export default function ChildCard({
  initials,
  name,
  classLabel,
  board,
  rollNumber,
  attendance,
  gradeScore,
  feeStatus,
  isActive,
  onPress,
}: ChildCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        isActive && styles.cardActive,
      ]}
    >
      {/* --------------------------------------------------------------- */}
      {/* Header */}
      {/* --------------------------------------------------------------- */}

      <View style={styles.headerRow}>

        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {initials}
          </Text>
        </View>

        {/* Child information */}
        <View style={styles.headerInfo}>
          <Text
            style={styles.name}
            numberOfLines={1}
          >
            {name}
          </Text>

          <Text
            style={styles.meta}
            numberOfLines={1}
          >
            Class {classLabel} · {board}
          </Text>
        </View>

        {/* Roll number */}
        <View style={styles.rollBadge}>
          <Text style={styles.rollBadgeText}>
            Roll #{rollNumber}
          </Text>
        </View>

      </View>

      {/* --------------------------------------------------------------- */}
      {/* Stats */}
      {/* --------------------------------------------------------------- */}

      <View style={styles.statsRow}>

        {/* Attendance */}
        <View style={styles.statBox}>
          <Text style={styles.statValue}>
            {attendance}
          </Text>

          <Text style={styles.statLabel}>
            Attendance
          </Text>
        </View>

        {/* Grade Score */}
        <View style={styles.statBox}>
          <Text style={styles.statValue}>
            {gradeScore}
          </Text>

          <Text style={styles.statLabel}>
            Grade score
          </Text>
        </View>

        {/* Fee Status */}
        <View
          style={[
            styles.statBox,
            styles.statBoxFee,
          ]}
        >
          <Text
            style={[
              styles.statValue,
              styles.statValueFee,
            ]}
          >
            {feeStatus}
          </Text>

          <Text style={styles.statLabel}>
            Fee status
          </Text>
        </View>

      </View>

      {/* --------------------------------------------------------------- */}
      {/* Active Indicator */}
      {/* --------------------------------------------------------------- */}

      {isActive && (
        <View style={styles.activeRow}>

          <View style={styles.activeDot} />

          <Text style={styles.activeText}>
            Active selected ward
          </Text>

        </View>
      )}

    </TouchableOpacity>
  );
}

// =======================================================================
// Styles
// =======================================================================

const styles = StyleSheet.create({

  // ---------------------------------------------------------------------
  // Main Card
  // ---------------------------------------------------------------------

  card: {
    backgroundColor: COLORS.card,

    borderRadius: RADIUS.lg,

    borderWidth: 1,
    borderColor: COLORS.border,

    padding: SPACING.lg,

    marginBottom: SPACING.lg,

    ...SHADOWS.card,
  },

  cardActive: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },

  // ---------------------------------------------------------------------
  // Header
  // ---------------------------------------------------------------------

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: SPACING.lg,
  },

  // ---------------------------------------------------------------------
  // Avatar
  // ---------------------------------------------------------------------

  avatar: {
    width: 48,
    height: 48,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.dark,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: SPACING.md,
  },

  avatarText: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.primary,
  },

  // ---------------------------------------------------------------------
  // Child Information
  // ---------------------------------------------------------------------

  headerInfo: {
    flex: 1,

    paddingRight: SPACING.sm,
  },

  name: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,

    marginBottom: 2,
  },

  meta: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textSecondary,
  },

  // ---------------------------------------------------------------------
  // Roll Badge
  // ---------------------------------------------------------------------

  rollBadge: {
    backgroundColor: COLORS.backgroundLight,

    borderRadius: RADIUS.round,

    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },

  rollBadgeText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textSecondary,
  },

  // ---------------------------------------------------------------------
  // Stats Row
  // ---------------------------------------------------------------------

  statsRow: {
    flexDirection: 'row',

    gap: SPACING.sm,
  },

  statBox: {
    flex: 1,

    backgroundColor: COLORS.backgroundLight,

    borderRadius: RADIUS.md,

    paddingVertical: SPACING.md,

    alignItems: 'center',
  },

  statBoxFee: {
    backgroundColor: 'rgba(76, 175, 112, 0.12)',
  },

  statValue: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,

    marginBottom: 2,
  },

  statValueFee: {
    color: COLORS.success,
  },

  statLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textMuted,
  },

  // ---------------------------------------------------------------------
  // Active Ward
  // ---------------------------------------------------------------------

  activeRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: SPACING.md,

    gap: SPACING.xs,
  },

  activeDot: {
    width: 6,
    height: 6,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.primary,
  },

  activeText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.primary,
  },
});