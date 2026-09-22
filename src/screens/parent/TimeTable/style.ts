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
    paddingHorizontal: SPACING.lg,
  },

  // -----------------------------------------------------------------------
  // Day Tabs
  // -----------------------------------------------------------------------

  dayTabsRow: {
    flexGrow: 0,
    marginTop: SPACING.md,
    marginBottom: SPACING.lg,
  },

  dayTabsContent: {
    gap: SPACING.sm,
    paddingRight: SPACING.lg,
  },

  dayTab: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,

    borderRadius: RADIUS.round,

    borderWidth: 1,
    borderColor: COLORS.border,

    backgroundColor: COLORS.card,
  },

  dayTabActive: {
    backgroundColor: COLORS.dark,
    borderColor: COLORS.dark,
  },

  dayTabText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textSecondary,
  },

  dayTabTextActive: {
    color: COLORS.textOnDark,
  },

  // -----------------------------------------------------------------------
  // Schedule List
  // -----------------------------------------------------------------------

  listContent: {
    paddingBottom: SPACING.xl,
  },

  // -----------------------------------------------------------------------
  // Period Card
  // -----------------------------------------------------------------------

  periodCard: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: COLORS.card,

    borderRadius: RADIUS.lg,

    padding: SPACING.md,

    marginBottom: SPACING.md,

    ...SHADOWS.card,
  },

  // -----------------------------------------------------------------------
  // Clock Icon
  // -----------------------------------------------------------------------

  clockIconWrap: {
    width: 36,
    height: 36,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.backgroundLight,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: SPACING.md,
  },

  // -----------------------------------------------------------------------
  // Period Information
  // -----------------------------------------------------------------------

  periodInfo: {
    flex: 1,
    minWidth: 0,
  },

  periodTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,

    marginBottom: 2,
  },

  periodSubtitle: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textSecondary,
  },

  // -----------------------------------------------------------------------
  // Period Badge
  // -----------------------------------------------------------------------

  periodBadge: {
    width: 28,
    height: 28,

    borderRadius: RADIUS.round,

    backgroundColor: `${COLORS.primary}33`,

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: SPACING.sm,
  },

  periodBadgeText: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.primary,
  },

  // -----------------------------------------------------------------------
  // Empty State
  // -----------------------------------------------------------------------

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: SPACING.lg,
    paddingVertical: 60,
  },

  emptyTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,

    marginTop: SPACING.md,

    textAlign: 'center',
  },

  emptyText: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textMuted,

    marginTop: SPACING.xs,

    textAlign: 'center',

    lineHeight: 20,
  },

});