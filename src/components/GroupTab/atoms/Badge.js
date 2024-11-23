// 이름 표시 배지

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Badge = ({ level, backgroundColor, textColor }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <Text style={[styles.text, { color: textColor }]}>Lv.{level}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  }
});

export default Badge;
