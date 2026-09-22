import { StyleSheet } from 'react-native';

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from '../../../theme';

export const styles = StyleSheet.create({

  // -----------------------------------------------------------------------
  // Container
  // -----------------------------------------------------------------------

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // -----------------------------------------------------------------------
  // Scroll Body
  // -----------------------------------------------------------------------

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.xxxl,
  },

  // -----------------------------------------------------------------------
  // Empty State
  // -----------------------------------------------------------------------

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
  },

  emptyText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textSecondary,
  },

  // -----------------------------------------------------------------------
  // Child Selector
  // -----------------------------------------------------------------------

  childTabsWrapper: {
    marginBottom: SPACING.md,
  },

  childTabsContent: {
    gap: SPACING.sm,
  },

  childTab: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.backgroundLight,

    borderWidth: 1,
    borderColor: COLORS.border,
  },

  childTabActive: {
    backgroundColor: COLORS.dark,
    borderColor: COLORS.dark,
  },

  childTabText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textPrimary,
  },

  childTabTextActive: {
    color: COLORS.textOnDark,
  },

  // -----------------------------------------------------------------------
  // Ward Summary
  // -----------------------------------------------------------------------

  wardLine: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textSecondary,

    marginBottom: SPACING.md,
  },

  wardName: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    color: COLORS.textPrimary,
  },

  // -----------------------------------------------------------------------
  // Summary Stats
  // -----------------------------------------------------------------------

  statsRow: {
    flexDirection: 'row',

    gap: SPACING.sm,

    marginBottom: SPACING.lg,
  },

  statCard: {
    flex: 1,

    minHeight: 82,

    backgroundColor: COLORS.white,

    borderRadius: RADIUS.lg,

    borderWidth: 1,
    borderColor: COLORS.border,

    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.xs,

    alignItems: 'center',
    justifyContent: 'center',

    ...SHADOWS.card,
  },

  statValue: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.lg,

    marginBottom: 2,

    textAlign: 'center',
  },

  statValuePresent: {
    color: COLORS.success,
  },

  statValueAbsent: {
    color: COLORS.danger,
  },

  statValueLeave: {
    color: COLORS.warning,
  },

  statLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textMuted,

    textAlign: 'center',
  },

  // -----------------------------------------------------------------------
  // Section Title
  // -----------------------------------------------------------------------

  sectionTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,

    marginBottom: SPACING.md,
  },

  // -----------------------------------------------------------------------
  // Biometric Log
  // -----------------------------------------------------------------------

  logCard: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    backgroundColor: COLORS.card,

    borderRadius: RADIUS.lg,

    padding: SPACING.md,

    marginBottom: SPACING.sm,

    ...SHADOWS.card,
  },

  logInfo: {
    flex: 1,

    paddingRight: SPACING.sm,

    minWidth: 0,
  },

  logDate: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textPrimary,

    marginBottom: 2,
  },

  logTime: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textMuted,
  },

  // -----------------------------------------------------------------------
  // Status Pill
  // -----------------------------------------------------------------------

  statusPill: {
    backgroundColor: 'rgba(76, 175, 112, 0.12)',

    borderRadius: RADIUS.round,

    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },

  statusPillText: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.success,
  },

  // -----------------------------------------------------------------------
  // Leave Button
  // -----------------------------------------------------------------------

  leaveButtonWrapper: {
    marginTop: SPACING.sm,
  },

});