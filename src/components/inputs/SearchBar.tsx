import React from "react";
import {
  TextInput,
  View,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
} from "../../theme";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: ViewStyle;
}

const SearchBar = ({
  value,
  onChangeText,
  placeholder = "Search by name, roll no. or class",
  style,
}: SearchBarProps) => {
  return (
    <View style={[styles.container, style]}>

      <Ionicons
        name="search"
        size={18}
        color={COLORS.textOnDarkSecondary}
        style={styles.icon}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textOnDarkSecondary}
        style={styles.input}
      />

    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: COLORS.backgroundLight,

    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,

    paddingHorizontal: SPACING.md,

    // Reduced height
    height: 42,
  },

  icon: {
    marginRight: SPACING.sm,
  },

  input: {
    flex: 1,

    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textPrimary,

    padding: 0,
  },

});