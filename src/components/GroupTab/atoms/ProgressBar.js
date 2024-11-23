// 진행 상태 바

import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => (
  <View style={styles.container}>
    <View style={[styles.progress, { width: `${progress * 100}%` }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 8,
    backgroundColor: '#E8F4FF',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#00BFA5',
    borderRadius: 4,
  }
});

export default ProgressBar;