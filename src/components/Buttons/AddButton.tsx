import React from "react";
import {
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from "../../theme";

interface AddButtonProps {
  label?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  style?: ViewStyle;
}

const AddButton = ({
  label,
  icon = "add",
  onPress,
  style,
}: AddButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.button, style]}
    >

      <Ionicons
        name={icon}
        size={label ? 18 : 22}
        color={COLORS.white}
      />

      {label ? (
        <Text
          style={styles.label}
          numberOfLines={1}
        >
          {label}
        </Text>
      ) : null}

    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.primary,

    borderRadius: RADIUS.md,

    // Reduced vertical padding
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.sm,

    ...SHADOWS.card,
  },

  label: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.white,

    marginLeft: SPACING.xs,
  },

});