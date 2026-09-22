import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from "../../theme";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination = ({ currentPage, totalPages, onPrev, onNext }: PaginationProps) => {
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={isFirstPage}
        onPress={onPrev}
        style={[styles.arrowButton, isFirstPage && styles.arrowButtonDisabled]}
      >
        <Ionicons
          name="chevron-back"
          size={18}
          color={isFirstPage ? COLORS.textMuted : COLORS.white}
        />
      </TouchableOpacity>

      <Text style={styles.pageText}>
        {currentPage} / {totalPages}
      </Text>

      <TouchableOpacity
        activeOpacity={0.7}
        disabled={isLastPage}
        onPress={onNext}
        style={[styles.arrowButton, isLastPage && styles.arrowButtonDisabled]}
      >
        <Ionicons
          name="chevron-forward"
          size={18}
          color={isLastPage ? COLORS.textMuted : COLORS.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },

  arrowButton: {
    width: 34,
    height: 34,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.primary,

    alignItems: "center",
    justifyContent: "center",
  },

  arrowButtonDisabled: {
    backgroundColor: COLORS.border,
  },

  pageText: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textPrimary,

    marginHorizontal: SPACING.xl,
  },
});