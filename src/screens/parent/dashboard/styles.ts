import { StyleSheet } from 'react-native';

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from '../../../theme';


export const styles = StyleSheet.create({

  // =======================================================================
  // Container
  // =======================================================================

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },


  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
  },


  emptyText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },


  // =======================================================================
  // Scroll
  // =======================================================================

  scrollView: {
    flex: 1,
  },


  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.xxxl,
  },


  // =======================================================================
  // Single Child Selector
  // =======================================================================

  singleChildSelector: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: COLORS.white,

    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: RADIUS.lg,

    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,

    marginBottom: SPACING.md,

    ...SHADOWS.card,
  },


  singleChildAvatar: {
    width: 42,
    height: 42,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.dark,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: SPACING.md,
  },


  singleChildAvatarText: {
    fontFamily: TYPOGRAPHY.fontFamily.bold,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.primary,
  },


  singleChildInfo: {
    flex: 1,
  },


  singleChildName: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textPrimary,

    marginBottom: 2,
  },


  singleChildMeta: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textSecondary,
  },


  // =======================================================================
  // Multiple Child Selector
  // =======================================================================

  childSelectorContainer: {
    position: 'relative',
    zIndex: 10,

    marginBottom: SPACING.md,
  },


  childSelector: {
    minHeight: 60,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: COLORS.white,

    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: RADIUS.lg,

    paddingHorizontal: SPACING.md,

    ...SHADOWS.card,
  },


  childSelectorLeft: {
    flexDirection: 'row',
    alignItems: 'center',

    flex: 1,
    minWidth: 0,
  },


  childAvatar: {
    width: 42,
    height: 42,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.dark,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: SPACING.md,
  },


  childAvatarText: {
    fontFamily: TYPOGRAPHY.fontFamily.bold,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.primary,
  },


  childSelectorInfo: {
    flex: 1,
    minWidth: 0,
  },


  childSelectorName: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textPrimary,

    marginBottom: 2,
  },


  childSelectorMeta: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textSecondary,
  },


  // =======================================================================
  // Dropdown
  // =======================================================================

  dropdown: {
    backgroundColor: COLORS.white,

    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: RADIUS.lg,

    marginTop: SPACING.xs,

    padding: SPACING.xs,

    ...SHADOWS.card,
  },


  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',

    minHeight: 58,

    borderRadius: RADIUS.md,

    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.sm,
  },


  dropdownItemSelected: {
    backgroundColor: COLORS.backgroundLight,
  },


  dropdownAvatar: {
    width: 38,
    height: 38,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.backgroundLight,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: SPACING.sm,
  },


  dropdownAvatarText: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textSecondary,
  },


  dropdownAvatarTextSelected: {
    color: COLORS.primary,
  },


  dropdownInfo: {
    flex: 1,
    minWidth: 0,
  },


  dropdownName: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textPrimary,

    marginBottom: 2,
  },


  dropdownNameSelected: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
  },


  dropdownMeta: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textMuted,
  },


  // =======================================================================
  // Greeting Card
  // =======================================================================

  greetingCard: {
    backgroundColor: COLORS.dark,

    borderRadius: RADIUS.xl,

    padding: SPACING.xl,

    marginBottom: SPACING.sm,

    ...SHADOWS.card,
  },


  greetingLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textOnDarkSecondary,

    marginBottom: SPACING.xs,
  },


  teacherName: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.xl,

    lineHeight: TYPOGRAPHY.lineHeight.xl,

    color: COLORS.textOnDark,

    marginBottom: SPACING.xs,
  },


  studentMeta: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textOnDarkSecondary,

    marginBottom: SPACING.md,
  },


  presentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',

    gap: SPACING.xs,

    backgroundColor: COLORS.darkLight,

    borderRadius: RADIUS.md,

    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },


  presentBadgeText: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.primary,
  },


  // =======================================================================
  // Statistics Grid
  // =======================================================================

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',

    rowGap: SPACING.md,

    marginBottom: SPACING.lg,
  },


  // =======================================================================
  // Section Header
  // =======================================================================

  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: SPACING.md,
  },


  sectionTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,
  },


  sectionLink: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.primary,
  },


  // =======================================================================
  // Schedule Cards
  // =======================================================================

  scheduleCard: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: COLORS.white,

    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: RADIUS.lg,

    padding: SPACING.md,

    marginBottom: SPACING.sm,

    ...SHADOWS.card,
  },


  scheduleIconWrap: {
    width: 38,
    height: 38,

    borderRadius: RADIUS.md,

    backgroundColor: COLORS.backgroundLight,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: SPACING.md,
  },


  scheduleInfo: {
    flex: 1,
    minWidth: 0,
  },


  scheduleTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,

    marginBottom: 3,
  },


  scheduleSubtitle: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textMuted,
  },


  scheduleStatus: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textMuted,

    marginLeft: SPACING.sm,
  },


  scheduleStatusNext: {
    color: COLORS.primary,
  },


  // =======================================================================
  // Quick Actions
  // =======================================================================

  quickActionsTitle: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.md,
  },


  quickActionsContainer: {
    width: '100%',
  },

});