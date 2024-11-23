// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from '../../styles/AccountBookTabStyles/TotalStyles';

// const Income = ({ income }) => {
//   return (
//     <View style={styles.summaryItem}>
//       <Text style={styles.incomeLabel}>수입</Text>
//       <Text style={styles.incomeAmount}>+ {income.toLocaleString()}원</Text>
//     </View>
//   );
// };

// export default Income;
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/AccountBookTabStyles/IncomeStyles';

const Income = ({ income }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>수입</Text>
      <Text style={styles.amount}>+ {income.toLocaleString()}원</Text>
    </View>
  );
};

export default Income;
