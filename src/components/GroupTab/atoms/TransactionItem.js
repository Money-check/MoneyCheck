import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionItem = ({ name, amount, type }) => {
  return (
    <View style={styles.item}>
      <View style={[styles.nameBox, { backgroundColor: type === 'income' ? '#FFE8E8' : '#E8F4FF' }]}>
        <Text style={[styles.name, { color: type === 'income' ? '#FF5252' : '#2196F3' }]}>{name}</Text>
      </View>
      <Text style={[styles.amount, { color: type === 'income' ? '#FF5252' : '#2196F3' }]}>
        {type === 'income' ? '+' : '-'} {amount}
        <Text style={styles.currency}> 원</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  nameBox: {
    padding: 4,
    borderRadius: 4,
    paddingHorizontal: 8,

  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'normal',
  },
});

export default TransactionItem;