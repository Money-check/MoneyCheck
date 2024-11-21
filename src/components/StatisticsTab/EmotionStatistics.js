import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmotionStatistics = () => {
  const emotionData = [
    { label: "매우 기쁨", percentage: 25 },
    { label: "기쁨", percentage: 25 },
    { label: "보통", percentage: 25 },
    { label: "슬픔", percentage: 15 },
    { label: "매우 슬픔", percentage: 10 },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>감정기반 통계</Text>
      {emotionData.map((emotion, index) => (
        <View key={index} style={styles.emotionRow}>
          <View
            style={[
              styles.emotionCircle,
              { backgroundColor: getEmotionColor(emotion.label) },
            ]}
          />
          <Text style={styles.emotionText}>
            {emotion.label}: {emotion.percentage}%
          </Text>
        </View>
      ))}
    </View>
  );
};

const getEmotionColor = (label) => {
  switch (label) {
    case "매우 기쁨":
      return "#FFB74D";
    case "기쁨":
      return "#4CAF50";
    case "보통":
      return "#81D4FA";
    case "슬픔":
      return "#FF5252";
    case "매우 슬픔":
      return "#B39DDB";
    default:
      return "#CCC";
  }
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
  emotionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  emotionCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  emotionText: {
    fontSize: 14,
  },
});

export default EmotionStatistics;
