// 가계부 탭 화면 (전체, 수입, 지출 포함)
// src/pages/AccountBook.js
import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import Calendar from '../components/AccountBookTab/Calendar';
import IncomeList from '../components/AccountBookTab/IncomeList';
import ExpenseList from '../components/AccountBookTab/ExpenseList';
import TotalExpense from '../components/AccountBookTab/TotalExpense';
import MoneyCard from '../components/HomeTab/MoneyCard';
import styles from '../styles/AccountBookTabStyles/AccountBookStyles';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountBook = () => {
  const [selectedTab, setSelectedTab] = useState('전체');
  
  
  const [dailyIncome, setDailyIncome] = useState(10000);
  const [dailyExpense, setDailyExpense] = useState(10000);
  // const [selectedDay, setSelectedDay] = useState(null);
  const [monthlyExpense, setMonthlyExpense] = useState(0); // 더미 데이터. 월별 지출
  
  
  // const [selectedMonth, setSelectedMonth] = useState('12월'); // 선택된 월
  const [selectedMonth, setSelectedMonth] = useState(
    `${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월`
  ); // 선택된 월
  const [selectedDay, setSelectedDay] = useState(new Date()); // 현재 선택된 날짜

  const formatDate = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  

  const handleMonthChange = (year, month) => {
    setSelectedMonth(`${year}년 ${month}월`);
    const randomExpense = Math.floor(
      Math.random() * (2000000 - 100000 + 1) + 100000
    ); // 100,000 ~ 2,000,000 사이 값 생성
    const expenseInThousands = Math.floor(randomExpense / 1000) * 1000; // 천 원 단위로 끊음
    setMonthlyExpense(expenseInThousands);
  };


    // 선택된 날짜 데이터를 동기화
    const syncDailyData = async () => {
      try {
        const dateKey = formatDate(selectedDay);
  
        // 수입 데이터 로드
        const incomeData = await AsyncStorage.getItem('incomes');
        const incomes = incomeData ? JSON.parse(incomeData) : [];
        const incomeForDate = incomes
          .filter((income) => formatDate(new Date(income.date)) === dateKey)
          .reduce((total, income) => total + income.amount, 0);
        setDailyIncome(incomeForDate);
  
        // 지출 데이터 로드
        const expenseData = await AsyncStorage.getItem('receipts');
        const expenses = expenseData ? JSON.parse(expenseData) : [];
        const expenseForDate = expenses
          .filter((expense) => formatDate(new Date(expense.date)) === dateKey)
          .reduce((total, expense) => total + expense.amount, 0);
        setDailyExpense(expenseForDate);
      } catch (error) {
        console.error('데이터 동기화 실패:', error);
      }
    };


  // useFocusEffect 사용하여 화면에 포커스될 때마다 수입 데이터 로드
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const loadIncomes = async () => {

  //       try {
  //         const existingData = await AsyncStorage.getItem('incomes');
  //         if (existingData) {
  //           const incomes = JSON.parse(existingData);
  //           const newDailyIncome = incomes.reduce((total, income) => {
  //             return total + income.amount;
  //           }, 10000); // 기존 고정 수입에 새로운 수입 추가

  //           setDailyIncome(newDailyIncome);
  //         }
  //       } catch (error) {
  //         console.error('수입 데이터 로드 실패:', error);
  //       }

  //     };

  //     const loadExpenses = async () => {
  //       try {
  //         const existingData = await AsyncStorage.getItem('receipts');
  //         if (existingData) {
  //           const expenses = JSON.parse(existingData);
  //           const newDailyExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  //           setDailyExpense(newDailyExpense);
  //         }
  //       } catch (error) {
  //         console.error('지출 데이터 로드 실패:', error);
  //       }
  //     };

  //     loadIncomes();
  //     loadExpenses();
  //   }, [])
  // );

  useFocusEffect(
    React.useCallback(() => {
      syncDailyData();
    }, [selectedDay])
  );

  // 날짜 클릭 시 데이터를 업데이트
  const handleDateClick = (day) => {
    if (day) {
      const newDate = new Date(
        selectedDay.getFullYear(),
        selectedDay.getMonth(),
        day
      );
      setSelectedDay(newDate);
    }
  };


  // 초기화 버튼 핸들러
  const handleResetData = async () => {
    try {
      await AsyncStorage.clear();
      setDailyIncome(0);
      setDailyExpense(0);
      console.log('AsyncStorage 초기화 완료');
      alert('데이터가 초기화되었습니다.');
    } catch (error) {
      console.error('초기화 실패:', error);
    }
  };




  // 날짜 클릭 시 데이터를 업데이트하는 핸들러
  // const handleDateClick = (day) => {
  //   // 날짜 클릭 시, 수입과 지출을 랜덤 값으로 변경
  //   setSelectedDay(day);
  //   setDailyIncome(Math.floor(Math.random() * 1000000 / 10000) * 10000); // 10,000원 단위, 최대 1,000,000원
  //   setDailyExpense(Math.floor(Math.random() * 200000 / 10000) * 10000); // 10,000원 단위, 최대 200,000원
  // };
  

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

      {selectedTab === '전체' && (
        <>
          {/* Calendar에서 클릭 이벤트 핸들러 전달 */}
          {/* <Calendar onDateClick={handleDateClick} /> */}
          {/* Calendar에 onMonthSelect 전달 */}



          <Calendar onDateClick={handleDateClick} onMonthChange={handleMonthChange} />

          {/* TotalExpense, Income, Expense 분리된 컴포넌트 호출 */}
          {/* <TotalExpense month="11월" expense={monthlyExpense} /> */}


          <View style={styles.MonthsummaryContainer}>
            <TotalExpense month={selectedMonth} expense={monthlyExpense} />
          </View>


          <View style={styles.summaryContainer}>
            <MoneyCard income={dailyIncome.toString()} expense={dailyExpense.toLocaleString()} style={styles.moneyPager} />
            {/* <Income income={dailyData.income} /> */}
            {/* <Expense expense={dailyData.expense} /> */}
          </View>
        </>
      )}
      {selectedTab === '수입' && <IncomeList />}
      {selectedTab === '지출' && <ExpenseList />}

 {/* 디버깅용 초기화 버튼 */}
      {/* 디버깅이 끝나면 아래 TouchableOpacity를 주석 처리하세요 */}
      <TouchableOpacity style={styles.resetButton} onPress={handleResetData}>
        <Text style={styles.resetButtonText}>초기화</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountBook;
