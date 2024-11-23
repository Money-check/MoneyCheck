// src/components/IncomeList.js
// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import HeaderWithModal from './HeaderWithModal'; // 수정된 HeaderWithModal 경로
// import styles from '../../styles/AccountBookTabStyles/IncomeListStyles';

// const IncomeList = () => {
//   const expenseData = [
//     { id: 1, name: '용돈', date: '10.24', amount: '- 70,000원', icon: require('../../assets/money.png') },
//     { id: 2, name: '주식', date: '10.24', amount: '- 50,000원', icon: require('../../assets/stock.png') },
//     { id: 3, name: '앱테크', date: '10.24', amount: '- 16,000원', icon: require('../../assets/app.png') },
//     { id: 4, name: '캐시백', date: '10.24', amount: '- 48,000원', icon: require('../../assets/cashback.png') },
//     { id: 5, name: '적금 이자', date: '10.24', amount: '- 9,000원', icon: require('../../assets/interest.png') },
//   ];

//   const handleMonthSelect = (month) => {
//     console.log(`${month}월 선택됨`); // 선택된 월에 따른 로직 처리
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* HeaderWithModal에 월 선택 이벤트 전달 */}
//       <HeaderWithModal onMonthSelect={handleMonthSelect} />

//       <View style={styles.container}>
//         {expenseData.map((item) => (
//           <View key={item.id} style={styles.card}>
//             <Image source={item.icon} style={styles.icon} />
//             <View style={styles.textContainer}>
//               <Text style={styles.itemName}>{item.name}</Text>
//               <Text style={styles.itemDate}>{item.date}</Text>
//             </View>
//             <Text style={styles.itemAmount}>{item.amount}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default IncomeList;

//


// 가계부 지출 탭
// src/components/ExpenseList.js
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import HeaderWithModal from './HeaderWithModal';
import styles from '../../styles/AccountBookTabStyles/IncomeListStyles';

const IncomeList = () => {
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);

  const handleMonthSelect = ({ year, month }) => {
    setSelectedYear(year);
    setSelectedMonth(month);
    console.log(`${year}년 ${month}월 선택됨`);
  };

  const expenseData = [
    { id: 1, name: '용돈', date: '10.24', amount: '- 70,000원', icon: require('../../assets/money.png') },
    { id: 2, name: '주식', date: '10.24', amount: '- 50,000원', icon: require('../../assets/stock.png') },
    { id: 3, name: '앱테크', date: '10.24', amount: '- 16,000원', icon: require('../../assets/app.png') },
    { id: 4, name: '캐시백', date: '10.24', amount: '- 48,000원', icon: require('../../assets/cashback.png') },
    { id: 5, name: '적금 이자', date: '10.24', amount: '- 9,000원', icon: require('../../assets/interest.png') },
  ];

  return (
    <View style={{ flex: 1 }}>
      <HeaderWithModal
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        onMonthSelect={handleMonthSelect}
      />

      <View style={styles.container}>
        {expenseData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
            <Text style={styles.itemAmount}>{item.amount}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default IncomeList;
