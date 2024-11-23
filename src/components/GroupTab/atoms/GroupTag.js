// 그룹 태그 버튼

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import CommonStyles from '../../../styles/GroupTabStyles/CommonStyles';

const GroupTag = ({ label, isSelected, onPress }) => (
  <TouchableOpacity 
    style={[styles.container, isSelected && styles.selected]} 
    onPress={onPress}
  >
    <Text style={[styles.text, isSelected && styles.selectedText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 32,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: CommonStyles.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: CommonStyles.colors.primary,
  },
  text: {
    color: CommonStyles.colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  selectedText: {
    color: 'white',
  },
});

export default GroupTag;