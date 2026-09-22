import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
} from '../../theme';

type IconName = keyof typeof Ionicons.glyphMap;

interface PrimaryButtonProps {
  title: string;
  icon?: IconName;
  onPress: () => void;
  iconColor?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  icon,
  onPress,
  iconColor = COLORS.textPrimary,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        disabled && styles.buttonDisabled,
      ]}
    >
      {icon && (
        <View style={styles.iconContainer}>
          <Ionicons
            name={icon}
            size={19}
            color={iconColor}
          />
        </View>
      )}

      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',

    minHeight: 48,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: COLORS.primary,

    borderRadius: RADIUS.round,

    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,

    ...SHADOWS.card,
  },

  buttonPressed: {
    opacity: 0.75,
    transform: [
      {
        scale: 0.99,
      },
    ],
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  iconContainer: {
    marginRight: SPACING.sm,

    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontFamily: TYPOGRAPHY.fontFamily.semiBold,

    fontSize: TYPOGRAPHY.fontSize.md,

    color: COLORS.textPrimary,

    textAlign: 'center',
  },
});

export default PrimaryButton;