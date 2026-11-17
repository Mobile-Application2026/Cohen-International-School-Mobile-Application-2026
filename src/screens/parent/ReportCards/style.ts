import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS, SHADOWS } from '../../../theme';

// Soft background tint appended to a status color (hex alpha)
const TINT = '1F';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
  width: '100%',
  maxWidth: 720,
  alignSelf: 'center',
  paddingHorizontal: SPACING.lg,
  paddingTop: SPACING.md,
  paddingBottom: 40,
},

  // ==========================================
  // CHILD SUMMARY + REPORT CARD LIST (unchanged)
  // ==========================================
  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },
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
  summaryInfo: {
    flex: 1,
  },
  childName: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  gradeText: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
  },

  sectionTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },

  reportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  reportIconWrap: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  reportInfo: {
    flex: 1,
  },
  reportTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.primary,
    marginBottom: 2,
  },
  reportSubtitle: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
  },
  reportDownload: {
    padding: SPACING.xs,
  },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textMuted,
    marginTop: SPACING.sm,
  },

  // ==========================================
  // PROGRESS REPORT VIEW — TOP BAR
  // ==========================================
  rptTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  rptIconBtn: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rptTopTitle: {
    flex: 1,
    textAlign: 'center',
    marginHorizontal: SPACING.sm,
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textPrimary,
  },

  // ==========================================
  // SCHOOL HEADER CARD
  // ==========================================
  schoolCard: {
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },
  schoolCrest: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.darkLight,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  schoolName: {
    fontFamily: TYPOGRAPHY.fontFamily.headingBold,
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.primary,
    textAlign: 'center',
  },
  schoolAddress: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    lineHeight: TYPOGRAPHY.lineHeight.sm,
    color: COLORS.textOnDarkSecondary,
    textAlign: 'center',
    marginTop: SPACING.xs,
  },
  schoolMetaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: SPACING.sm,
  },
  schoolMetaChip: {
    backgroundColor: COLORS.darkCard,
    borderRadius: RADIUS.round,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    margin: SPACING.xs,
  },
  schoolMetaText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textOnDark,
  },
  schoolDivider: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.borderDark,
    marginVertical: SPACING.md,
  },
  schoolReportLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.primaryLight,
    textAlign: 'center',
  },
  schoolExamTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textOnDark,
    textAlign: 'center',
    marginTop: SPACING.xs,
  },

  // ==========================================
  // GENERIC REPORT CARD + STUDENT INFO
  // ==========================================
  rptCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },
  rptStudentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rptStudentName: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  rptStudentSub: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
  },
  rptDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
  },
  rptInfoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rptInfoItem: {
    width: '50%',
    paddingRight: SPACING.sm,
    marginBottom: SPACING.md,
  },
  rptInfoItemFull: {
    width: '100%',
    paddingRight: 0,
  },
  rptInfoLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textMuted,
  },
  rptInfoValue: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textPrimary,
    marginTop: 2,
  },
  rptInfoValueAccent: {
    color: COLORS.primaryDark,
  },

  // ==========================================
  // SECTION HEADER
  // ==========================================
  rptSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  rptSectionBar: {
    width: 4,
    height: 34,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.primary,
    marginRight: SPACING.sm,
  },
  rptSectionPart: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.primaryDark,
  },
  rptSectionTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textPrimary,
  },

  // ==========================================
  // SUBJECT CARD (PART-I)
  // ==========================================
  rptSubjectCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  rptSubjectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  rptSnBadge: {
    width: 28,
    height: 28,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  rptSnText: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.primary,
  },
  rptSubjectInfo: {
    flex: 1,
  },
  rptSubjectName: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textPrimary,
  },
  rptSubjectTag: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textMuted,
  },
  rptOverallBox: {
    alignItems: 'flex-end',
    marginHorizontal: SPACING.sm,
  },
  rptOverallLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textMuted,
  },
  rptOverallValue: {
    fontFamily: TYPOGRAPHY.fontFamily.headingBold,
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.textPrimary,
  },

  // Term block (Term I / Term II inside a subject card)
  rptTermBlock: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    marginTop: SPACING.sm,
  },
  rptTermHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  rptTermTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textSecondary,
  },
  rptTermTotal: {
    fontFamily: TYPOGRAPHY.fontFamily.headingBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textPrimary,
  },
  rptTermTotalMax: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textMuted,
  },
  rptMarkRow: {
    flexDirection: 'row',
  },
  rptMarkCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.xs,
    paddingHorizontal: 2,
  },
  rptMarkCellDivider: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.border,
  },
  rptMarkValue: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textPrimary,
  },
  rptMarkMax: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textMuted,
  },
  rptMarkLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },

  // ==========================================
  // GRADE PILLS
  // ==========================================
  pill: {
    minWidth: 36,
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    borderRadius: RADIUS.md,
  },
  pillLarge: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
  },
  pillText: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.xs,
  },
  pillTextLarge: {
    fontSize: TYPOGRAPHY.fontSize.sm,
  },
  pillSuccess: { backgroundColor: `${COLORS.success}${TINT}` },
  pillInfo: { backgroundColor: `${COLORS.info}${TINT}` },
  pillWarning: { backgroundColor: `${COLORS.warning}${TINT}` },
  pillDanger: { backgroundColor: `${COLORS.danger}${TINT}` },
  pillTextSuccess: { color: COLORS.success },
  pillTextInfo: { color: COLORS.info },
  pillTextWarning: { color: COLORS.warning },
  pillTextDanger: { color: COLORS.danger },

  // ==========================================
  // CO-SCHOLASTIC (PART-II)
  // ==========================================
  rptCoHeadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  rptCoHeadSpacer: {
    flex: 1,
  },
  rptCoCol: {
    width: 56,
    alignItems: 'center',
  },
  rptCoColHead: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  rptCoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  rptCoName: {
    flex: 1,
    paddingRight: SPACING.sm,
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textPrimary,
  },

  // ==========================================
  // ATTENDANCE (PART-IV)
  // ==========================================
  rptStatRow: {
    flexDirection: 'row',
    marginHorizontal: -SPACING.xs,
  },
  rptStatTile: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xs,
    marginHorizontal: SPACING.xs,
  },
  rptStatValue: {
    fontFamily: TYPOGRAPHY.fontFamily.headingBold,
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.textPrimary,
  },
  rptStatValueOk: {
    color: COLORS.success,
  },
  rptStatValueLow: {
    color: COLORS.danger,
  },
  rptStatLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },
  rptSegRow: {
    flexDirection: 'row',
    marginTop: SPACING.md,
  },
  rptSeg: {
    flex: 1,
    height: 8,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.border,
    marginHorizontal: 1,
  },
  rptSegOk: {
    backgroundColor: COLORS.success,
  },
  rptSegLow: {
    backgroundColor: COLORS.danger,
  },
  rptNote: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textMuted,
    marginTop: SPACING.sm,
  },

  // ==========================================
  // REMARKS + SIGNATURES
  // ==========================================
  rptRemarkText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.sm,
    lineHeight: TYPOGRAPHY.lineHeight.md,
    color: COLORS.textPrimary,
    marginTop: 2,
    marginBottom: SPACING.md,
  },
  rptSignRow: {
    flexDirection: 'row',
    marginTop: SPACING.sm,
  },
  rptSignBox: {
    flex: 1,
    alignItems: 'center',
    paddingTop: SPACING.xxxl,
    marginHorizontal: SPACING.sm,
  },
  rptSignLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.textMuted,
    marginBottom: SPACING.xs,
  },
  rptSignLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },

  // ==========================================
  // GRADING SCALE
  // ==========================================
  rptScaleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rptScaleItem: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  rptScaleRange: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textPrimary,
  },

  // ==========================================
  // DOWNLOAD BUTTON
  // ==========================================
  rptCta: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.primary,
  borderRadius: RADIUS.lg,
  paddingVertical: SPACING.md,
  marginTop: SPACING.sm,
  marginBottom: SPACING.md,
},
  rptCtaText: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.dark,
    marginLeft: SPACING.sm,
  },
});