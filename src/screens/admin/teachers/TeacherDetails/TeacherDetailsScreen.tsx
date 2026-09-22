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
  TeacherTab,
} from "./types";

import {
  TEACHERS_MOCK_DATA,
} from ".././mockData";

interface TeacherDetailsScreenProps {
  route: {
    params?: {
      teacherId?: string;
    };
  };

  navigation: any;
}

const TeacherDetailsScreen: React.FC<TeacherDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const teacherId = route?.params?.teacherId;

  const [activeTab, setActiveTab] =
    useState<TeacherTab>("Profile");

  const teacher = TEACHERS_MOCK_DATA.find(
    (item) => item.id === teacherId
  );

  if (!teacher) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons
          name="person-outline"
          size={40}
          color={COLORS.textMuted}
        />

        <Text style={styles.emptyTitle}>
          Teacher Not Found
        </Text>

        <Text style={styles.emptyText}>
          The requested teacher details could not be found.
        </Text>
      </View>
    );
  }

  const tabs: TeacherTab[] = [
    "Profile",
    "Subjects",
    "Classes",
    "Documents",
  ];

  const getInitial = () => {
    if (!teacher.name) {
      return "?";
    }

    return teacher.name
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
            teacher.personalInfo.dateOfBirth
          )}

          {renderInfoRow(
            "Gender",
            teacher.personalInfo.gender
          )}

          {renderInfoRow(
            "Phone",
            teacher.personalInfo.phone
          )}

          {renderInfoRow(
            "Email",
            teacher.personalInfo.email
          )}

          {renderInfoRow(
            "Address",
            teacher.personalInfo.address,
            true
          )}
        </View>
      </>
    );
  };

  const renderSubjects = () => {
    return (
      <>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.goldAccent} />

          <Text style={styles.sectionTitle}>
            Subject Information
          </Text>
        </View>

        <View style={styles.card}>
          {renderInfoRow(
            "Primary Subject",
            teacher.subjectInfo.primarySubject
          )}

          {renderInfoRow(
            "Qualification",
            teacher.subjectInfo.qualification
          )}

          {renderInfoRow(
            "Experience",
            teacher.subjectInfo.experience
          )}

          {renderInfoRow(
            "Specialization",
            teacher.subjectInfo.specialization || "N/A"
          )}

          {renderInfoRow(
            "Joining Date",
            teacher.subjectInfo.joiningDate,
            true
          )}
        </View>
      </>
    );
  };

  const renderClasses = () => {
    return (
      <>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.goldAccent} />

          <Text style={styles.sectionTitle}>
            Classes Assigned
          </Text>
        </View>

        {teacher.classes.length === 0 ? (
          <View style={styles.card}>
            <Text style={styles.infoLabel}>
              No classes assigned.
            </Text>
          </View>
        ) : (
          teacher.classes.map((classItem, index) => (
            <View
              key={`${classItem.className}-${classItem.section}-${index}`}
              style={styles.parentCard}
            >
              <View style={styles.parentIconWrap}>
                <Ionicons
                  name="school-outline"
                  size={22}
                  color={COLORS.white}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.parentName}>
                  Class {classItem.className} - {classItem.section}
                </Text>

                <Text style={styles.parentSub}>
                  {classItem.subject}
                </Text>
              </View>
            </View>
          ))
        )}
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

        {teacher.documents.length === 0 ? (
          <View style={styles.card}>
            <Text style={styles.infoLabel}>
              No documents available.
            </Text>
          </View>
        ) : (
          teacher.documents.map((document) => (
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
      case "Subjects":
        return renderSubjects();

      case "Classes":
        return renderClasses();

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

          {teacher.avatarUri ? (
            <View style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarInitial}>
                {getInitial()}
              </Text>
            </View>
          )}

          {/* Teacher Details */}

          <View style={styles.headerInfo}>

            <Text
              style={styles.studentName}
              numberOfLines={1}
            >
              {teacher.name}
            </Text>

            <Text style={styles.metaText}>
              {teacher.subject}
            </Text>

            <Text style={styles.metaText}>
              Teacher ID: {teacher.teacherId}
            </Text>

            <View
              style={[
                styles.statusBadge,
                teacher.status === "Inactive" &&
                  styles.statusBadgeInactive,
              ]}
            >
              <Text style={styles.statusText}>
                {teacher.status}
              </Text>
            </View>

          </View>

          {/* Edit Button - Right Side */}

          <EditButton
            onPress={() => {
              console.log(
                "Edit teacher:",
                teacher.id
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

export default TeacherDetailsScreen;