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

const SUBJECT_OPTIONS: DropdownOption[] = [
  {
    label: "Mathematics",
    value: "Mathematics",
  },
  {
    label: "English",
    value: "English",
  },
  {
    label: "Science",
    value: "Science",
  },
  {
    label: "Social Science",
    value: "Social Science",
  },
  {
    label: "Hindi",
    value: "Hindi",
  },
  {
    label: "Computer Science",
    value: "Computer Science",
  },
];


// =====================================================
// FORM TYPES
// =====================================================

interface FormState {
  fullName: string;
  dob: Date | null;
  gender: string | null;
  primarySubject: string | null;
  qualification: string;
  experience: string;
  specialization: string;
  joiningDate: Date | null;
  phoneNumber: string;
  email: string;
  address: string;
}

interface FormErrors {
  fullName?: string;
  dob?: string;
  gender?: string;
  primarySubject?: string;
  qualification?: string;
  experience?: string;
  joiningDate?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
}


// =====================================================
// SCREEN
// =====================================================

const AddTeacherScreen: React.FC = () => {

  const navigation = useNavigation<any>();


  // ===================================================
  // FORM STATE
  // ===================================================

  const [form, setForm] = useState<FormState>({
    fullName: "",
    dob: null,
    gender: null,
    primarySubject: null,
    qualification: "",
    experience: "",
    specialization: "",
    joiningDate: null,
    phoneNumber: "",
    email: "",
    address: "",
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


    if (!form.primarySubject) {

      newErrors.primarySubject =
        "Primary subject is required";
    }


    if (!form.qualification.trim()) {

      newErrors.qualification =
        "Qualification is required";
    }


    if (!form.experience.trim()) {

      newErrors.experience =
        "Experience is required";
    }


    if (!form.joiningDate) {

      newErrors.joiningDate =
        "Joining date is required";
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


    if (!form.email.trim()) {

      newErrors.email =
        "Email is required";

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email.trim()
      )
    ) {

      newErrors.email =
        "Enter a valid email address";
    }


    if (!form.address.trim()) {

      newErrors.address =
        "Address is required";
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // ===================================================
  // SAVE TEACHER
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
      // await api.post("/teachers", {
      //   fullName: form.fullName,
      //   dob: form.dob,
      //   gender: form.gender,
      //   primarySubject: form.primarySubject,
      //   qualification: form.qualification,
      //   experience: form.experience,
      //   specialization: form.specialization,
      //   joiningDate: form.joiningDate,
      //   phoneNumber: form.phoneNumber,
      //   email: form.email,
      //   address: form.address,
      //   profileImage: profileImage,
      // });

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );


      setResultType("success");

      setResultMessage(
        "Teacher has been added successfully."
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
                PHONE NUMBER
            ===================================== */}

            <View style={styles.field}>

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
                EMAIL
            ===================================== */}

            <View style={styles.field}>

              <Text style={styles.label}>

                Email

                <Text style={styles.asterisk}>
                  {" "}*
                </Text>

              </Text>


              <TextInput
                style={[
                  styles.input,

                  errors.email
                    ? styles.inputError
                    : null,
                ]}
                placeholder="Enter email address"
                placeholderTextColor={
                  COLORS.textSecondary
                }
                value={
                  form.email
                }
                onChangeText={(text) =>
                  updateField(
                    "email",
                    text
                  )
                }
                keyboardType="email-address"
                autoCapitalize="none"
              />


              {errors.email ? (

                <Text
                  style={styles.errorText}
                >
                  {errors.email}
                </Text>

              ) : null}

            </View>


            {/* =====================================
                ADDRESS
            ===================================== */}

            <View
              style={[
                styles.field,
                styles.lastField,
              ]}
            >

              <Text style={styles.label}>

                Address

                <Text style={styles.asterisk}>
                  {" "}*
                </Text>

              </Text>


              <TextInput
                style={[
                  styles.input,

                  errors.address
                    ? styles.inputError
                    : null,
                ]}
                placeholder="Enter address"
                placeholderTextColor={
                  COLORS.textSecondary
                }
                value={
                  form.address
                }
                onChangeText={(text) =>
                  updateField(
                    "address",
                    text
                  )
                }
              />


              {errors.address ? (

                <Text
                  style={styles.errorText}
                >
                  {errors.address}
                </Text>

              ) : null}

            </View>

          </View>


          {/* =======================================
              SUBJECT INFORMATION
          ======================================= */}

          <View
            style={[
              styles.card,
              styles.secondCard,
            ]}
          >

            <Text style={styles.sectionTitle}>
              Subject Information
            </Text>


            {/* =====================================
                PRIMARY SUBJECT
            ===================================== */}

            <FormDropdownField
              label="Primary Subject"
              value={form.primarySubject}
              options={
                SUBJECT_OPTIONS
              }
              onSelect={(option) =>
                updateField(
                  "primarySubject",
                  option.value
                )
              }
              placeholder="Select subject"
              required
              error={
                errors.primarySubject
              }
            />


            {/* =====================================
                QUALIFICATION
            ===================================== */}

            <View style={styles.field}>

              <Text style={styles.label}>

                Qualification

                <Text style={styles.asterisk}>
                  {" "}*
                </Text>

              </Text>


              <TextInput
                style={[
                  styles.input,

                  errors.qualification
                    ? styles.inputError
                    : null,
                ]}
                placeholder="e.g. M.Sc, B.Ed"
                placeholderTextColor={
                  COLORS.textSecondary
                }
                value={
                  form.qualification
                }
                onChangeText={(text) =>
                  updateField(
                    "qualification",
                    text
                  )
                }
              />


              {errors.qualification ? (

                <Text
                  style={styles.errorText}
                >
                  {errors.qualification}
                </Text>

              ) : null}

            </View>


            {/* =====================================
                EXPERIENCE
            ===================================== */}

            <View style={styles.field}>

              <Text style={styles.label}>

                Experience

                <Text style={styles.asterisk}>
                  {" "}*
                </Text>

              </Text>


              <TextInput
                style={[
                  styles.input,

                  errors.experience
                    ? styles.inputError
                    : null,
                ]}
                placeholder="e.g. 5 Years"
                placeholderTextColor={
                  COLORS.textSecondary
                }
                value={
                  form.experience
                }
                onChangeText={(text) =>
                  updateField(
                    "experience",
                    text
                  )
                }
              />


              {errors.experience ? (

                <Text
                  style={styles.errorText}
                >
                  {errors.experience}
                </Text>

              ) : null}

            </View>


            {/* =====================================
                SPECIALIZATION (OPTIONAL)
            ===================================== */}

            <View style={styles.field}>

              <Text style={styles.label}>
                Specialization
              </Text>


              <TextInput
                style={styles.input}
                placeholder="e.g. Algebra & Geometry"
                placeholderTextColor={
                  COLORS.textSecondary
                }
                value={
                  form.specialization
                }
                onChangeText={(text) =>
                  updateField(
                    "specialization",
                    text
                  )
                }
              />

            </View>


            {/* =====================================
                JOINING DATE
            ===================================== */}

            <View style={styles.lastField}>

              <FormDateField
                label="Joining Date"
                value={form.joiningDate}
                onChange={(date) =>
                  updateField(
                    "joiningDate",
                    date
                  )
                }
                placeholder="Select date"
                required
                error={errors.joiningDate}
                maximumDate={
                  new Date()
                }
              />

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


export default AddTeacherScreen;