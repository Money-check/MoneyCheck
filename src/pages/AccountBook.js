// 가계부 탭 화면 (전체, 수입, 지출 포함)
// src/pages/AccountBook.js
import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import Calendar from '../components/AccountBookTab/Calendar';
import FloatingButton from '../components/FloatingTab/FloatingButton';
import IncomeList from '../components/AccountBookTab/IncomeList';
import ExpenseList from '../components/AccountBookTab/ExpenseList';
import TotalExpense from '../components/AccountBookTab/TotalExpense';
import Income from '../components/AccountBookTab/Income';
import Expense from '../components/AccountBookTab/Expense';
import styles from '../styles/AccountBookTabStyles/AccountBookStyles';

const AccountBook = () => {
  const [selectedTab, setSelectedTab] = useState('전체');
  const [monthlyExpense, setMonthlyExpense] = useState(330000); // 더미 데이터
  const [dailyData, setDailyData] = useState({ income: 3333333, expense: 3333333 }); // 더미 데이터

  const [selectedMonth, setSelectedMonth] = useState('11월'); // 선택된 월

  // 날짜 클릭 시 데이터를 업데이트하는 핸들러
  const handleDateClick = (day) => {
    if (day) {
      // 예제: 클릭된 날짜에 대한 수입/지출 데이터를 업데이트
      setDailyData({
        income: Math.floor(Math.random() * 5000000), // 랜덤 데이터
        expense: Math.floor(Math.random() * 5000000),
      });
    }
  };

   // 랜덤 소비액 생성 (예시 데이터)
   const randomMonthlyExpense = (month) => {
    // 월에 따라 랜덤 소비액 생성
    const randomExpense = Math.floor(Math.random() * 500000 + 100000); // 10만 ~ 50만 사이
    setMonthlyExpense(randomExpense);
    setSelectedMonth(month);
  };

  return (
    <View style={styles.container}>
      {/* 세부 탭 */}
      <View style={styles.tabContainer}>
        {['전체', '수입', '지출'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.selectedTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 탭에 따른 콘텐츠 렌더링 */}
      <ScrollView>
        {selectedTab === '전체' && (
          <>
            {/* Calendar에서 클릭 이벤트 핸들러 전달 */}
            {/* <Calendar onDateClick={handleDateClick} /> */}
             {/* Calendar에 onMonthSelect 전달 */}
        
        <Calendar onDateClick={handleDateClick} onMonthSelect={(month) => randomMonthlyExpense(month)} />

            {/* TotalExpense, Income, Expense 분리된 컴포넌트 호출 */}
            {/* <TotalExpense month="11월" expense={monthlyExpense} /> */}
            <TotalExpense month={selectedMonth} expense={monthlyExpense} />
            <View style={styles.summaryContainer}>
              <Income income={dailyData.income} />
              <Expense expense={dailyData.expense} />
            </View>
          </>
        )}
        {selectedTab === '수입' && <IncomeList />}
        {selectedTab === '지출' && <ExpenseList />}
      </ScrollView>

    </View>
  );
};

export default AccountBook;
