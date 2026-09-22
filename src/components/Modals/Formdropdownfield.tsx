import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  RADIUS,
} from "../../theme";


export interface DropdownOption {
  label: string;
  value: string;
}


interface FormDropdownFieldProps {
  label: string;
  value: string | null;
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}


const FormDropdownField: React.FC<
  FormDropdownFieldProps
> = ({
  label,
  value,
  options,
  onSelect,
  placeholder = "Select an option",
  required = false,
  error,
}) => {

  const [visible, setVisible] =
    useState(false);

  const selectedOption =
    options.find(
      (o) => o.value === value
    );


  const handleSelect = (
    option: DropdownOption
  ) => {

    onSelect(option);

    setVisible(false);
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
          error
            ? styles.fieldError
            : null,
        ]}
        onPress={() =>
          setVisible(true)
        }
        activeOpacity={0.7}
      >

        <Text
          style={[
            styles.valueText,

            !selectedOption
              ? styles.placeholderText
              : null,
          ]}
        >
          {selectedOption
            ? selectedOption.label
            : placeholder}
        </Text>


        <Ionicons
          name="chevron-down"
          size={18}
          color={COLORS.textSecondary}
        />

      </TouchableOpacity>


      {/* ERROR */}

      {error ? (
        <Text style={styles.errorText}>
          {error}
        </Text>
      ) : null}


      {/* MODAL */}

      <Modal
        visible={visible}
        transparent
        animationType="fade"
      >

        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() =>
            setVisible(false)
          }
        >

          <View style={styles.sheet}>

            {/* SHEET HEADER */}

            <View
              style={styles.sheetHeader}
            >

              <Text
                style={styles.sheetTitle}
              >
                {label}
              </Text>


              <TouchableOpacity
                onPress={() =>
                  setVisible(false)
                }
              >

                <Ionicons
                  name="close"
                  size={22}
                  color={
                    COLORS.textPrimary
                  }
                />

              </TouchableOpacity>

            </View>


            {/* OPTIONS */}

            <FlatList
              data={options}

              keyExtractor={(item) =>
                item.value
              }

              style={{
                maxHeight: 300,
              }}

              renderItem={({
                item,
              }) => (

                <TouchableOpacity
                  style={
                    styles.optionRow
                  }
                  onPress={() =>
                    handleSelect(item)
                  }
                >

                  <Text
                    style={[
                      styles.optionText,

                      item.value === value
                        ? styles.optionTextSelected
                        : null,
                    ]}
                  >
                    {item.label}
                  </Text>


                  {item.value === value && (
                    <Ionicons
                      name="checkmark"
                      size={18}
                      color={
                        COLORS.primary
                      }
                    />
                  )}

                </TouchableOpacity>

              )}

              ItemSeparatorComponent={() => (
                <View
                  style={styles.separator}
                />
              )}
            />

          </View>

        </TouchableOpacity>

      </Modal>

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    marginBottom:
      SPACING.lg,
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

    justifyContent:
      "space-between",

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
    fontSize:
      TYPOGRAPHY.fontSize.md,

    color:
      COLORS.textPrimary,

    fontFamily:
      TYPOGRAPHY.fontFamily.regular,
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

  overlay: {
    flex: 1,

    backgroundColor:
      "rgba(0,0,0,0.35)",

    justifyContent:
      "flex-end",
  },

  sheet: {
    backgroundColor:
      COLORS.background,

    borderTopLeftRadius: 16,

    borderTopRightRadius: 16,

    paddingBottom: 24,

    maxHeight: "60%",
  },

  sheetHeader: {
    flexDirection: "row",

    justifyContent:
      "space-between",

    alignItems: "center",

    paddingHorizontal: 16,

    paddingVertical: 14,

    borderBottomWidth: 1,

    borderBottomColor:
      COLORS.border,
  },

  sheetTitle: {
    fontFamily:
      TYPOGRAPHY.fontFamily.bold,

    fontSize:
      TYPOGRAPHY.fontSize.md,

    color:
      COLORS.textPrimary,
  },

  optionRow: {
    flexDirection: "row",

    justifyContent:
      "space-between",

    alignItems: "center",

    paddingHorizontal: 16,

    paddingVertical: 14,
  },

  optionText: {
    fontSize:
      TYPOGRAPHY.fontSize.md,

    color:
      COLORS.textPrimary,

    fontFamily:
      TYPOGRAPHY.fontFamily.regular,
  },

  optionTextSelected: {
    color:
      COLORS.primary,

    fontFamily:
      TYPOGRAPHY.fontFamily.medium,
  },

  separator: {
    height: 1,

    backgroundColor:
      COLORS.border,
  },

});

export default FormDropdownField;