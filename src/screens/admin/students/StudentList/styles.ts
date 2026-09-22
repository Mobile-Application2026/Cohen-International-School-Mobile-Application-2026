import { StyleSheet } from "react-native";

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
} from "../../../../theme";

export const styles = StyleSheet.create({

  // ==========================================
  // CONTAINER
  // ==========================================

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // ==========================================
  // HEADER: SEARCH + ADD
  // ==========================================

  headerRow: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: SPACING.lg,

    // Small gap between Header and Search/Add
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.sm,

    gap: SPACING.sm,
  },

  searchBar: {
    flex: 3,
  },

  addButton: {
    flex: 1,
  },

  // ==========================================
  // LIST
  // ==========================================

  listContent: {
    paddingHorizontal: SPACING.lg,
    paddingTop: 10,
    paddingBottom: SPACING.lg,

    flexGrow: 1,
  },

  separator: {
    height: SPACING.sm,
  },

  // ==========================================
  // EMPTY
  // ==========================================

  emptyText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textSecondary,

    textAlign: "center",

    marginTop: SPACING.xxxl,
  },

  keyboardContainer: {
  flex: 1,
},

headerRightPlaceholder: {
  width: 22,
},
lastField: {
  marginBottom: 0,
},

});