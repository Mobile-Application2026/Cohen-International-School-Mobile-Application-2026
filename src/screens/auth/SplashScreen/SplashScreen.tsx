import React, { useEffect, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import { COLORS } from "../../../theme";
// ==========================================
// DESIGN TOKENS (swap with theme tokens if you have them)
// ==========================================

const GOLD = "#C9A227";
const GOLD_LIGHT = "#F0D77A";
const WHITE = "#FFFFFF";
const MUTED = "#B9C2CC";
const FOOTER_MUTED = "#7F8D9B";

const WORDMARK = "ParentConnect".split("");

const PARTICLES = [
  { left: "12%", bottom: "14%", size: 3, delay: 200, duration: 4200 },
  { left: "24%", bottom: "8%", size: 2, delay: 1100, duration: 3600 },
  { left: "36%", bottom: "18%", size: 4, delay: 600, duration: 4800 },
  { left: "48%", bottom: "6%", size: 2, delay: 1700, duration: 3900 },
  { left: "60%", bottom: "16%", size: 3, delay: 900, duration: 4400 },
  { left: "72%", bottom: "9%", size: 4, delay: 100, duration: 5000 },
  { left: "84%", bottom: "20%", size: 2, delay: 1400, duration: 3800 },
  { left: "90%", bottom: "5%", size: 3, delay: 2000, duration: 4100 },
];

const PROGRESS_WIDTH = 128;

const SplashScreen = ({ navigation }: any) => {
  // ------------------------------------------
  // ORIGINAL LOGO VALUES (unchanged)
  // ------------------------------------------
  const logoScale = useRef(new Animated.Value(0.7)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  // ------------------------------------------
  // DESIGN ANIMATION VALUES
  // ------------------------------------------
  const ringProgress = useRef(new Animated.Value(0)).current;
  const orbit = useRef(new Animated.Value(0)).current;
  const glow = useRef(new Animated.Value(0.55)).current;
  const ripples = useRef([0, 1, 2].map(() => new Animated.Value(0))).current;
  const letters = useRef(WORDMARK.map(() => new Animated.Value(0))).current;
  const underline = useRef(new Animated.Value(0)).current;
  const tagline = useRef(new Animated.Value(0)).current;
  const footer = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const particles = useRef(PARTICLES.map(() => new Animated.Value(0))).current;
  const screenOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // ==========================================
    // LOGO ANIMATION (unchanged)
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
    // DESIGN ANIMATIONS
    // ==========================================

    const loops: Animated.CompositeAnimation[] = [];

    // Gold ring fades and scales in around the logo
    Animated.timing(ringProgress, {
      toValue: 1,
      duration: 1400,
      delay: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    // Orbiting dot
    const orbitLoop = Animated.loop(
      Animated.timing(orbit, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    loops.push(orbitLoop);
    orbitLoop.start();

    // Ambient glow pulse
    const glowLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(glow, {
          toValue: 0.55,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    loops.push(glowLoop);
    glowLoop.start();

    // Ripple rings (staggered)
    ripples.forEach((value, i) => {
      const rippleAnim = Animated.sequence([
        Animated.delay(900 + i * 850),
        Animated.loop(
          Animated.sequence([
            Animated.timing(value, {
              toValue: 1,
              duration: 2600,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(value, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ])
        ),
      ]);
      loops.push(rippleAnim);
      rippleAnim.start();
    });

    // Floating particles
    particles.forEach((value, i) => {
      const particleAnim = Animated.sequence([
        Animated.delay(PARTICLES[i].delay),
        Animated.loop(
          Animated.sequence([
            Animated.timing(value, {
              toValue: 1,
              duration: PARTICLES[i].duration,
              easing: Easing.in(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(value, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ])
        ),
      ]);
      loops.push(particleAnim);
      particleAnim.start();
    });

    // Wordmark: letter by letter
    Animated.sequence([
      Animated.delay(1350),
      Animated.stagger(
        50,
        letters.map((value) =>
          Animated.timing(value, {
            toValue: 1,
            duration: 560,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          })
        )
      ),
    ]).start();

    // Underline, tagline, footer
    Animated.timing(underline, {
      toValue: 1,
      duration: 700,
      delay: 2100,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    Animated.timing(tagline, {
      toValue: 1,
      duration: 700,
      delay: 2300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    Animated.timing(footer, {
      toValue: 1,
      duration: 600,
      delay: 1200,
      useNativeDriver: true,
    }).start();

    // Loading bar
    Animated.timing(progress, {
      toValue: 1,
      duration: 2700,
      delay: 1200,
      easing: Easing.bezier(0.5, 0.1, 0.3, 1),
      useNativeDriver: true,
    }).start();

    // Soft fade-out just before navigating
    Animated.timing(screenOpacity, {
      toValue: 0,
      duration: 500,
      delay: 3500,
      useNativeDriver: true,
    }).start();

    // ==========================================
    // SPLASH SCREEN DURATION (unchanged)
    // ==========================================

    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 4000);

    return () => {
      clearTimeout(timer);
      loops.forEach((anim) => anim.stop());
    };
  }, [navigation]);

  // ==========================================
  // INTERPOLATIONS
  // ==========================================

  const orbitRotate = orbit.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const ringScale = ringProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const progressTranslate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-PROGRESS_WIDTH, 0],
  });

  return (
    <Animated.View style={[styles.container, { opacity: screenOpacity }]}>
      <StatusBar style="light" />

      {/* ========================================
          FLOATING PARTICLES
      ========================================= */}

      {PARTICLES.map((p, i) => (
        <Animated.View
          key={i}
          style={[
            styles.particle,
            {
              left: p.left as any,
              bottom: p.bottom as any,
              width: p.size,
              height: p.size,
              borderRadius: p.size / 2,
              opacity: particles[i].interpolate({
                inputRange: [0, 0.25, 1],
                outputRange: [0, 0.85, 0],
              }),
              transform: [
                {
                  translateY: particles[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -150],
                  }),
                },
              ],
            },
          ]}
        />
      ))}

      {/* ========================================
          LOGO CLUSTER
      ========================================= */}

      <View style={styles.cluster}>
        {/* Ambient glow */}
        <Animated.View style={[styles.glowOuter, { opacity: glow }]} />
        <Animated.View style={[styles.glowInner, { opacity: glow }]} />

        {/* Ripples */}
        {ripples.map((value, i) => (
          <Animated.View
            key={i}
            style={[
              styles.ripple,
              {
                opacity: value.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.55, 0],
                }),
                transform: [
                  {
                    scale: value.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.55, 2.2],
                    }),
                  },
                ],
              },
            ]}
          />
        ))}

        {/* Ring */}
        <Animated.View
          style={[
            styles.ring,
            {
              opacity: ringProgress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.7],
              }),
              transform: [{ scale: ringScale }],
            },
          ]}
        />

        {/* Orbiting dot */}
        <Animated.View
          style={[styles.orbit, { transform: [{ rotate: orbitRotate }] }]}
        >
          <View style={styles.orbitDot} />
        </Animated.View>

        {/* LOGO (original animation) */}
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

      {/* ========================================
          WORDMARK
      ========================================= */}

      <View style={styles.wordmark}>
        {WORDMARK.map((char, i) => (
          <Animated.Text
            key={i}
            style={[
              styles.wordmarkChar,
              {
                opacity: letters[i],
                transform: [
                  {
                    translateY: letters[i].interpolate({
                      inputRange: [0, 1],
                      outputRange: [16, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {char}
          </Animated.Text>
        ))}
      </View>

      <Animated.View
        style={[styles.underline, { transform: [{ scaleX: underline }] }]}
      />

      <Animated.Text
        style={[
          styles.tagline,
          {
            opacity: tagline,
            transform: [
              {
                translateY: tagline.interpolate({
                  inputRange: [0, 1],
                  outputRange: [12, 0],
                }),
              },
            ],
          },
        ]}
      >
        Stay close to your child's school day
      </Animated.Text>

      {/* ========================================
          FOOTER: LOADING BAR + SCHOOL NAME
      ========================================= */}

      <Animated.View style={[styles.footer, { opacity: footer }]}>
        <View style={styles.progressTrack}>
          <Animated.View
            style={[
              styles.progressFill,
              { transform: [{ translateX: progressTranslate }] },
            ]}
          />
        </View>

        <Text style={styles.schoolName}>Cohen International School</Text>
      </Animated.View>
    </Animated.View>
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
  // PARTICLES
  // ==========================================

  particle: {
    position: "absolute",
    backgroundColor: GOLD,
  },

  // ==========================================
  // LOGO CLUSTER
  // ==========================================

  cluster: {
    width: 300,
    height: 300,

    justifyContent: "center",
    alignItems: "center",
  },

  glowOuter: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "rgba(201, 162, 39, 0.08)",
  },

  glowInner: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(201, 162, 39, 0.12)",
  },

  ripple: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1.5,
    borderColor: GOLD,
  },

  ring: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1.5,
    borderColor: GOLD,
  },

  orbit: {
    position: "absolute",
    width: 170,
    height: 170,
  },

  orbitDot: {
    position: "absolute",
    top: -4,
    left: 81,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: GOLD,

    shadowColor: GOLD,
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },

  // ==========================================
  // LOGO CONTAINER
  // ==========================================

  logoWrapper: {
    width: 120,
    height: 120,

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

  // ==========================================
  // WORDMARK
  // ==========================================

  wordmark: {
    flexDirection: "row",
    marginTop: -40,
  },

  wordmarkChar: {
    color: WHITE,
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: -0.3,
  },

  underline: {
    width: 56,
    height: 2,
    borderRadius: 2,
    marginTop: 8,
    backgroundColor: GOLD,
  },

  tagline: {
    marginTop: 12,
    fontSize: 12,
    color: MUTED,
  },

  // ==========================================
  // FOOTER
  // ==========================================

  footer: {
    position: "absolute",
    bottom: 48,
    alignItems: "center",
  },

  progressTrack: {
    width: PROGRESS_WIDTH,
    height: 3,
    borderRadius: 3,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },

  progressFill: {
    width: PROGRESS_WIDTH,
    height: 3,
    borderRadius: 3,
    backgroundColor: GOLD_LIGHT,
  },

  schoolName: {
    marginTop: 12,
    fontSize: 10,
    color: FOOTER_MUTED,
  },
});

export default SplashScreen;