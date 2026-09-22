import { Platform } from "react-native";

export const SHADOWS = {
  card: {
    shadowColor: "#0B1C2C",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,

    shadowRadius: 5,

    elevation: Platform.OS === "android" ? 2 : 0,
  },
};