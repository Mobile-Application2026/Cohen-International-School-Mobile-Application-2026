import { StyleSheet } from 'react-native';

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
} from '../../../theme';


export const styles = StyleSheet.create({

  // =======================================================================
  // Container
  // =======================================================================

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },


  // =======================================================================
  // Summary Text
  // =======================================================================

  headerText: {
    fontFamily: TYPOGRAPHY.fontFamily.medium,

    fontSize: TYPOGRAPHY.fontSize.sm,

    color: COLORS.textSecondary,

    paddingHorizontal: SPACING.lg,

    paddingTop: SPACING.lg,

    paddingBottom: SPACING.md,
  },


  // =======================================================================
  // Children List
  // =======================================================================

  scrollContent: {
    paddingHorizontal: SPACING.lg,

    paddingBottom: SPACING.xxxl,
  },

});