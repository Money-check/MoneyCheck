//통계 탭 화면
// src/pages/Statistics.js
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ExpenseBarChart from "../components/StatisticsTab/ExpenseBarChart";
import EmotionStatistics from "../components/StatisticsTab/EmotionStatistics";
import FeedbackSection from "../components/StatisticsTab/FeedbackSection";
import ConclusionSection from "../components/StatisticsTab/ConclusionSection";

const Statistics = () => {
  return (
    <ScrollView style={styles.container}>
      <ExpenseBarChart />
      <EmotionStatistics />
      <FeedbackSection />
      <ConclusionSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Statistics;
