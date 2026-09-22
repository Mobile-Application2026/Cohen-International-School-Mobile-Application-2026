import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from "../../theme";

interface ListItemCardProps {
  title: string;
  subtitle?: string;
  avatarUri?: string;
  onPress?: () => void;
}

const ListItemCard = ({ title, subtitle, avatarUri, onPress }: ListItemCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.card}
    >
      {avatarUri ? (
        <Image source={{ uri: avatarUri }} style={styles.avatar} />
      ) : (
        <View style={styles.avatarFallback}>
          <Ionicons name="person" size={22} color={COLORS.textOnDarkSecondary} />
        </View>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        {subtitle ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <Ionicons name="chevron-forward" size={20} color={COLORS.textOnDarkSecondary} />
    </TouchableOpacity>
  );
};

export default ListItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: COLORS.card,

    borderRadius: RADIUS.xl,

    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.sm,

    // Elevated shadow so the dark card lifts off the white background
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  avatar: {
    width: 45,
    height: 45,

    borderRadius: RADIUS.round,
  },

  avatarFallback: {
    width: 45,
    height: 45,

    borderRadius: RADIUS.round,

    backgroundColor: COLORS.darkLight,

    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    flex: 1,

    marginLeft: SPACING.sm,
  },

  title: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.black,
  },

  subtitle: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textOnDarkSecondary,

    marginTop: 2,
  },
});