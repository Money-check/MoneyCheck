import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ConclusionSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>결론</Text>
      <Text style={styles.text}>
        사람마다 소득도 다르고 지출 역시 다릅니다. 소비의 핵심은 가치 소비입니다. ...
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

export default ConclusionSection;
