import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Dimensions,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { COLORS, TYPOGRAPHY } from "../../../theme";

import { useAuth } from "../../../context/AuthContext";


// =============================================================
// SCREEN SIZE
// =============================================================

const { width, height } =
  Dimensions.get("window");

const CARD_WIDTH =
  Math.min(width - 50, 300);


// =============================================================
// ADMIN LOGIN
// =============================================================

const ADMIN_EMAIL =
  "admin@123gmail.com";

const ADMIN_PASSWORD =
  "admin@123";


// =============================================================
// PARENT LOGIN
// =============================================================

const PARENT_EMAIL =
  "parent123@gmail.com";

const PARENT_PASSWORD =
  "parent@123";


// =============================================================
// LOGIN SCREEN
// =============================================================

const LoginScreen = ({
  navigation,
}: any) => {

  // ===========================================================
  // AUTH
  // ===========================================================

  const { login } = useAuth();


  // ===========================================================
  // FORM STATES
  // ===========================================================

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);


  // ===========================================================
  // FOCUS STATES
  // ===========================================================

  const [emailFocused, setEmailFocused] =
    useState(false);

  const [passwordFocused, setPasswordFocused] =
    useState(false);


  // ===========================================================
  // OTHER STATES
  // ===========================================================

  const [loading, setLoading] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");


  // ===========================================================
  // LOGIN
  // ===========================================================

  const handleLogin = () => {

    // Hide keyboard
    Keyboard.dismiss();

    // Clear previous error
    setErrorMessage("");


    // =========================================================
    // VALIDATION
    // =========================================================

    if (
      !email.trim() ||
      !password.trim()
    ) {

      setErrorMessage(
        "Please enter your email and password."
      );

      return;
    }


    // =========================================================
    // NORMALIZE EMAIL
    // =========================================================

    const enteredEmail =
      email.trim().toLowerCase();


    // =========================================================
    // CHECK ADMIN
    // =========================================================

    const isValidAdmin =
      enteredEmail ===
        ADMIN_EMAIL.toLowerCase() &&
      password === ADMIN_PASSWORD;


    // =========================================================
    // CHECK PARENT
    // =========================================================

    const isValidParent =
      enteredEmail ===
        PARENT_EMAIL.toLowerCase() &&
      password === PARENT_PASSWORD;


    // =========================================================
    // INVALID LOGIN
    // =========================================================

    if (
      !isValidAdmin &&
      !isValidParent
    ) {

      setErrorMessage(
        "Invalid email or password."
      );

      return;
    }


    // =========================================================
    // LOGIN SUCCESS
    // =========================================================

    setLoading(true);


    // Temporary delay
    // Later replace this with API call

    setTimeout(() => {

      setLoading(false);


      // =======================================================
      // ADMIN LOGIN
      // =======================================================

      if (isValidAdmin) {

        login(
          enteredEmail,
          "admin"
        );

        return;
      }


      // =======================================================
      // PARENT LOGIN
      // =======================================================

      if (isValidParent) {

        login(
          enteredEmail,
          "parent"
        );

        return;
      }

    }, 600);
  };


  // ===========================================================
  // FORGOT PASSWORD
  // ===========================================================

  const handleForgotPassword = () => {

    navigation.navigate(
      "ForgotPassword"
    );
  };


  // ===========================================================
  // SIGN UP
  // ===========================================================

  const handleSignUp = () => {

    navigation.navigate(
      "SignIn"
    );
  };


  // ===========================================================
  // UI
  // ===========================================================

  return (

    <View style={styles.root}>

      {/* =====================================================
          STATUS BAR
      ====================================================== */}

      <StatusBar
        barStyle="light-content"
        backgroundColor="#0B1C2C"
      />


      <SafeAreaView
        style={styles.safeArea}
        edges={["top", "bottom"]}
      >

        <KeyboardAvoidingView
          style={styles.keyboardContainer}
          behavior={
            Platform.OS === "ios"
              ? "padding"
              : undefined
          }
          keyboardVerticalOffset={
            Platform.OS === "ios"
              ? 0
              : 20
          }
        >

          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
          >

            <ScrollView
              contentContainerStyle={
                styles.scrollContent
              }
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              bounces={false}
            >

              {/* =================================================
                  LOGIN CARD
              ================================================== */}

              <View style={styles.card}>


                {/* ===============================================
                    LOGO
                ================================================ */}

                <View
                  style={styles.logoSection}
                >

                  <Image
                    source={require(
                      "../../../../assets/images/App_Logo.png"
                    )}
                    style={styles.logo}
                    resizeMode="contain"
                  />

                </View>


                {/* ===============================================
                    TITLE
                ================================================ */}

                <Text style={styles.title}>
                  Welcome Back
                </Text>


                {/* ===============================================
                    EMAIL
                ================================================ */}

                <View style={styles.field}>

                  <Text style={styles.label}>
                    Email Address
                  </Text>


                  <View
                    style={[
                      styles.inputWrapper,

                      emailFocused &&
                        styles.inputWrapperFocused,
                    ]}
                  >

                    <Ionicons
                      name="mail-outline"
                      size={18}
                      color="#6F7D87"
                      style={styles.leftIcon}
                    />


                    <TextInput
                      style={styles.input}

                      value={email}

                      onChangeText={(text) => {

                        setEmail(text);

                        if (errorMessage) {
                          setErrorMessage("");
                        }

                      }}

                      placeholder="e.g. admin@123gmail.com"

                      placeholderTextColor="#8A969F"

                      keyboardType="email-address"

                      autoCapitalize="none"

                      autoCorrect={false}

                      returnKeyType="next"

                      onFocus={() =>
                        setEmailFocused(true)
                      }

                      onBlur={() =>
                        setEmailFocused(false)
                      }
                    />

                  </View>

                </View>


                {/* ===============================================
                    PASSWORD
                ================================================ */}

                <View style={styles.field}>

                  <Text style={styles.label}>
                    Password
                  </Text>


                  <View
                    style={[
                      styles.inputWrapper,

                      passwordFocused &&
                        styles.inputWrapperFocused,
                    ]}
                  >

                    <Ionicons
                      name="lock-closed-outline"
                      size={17}
                      color="#6F7D87"
                      style={styles.leftIcon}
                    />


                    <TextInput
                      style={styles.input}

                      value={password}

                      onChangeText={(text) => {

                        setPassword(text);

                        if (errorMessage) {
                          setErrorMessage("");
                        }

                      }}

                      placeholder="Enter Password"

                      placeholderTextColor="#8A969F"

                      secureTextEntry={
                        !showPassword
                      }

                      autoCapitalize="none"

                      autoCorrect={false}

                      returnKeyType="done"

                      onFocus={() =>
                        setPasswordFocused(true)
                      }

                      onBlur={() =>
                        setPasswordFocused(false)
                      }

                      onSubmitEditing={
                        handleLogin
                      }
                    />


                    {/* SHOW / HIDE PASSWORD */}

                    <TouchableOpacity
                      onPress={() =>
                        setShowPassword(
                          (previous) =>
                            !previous
                        )
                      }

                      activeOpacity={0.7}

                      hitSlop={{
                        top: 10,
                        bottom: 10,
                        left: 10,
                        right: 10,
                      }}
                    >

                      <Ionicons
                        name={
                          showPassword
                            ? "eye-outline"
                            : "eye-off-outline"
                        }

                        size={18}

                        color="#6F7D87"
                      />

                    </TouchableOpacity>

                  </View>

                </View>


                {/* ===============================================
                    ERROR MESSAGE
                ================================================ */}

                {errorMessage ? (

                  <View
                    style={
                      styles.errorContainer
                    }
                  >

                    <Ionicons
                      name="alert-circle-outline"
                      size={15}
                      color="#D9534F"
                    />

                    <Text
                      style={
                        styles.errorText
                      }
                    >
                      {errorMessage}
                    </Text>

                  </View>

                ) : null}


                {/* ===============================================
                    LOGIN BUTTON
                ================================================ */}

                <TouchableOpacity
                  style={[
                    styles.loginButton,

                    (!email.trim() ||
                      !password.trim()) &&
                      styles.loginButtonDisabled,
                  ]}

                  onPress={handleLogin}

                  disabled={loading}

                  activeOpacity={0.85}
                >

                  <Text
                    style={
                      styles.loginButtonText
                    }
                  >
                    {loading
                      ? "Logging in..."
                      : "Login"}
                  </Text>

                </TouchableOpacity>


                {/* ===============================================
                    FORGOT PASSWORD
                ================================================ */}

                <TouchableOpacity
                  style={
                    styles.forgotButton
                  }

                  onPress={
                    handleForgotPassword
                  }

                  activeOpacity={0.7}
                >

                  <Text
                    style={
                      styles.forgotText
                    }
                  >
                    Forgot Password?
                  </Text>

                </TouchableOpacity>


                {/* ===============================================
                    DIVIDER
                ================================================ */}

                <View
                  style={
                    styles.accountDivider
                  }
                >

                  <View
                    style={
                      styles.dividerLine
                    }
                  />

                  <Text
                    style={styles.orText}
                  >
                    OR
                  </Text>

                  <View
                    style={
                      styles.dividerLine
                    }
                  />

                </View>


                {/* ===============================================
                    NEW USER
                ================================================ */}

                <View
                  style={
                    styles.newUserSection
                  }
                >

                  <Text
                    style={
                      styles.newUserText
                    }
                  >
                    Don't have an account?
                  </Text>


                  <TouchableOpacity
                    onPress={handleSignUp}
                    activeOpacity={0.7}
                  >

                    <Text
                      style={
                        styles.signUpText
                      }
                    >
                      Sign Up
                    </Text>

                  </TouchableOpacity>

                </View>

              </View>


              {/* =================================================
                  FOOTER
              ================================================== */}

              <Text
                style={
                  styles.footerText
                }
              >
                © 2026 Cohen International School
              </Text>

            </ScrollView>

          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>

      </SafeAreaView>

    </View>
  );
};


