// src/navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Image } from "react-native";
import HomeScreen from "../pages/Home/HomeScreen";
import AccountBookScreen from "../pages/AccountBook";
import GroupManagement from "../pages/GroupManagement";
import Statistics from "../pages/Stats";
import FloatingButton from "../components/FloatingTab/FloatingButton";
import CustomHeader from "../components/CustomHeader";

// Importing custom images
const homeImage = require("../assets/home.png");
const moneyBankImage = require("../assets/moneyBox.png");
const peopleImage = require("../assets/people.png");
const statsImage = require("../assets/stats.png");

import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: () => {

            if (route.name === "Home") {
              return <CustomHeader title="Home" showProfile={true} />;
            } else if (route.name === "Account Book") {

              return <CustomHeader title="가계부" />;
            } else if (route.name === "Group Management") {
              return <CustomHeader title="공동관리" />;
            } else if (route.name === "Statistics") {
              return <CustomHeader title="통계" />;
            }
          },
          tabBarStyle: {
            position: "absolute",
            height: 80, // Increased height
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderWidth: 1, // Added border
            borderColor: "#E0E0E0",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5, // For Android shadow
            paddingBottom: 10, // Adjust padding for vertical alignment
            paddingTop: 10, // Adjust padding for vertical alignment
          },
          tabBarShowLabel: false, // Removed text labels
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === "Home") {
              iconSource = homeImage;
            } else if (route.name === "Account Book") {
              iconSource = moneyBankImage;
            } else if (route.name === "Group Management") {
              iconSource = peopleImage;
            } else if (route.name === "Statistics") {
              iconSource = statsImage;
            }

            return (
              <Image
                source={iconSource}
                style={[
                  styles.icon,
                  { tintColor: focused ? "#00AB96" : "#B4B4B4" },
                ]}
              />
            );
          },
          tabBarActiveTintColor: "#00AB96",
          tabBarInactiveTintColor: "#B4B4B4",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account Book" component={AccountBookScreen} />
        <Tab.Screen name="Group Management" component={GroupStackNavigator} />
        <Tab.Screen name="Statistics" component={Statistics} />
      </Tab.Navigator>

      {/* 공통 플로팅 버튼 */}
      <FloatingButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 24, // Adjust icon size
    height: 24,
    resizeMode: "contain",
    marginVertical: 4, // Ensure consistent vertical alignment
  },
});

export default TabNavigator;
