import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  BUS_TRACKING_DATA,
} from '../../../data/parentMockData';

import { COLORS } from '../../../theme';
import { styles } from './style';

const BusTrackingScreen = () => {
  const bus = BUS_TRACKING_DATA;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* =============================================================== */}
      {/* Route Info Card */}
      {/* =============================================================== */}

      <View style={styles.routeCard}>
        <View style={styles.routeHeaderRow}>
          <Text style={styles.routeNumber}>
            {bus.routeNumber}
          </Text>

          <View style={styles.liveBadge}>
            <View style={styles.liveDot} />

            <Text style={styles.liveText}>
              {bus.status}
            </Text>
          </View>
        </View>

        <Text style={styles.vehicleLine}>
          {bus.vehicleNumber} · {bus.driverName}
        </Text>

        <View style={styles.phoneRow}>
          <Ionicons
            name="call-outline"
            size={16}
            color={COLORS.textSecondary}
          />

          <Text style={styles.phoneText}>
            {bus.driverPhone}
          </Text>
        </View>
      </View>

      {/* =============================================================== */}
      {/* Stops Timeline */}
      {/* =============================================================== */}

      <View style={styles.stopsList}>
        {bus.stops.map((stop) => {
          const isCurrent =
            stop.status === 'current';

          return (
            <View
              key={stop.id}
              style={styles.stopRow}
            >
              <View
                style={[
                  styles.stopMarker,
                  isCurrent
                    ? styles.stopMarkerCurrent
                    : styles.stopMarkerDefault,
                ]}
              />

              <View style={styles.stopInfo}>
                <Text style={styles.stopName}>
                  {stop.name}
                </Text>

                <Text style={styles.stopDetail}>
                  {stop.time} · {stop.detail}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default BusTrackingScreen;