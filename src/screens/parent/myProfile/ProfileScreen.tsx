import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useParent } from '../../../context/ParentContext';
import { styles } from './style';

interface ProfileRow {
  label: string;
  value: string;
}

const ProfileScreen = () => {
  const { parent } = useParent();

  if (!parent) return null;

  const rows: ProfileRow[] = [
    { label: 'Full name', value: `${parent.fullName} (Parent)` },
    { label: 'Email address', value: parent.email },
    { label: 'Primary phone', value: parent.phone },
    { label: 'Occupation', value: parent.occupation },
    { label: 'Residential address', value: parent.residentialAddress },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Avatar + name header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{parent.initials}</Text>
          </View>
          <Text style={styles.name}>{parent.fullName}</Text>
          <Text style={styles.subtitle}>
            {parent.role} · {parent.childrenLabel}
          </Text>
        </View>

        {/* Details card */}
        <View style={styles.detailsCard}>
          {rows.map((row, index) => (
            <View
              key={row.label}
              style={[
                styles.detailRow,
                index === rows.length - 1 && styles.detailRowLast,
              ]}
            >
              <Text style={styles.detailLabel}>{row.label}</Text>
              <Text style={styles.detailValue}>{row.value}</Text>
            </View>
          ))}
        </View>

        {/* Edit profile CTA */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.editButton}
          onPress={() => {
            // TODO: navigate to edit profile flow
          }}
        >
          <Text style={styles.editButtonText}>Edit profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;