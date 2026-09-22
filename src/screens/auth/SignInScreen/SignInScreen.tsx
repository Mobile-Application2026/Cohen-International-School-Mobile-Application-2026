import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS } from "../../../theme/colors";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sign In
      </Text>

      <Text style={styles.subtitle}>
        Create your Cohen International account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "700",
  },

  subtitle: {
    color: COLORS.textSecondary,
    marginTop: 10,
  },
});

export default SignInScreen;