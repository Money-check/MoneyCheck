import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TransactionIcon from '../atoms/TransactionIcon';
import TransactionItem from '../atoms/TransactionItem';

const TransactionGroup = ({ type, items }) => {
  return (
    <View style={styles.container}>
      <TransactionIcon type={type} />
      <Text style={styles.typeText}>{type === 'income' ? '수입' : '지출'}</Text>
      {items.map((item, index) => (
        <TransactionItem key={index} name={item.name} amount={item.amount} type={type} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  typeText: {
    fontSize: 13,
    fontWeight:'bold',
    marginVertical: 8,
    color: '#888',
  },
});

export default TransactionGroup;