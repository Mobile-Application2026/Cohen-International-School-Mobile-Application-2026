import { StyleSheet } from 'react-native';

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from '../../../theme';

export const styles = StyleSheet.create({

  /* --------------------------------------------------
     Main Container
  -------------------------------------------------- */

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  /* --------------------------------------------------
     Scrollable Content
  -------------------------------------------------- */

  content: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: 110,
  },
/* --------------------------------------------------
     Hostel / Warden Card
  -------------------------------------------------- */
wardenCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },

  hostelName: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textPrimary,
    marginBottom: 3,
  },

  wardenLine: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
    flexWrap: 'wrap',
  },
 /* --------------------------------------------------
     Meal List
  -------------------------------------------------- */

  mealList: {
    width: '100%',
  },

  /* --------------------------------------------------
     Meal Card
  -------------------------------------------------- */

  mealCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,

    // Compact card
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.card,
  },

  mealLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.primary,

    letterSpacing: 0.4,

    textTransform: 'uppercase',

    marginBottom: 3,
  },

  mealMain: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,

    marginBottom: 1,
  },

  mealDesc: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textSecondary,

    lineHeight: 18,
  },

  /* --------------------------------------------------
     Bottom Button Container
  -------------------------------------------------- */

  bottomAction: {
    position: 'absolute',

    left: 0,
    right: 0,

    bottom: 15,

    paddingHorizontal: SPACING.lg,

    paddingTop: SPACING.sm,

    paddingBottom: SPACING.lg,

    backgroundColor: COLORS.background,
  },

  /* --------------------------------------------------
     Gate Pass Button
  -------------------------------------------------- */

  gatePassButton: {
    width: '100%',
    bottom: 50,

    backgroundColor: COLORS.dark,

    borderRadius: RADIUS.round,

    paddingVertical: SPACING.md,

    alignItems: 'center',

    justifyContent: 'center',

    ...SHADOWS.card,
  },

  gatePassText: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textOnDark,
  },
});