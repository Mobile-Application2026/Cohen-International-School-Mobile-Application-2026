import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import ChildCard from '../../../components/cards/childCard/ChildCard';
import { useParent } from '../../../context/ParentContext';

import { styles } from './style';

// ---------------------------------------------------------------------------
// Linked Children Screen
// ---------------------------------------------------------------------------

export default function LinkedChildrenScreen() {

  // -------------------------------------------------------------------------
  // Global Parent Context
  // -------------------------------------------------------------------------

  const {
    children,
    selectedChild,
    selectChild,
  } = useParent();


  return (
    <View style={styles.container}>

      {/* =============================================================== */}
      {/* Summary */}
      {/* =============================================================== */}

      <Text style={styles.headerText}>
        {children.length} enrolled student
        {children.length > 1 ? 's' : ''} linked to your account
      </Text>


      {/* =============================================================== */}
      {/* Children List */}
      {/* =============================================================== */}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {children.map((child) => {

          const isActive =
            child.id === selectedChild?.id;


          return (
            <ChildCard
              key={child.id}

              initials={child.initials}

              name={child.fullName}

              classLabel={child.classLabel}

              board={child.board}

              rollNumber={child.rollNumber}

              attendance={child.attendance}

              gradeScore={child.gradeScore}

              feeStatus={child.feeDues === '₹0.00'
                ? 'Cleared'
                : child.feeDues}

              isActive={isActive}

              onPress={() => {
                selectChild(child.id);
              }}
            />
          );

        })}

      </ScrollView>

    </View>
  );
}