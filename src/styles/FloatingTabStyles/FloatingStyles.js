// src/styles/FloatingTabStyles/FloatingStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
      position: 'absolute',
      right: 20,
      bottom: 100, // 하단 네비게이션 바 위에 배치

      backgroundColor: '#00B9A5',
      width: 64,
      height: 64,

      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    icon: {
      width: 32,
      height: 32,
    },
  });
