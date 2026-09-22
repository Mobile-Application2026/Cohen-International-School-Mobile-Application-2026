import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useParent } from '../../../context/ParentContext';
import { styles } from './style';

const HostelMessScreen = () => {
  const { hostel } = useParent();

  if (!hostel) return null;

  return (
    <View style={styles.container}>

      {/* --------------------------------------------------
          Scrollable Content
      -------------------------------------------------- */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Hostel / Warden Card */}
        <View style={styles.wardenCard}>
          <Text style={styles.hostelName}>
            {hostel.name}
          </Text>

          <Text style={styles.wardenLine}>
            Warden: {hostel.wardenName} · {hostel.wardenPhone}
          </Text>
        </View>

        {/* Meal List */}
        <View style={styles.mealList}>
          {hostel.meals.map((meal) => (
            <View
              key={meal.id}
              style={styles.mealCard}
            >
              <Text style={styles.mealLabel}>
                {meal.type} · {meal.time}
              </Text>

              <Text style={styles.mealMain}>
                {meal.mainItem}
              </Text>

              <Text style={styles.mealDesc}>
                {meal.description}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* --------------------------------------------------
          Gate Pass Button
          Fixed inside screen, above bottom navigation
      -------------------------------------------------- */}
      <View style={styles.bottomAction}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.gatePassButton}
          onPress={() => {
            // TODO: wire up actual gate pass request handler
          }}
        >
          <Text style={styles.gatePassText}>
            Request gate pass
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default HostelMessScreen;