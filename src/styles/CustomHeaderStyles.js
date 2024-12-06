// src/styles/CustomHeaderStyles.js
import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  androidHeader: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    marginLeft: 15,
  },
  // New style for bell.png and menu.png
  icon: {
    width: 22, // Set the width of the icons
    height: 24, // Set the height of the icons
    resizeMode: "contain", // Ensure the image scales proportionally
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  titleWithBack: {
    textAlign: 'left',
    marginLeft: 8,
  },
});
