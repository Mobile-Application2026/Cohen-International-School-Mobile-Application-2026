
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useParent } from '../../../context/ParentContext';
import { styles } from './style';

const EditProfileScreen = () => {
  const navigation = useNavigation<any>();
  const { parent, updateParent } = useParent();

  const [fullName, setFullName] = useState(parent.fullName);
  const [email, setEmail] = useState(parent.email);
  const [phone, setPhone] = useState(parent.phone);
  const [occupation, setOccupation] = useState(parent.occupation);
  const [residentialAddress, setResidentialAddress] = useState(
    parent.residentialAddress
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const getInitials = (name: string) => {
    return name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  };

  const handleSave = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const updatedParent = {
      ...parent,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      occupation: occupation.trim(),
      residentialAddress: residentialAddress.trim(),
      initials: getInitials(fullName),
    };

    updateParent(updatedParent);

    Alert.alert(
  'Profile Updated',
  'Your profile details have been saved successfully.',
  [
    {
      text: 'OK',
      onPress: () => {
        navigation.navigate('ParentMainTabs', {
          screen: 'Home',
        });
      },
    },
  ]
);

  };

  const renderField = (
    label: string,
    value: string,
    onChangeText: (text: string) => void,
    field: string,
    placeholder: string,
    multiline = false,
    keyboardType:
      | 'default'
      | 'email-address'
      | 'phone-pad' = 'default'
  ) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput,
          errors[field] ? styles.inputError : undefined,
        ]}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);

          setErrors((previous) => ({
            ...previous,
            [field]: '',
          }));
        }}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        keyboardType={keyboardType}
        autoCapitalize={
          field === 'email' ? 'none' : 'sentences'
        }
        multiline={multiline}
        numberOfLines={multiline ? 3 : 1}
        textAlignVertical={multiline ? 'top' : 'center'}
      />

      {errors[field] ? (
        <Text style={styles.errorText}>
          {errors[field]}
        </Text>
      ) : null}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Profile header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {getInitials(fullName) || '?'}
            </Text>
          </View>

          <Text style={styles.name}>Edit Profile</Text>

          <Text style={styles.subtitle}>
            Update your personal information
          </Text>
        </View>

        {/* Editable details */}
        <View style={styles.detailsCard}>
          {renderField(
            'Full name',
            fullName,
            setFullName,
            'fullName',
            'Enter your full name'
          )}

          {renderField(
            'Email address',
            email,
            setEmail,
            'email',
            'Enter your email address',
            false,
            'email-address'
          )}

          {renderField(
            'Primary phone',
            phone,
            setPhone,
            'phone',
            'Enter your phone number',
            false,
            'phone-pad'
          )}

          {renderField(
            'Occupation',
            occupation,
            setOccupation,
            'occupation',
            'Enter your occupation'
          )}

          {renderField(
            'Residential address',
            residentialAddress,
            setResidentialAddress,
            'residentialAddress',
            'Enter your residential address',
            true
          )}
        </View>

        {/* Save button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.editButton}
          onPress={handleSave}
        >
          <Text style={styles.editButtonText}>
            Save Changes
          </Text>
        </TouchableOpacity>

        {/* Cancel button */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;
