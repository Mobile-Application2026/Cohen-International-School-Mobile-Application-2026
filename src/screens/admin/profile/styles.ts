
import {
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from "../../../theme";


export const styles = StyleSheet.create({

  // =====================================================
  // SCREEN
  // =====================================================

  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  keyboardView: {
    flex: 1,
  },


  // =====================================================
  // HEADER
  // =====================================================

  header: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: SPACING.lg,

    paddingTop:
      Platform.OS === "android"
        ? (StatusBar.currentHeight || 0) + SPACING.sm
        : SPACING.sm,

    paddingBottom: SPACING.md,
  },

  backButton: {
    width: 36,
    height: 36,

    borderRadius: RADIUS.round,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.card,

    ...SHADOWS.card,
  },

  headerTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.headingSemiBold,

    fontSize: TYPOGRAPHY.fontSize.xl,

    lineHeight: TYPOGRAPHY.lineHeight.xl,

    color: COLORS.textPrimary,

    marginLeft: SPACING.md,
  },


  // =====================================================
  // SCROLL CONTENT
  // =====================================================

  scrollContent: {
    paddingHorizontal: SPACING.lg,

    paddingBottom: SPACING.xl,
  },


  // =====================================================
  // PROFILE CARD
  // =====================================================

  profileCard: {
    backgroundColor: COLORS.dark,

    borderRadius: RADIUS.lg,

    paddingVertical: SPACING.xl,

    paddingHorizontal: SPACING.lg,

    alignItems: "center",

    marginBottom: SPACING.lg,

    ...SHADOWS.card,
  },


  // =====================================================
  // AVATAR
  // =====================================================

  avatarRing: {
    width: 88,
    height: 88,

    borderRadius: RADIUS.round,

    borderWidth: 2,

    borderColor: COLORS.primary,

    alignItems: "center",

    justifyContent: "center",

    marginBottom: SPACING.md,
  },

  avatarCircle: {
    width: 76,
    height: 76,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.backgroundLight,

    alignItems: "center",

    justifyContent: "center",
  },


  // =====================================================
  // PROFILE NAME
  // =====================================================

  nameText: {
    fontFamily: TYPOGRAPHY.fontFamily.headingBold,

    fontSize: TYPOGRAPHY.fontSize.xxl,

    lineHeight: TYPOGRAPHY.lineHeight.xl,

    color: COLORS.white,

    marginBottom: SPACING.xs,
  },

  nameInput: {
    fontFamily: TYPOGRAPHY.fontFamily.headingBold,

    fontSize: TYPOGRAPHY.fontSize.xxl,

    lineHeight: TYPOGRAPHY.lineHeight.xl,

    color: COLORS.white,

    borderBottomWidth: 1,

    borderBottomColor: COLORS.primary,

    minWidth: 140,

    textAlign: "center",

    paddingVertical: 2,

    marginBottom: SPACING.xs,
  },


  // =====================================================
  // ROLE
  // =====================================================

  roleText: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.xs,

    lineHeight: TYPOGRAPHY.lineHeight.sm,

    color: COLORS.primaryLight,

    textTransform: "uppercase",

    letterSpacing: 0.8,

    fontWeight: "600",
  },


  // =====================================================
  // SECTION LABEL
  // =====================================================

  sectionLabel: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.xs,

    lineHeight: TYPOGRAPHY.lineHeight.sm,

    color: COLORS.textSecondary,

    textTransform: "uppercase",

    letterSpacing: 0.6,

    marginBottom: SPACING.sm,

    marginLeft: SPACING.xs,
  },


  // =====================================================
  // INFORMATION CARD
  // =====================================================

  infoCard: {
    backgroundColor: COLORS.card,

    borderRadius: RADIUS.lg,

    paddingHorizontal: SPACING.lg,

    marginBottom: SPACING.xl,

    ...SHADOWS.card,
  },


  // =====================================================
  // ROW
  // =====================================================

  row: {
    flexDirection: "row",

    alignItems: "center",

    paddingVertical: SPACING.md,
  },

  rowWithDivider: {
    borderBottomWidth: 1,

    borderBottomColor: COLORS.border,
  },


  // =====================================================
  // ICON
  // =====================================================

  iconWrap: {
    width: 38,
    height: 38,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.backgroundLight,

    alignItems: "center",

    justifyContent: "center",

    marginRight: SPACING.md,
  },


  // =====================================================
  // TEXT WRAPPER
  // =====================================================

  textWrap: {
    flex: 1,
  },


  // =====================================================
  // LABEL
  // =====================================================

  label: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.xs,

    lineHeight: TYPOGRAPHY.lineHeight.sm,

    color: COLORS.textSecondary,

    textTransform: "uppercase",

    letterSpacing: 0.6,

    marginBottom: 2,
  },


  // =====================================================
  // VALUE
  // =====================================================

  value: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.md,

    lineHeight: TYPOGRAPHY.lineHeight.md,

    color: COLORS.textPrimary,

    fontWeight: "500",
  },


  // =====================================================
  // INPUT
  // =====================================================

  input: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.md,

    lineHeight: TYPOGRAPHY.lineHeight.md,

    color: COLORS.textPrimary,

    fontWeight: "500",

    paddingVertical: SPACING.xs,

    borderBottomWidth: 1,

    borderBottomColor: COLORS.primary,
  },


  // =====================================================
  // STATUS BADGE
  // =====================================================

  badge: {
    alignSelf: "flex-start",

    paddingHorizontal: SPACING.sm,

    paddingVertical: 3,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.success,
  },

  badgeText: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.xs,

    lineHeight: TYPOGRAPHY.lineHeight.sm,

    color: COLORS.white,

    fontWeight: "600",
  },


  // =====================================================
  // ERROR
  // =====================================================

  errorText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.sm,

    lineHeight: TYPOGRAPHY.lineHeight.sm,

    color: COLORS.danger,

    marginTop: -SPACING.sm,

    marginBottom: SPACING.md,
  },


  // =====================================================
  // ACTION ROW
  // =====================================================

  actionRow: {
    flexDirection: "row",

    justifyContent: "space-between",
  },


  // =====================================================
  // SAVE BUTTON
  // =====================================================

  saveButton: {
    flex: 1,

    backgroundColor: COLORS.primary,

    borderRadius: RADIUS.md,

    paddingVertical: SPACING.md,

    alignItems: "center",

    marginRight: SPACING.sm,

    ...SHADOWS.card,
  },

  saveButtonText: {
    fontFamily: TYPOGRAPHY.fontFamily.bold,

    fontSize: TYPOGRAPHY.fontSize.md,

    lineHeight: TYPOGRAPHY.lineHeight.md,

    color: COLORS.white,

    fontWeight: "700",
  },


  // =====================================================
  // CANCEL BUTTON
  // =====================================================

  cancelButton: {
    flex: 1,

    borderRadius: RADIUS.md,

    paddingVertical: SPACING.md,

    alignItems: "center",

    borderWidth: 1.5,

    borderColor: COLORS.dark,

    marginLeft: SPACING.sm,
  },

  cancelButtonText: {
    fontFamily: TYPOGRAPHY.fontFamily.bold,

    fontSize: TYPOGRAPHY.fontSize.md,

    lineHeight: TYPOGRAPHY.lineHeight.md,

    color: COLORS.dark,

    fontWeight: "700",
  },


  // =====================================================
  // EDIT BUTTON
  // =====================================================

  editButton: {
    backgroundColor: COLORS.primary,

    borderRadius: RADIUS.md,

    paddingVertical: SPACING.md,

    alignItems: "center",

    ...SHADOWS.card,
  },

  editButtonText: {
    fontFamily: TYPOGRAPHY.fontFamily.bold,

    fontSize: TYPOGRAPHY.fontSize.md,

    lineHeight: TYPOGRAPHY.lineHeight.md,

    color: COLORS.white,

    fontWeight: "700",
  },

});