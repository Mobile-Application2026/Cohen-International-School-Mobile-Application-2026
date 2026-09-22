import React from "react";

import {
  View,
  Text,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  styles,
} from "./style";


const DashboardScreen = () => {

  return (

    <SafeAreaView
      style={styles.safeArea}
    >

      <View
        style={styles.container}
      >

        <Text
          style={styles.title}
        >
          Dashboard
        </Text>

        <Text
          style={styles.subtitle}
        >
          Welcome to Parent Portal
        </Text>

      </View>

    </SafeAreaView>

  );

};


export default DashboardScreen;