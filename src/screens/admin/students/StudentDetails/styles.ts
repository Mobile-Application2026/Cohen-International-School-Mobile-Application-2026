import {
  StyleSheet,
} from "react-native";

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from "../../../../theme";

export const styles = StyleSheet.create({

  /* ================= ROOT ================= */

  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  /* ================= HEADER ================= */

  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  /* ================= AVATAR ================= */

  avatar: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.border,
  },

  avatarPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.dark,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarInitial: {
    fontFamily:
      TYPOGRAPHY.fontFamily.headingBold,
    fontSize:
      TYPOGRAPHY.fontSize.xxl,
    color: COLORS.white,
  },

  /* ================= STUDENT INFO ================= */

  headerInfo: {
    flex: 1,
    marginLeft: SPACING.md,
    marginRight: SPACING.md,
    minWidth: 0,
  },

  studentName: {
    fontFamily:
      TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize:
      TYPOGRAPHY.fontSize.xl,
    lineHeight:
      TYPOGRAPHY.lineHeight.xl,
    color: COLORS.textPrimary,
  },

  metaText: {
    fontFamily:
      TYPOGRAPHY.fontFamily.regular,
    fontSize:
      TYPOGRAPHY.fontSize.xs,
    lineHeight:
      TYPOGRAPHY.lineHeight.sm,
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  /* ================= STATUS ================= */

  statusBadge: {
    alignSelf: "flex-start",
    marginTop: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.success,
  },

  statusBadgeInactive: {
    backgroundColor:
      COLORS.textSecondary,
  },

  statusText: {
    fontFamily:
      TYPOGRAPHY.fontFamily.medium,
    fontSize:
      TYPOGRAPHY.fontSize.xs,
    lineHeight:
      TYPOGRAPHY.lineHeight.sm,
    color: COLORS.white,
    letterSpacing: 0.3,
  },

  /* ================= EDIT BUTTON ================= */

  editButton: {
    flexShrink: 0,
  },

  /* ================= TABS ================= */

  tabBar: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: SPACING.sm,
  },

  tabLabel: {
    fontFamily:
      TYPOGRAPHY.fontFamily.medium,
    fontSize:
      TYPOGRAPHY.fontSize.sm,
    lineHeight:
      TYPOGRAPHY.lineHeight.sm,
    color: COLORS.textSecondary,
  },

  tabLabelActive: {
    color: COLORS.primary,
    fontFamily:
      TYPOGRAPHY.fontFamily.semiBold,
  },

  tabIndicator: {
    marginTop: SPACING.xs,
    height: 2,
    width: "60%",
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.transparent,
  },

  tabIndicatorActive: {
    backgroundColor: COLORS.primary,
  },

  /* ================= CONTENT ================= */

  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xl,
  },

  /* ================= SECTION ================= */

  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },

  goldAccent: {
    width: 4,
    height: 16,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.primary,
    marginRight: SPACING.sm,
  },

  sectionTitle: {
    fontFamily:
      TYPOGRAPHY.fontFamily.semiBold,
    fontSize:
      TYPOGRAPHY.fontSize.sm,
    lineHeight:
      TYPOGRAPHY.lineHeight.sm,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    color: COLORS.primary,
  },

  /* ================= INFO CARD ================= */

  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  infoRowLast: {
    borderBottomWidth: 0,
  },

  infoLabel: {
    fontFamily:
      TYPOGRAPHY.fontFamily.regular,
    fontSize:
      TYPOGRAPHY.fontSize.xs,
    lineHeight:
      TYPOGRAPHY.lineHeight.sm,
    color: COLORS.textSecondary,
  },

  infoValue: {
    fontFamily:
      TYPOGRAPHY.fontFamily.medium,
    fontSize:
      TYPOGRAPHY.fontSize.md,
    lineHeight:
      TYPOGRAPHY.lineHeight.md,
    color: COLORS.textPrimary,
    flexShrink: 1,
    textAlign: "right",
    marginLeft: SPACING.md,
  },

  /* ================= PARENT CARD ================= */

  parentCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },

  parentIconWrap: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.round,
    backgroundColor: COLORS.dark,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },

  parentName: {
    fontFamily:
      TYPOGRAPHY.fontFamily.semiBold,
    fontSize:
      TYPOGRAPHY.fontSize.md,
    lineHeight:
      TYPOGRAPHY.lineHeight.md,
    color: COLORS.textPrimary,
  },

  parentSub: {
    fontFamily:
      TYPOGRAPHY.fontFamily.regular,
    fontSize:
      TYPOGRAPHY.fontSize.xs,
    lineHeight:
      TYPOGRAPHY.lineHeight.sm,
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  /* ================= DOCUMENTS ================= */

  documentRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.card,
  },

  documentIconWrap: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.sm,
    backgroundColor: "#FBF3DD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },

  documentName: {
    fontFamily:
      TYPOGRAPHY.fontFamily.medium,
    fontSize:
      TYPOGRAPHY.fontSize.md,
    lineHeight:
      TYPOGRAPHY.lineHeight.md,
    color: COLORS.textPrimary,
  },

  documentMeta: {
    fontFamily:
      TYPOGRAPHY.fontFamily.regular,
    fontSize:
      TYPOGRAPHY.fontSize.xs,
    lineHeight:
      TYPOGRAPHY.lineHeight.sm,
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  documentAction: {
    padding: SPACING.xs,
  },

  /* ================= EMPTY STATE ================= */

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.xl,
    backgroundColor: COLORS.white,
  },

  emptyTitle: {
    marginTop: SPACING.md,
    fontFamily:
      TYPOGRAPHY.fontFamily.headingSemiBold,
    fontSize:
      TYPOGRAPHY.fontSize.lg,
    lineHeight:
      TYPOGRAPHY.lineHeight.lg,
    color: COLORS.textPrimary,
  },

  emptyText: {
    marginTop: SPACING.xs,
    fontFamily:
      TYPOGRAPHY.fontFamily.regular,
    fontSize:
      TYPOGRAPHY.fontSize.sm,
    lineHeight:
      TYPOGRAPHY.lineHeight.md,
    color: COLORS.textSecondary,
    textAlign: "center",
  },

});