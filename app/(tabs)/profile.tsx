import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const imageUrl =
    "data:image/jpeg;base64,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";

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: imageUrl || "https://via.placeholder.com/150",
            }}
            style={styles.profileImage}
          />

          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="camera" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>Faizan Abid</Text>
        <Text style={styles.userEmail}>Faizanelite64@gmail.com</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Places Visited</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>16</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>48</Text>
          <Text style={styles.statLabel}>Photos</Text>
        </View>
      </View>

      <View style={styles.menuSection}>
        <MenuItem icon="heart-outline" title="Favorites" />
        <MenuItem icon="bookmark-outline" title="Saved Places" />
        <MenuItem icon="star-outline" title="My Reviews" />
        <MenuItem icon="camera-outline" title="My Photos" />
        <MenuItem icon="settings-outline" title="Settings" />
        <MenuItem icon="help-circle-outline" title="Help & Support" />
        <MenuItem icon="log-out-outline" title="Sign Out" danger />
      </View>

      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  danger?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, danger }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      <Ionicons
        name={icon}
        size={24}
        color={danger ? colors.error : colors.primary}
      />
      <Text style={[styles.menuText, danger && styles.dangerText]}>
        {title}
      </Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color={colors.textLighter} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: "center",
    paddingVertical: 32,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    padding: 6,
  },
  userName: {
    fontSize: 24,
    fontWeight: "black",
    color: colors.text,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: colors.textLight,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginTop: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textLight,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
  },
  menuSection: {
    backgroundColor: colors.white,
    marginTop: 16,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    color: colors.text,
  },
  dangerText: {
    color: colors.error,
  },
  versionContainer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  versionText: {
    fontSize: 12,
    color: colors.textLighter,
  },
});
