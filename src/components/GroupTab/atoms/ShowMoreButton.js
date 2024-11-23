import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ShowMoreButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>모두 보기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  text: {
    color: '#888',
  },
});

export default ShowMoreButton;