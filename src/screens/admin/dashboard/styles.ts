import { StyleSheet } from "react-native";

import { COLORS } from "../../../theme/colors";
import { TYPOGRAPHY } from "../../../theme/typography";
import { SPACING } from "../../../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  contentContainer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xxxl,
  },

  // ==========================================
  // HEADER
  // ==========================================

  header: {
    marginBottom: SPACING.xl,
  },

  greeting: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.black,

    letterSpacing: 0.3,
    textTransform: "uppercase",

    marginBottom: SPACING.xs,
  },

  title: {
    fontFamily: TYPOGRAPHY.fontFamily.bold,
    fontSize: TYPOGRAPHY.fontSize.xxl,

    color: COLORS.textPrimary,

    letterSpacing: 0.2,
  },

  subtitle: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textSecondary,

    lineHeight: 20,

    marginTop: SPACING.xs,
  },

  // ==========================================
  // STATISTICS
  // ==========================================

  statsContainer: {
    marginBottom: SPACING.xxl,
  },

  statsRow: {
    flexDirection: "row",

    gap: SPACING.sm,

    marginBottom: SPACING.md,
  },

  // ==========================================
  // SECTION
  // ==========================================

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: SPACING.md,
  },

  sectionAccent: {
    width: 4,
    height: 16,

    borderRadius: 2,

    backgroundColor: COLORS.primary,

    marginRight: SPACING.xs,
  },

  sectionTitle: {
    fontFamily: TYPOGRAPHY.fontFamily.bold,

    fontSize: TYPOGRAPHY.fontSize.lg,

    color: COLORS.textPrimary,

    letterSpacing: 0.1,
  },

  // ==========================================
  // QUICK ACCESS
  // ==========================================

  quickAccessContainer: {
    flexDirection: "row",

    flexWrap: "wrap",

    justifyContent: "space-between",

    rowGap: SPACING.sm,
  },
});