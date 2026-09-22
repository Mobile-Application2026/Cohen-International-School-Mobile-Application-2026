import { StyleSheet } from "react-native";

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from "../../../../theme";

export const styles = StyleSheet.create({

  // =====================================================
  // SCREEN
  // =====================================================

  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  keyboardContainer: {
    flex: 1,
  },


  // =====================================================
  // SCROLL CONTENT
  // =====================================================

  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },


  // =====================================================
  // AVATAR
  // =====================================================

  avatarWrap: {
    alignSelf: "center",

    marginVertical: SPACING.lg,

    position: "relative",
  },

  avatarCircle: {
    width: 88,
    height: 88,

    borderRadius: 44,

    backgroundColor: "#F2F2F2",

    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
  },

  avatarBadge: {
    position: "absolute",

    bottom: 0,
    right: 0,

    width: 28,
    height: 28,

    borderRadius: 14,

    backgroundColor:
      COLORS.primary,

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 2,
    borderColor: "#FFFFFF",
  },


  // =====================================================
  // CARD
  // =====================================================

  card: {
    backgroundColor: "#FFFFFF",

    borderRadius:
      RADIUS.lg,

    borderWidth: 1,

    borderColor:
      "#EFEFEF",

    padding:
      SPACING.lg,

    ...SHADOWS.card,
  },

  // Second card on this screen (Subject Information)
  // needs a top gap since Add Student only ever had one card.
  secondCard: {
    marginTop: SPACING.lg,
  },

  sectionTitle: {
    fontFamily:
      TYPOGRAPHY.fontFamily.bold,

    fontSize:
      TYPOGRAPHY.fontSize.md,

    color:
      COLORS.textPrimary,

    marginBottom:
      SPACING.md,
  },


  // =====================================================
  // FORM
  // =====================================================

  field: {
    marginBottom:
      SPACING.lg,
  },

  lastField: {
    marginBottom: 0,
  },

  label: {
    fontFamily:
      TYPOGRAPHY.fontFamily.medium,

    fontSize:
      TYPOGRAPHY.fontSize.sm,

    color:
      COLORS.textPrimary,

    marginBottom:
      SPACING.xs,
  },

  asterisk: {
    color:
      COLORS.danger,
  },

  input: {
    height: 42,

    borderWidth: 1,

    borderColor:
      COLORS.border,

    borderRadius:
      RADIUS.md,

    paddingHorizontal:
      SPACING.md,

    fontFamily:
      TYPOGRAPHY.fontFamily.regular,

    fontSize:
      TYPOGRAPHY.fontSize.md,

    color:
      COLORS.textPrimary,

    backgroundColor:
      "#FFFFFF",
  },

  inputError: {
    borderColor:
      COLORS.danger,
  },

  errorText: {
    fontFamily:
      TYPOGRAPHY.fontFamily.regular,

    fontSize:
      TYPOGRAPHY.fontSize.xs,

    color:
      COLORS.danger,

    marginTop:
      SPACING.xs,
  },


  // =====================================================
  // ACTION BUTTONS
  // =====================================================

  actionButtons: {
    flexDirection: "row",

    alignItems: "center",

    gap: SPACING.sm,

    marginTop:
      SPACING.lg,
  },

  actionButton: {
    flex: 1,

    height: 50,

    borderRadius:
      RADIUS.md,

    alignItems: "center",

    justifyContent: "center",
  },


  // =====================================================
  // CANCEL
  // =====================================================

  cancelButton: {
    backgroundColor:
      "#FFFFFF",

    borderWidth: 1,

    borderColor:
      "#DADADA",
  },

  cancelButtonText: {
    fontFamily:
      TYPOGRAPHY.fontFamily.medium,

    fontSize:
      TYPOGRAPHY.fontSize.md,

    color:
      COLORS.textPrimary,
  },


  // =====================================================
  // SAVE
  // =====================================================

  saveButton: {
    backgroundColor:
      COLORS.primary,
  },

  saveButtonDisabled: {
    opacity: 0.6,
  },

  saveButtonText: {
    fontFamily:
      TYPOGRAPHY.fontFamily.medium,

    fontSize:
      TYPOGRAPHY.fontSize.md,

    color:
      COLORS.white,
  },

});