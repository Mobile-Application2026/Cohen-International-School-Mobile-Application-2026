import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
  StatusBar,
} from "react-native";

import { COLORS } from "../../../theme";

const SplashScreen = ({ navigation }: any) => {
  const logoScale = useRef(new Animated.Value(0.7)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // ==========================================
    // LOGO ANIMATION
    // ==========================================

    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.spring(logoScale, {
        toValue: 1,
        friction: 6,
        tension: 45,
        useNativeDriver: true,
      }),
    ]).start();

    // ==========================================
    // SPLASH SCREEN DURATION
    // ==========================================

    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.dark}
      />

      {/* ========================================
          LOGO
      ========================================= */}

      <Animated.View
        style={[
          styles.logoWrapper,
          {
            opacity: logoOpacity,
            transform: [
              {
                scale: logoScale,
              },
            ],
          },
        ]}
      >
        <Image
          source={require("../../../../assets/images/App_Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ==========================================
  // SPLASH BACKGROUND
  // ==========================================

  container: {
    flex: 1,

    backgroundColor: COLORS.dark,

    justifyContent: "center",
    alignItems: "center",
  },

  // ==========================================
  // LOGO CONTAINER
  // ==========================================

  logoWrapper: {
    width: 180,
    height: 180,

    justifyContent: "center",
    alignItems: "center",
  },

  // ==========================================
  // LOGO
  // ==========================================

  logo: {
    width: "100%",
    height: "100%",
  },
});

export default SplashScreen;