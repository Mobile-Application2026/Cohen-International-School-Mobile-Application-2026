import React from "react";

import {
  Pressable,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  COLORS,
  SPACING,
  RADIUS,
  SHADOWS,
} from "../../theme";

export interface EditButtonProps {
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

const EditButton: React.FC<EditButtonProps> = ({
  onPress,
  loading = false,
  disabled = false,
  style,
}) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      hitSlop={8}
      android_ripple={{
        color: "rgba(201,162,39,0.15)",
        borderless: true,
      }}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        isDisabled && styles.buttonDisabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={COLORS.primary}
        />
      ) : (
        <Ionicons
          name="create-outline"
          size={21}
          color={COLORS.primary}
        />
      )}
    </Pressable>
  );
};

export default EditButton;

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.backgroundLight,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.card,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  buttonDisabled: {
    opacity: 0.5,
  },
});