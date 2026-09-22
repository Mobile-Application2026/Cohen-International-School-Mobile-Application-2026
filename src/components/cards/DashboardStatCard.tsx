import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../theme/colors';
import { TYPOGRAPHY } from '../../theme/typography';
import { RADIUS } from '../../theme/radius';
import { SPACING } from '../../theme/spacing';
import { SHADOWS } from '../../theme/shadows';

type IconName = keyof typeof Ionicons.glyphMap;

interface DashboardStatCardProps {
  title: string;
  value: string | number;
  icon: IconName;
  iconColor?: string;
  style?: ViewStyle;
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({
  title,
  value,
  icon,
  iconColor = COLORS.primary,
  style,
}) => {
  return (
    <View style={[styles.card, style]}>

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
          size={18}
          color={iconColor}
        />
      </View>

      {/* Content */}
      <View style={styles.content}>

        <Text
          style={styles.value}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.75}
        >
          {value}
        </Text>

        <Text
          style={styles.title}
          numberOfLines={1}
        >
          {title}
        </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    width: '48%',
    minHeight: 85,

    backgroundColor: COLORS.white,

    borderRadius: RADIUS.lg,

    borderWidth: 1,
    borderColor: COLORS.border,

    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,

    justifyContent: 'center',

    ...SHADOWS.card,
  },

  iconContainer: {
    width: 34,
    height: 34,

    borderRadius: RADIUS.md,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: SPACING.xs,
  },

  content: {
    minWidth: 0,
    justifyContent: 'center',
  },

  value: {
    fontFamily: TYPOGRAPHY.fontFamily.bold,

    fontSize: TYPOGRAPHY.fontSize.lg,

    color: COLORS.textPrimary,

    marginBottom: 2,
  },

  title: {
    fontFamily: TYPOGRAPHY.fontFamily.regular,

    fontSize: TYPOGRAPHY.fontSize.xs,

    color: COLORS.textSecondary,
  },
});

export default DashboardStatCard;