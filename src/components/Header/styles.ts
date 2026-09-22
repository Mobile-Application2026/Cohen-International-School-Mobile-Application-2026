import { StyleSheet } from "react-native";

import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({

  // =========================================================
  // SAFE AREA
  // =========================================================

  safeArea: {
    backgroundColor: COLORS.dark,
  },

  // =========================================================
  // HEADER
  // =========================================================

  header: {
    height: 60,

    backgroundColor: COLORS.dark,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 16,
  },

  // =========================================================
  // LEFT
  // =========================================================

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  // =========================================================
  // MENU
  // =========================================================

  menuButton: {
    width: 30,
    height: 40,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 8,
  },

  // =========================================================
  // LOGO
  // =========================================================

  logoImage: {
    width: 90,
    height: 70,
  },

  // =========================================================
  // BACK + TITLE
  // =========================================================

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    width: 40,
    height: 40,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",

    color: COLORS.white,
  },

  // =========================================================
  // NOTIFICATION
  // =========================================================

  iconContainer: {
    width: 40,
    height: 40,

    alignItems: "center",
    justifyContent: "center",
  },

});