import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/AccountBookTabStyles/ExpenseStyles';

const Expense = ({ expense }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>지출</Text>
      <Text style={styles.amount}>- {expense.toLocaleString()}원</Text>
    </View>
  );
};

export default Expense;
