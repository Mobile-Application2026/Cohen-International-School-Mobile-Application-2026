import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  RADIUS,
} from "../../theme";


export type ResultType =
  "success" | "error";


interface ResultModalProps {
  visible: boolean;
  type: ResultType;
  title: string;
  message?: string;
  buttonText?: string;
  onClose: () => void;
}


const ResultModal: React.FC<
  ResultModalProps
> = ({
  visible,
  type,
  title,
  message,
  buttonText = "OK",
  onClose,
}) => {

  const isSuccess =
    type === "success";


  const iconColor =
    isSuccess
      ? COLORS.success
      : COLORS.danger;


  const iconName =
    isSuccess
      ? "checkmark-circle"
      : "close-circle";


  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >

      <View style={styles.overlay}>

        <View style={styles.card}>

          {/* ICON */}

          <View
            style={[
              styles.iconWrap,
              {
                backgroundColor:
                  `${iconColor}1A`,
              },
            ]}
          >

            <Ionicons
              name={iconName}
              size={48}
              color={iconColor}
            />

          </View>


          {/* TITLE */}

          <Text style={styles.title}>
            {title}
          </Text>


          {/* MESSAGE */}

          {message ? (
            <Text style={styles.message}>
              {message}
            </Text>
          ) : null}


          {/* BUTTON */}

          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  isSuccess
                    ? COLORS.primary
                    : COLORS.danger,
              },
            ]}
            onPress={onClose}
            activeOpacity={0.85}
          >

            <Text
              style={styles.buttonText}
            >
              {buttonText}
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </Modal>
  );
};


const styles = StyleSheet.create({

  overlay: {
    flex: 1,

    backgroundColor:
      "rgba(0,0,0,0.45)",

    justifyContent:
      "center",

    alignItems:
      "center",

    paddingHorizontal: 32,
  },

  card: {
    width: "100%",

    maxWidth: 340,

    backgroundColor:
      COLORS.background,

    borderRadius:
      RADIUS.lg,

    paddingVertical: 28,

    paddingHorizontal: 24,

    alignItems:
      "center",
  },

  iconWrap: {
    width: 84,

    height: 84,

    borderRadius: 42,

    alignItems:
      "center",

    justifyContent:
      "center",

    marginBottom: 16,
  },

  title: {
    fontFamily:
      TYPOGRAPHY.fontFamily.bold,

    fontSize:
      TYPOGRAPHY.fontSize.lg,

    color:
      COLORS.textPrimary,

    textAlign:
      "center",

    marginBottom: 6,
  },

  message: {
    fontFamily:
      TYPOGRAPHY.fontFamily.regular,

    fontSize:
      TYPOGRAPHY.fontSize.sm,

    color:
      COLORS.textSecondary,

    textAlign:
      "center",

    marginBottom: 20,
  },

  button: {
    width: "100%",

    height: 46,

    borderRadius:
      RADIUS.md,

    alignItems:
      "center",

    justifyContent:
      "center",
  },

  buttonText: {
    fontFamily:
      TYPOGRAPHY.fontFamily.medium,

    fontSize:
      TYPOGRAPHY.fontSize.md,

    color:
      COLORS.white,
  },

});


export default ResultModal;