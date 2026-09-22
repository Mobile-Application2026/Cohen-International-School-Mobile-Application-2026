import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useParent } from '../../../context/ParentContext';
import { COLORS } from '../../../theme';
import { styles } from './style';

// ---------------------------------------------------------------------------
// Fees Screen
// ---------------------------------------------------------------------------

export default function FeesScreen() {
  const {
    children,
    selectedChild,
    selectChild,
  } = useParent();

  const hasMultipleChildren = children.length > 1;

  // -------------------------------------------------------------------------
  // Safety check
  // -------------------------------------------------------------------------

  if (!selectedChild) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No child selected
          </Text>
        </View>
      </View>
    );
  }

  const child = selectedChild;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* =============================================================== */}
        {/* Child Selector */}
        {/* =============================================================== */}

        {hasMultipleChildren && (
          <View style={styles.childTabsWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.childTabsContent}
            >
              {children.map((currentChild) => {
                const isActive =
                  currentChild.id === selectedChild.id;

                return (
                  <TouchableOpacity
                    key={currentChild.id}
                    activeOpacity={0.8}
                    style={[
                      styles.childTab,
                      isActive && styles.childTabActive,
                    ]}
                    onPress={() =>
                      selectChild(currentChild.id)
                    }
                  >
                    <Text
                      style={[
                        styles.childTabText,
                        isActive &&
                          styles.childTabTextActive,
                      ]}
                    >
                      {currentChild.firstName} (
                      {currentChild.classLabel})
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}

        {/* =============================================================== */}
        {/* Pay via Gateway */}
        {/* =============================================================== */}
        {/* NOTE: Dark/gold banner rather than the standard gold
            PrimaryButton — visually distinct "payment" action, so it's
            built locally instead of reusing PrimaryButton's default
            styling. Swap for PrimaryButton with a "dark" variant if one
            exists on your component. */}

        <TouchableOpacity
          style={styles.payButton}
          activeOpacity={0.85}
          onPress={() => {
            // Navigate to / open the Eduqfix payment gateway
          }}
        >
          <Ionicons
            name="card-outline"
            size={18}
            color={COLORS.primary}
          />
          <Text style={styles.payButtonText}>
            Pay via Eduqfix Gateway
          </Text>
        </TouchableOpacity>

        {/* =============================================================== */}
        {/* Fee Records */}
        {/* =============================================================== */}

        {child.fees.map((record) => (
  <View key={record.id} style={styles.feeCard}>
    <View style={styles.feeCardHeader}>
      <Text style={styles.feeTermTitle}>
        {record.title}
      </Text>

      <Text style={styles.feeAmount}>
        {record.amount}
      </Text>
    </View>

    <Text style={styles.feeMeta}>
      {record.reference} · {record.date}
    </Text>

    <TouchableOpacity
      style={styles.feeReceiptRow}
      activeOpacity={0.7}
      onPress={() => {
        // Open / download the receipt for this record
      }}
    >
      <Ionicons
        name="document-text-outline"
        size={14}
        color={COLORS.primary}
      />

      <Text style={styles.feeReceiptText}>
        View receipt
      </Text>

      <Ionicons
        name="chevron-forward"
        size={14}
        color={COLORS.primary}
      />
    </TouchableOpacity>
  </View>
))}
      </ScrollView>
    </View>
  );
}