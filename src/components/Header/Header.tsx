
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../../theme/colors";

import { styles } from "./styles";

type HeaderProps = {
  title?: string;
  isHome?: boolean;
};

const Header = ({
  title,
  isHome = false,
}: HeaderProps) => {
  const navigation = useNavigation<any>();

  // =========================================================
  // OPEN DRAWER
  // =========================================================

  const handleMenuPress = () => {
    let currentNavigation: any = navigation;

    while (currentNavigation) {
      const state = currentNavigation.getState?.();

      if (state?.type === "drawer") {
        currentNavigation.openDrawer();
        return;
      }

      currentNavigation =
        currentNavigation.getParent?.();
    }
  };

  // =========================================================
  // BACK
  // =========================================================

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  // =========================================================
  // NOTIFICATION
  // =========================================================

  const handleNotificationPress = () => {
    let currentNavigation: any = navigation;

    while (currentNavigation) {
      const state = currentNavigation.getState?.();

      if (
        state?.routeNames?.includes("Notifications")
      ) {
        currentNavigation.navigate("Notifications");
        return;
      }

      currentNavigation =
        currentNavigation.getParent?.();
    }

    console.warn(
      "Notifications route was not found in ParentStackNavigator."
    );
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <SafeAreaView
      edges={["top"]}
      style={styles.safeArea}
    >
      <View style={styles.header}>
        {/* LEFT */}

        <View style={styles.leftContainer}>
          {isHome ? (
            <>
              {/* MENU */}

              <Pressable
                onPress={handleMenuPress}
                style={styles.menuButton}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel="Open menu"
              >
                <Ionicons
                  name="menu"
                  size={23}
                  color={COLORS.white}
                />
              </Pressable>

              {/* LOGO */}

              <Image
                source={require(
                  "../../../assets/images/App_Logo.png"
                )}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </>
          ) : (
            <View style={styles.titleContainer}>
              {/* BACK */}

              <Pressable
                onPress={handleBack}
                style={styles.backButton}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel="Go back"
              >
                <Ionicons
                  name="chevron-back"
                  size={23}
                  color={COLORS.white}
                />
              </Pressable>

              {/* TITLE */}

              <Text style={styles.title}>
                {title}
              </Text>
            </View>
          )}
        </View>

        {/* NOTIFICATION */}

        <Pressable
          onPress={handleNotificationPress}
          style={styles.iconContainer}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Open notifications"
        >
          <Ionicons
            name="notifications-outline"
            size={23}
            color={COLORS.white}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Header;