// =============================================================
// STYLES
// =============================================================

const styles = StyleSheet.create({

  // ===========================================================
  // ROOT
  // ===========================================================

  root: {
    flex: 1,
    backgroundColor: "#0B1C2C",
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#0B1C2C",
  },

  keyboardContainer: {
    flex: 1,
  },


  // ===========================================================
  // CONTENT
  // ===========================================================

  scrollContent: {
    flexGrow: 1,

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 20,

    paddingTop:
      height < 700
        ? 10
        : 18,

    paddingBottom: 15,
  },


  // ===========================================================
  // CARD
  // ===========================================================

  card: {
    width: CARD_WIDTH,

    backgroundColor: "#FFFFFF",

    borderRadius: 15,

    borderWidth: 1,

    borderColor: "#E4E7E9",

    paddingHorizontal: 20,

    paddingTop: 12,

    paddingBottom: 11,

    elevation: 9,

    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.20,

    shadowRadius: 10,
  },


  // ===========================================================
  // LOGO
  // ===========================================================

  logoSection: {
    width: "100%",

    height: 46,

    justifyContent: "center",

    alignItems: "center",

    marginBottom: 3,
  },

  logo: {
    width: 105,

    height: 50,
  },


  // ===========================================================
  // TITLE
  // ===========================================================

  title: {
    color: "#0B1C2C",

    fontFamily:
      TYPOGRAPHY.fontFamily.bold,

    fontSize: 19,

    textAlign: "center",

    marginBottom: 15,
  },


  // ===========================================================
  // FIELD
  // ===========================================================

  field: {
    width: "100%",

    marginBottom: 10,
  },


  // ===========================================================
  // LABEL
  // ===========================================================

  label: {
    color: "#0B1C2C",

    fontFamily:
      TYPOGRAPHY.fontFamily.semiBold,

    fontSize: 11.5,

    marginBottom: 5,
  },


  // ===========================================================
  // INPUT
  // ===========================================================

  inputWrapper: {
    width: "100%",

    height: 42,

    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderWidth: 1,

    borderColor: "#0B1C2C",

    borderRadius: 8,

    paddingHorizontal: 10,
  },

  inputWrapperFocused: {
    borderColor: "#0B1C2C",

    borderWidth: 1,
  },

  leftIcon: {
    marginRight: 7,
  },

  input: {
    flex: 1,

    height: "100%",

    color: "#0B1C2C",

    fontFamily:
      TYPOGRAPHY.fontFamily.regular,

    fontSize: 11.5,

    paddingVertical: 0,

    paddingRight: 6,
  },


  // ===========================================================
  // ERROR
  // ===========================================================

  errorContainer: {
    flexDirection: "row",

    alignItems: "center",

    marginTop: -3,

    marginBottom: 7,

    paddingHorizontal: 2,
  },

  errorText: {
    color: "#D9534F",

    fontFamily:
      TYPOGRAPHY.fontFamily.medium,

    fontSize: 10.5,

    marginLeft: 5,

    flex: 1,
  },


  // ===========================================================
  // LOGIN BUTTON
  // ===========================================================

  loginButton: {
    width: "100%",

    height: 43,

    backgroundColor: "#C9A227",

    borderRadius: 8,

    justifyContent: "center",

    alignItems: "center",

    marginTop: 1,

    elevation: 2,

    shadowColor: "#C9A227",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.16,

    shadowRadius: 4,
  },

  loginButtonDisabled: {
    backgroundColor: "#C9A227",

    opacity: 0.55,

    elevation: 0,

    shadowOpacity: 0,
  },

  loginButtonText: {
    color: "#0B1C2C",

    fontFamily:
      TYPOGRAPHY.fontFamily.bold,

    fontSize: 12.5,

    letterSpacing: 0.3,
  },


  // ===========================================================
  // FORGOT PASSWORD
  // ===========================================================

  forgotButton: {
    alignSelf: "center",

    marginTop: 8,

    paddingVertical: 1,
  },

  forgotText: {
    color: "#0B1C2C",

    fontFamily:
      TYPOGRAPHY.fontFamily.medium,

    fontSize: 11,

    textDecorationLine:
      "underline",
  },


  // ===========================================================
  // DIVIDER
  // ===========================================================

  accountDivider: {
    width: "100%",

    flexDirection: "row",

    alignItems: "center",

    marginTop: 11,

    marginBottom: 9,
  },

  dividerLine: {
    flex: 1,

    height: 1,

    backgroundColor: "#D9DEE2",
  },

  orText: {
    color: "#89949C",

    fontFamily:
      TYPOGRAPHY.fontFamily.medium,

    fontSize: 8.5,

    marginHorizontal: 8,

    letterSpacing: 0.4,
  },


  // ===========================================================
  // NEW USER
  // ===========================================================

  newUserSection: {
    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    gap: 4,
  },

  newUserText: {
    color: "#6B7780",

    fontFamily:
      TYPOGRAPHY.fontFamily.regular,

    fontSize: 11,
  },

  signUpText: {
    color: "#0B1C2C",

    fontFamily:
      TYPOGRAPHY.fontFamily.bold,

    fontSize: 11,

    textDecorationLine:
      "underline",
  },


  // ===========================================================
  // FOOTER
  // ===========================================================

  footerText: {
    color: "#FFFFFF",

    fontFamily:
      TYPOGRAPHY.fontFamily.regular,

    fontSize: 8.5,

    textAlign: "center",

    marginTop: 13,
  },

});


export default LoginScreen;