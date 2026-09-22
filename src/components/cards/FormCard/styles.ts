import { StyleSheet } from "react-native";

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from "../../../theme";


export const styles = StyleSheet.create({

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

});