import React, {
  useState,
} from "react";

import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";

import {
  Ionicons,
} from "@expo/vector-icons";

import {
  COLORS,
} from "../../../../theme";

import {
  styles,
} from "./styles";

import EditButton from "../../../../components/Buttons/EditButton";

import {
  StudentTab,
} from "./types";

import {
  STUDENTS_MOCK_DATA,
} from ".././mockData";

interface StudentDetailsScreenProps {
  route: {
    params?: {
      studentId?: string;
    };
  };

  navigation: any;
}

const StudentDetailsScreen: React.FC<StudentDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const studentId = route?.params?.studentId;

  const [activeTab, setActiveTab] =
    useState<StudentTab>("Profile");

  const student = STUDENTS_MOCK_DATA.find(
    (item) => item.id === studentId
  );

  if (!student) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons
          name="person-outline"
          size={40}
          color={COLORS.textMuted}
        />

        <Text style={styles.emptyTitle}>
          Student Not Found
        </Text>

        <Text style={styles.emptyText}>
          The requested student details could not be found.
        </Text>
      </View>
    );
  }

  const tabs: StudentTab[] = [
    "Profile",
    "Academic",
    "Parents",
    "Documents",
  ];

  const getInitial = () => {
    if (!student.name) {
      return "?";
    }

    return student.name
      .charAt(0)
      .toUpperCase();
  };

  const renderInfoRow = (
    label: string,
    value: string,
    isLast: boolean = false
  ) => {
    return (
      <View
        style={[
          styles.infoRow,
          isLast && styles.infoRowLast,
        ]}
      >
        <Text style={styles.infoLabel}>
          {label}
        </Text>

        <Text style={styles.infoValue}>
          {value}
        </Text>
      </View>
    );
  };

  const renderProfile = () => {
    return (
      <>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.goldAccent} />

          <Text style={styles.sectionTitle}>
            Personal Information
          </Text>
        </View>

        <View style={styles.card}>
          {renderInfoRow(
            "Date of Birth",
            student.personalInfo.dateOfBirth
          )}

          {renderInfoRow(
            "Gender",
            student.personalInfo.gender
          )}

          {renderInfoRow(
            "Blood Group",
            student.personalInfo.bloodGroup
          )}

          {renderInfoRow(
            "Phone",
            student.personalInfo.phone
          )}

          {renderInfoRow(
            "Email",
            student.personalInfo.email
          )}

          {renderInfoRow(
            "Address",
            student.personalInfo.address,
            true
          )}
        </View>
      </>
    );
  };

  const renderAcademic = () => {
    return (
      <>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.goldAccent} />

          <Text style={styles.sectionTitle}>
            Academic Information
          </Text>
        </View>

        <View style={styles.card}>
          {renderInfoRow(
            "Admission Number",
            student.academicInfo.admissionNumber
          )}

          {renderInfoRow(
            "Admission Date",
            student.academicInfo.admissionDate
          )}

          {renderInfoRow(
            "Class",
            student.academicInfo.className
          )}

          {renderInfoRow(
            "Section",
            student.academicInfo.section
          )}

          {renderInfoRow(
            "Roll No.",
            student.academicInfo.rollNo
          )}

          {renderInfoRow(
            "Academic Year",
            student.academicInfo.academicYear
          )}

          {renderInfoRow(
            "Previous School",
            student.academicInfo.previousSchool || "N/A",
            true
          )}
        </View>
      </>
    );
  };

  const renderParents = () => {
    return (
      <>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.goldAccent} />

          <Text style={styles.sectionTitle}>
            Parent Information
          </Text>
        </View>

        <View style={styles.parentCard}>
          <View style={styles.parentIconWrap}>
            <Ionicons
              name="man-outline"
              size={22}
              color={COLORS.white}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.parentName}>
              {student.parentInfo.fatherName}
            </Text>

            <Text style={styles.parentSub}>
              Father
            </Text>

            <Text style={styles.parentSub}>
              {student.parentInfo.fatherPhone}
            </Text>

            {student.parentInfo.fatherOccupation ? (
              <Text style={styles.parentSub}>
                {student.parentInfo.fatherOccupation}
              </Text>
            ) : null}
          </View>
        </View>

        <View style={styles.parentCard}>
          <View style={styles.parentIconWrap}>
            <Ionicons
              name="woman-outline"
              size={22}
              color={COLORS.white}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.parentName}>
              {student.parentInfo.motherName}
            </Text>

            <Text style={styles.parentSub}>
              Mother
            </Text>

            <Text style={styles.parentSub}>
              {student.parentInfo.motherPhone}
            </Text>

            {student.parentInfo.motherOccupation ? (
              <Text style={styles.parentSub}>
                {student.parentInfo.motherOccupation}
              </Text>
            ) : null}
          </View>
        </View>
      </>
    );
  };

  const renderDocuments = () => {
    return (
      <>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.goldAccent} />

          <Text style={styles.sectionTitle}>
            Documents
          </Text>
        </View>

        {student.documents.length === 0 ? (
          <View style={styles.card}>
            <Text style={styles.infoLabel}>
              No documents available.
            </Text>
          </View>
        ) : (
          student.documents.map((document) => (
            <View
              key={document.id}
              style={styles.documentRow}
            >
              <View style={styles.documentIconWrap}>
                <Ionicons
                  name="document-text-outline"
                  size={20}
                  color={COLORS.primary}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.documentName}>
                  {document.name}
                </Text>

                <Text style={styles.documentMeta}>
                  {document.type} • {document.uploadedOn}
                </Text>
              </View>

              <Pressable
                style={styles.documentAction}
                onPress={() => {
                  console.log(
                    "Open document:",
                    document.id
                  );
                }}
              >
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={COLORS.textSecondary}
                />
              </Pressable>
            </View>
          ))
        )}
      </>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Academic":
        return renderAcademic();

      case "Parents":
        return renderParents();

      case "Documents":
        return renderDocuments();

      case "Profile":
      default:
        return renderProfile();
    }
  };

  return (
    <View style={styles.root}>

      {/* ================= HEADER ================= */}

      <View style={styles.header}>

        <View style={styles.headerRow}>

          {/* Avatar */}

          {student.avatarUri ? (
            <View style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarInitial}>
                {getInitial()}
              </Text>
            </View>
          )}

          {/* Student Details */}

          <View style={styles.headerInfo}>

            <Text
              style={styles.studentName}
              numberOfLines={1}
            >
              {student.name}
            </Text>

            <Text style={styles.metaText}>
              {student.className} | Roll No. {student.rollNo}
            </Text>

            <Text style={styles.metaText}>
              Student ID: {student.studentId}
            </Text>

            <View
              style={[
                styles.statusBadge,
                student.status === "Inactive" &&
                  styles.statusBadgeInactive,
              ]}
            >
              <Text style={styles.statusText}>
                {student.status}
              </Text>
            </View>

          </View>

          {/* Edit Button - Right Side */}

          <EditButton
            onPress={() => {
              console.log(
                "Edit student:",
                student.id
              );
            }}
            style={styles.editButton}
          />

        </View>

      </View>

      {/* ================= TABS ================= */}

      <View style={styles.tabBar}>

        {tabs.map((tab) => {
          const isActive =
            activeTab === tab;

          return (
            <Pressable
              key={tab}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabLabel,
                  isActive &&
                    styles.tabLabelActive,
                ]}
              >
                {tab}
              </Text>

              <View
                style={[
                  styles.tabIndicator,
                  isActive &&
                    styles.tabIndicatorActive,
                ]}
              />
            </Pressable>
          );
        })}

      </View>

      {/* ================= CONTENT ================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {renderContent()}
      </ScrollView>

    </View>
  );
};

export default StudentDetailsScreen;