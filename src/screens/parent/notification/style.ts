import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS, SHADOWS } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // ==========================================
  // HEADER
  // ==========================================
  header: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
  },

  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },

  summaryInfo: {
    flex: 1,
    paddingRight: SPACING.sm,
  },

  summaryTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textPrimary,
  },

  countBadge: {
    minWidth: 20,
    height: 20,
    paddingHorizontal: SPACING.xs,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SPACING.xs,
  },

  countBadgeText: {
    fontFamily: TYPOGRAPHY.fontFamily.headingBold,
    fontSize: 10,
    color: COLORS.dark,
  },

  summarySub: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  markAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.primaryTint,
  },

  markAllBtnDisabled: {
    opacity: 0.5,
  },

  markAllText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: 11,
    color: COLORS.primaryDark,
    marginLeft: SPACING.xs,
  },

  // ==========================================
  // FILTER TABS
  // ==========================================
  chipScroll: {
    flexGrow: 0,
    flexShrink: 0,
  },

  chipRow: {
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xs,
  },

  chip: {
    height: 30,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.chipBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },

  chipActive: {
    backgroundColor: COLORS.primary,
  },

  chipText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: 11,
    color: COLORS.textSecondary,
  },

  chipTextActive: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
    color: COLORS.dark,
  },

  // ==========================================
  // LIST
  // ==========================================
  list: {
    flex: 1,
  },

 content: {
  width: '100%',
  maxWidth: 720,
  alignSelf: 'center',
  paddingHorizontal: SPACING.md,
  paddingTop: SPACING.xs,
  paddingBottom: 60, // Increased bottom gap
},

  groupTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: 11,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    marginTop: SPACING.xs,
    marginBottom: SPACING.xs,
  },

  // ==========================================
  // NOTIFICATION CARD
  // ==========================================
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.border,

    // Reduced card padding and height
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.sm,

    // Small gap between cards
    marginBottom: SPACING.sm,

    ...SHADOWS.card,
  },

  cardUnread: {
    backgroundColor: COLORS.unreadBackground,
  },

  // Category accent colors
  accentFees: {
    borderLeftColor: COLORS.warning,
  },

  accentAttendance: {
    borderLeftColor: COLORS.success,
  },

  accentAcademics: {
    borderLeftColor: COLORS.info,
  },

  accentEvents: {
    borderLeftColor: COLORS.purple,
  },

  accentTransport: {
    borderLeftColor: COLORS.teal,
  },

  accentCircular: {
    borderLeftColor: COLORS.primary,
  },

  // ==========================================
  // CATEGORY ICONS
  // ==========================================
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },

  iconFees: {
    backgroundColor: COLORS.warningTint,
  },

  iconAttendance: {
    backgroundColor: COLORS.successTint,
  },

  iconAcademics: {
    backgroundColor: COLORS.infoTint,
  },

  iconEvents: {
    backgroundColor: COLORS.purpleTint,
  },

  iconTransport: {
    backgroundColor: COLORS.tealTint,
  },

  iconCircular: {
    backgroundColor: COLORS.primaryTint,
  },

  // ==========================================
  // CARD CONTENT
  // ==========================================
  body: {
    flex: 1,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    flex: 1,
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: 13,
    color: COLORS.textPrimary,
  },

  titleRead: {
    fontFamily: TYPOGRAPHY.fontFamily.headingMedium,
  },

  unreadDot: {
    width: 7,
    height: 7,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.danger,
    marginLeft: SPACING.xs,
  },

  message: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: 12,
    lineHeight: 17,
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  metaText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: 10,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },

  // ==========================================
  // EMPTY STATE
  // ==========================================
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },

  emptyText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textMuted,
    marginTop: SPACING.sm,
  },
});