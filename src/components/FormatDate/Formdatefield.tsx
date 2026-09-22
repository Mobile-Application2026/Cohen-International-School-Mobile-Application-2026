import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Modal,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Ionicons } from "@expo/vector-icons";

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  RADIUS,
} from "../../theme";

interface FormDateFieldProps {
  label: string;
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  maximumDate?: Date;
  minimumDate?: Date;
}

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const FormDateField: React.FC<FormDateFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = "Select date",
  required = false,
  error,
  maximumDate,
  minimumDate,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const [tempDate, setTempDate] = useState<Date>(
    value || new Date()
  );

  const openPicker = () => {
    setTempDate(value || new Date());
    setShowPicker(true);
  };

  const handleChange = (
    event: any,
    selectedDate?: Date
  ) => {
    if (Platform.OS === "android") {
      setShowPicker(false);

      if (
        event.type === "set" &&
        selectedDate
      ) {
        onChange(selectedDate);
      }

      return;
    }

    if (selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const confirmIOSDate = () => {
    onChange(tempDate);
    setShowPicker(false);
  };

  return (
    <View style={styles.container}>

      {/* LABEL */}

      <Text style={styles.label}>
        {label}

        {required ? (
          <Text style={styles.asterisk}>
            {" "}*
          </Text>
        ) : null}
      </Text>


      {/* FIELD */}

      <TouchableOpacity
        style={[
          styles.field,
          error ? styles.fieldError : null,
        ]}
        onPress={openPicker}
        activeOpacity={0.7}
      >

        <Text
          style={[
            styles.valueText,
            !value
              ? styles.placeholderText
              : null,
          ]}
        >
          {value
            ? formatDate(value)
            : placeholder}
        </Text>

        <Ionicons
          name="calendar-outline"
          size={20}
          color={COLORS.textSecondary}
        />

      </TouchableOpacity>


      {/* ERROR */}

      {error ? (
        <Text style={styles.errorText}>
          {error}
        </Text>
      ) : null}


      {/* ANDROID PICKER */}

      {showPicker &&
        Platform.OS === "android" && (
          <DateTimePicker
            value={tempDate}
            mode="date"
            display="default"
            onChange={handleChange}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
          />
        )}


      {/* IOS PICKER */}

      {Platform.OS === "ios" && (
        <Modal
          visible={showPicker}
          transparent
          animationType="slide"
        >

          <View style={styles.iosModalOverlay}>

            <View style={styles.iosModalContent}>

              <View style={styles.iosModalHeader}>

                <TouchableOpacity
                  onPress={() =>
                    setShowPicker(false)
                  }
                >
                  <Text style={styles.iosCancelText}>
                    Cancel
                  </Text>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={confirmIOSDate}
                >
                  <Text style={styles.iosDoneText}>
                    Done
                  </Text>
                </TouchableOpacity>

              </View>


              <DateTimePicker
                value={tempDate}
                mode="date"
                display="spinner"
                onChange={handleChange}
                maximumDate={maximumDate}
                minimumDate={minimumDate}
                style={styles.iosPicker}
              />

            </View>

          </View>

        </Modal>
      )}

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    marginBottom: SPACING.lg,
  },

  label: {
    fontFamily:
      TYPOGRAPHY.fontFamily.medium,

    fontSize:
      TYPOGRAPHY.fontSize.sm,

    color:
      COLORS.textPrimary,

    marginBottom:
      SPACING.xs,
  },

  asterisk: {
    color:
      COLORS.danger,
  },

  field: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    borderWidth: 1,

    borderColor:
      COLORS.border,

    borderRadius:
      RADIUS.md,

    paddingHorizontal:
      SPACING.md,

    height: 48,

    backgroundColor:
      COLORS.background,
  },

  fieldError: {
    borderColor:
      COLORS.danger,
  },

  valueText: {
    fontFamily:
      TYPOGRAPHY.fontFamily.regular,

    fontSize:
      TYPOGRAPHY.fontSize.md,

    color:
      COLORS.textPrimary,
  },

  placeholderText: {
    color:
      COLORS.textSecondary,
  },

  errorText: {
    marginTop: 4,

    fontSize: 12,

    color:
      COLORS.danger,

    fontFamily:
      TYPOGRAPHY.fontFamily.regular,
  },

  iosModalOverlay: {
    flex: 1,

    justifyContent: "flex-end",

    backgroundColor:
      "rgba(0,0,0,0.3)",
  },

  iosModalContent: {
    backgroundColor:
      COLORS.background,

    borderTopLeftRadius: 16,

    borderTopRightRadius: 16,

    paddingBottom: 20,
  },

  iosModalHeader: {
    flexDirection: "row",

    justifyContent: "space-between",

    paddingHorizontal: 16,

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor:
      COLORS.border,
  },

  iosCancelText: {
    color:
      COLORS.textSecondary,

    fontSize: 15,
  },

  iosDoneText: {
    color:
      COLORS.primary,

    fontSize: 15,

    fontWeight: "600",
  },

  iosPicker: {
    height: 200,
  },

});

export default FormDateField;