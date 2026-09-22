import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";

import { COLORS } from "../../../../theme";

import FormDateField from "../../../../components/FormatDate/Formdatefield";

import FormDropdownField, {
  DropdownOption,
} from "../../../../components/Modals/Formdropdownfield";

import ResultModal, {
  ResultType,
} from "../../../../components/Modals/Resultmodal";

import { styles } from "./styles";


// =====================================================
// DROPDOWN OPTIONS
// =====================================================

const GENDER_OPTIONS: DropdownOption[] = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
];

const BLOOD_GROUP_OPTIONS: DropdownOption[] = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "O-",
    value: "O-",
  },
];


// =====================================================
// FORM TYPES
// =====================================================

interface FormState {
  fullName: string;
  dob: Date | null;
  gender: string | null;
  bloodGroup: string | null;
  phoneNumber: string;
}

interface FormErrors {
  fullName?: string;
  dob?: string;
  gender?: string;
  bloodGroup?: string;
  phoneNumber?: string;
}


// =====================================================
// SCREEN
// =====================================================

const AddStudentScreen: React.FC = () => {

  const navigation = useNavigation<any>();


  // ===================================================
  // FORM STATE
  // ===================================================

  const [form, setForm] = useState<FormState>({
    fullName: "",
    dob: null,
    gender: null,
    bloodGroup: null,
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});


  // ===================================================
  // SUBMIT STATE
  // ===================================================

  const [submitting, setSubmitting] =
    useState(false);


  // ===================================================
  // RESULT MODAL
  // ===================================================

  const [resultVisible, setResultVisible] =
    useState(false);

  const [resultType, setResultType] =
    useState<ResultType>("success");

  const [resultMessage, setResultMessage] =
    useState("");


  // ===================================================
  // PROFILE IMAGE
  // ===================================================

  const [profileImage, setProfileImage] =
    useState<string | null>(null);


  // ===================================================
  // UPDATE FORM FIELD
  // ===================================================

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {

    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));

    if (errors[key as keyof FormErrors]) {

      setErrors((previous) => ({
        ...previous,
        [key]: undefined,
      }));

    }
  };


  // ===================================================
  // PICK IMAGE FROM GALLERY
  // ===================================================

  const pickFromGallery = async () => {

    try {

      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {

        Alert.alert(
          "Permission Required",
          "Please allow access to your photos to select a profile picture."
        );

        return;
      }


      const result =
        await ImagePicker.launchImageLibraryAsync({

          mediaTypes: ["images"],

          allowsEditing: true,

          aspect: [1, 1],

          quality: 0.8,

          allowsMultipleSelection: false,
        });


      if (!result.canceled &&
          result.assets?.length > 0) {

        setProfileImage(
          result.assets[0].uri
        );
      }

    } catch (error) {

      Alert.alert(
        "Error",
        "Unable to open the gallery. Please try again."
      );
    }
  };


  // ===================================================
  // TAKE PHOTO USING CAMERA
  // ===================================================

  const takePhoto = async () => {

    try {

      const permission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {

        Alert.alert(
          "Permission Required",
          "Please allow camera access to take a profile picture."
        );

        return;
      }


      const result =
        await ImagePicker.launchCameraAsync({

          allowsEditing: true,

          aspect: [1, 1],

          quality: 0.8,
        });


      if (!result.canceled &&
          result.assets?.length > 0) {

        setProfileImage(
          result.assets[0].uri
        );
      }

    } catch (error) {

      Alert.alert(
        "Error",
        "Unable to open the camera. Please try again."
      );
    }
  };


  // ===================================================
  // IMAGE SELECTION
  // ===================================================

  const handleProfileImagePress = () => {

    Alert.alert(
      "Profile Picture",
      "Choose an option",
      [
        {
          text: "Camera",
          onPress: takePhoto,
        },
        {
          text: "Gallery",
          onPress: pickFromGallery,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };


  // ===================================================
  // VALIDATION
  // ===================================================

  const validate = (): boolean => {

    const newErrors: FormErrors = {};


    if (!form.fullName.trim()) {

      newErrors.fullName =
        "Full name is required";

    } else if (
      form.fullName.trim().length < 3
    ) {

      newErrors.fullName =
        "Full name must be at least 3 characters";
    }


    if (!form.dob) {

      newErrors.dob =
        "Date of birth is required";
    }


    if (!form.gender) {

      newErrors.gender =
        "Gender is required";
    }


    if (!form.bloodGroup) {

      newErrors.bloodGroup =
        "Blood group is required";
    }


    if (!form.phoneNumber.trim()) {

      newErrors.phoneNumber =
        "Phone number is required";

    } else if (
      !/^\d{10}$/.test(
        form.phoneNumber.trim()
      )
    ) {

      newErrors.phoneNumber =
        "Enter a valid 10-digit phone number";
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // ===================================================
  // SAVE STUDENT
  // ===================================================

  const handleSave = async () => {

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    try {

      // TODO:
      // Replace this with your real API request.
      //
      // Example:
      //
      // await api.post("/students", {
      //   fullName: form.fullName,
      //   dob: form.dob,
      //   gender: form.gender,
      //   bloodGroup: form.bloodGroup,
      //   phoneNumber: form.phoneNumber,
      //   profileImage: profileImage,
      // });

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );


      setResultType("success");

      setResultMessage(
        "Student has been added successfully."
      );

      setResultVisible(true);

    } catch (error) {

      setResultType("error");

      setResultMessage(
        "Something went wrong while saving. Please try again."
      );

      setResultVisible(true);

    } finally {

      setSubmitting(false);
    }
  };


  // ===================================================
  // RESULT MODAL CLOSE
  // ===================================================

  const handleResultClose = () => {

    setResultVisible(false);

    if (resultType === "success") {

      navigation.goBack();
    }
  };


  // ===================================================
  // CANCEL
  // ===================================================

  const handleCancel = () => {

    navigation.goBack();
  };


  // ===================================================
  // UI
  // ===================================================

  return (

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

        <ScrollView
          contentContainerStyle={
            styles.scrollContent
          }
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >


          {/* =======================================
              PROFILE IMAGE
          ======================================= */}

          <View style={styles.avatarWrap}>

            <View style={styles.avatarCircle}>

              {profileImage ? (

                <Image
                  source={{
                    uri: profileImage,
                  }}
                  style={styles.avatarImage}
                />

              ) : (

                <Ionicons
                  name="person"
                  size={40}
                  color={
                    COLORS.textSecondary
                  }
                />

              )}

            </View>


            <TouchableOpacity
              style={styles.avatarBadge}
              activeOpacity={0.8}
              onPress={
                handleProfileImagePress
              }
            >

              <Ionicons
                name={
                  profileImage
                    ? "camera"
                    : "add"
                }
                size={16}
                color={COLORS.white}
              />

            </TouchableOpacity>

          </View>


          {/* =======================================
              PERSONAL INFORMATION
          ======================================= */}

          <View style={styles.card}>

            <Text style={styles.sectionTitle}>
              Personal Information
            </Text>


            {/* =====================================
                FULL NAME
            ===================================== */}

            <View style={styles.field}>

              <Text style={styles.label}>

                Full Name

                <Text style={styles.asterisk}>
                  {" "}*
                </Text>

              </Text>


              <TextInput
                style={[
                  styles.input,

                  errors.fullName
                    ? styles.inputError
                    : null,
                ]}
                placeholder="Enter full name"
                placeholderTextColor={
                  COLORS.textSecondary
                }
                value={
                  form.fullName
                }
                onChangeText={(text) =>
                  updateField(
                    "fullName",
                    text
                  )
                }
              />


              {errors.fullName ? (

                <Text
                  style={styles.errorText}
                >
                  {errors.fullName}
                </Text>

              ) : null}

            </View>


            {/* =====================================
                DATE OF BIRTH
            ===================================== */}

            <FormDateField
              label="Date of Birth"
              value={form.dob}
              onChange={(date) =>
                updateField(
                  "dob",
                  date
                )
              }
              placeholder="Select date"
              required
              error={errors.dob}
              maximumDate={
                new Date()
              }
            />


            {/* =====================================
                GENDER
            ===================================== */}

            <FormDropdownField
              label="Gender"
              value={form.gender}
              options={
                GENDER_OPTIONS
              }
              onSelect={(option) =>
                updateField(
                  "gender",
                  option.value
                )
              }
              placeholder="Select gender"
              required
              error={
                errors.gender
              }
            />


            {/* =====================================
                BLOOD GROUP
            ===================================== */}

            <FormDropdownField
              label="Blood Group"
              value={
                form.bloodGroup
              }
              options={
                BLOOD_GROUP_OPTIONS
              }
              onSelect={(option) =>
                updateField(
                  "bloodGroup",
                  option.value
                )
              }
              placeholder="Select blood group"
              required
              error={
                errors.bloodGroup
              }
            />


            {/* =====================================
                PHONE NUMBER
            ===================================== */}

            <View
              style={[
                styles.field,
                styles.lastField,
              ]}
            >

              <Text style={styles.label}>

                Phone Number

                <Text style={styles.asterisk}>
                  {" "}*
                </Text>

              </Text>


              <TextInput
                style={[
                  styles.input,

                  errors.phoneNumber
                    ? styles.inputError
                    : null,
                ]}
                placeholder="Enter phone number"
                placeholderTextColor={
                  COLORS.textSecondary
                }
                value={
                  form.phoneNumber
                }
                onChangeText={(text) =>
                  updateField(
                    "phoneNumber",
                    text.replace(
                      /[^0-9]/g,
                      ""
                    )
                  )
                }
                keyboardType="phone-pad"
                maxLength={10}
              />


              {errors.phoneNumber ? (

                <Text
                  style={styles.errorText}
                >
                  {errors.phoneNumber}
                </Text>

              ) : null}

            </View>


            {/* =====================================
                ACTION BUTTONS
            ===================================== */}

            <View
              style={styles.actionButtons}
            >

              <TouchableOpacity
                style={[
                  styles.actionButton,
                  styles.cancelButton,
                ]}
                onPress={handleCancel}
                activeOpacity={0.8}
              >

                <Text
                  style={
                    styles.cancelButtonText
                  }
                >
                  Cancel
                </Text>

              </TouchableOpacity>


              <TouchableOpacity
                style={[
                  styles.actionButton,
                  styles.saveButton,

                  submitting
                    ? styles.saveButtonDisabled
                    : null,
                ]}
                onPress={handleSave}
                activeOpacity={0.85}
                disabled={submitting}
              >

                <Text
                  style={
                    styles.saveButtonText
                  }
                >
                  {submitting
                    ? "Saving..."
                    : "Save"}
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>


      {/* =========================================
          RESULT MODAL
      ========================================= */}

      <ResultModal
        visible={
          resultVisible
        }
        type={
          resultType
        }
        title={
          resultType === "success"
            ? "Success"
            : "Failed"
        }
        message={
          resultMessage
        }
        buttonText="OK"
        onClose={
          handleResultClose
        }
      />

    </SafeAreaView>
  );
};


export default AddStudentScreen;