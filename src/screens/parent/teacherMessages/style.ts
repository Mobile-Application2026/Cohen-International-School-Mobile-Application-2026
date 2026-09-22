import {
  StyleSheet,
} from "react-native";

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from "../../../theme";


export const styles =
  StyleSheet.create({

    // =====================================================
    // SAFE AREA
    // =====================================================

    safeArea: {

      flex: 1,

      backgroundColor:
        COLORS.background,

    },


    // =====================================================
    // CONTAINER
    // =====================================================

    container: {

      flex: 1,

      paddingHorizontal:
        SPACING.lg,

      paddingTop:
        SPACING.lg,

    },


    // =====================================================
    // TITLE
    // =====================================================

    title: {

      ...TYPOGRAPHY.fontFamily
        ? {}
        : {},

      fontSize:
        TYPOGRAPHY.fontSize.xl,

      color:
        COLORS.textPrimary,

      fontWeight:
        "700",

      marginBottom:
        SPACING.sm,

    },


    // =====================================================
    // SUBTITLE
    // =====================================================

    subtitle: {

      fontSize:
        TYPOGRAPHY.fontSize.md,

      color:
        COLORS.textSecondary,

    },

  });