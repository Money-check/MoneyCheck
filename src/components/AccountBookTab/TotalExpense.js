// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from '../../styles/AccountBookTabStyles/TotalStyles';

// const TotalExpense = ({ month, expense }) => {
//   return (
//     <View style={styles.totalExpenseContainer}>
//       <Text style={styles.totalExpenseText}>{`${month} 소비 ${expense.toLocaleString()} 원`}</Text>
//     </View>
//   );
// };

// export default TotalExpense;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/AccountBookTabStyles/TotalExpenseStyles';
const TotalExpense = ({ month, expense }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.totalExpenseText}>
        {`${month}월 소비 ${expense.toLocaleString()} 원`}
      </Text>
    </View>
  );
};

export default TotalExpense;
