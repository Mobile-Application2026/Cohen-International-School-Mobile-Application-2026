import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Academic
      </Text>

      <Text style={styles.text}>
       Academic Years
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: "#666666",
  },
});

export default Profile;