import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../theme/colors";
import { TYPOGRAPHY } from "../../theme/typography";
import { RADIUS } from "../../theme/radius";
import { SPACING } from "../../theme/spacing";
import { SHADOWS } from "../../theme/shadows";

type IconName = keyof typeof Ionicons.glyphMap;

interface QuickAccessCardProps {
  title: string;
  icon: IconName;
  onPress: () => void;
  iconColor?: string;
}

const QuickAccessCard: React.FC<QuickAccessCardProps> = ({
  title,
  icon,
  onPress,
  iconColor = COLORS.primary,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View
        style={[styles.iconContainer, { backgroundColor: `${iconColor}15` }]}
      >
        <Ionicons name={icon} size={22} color={iconColor} />
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "31%",
    minHeight: 100,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.xs,
    paddingVertical: SPACING.md,
    ...SHADOWS.card,
  },

  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.97 }],
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.sm,
  },

  title: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textPrimary,
    textAlign: "center",
  },
});

export default QuickAccessCard;