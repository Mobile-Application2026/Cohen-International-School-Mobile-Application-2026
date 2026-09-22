import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useParent } from '../../../context/ParentContext';
import { COLORS } from '../../../theme';
import { styles } from './style';

const ReportCardScreen = () => {
  const { selectedChild } = useParent();

  if (!selectedChild) return null;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Child summary card */}
      <View style={styles.summaryCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{selectedChild.initials}</Text>
        </View>

        <View style={styles.summaryInfo}>
          <Text style={styles.childName}>{selectedChild.fullName}</Text>
          <Text style={styles.gradeText}>
            Overall grade score: {selectedChild.gradeScore}
          </Text>
        </View>
      </View>

      {/* Section title */}
      <Text style={styles.sectionTitle}>Available report cards</Text>

      {/* Report card list */}
      {selectedChild.reportCards.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="document-text-outline" size={28} color={COLORS.textMuted} />
          <Text style={styles.emptyText}>No report cards available yet</Text>
        </View>
      ) : (
        selectedChild.reportCards.map((card) => (
          <TouchableOpacity
            key={card.id}
            activeOpacity={0.8}
            style={styles.reportCard}
            onPress={() => {
              // TODO: wire up actual download / view handler
            }}
          >
            <View style={styles.reportIconWrap}>
              <Ionicons name="ribbon-outline" size={20} color={COLORS.textSecondary} />
            </View>

            <View style={styles.reportInfo}>
              <Text style={styles.reportTitle}>{card.title}</Text>
              <Text style={styles.reportSubtitle}>{card.subtitle}</Text>
            </View>

            <Ionicons name="download-outline" size={22} color={COLORS.primary} />
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default ReportCardScreen;