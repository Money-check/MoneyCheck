import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FeedbackSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>소비 습관 피드백</Text>
      <Text style={styles.text}>
        젊은 층을 중심으로 소비 형태가 점차 과열되고 있습니다. 20대 중심의 트렌드 등...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
});

export default FeedbackSection;
