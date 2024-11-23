// src/components/FloatingButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from '../../styles/FloatingTabStyles/FloatingStyles';

const FloatingButton = () => {
  const handlePress = () => {
    console.log("Floating button pressed");
    // OCR 기능으로 연결하는 로직 추가
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image source={require('../../../assets/Jiyoon/Floating/icon.png')} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
