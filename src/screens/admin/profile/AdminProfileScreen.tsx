
import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../../../theme";

import { styles } from "./styles";


// =====================================================
// ADMIN DATA
// =====================================================

const admin = {
  role: "Administrator",
  email: "admin@cohen.com",
  status: "Active",
};


// =====================================================
// PHONE VALIDATION
// =====================================================

const PHONE_REGEX = /^\+?[0-9\s]{7,15}$/;


// =====================================================
// PROFILE COMPONENT
// =====================================================

const Profile: React.FC = () => {

  const navigation = useNavigation();

  // ---------------------------------------------------
  // STATE
  // ---------------------------------------------------

  const [isEditing, setIsEditing] = useState(false);

  const [fullName, setFullName] = useState("Admin");

  const [phone, setPhone] = useState("+91 9876543210");

  const [phoneError, setPhoneError] = useState("");

  const [backup, setBackup] = useState({
    fullName: "Admin",
    phone: "+91 9876543210",
  });


  // =====================================================
  // EDIT PROFILE
  // =====================================================

  const handleEditPress = () => {

    setBackup({
      fullName,
      phone,
    });

    setPhoneError("");

    setIsEditing(true);
  };


  // =====================================================
  // CANCEL EDIT
  // =====================================================

  const handleCancel = () => {

    setFullName(backup.fullName);

    setPhone(backup.phone);

    setPhoneError("");

    setIsEditing(false);
  };


  // =====================================================
  // SAVE PROFILE
  // =====================================================

  const handleSave = () => {

    // Validate name
    if (!fullName.trim()) {

      Alert.alert(
        "Missing Name",
        "Full name cannot be empty."
      );

      return;
    }


    // Validate phone
    if (!PHONE_REGEX.test(phone.trim())) {

      setPhoneError(
        "Enter a valid phone number"
      );

      return;
    }


    setPhoneError("");

    // ---------------------------------------------------
    // TODO:
    // Call update-profile API here.
    // ---------------------------------------------------

    setIsEditing(false);

    Alert.alert(
      "Profile Updated",
      "Your changes have been saved successfully."
    );
  };


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <View
      style={styles.safeArea}
      // edges={["top"]}
    >

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <View style={styles.header}>

         

        </View>


        {/* =================================================
            CONTENT
        ================================================= */}

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >

          {/* =================================================
              PROFILE CARD
          ================================================= */}

          <View style={styles.profileCard}>

            {/* Avatar */}

            <View style={styles.avatarRing}>

              <View style={styles.avatarCircle}>

                <Ionicons
                  name="person"
                  size={36}
                  color={COLORS.dark}
                />

              </View>

            </View>


            {/* Name */}

            {isEditing ? (

              <TextInput
                style={styles.nameInput}
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
                placeholder="Full Name"
                placeholderTextColor={COLORS.textOnDarkSecondary}
              />

            ) : (

              <Text style={styles.nameText}>
                {fullName}
              </Text>

            )}


            {/* Role */}

            <Text style={styles.roleText}>
              {admin.role}
            </Text>

          </View>


          {/* =================================================
              ACCOUNT DETAILS TITLE
          ================================================= */}

          <Text style={styles.sectionLabel}>
            Account Details
          </Text>


          {/* =================================================
              INFORMATION CARD
          ================================================= */}

          <View style={styles.infoCard}>

            {/* =================================================
                EMAIL
            ================================================= */}

            <View
              style={[
                styles.row,
                styles.rowWithDivider,
              ]}
            >

              <View style={styles.iconWrap}>

                <Ionicons
                  name="mail-outline"
                  size={18}
                  color={COLORS.primary}
                />

              </View>


              <View style={styles.textWrap}>

                <Text style={styles.label}>
                  Email
                </Text>

                <Text style={styles.value}>
                  {admin.email}
                </Text>

              </View>

            </View>


            {/* =================================================
                PHONE
            ================================================= */}

            <View
              style={[
                styles.row,
                styles.rowWithDivider,
              ]}
            >

              <View style={styles.iconWrap}>

                <Ionicons
                  name="call-outline"
                  size={18}
                  color={COLORS.primary}
                />

              </View>


              <View style={styles.textWrap}>

                <Text style={styles.label}>
                  Phone
                </Text>


                {isEditing ? (

                  <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={(text) => {

                      setPhone(text);

                      if (phoneError) {
                        setPhoneError("");
                      }

                    }}
                    keyboardType="phone-pad"
                    placeholder="Phone Number"
                    placeholderTextColor={COLORS.textMuted}
                  />

                ) : (

                  <Text style={styles.value}>
                    {phone}
                  </Text>

                )}

              </View>

            </View>


            {/* =================================================
                ROLE
            ================================================= */}

            <View
              style={[
                styles.row,
                styles.rowWithDivider,
              ]}
            >

              <View style={styles.iconWrap}>

                <Ionicons
                  name="shield-checkmark-outline"
                  size={18}
                  color={COLORS.primary}
                />

              </View>


              <View style={styles.textWrap}>

                <Text style={styles.label}>
                  Role
                </Text>

                <Text style={styles.value}>
                  {admin.role}
                </Text>

              </View>

            </View>


            {/* =================================================
                STATUS
            ================================================= */}

            <View style={styles.row}>

              <View style={styles.iconWrap}>

                <Ionicons
                  name="ellipse"
                  size={18}
                  color={COLORS.success}
                />

              </View>


              <View style={styles.textWrap}>

                <Text style={styles.label}>
                  Status
                </Text>


                <View style={styles.badge}>

                  <Text style={styles.badgeText}>
                    {admin.status}
                  </Text>

                </View>

              </View>

            </View>

          </View>


          {/* =================================================
              PHONE ERROR
          ================================================= */}

          {phoneError && isEditing ? (

            <Text style={styles.errorText}>
              {phoneError}
            </Text>

          ) : null}


          {/* =================================================
              ACTION BUTTONS
          ================================================= */}

          {isEditing ? (

            <View style={styles.actionRow}>

              {/* SAVE */}

              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSave}
                activeOpacity={0.8}
              >

                <Text style={styles.saveButtonText}>
                  Save
                </Text>

              </TouchableOpacity>


              {/* CANCEL */}

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancel}
                activeOpacity={0.8}
              >

                <Text style={styles.cancelButtonText}>
                  Cancel
                </Text>

              </TouchableOpacity>

            </View>

          ) : (

            /* EDIT PROFILE */

            <TouchableOpacity
              style={styles.editButton}
              onPress={handleEditPress}
              activeOpacity={0.8}
            >

              <Text style={styles.editButtonText}>
                Edit Profile
              </Text>

            </TouchableOpacity>

          )}

        </ScrollView>

      </KeyboardAvoidingView>

    </View>
  );
};


export default Profile;


