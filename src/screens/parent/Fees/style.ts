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
  // Pay via Gateway
  // -----------------------------------------------------------------------

  payButton: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    gap: SPACING.sm,

    backgroundColor: COLORS.dark,

    borderRadius: RADIUS.round,

    paddingVertical: SPACING.md,

    marginBottom: SPACING.lg,

    ...SHADOWS.card,
  },

  payButtonText: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.primary,
  },

  // -----------------------------------------------------------------------
  // Fee Records
  // -----------------------------------------------------------------------

  feeCard: {
    backgroundColor: COLORS.card,

    borderRadius: RADIUS.lg,

    borderWidth: 1,
    borderColor: COLORS.border,

    padding: SPACING.md,

    marginBottom: SPACING.md,

    ...SHADOWS.card,
  },

  feeCardHeader: {
    flexDirection: 'row',

    alignItems: 'flex-start',
    justifyContent: 'space-between',

    marginBottom: SPACING.xs,
  },

  feeTermTitle: {
    flex: 1,

    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textPrimary,

    paddingRight: SPACING.sm,
  },

  feeAmount: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.success,
  },

  feeMeta: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textMuted,

    marginBottom: SPACING.sm,
  },

  feeReceiptRow: {
    flexDirection: 'row',

    alignItems: 'center',

    alignSelf: 'flex-start',

    gap: SPACING.xs,
  },

  feeReceiptText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.primary,
  },

});