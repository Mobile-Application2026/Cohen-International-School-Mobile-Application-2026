import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../theme/colors';
import { TYPOGRAPHY } from '../../theme/typography';
import { RADIUS } from '../../theme/radius';
import { SPACING } from '../../theme/spacing';
import { SHADOWS } from '../../theme/shadows';

type IconName = keyof typeof Ionicons.glyphMap;

interface DashboardActionCardProps {
  title: string;
  subtitle?: string;
  icon: IconName;
  iconColor?: string;
  onPress: () => void;
}

const DashboardActionCard: React.FC<DashboardActionCardProps> = ({
  title,
  subtitle,
  icon,
  iconColor = COLORS.primary,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
    >
      {/* Icon */}
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: `${iconColor}15`,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={21}
          color={iconColor}
        />
      </View>

      {/* Text */}
      <View style={styles.content}>
        <Text
          style={styles.title}
          numberOfLines={1}
        >
          {title}
        </Text>

        {subtitle ? (
          <Text
            style={styles.subtitle}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>

      {/* Arrow */}
      <Ionicons
        name="chevron-forward"
        size={19}
        color={COLORS.textMuted}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: COLORS.white,

    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,

    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,

    marginBottom: SPACING.sm,

    ...SHADOWS.card,
  },

  pressed: {
    opacity: 0.75,
    transform: [
      {
        scale: 0.99,
      },
    ],
  },

  iconContainer: {
    width: 42,
    height: 42,

    borderRadius: RADIUS.md,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: SPACING.md,
  },

  content: {
    flex: 1,
    minWidth: 0,
  },

  title: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,
    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,

    marginBottom: 3,
  },

  subtitle: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,
    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textMuted,
  },
});

export default DashboardActionCard;