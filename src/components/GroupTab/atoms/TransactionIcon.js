import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const TransactionIcon = ({ type }) => {
  const isIncome = type === 'income';
  
  return (
    <View style={[
      styles.container, 
      { backgroundColor: isIncome ? '#FFE8E8' : '#E8F4FF' }
    ]}>
      <Image 
        source={isIncome 
          ? require('../../../../assets/Jiyoon/Group/suip.png')
          : require('../../../../assets/Jiyoon/Group/jichul.png')
        }
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain'
  }
});

export default TransactionIcon;