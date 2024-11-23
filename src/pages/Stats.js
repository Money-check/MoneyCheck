//통계 탭 화면
// src/pages/Statistics.js
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import YearMonthPicker from "../components/StatisticsTab/YearMonthPicker";
import ExpenseBarChart from "../components/StatisticsTab/ExpenseBarChart";
import EmotionStatistics from "../components/StatisticsTab/EmotionStatistics";
import FeedbackSection from "../components/StatisticsTab/FeedbackSection";
import ConclusionSection from "../components/StatisticsTab/ConclusionSection";

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState(2024); // 기본 연도
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(10); // 기본 월 (11월)

  // 새로운 랜덤 데이터를 생성하는 함수
  const generateRandomData = () => {
    const getRandomAmount = () => Math.floor(Math.random() * 1000001);
    return [
      { category: "식비", amount: getRandomAmount() },
      { category: "주거비", amount: getRandomAmount() },
      { category: "교통비", amount: getRandomAmount() },
      { category: "의료/건강", amount: getRandomAmount() },
      { category: "쇼핑", amount: getRandomAmount() },
      { category: "문화/여가", amount: getRandomAmount() },
      { category: "반려동물", amount: getRandomAmount() },
      { category: "기타", amount: getRandomAmount() },
    ];
  };

  const [expenseData, setExpenseData] = useState(generateRandomData());

  // 날짜 변경 시 새로운 데이터를 생성
  const handleDateChange = (year, monthIndex) => {
    setSelectedYear(year);
    setSelectedMonthIndex(monthIndex);
    setExpenseData(generateRandomData());
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false} // 스크롤바 비활성화
    >
      {/* 연도 및 월 선택 */}
      <YearMonthPicker
        selectedYear={selectedYear}
        setSelectedYear={(year) => handleDateChange(year, selectedMonthIndex)}
        selectedMonthIndex={selectedMonthIndex}
        setSelectedMonthIndex={(monthIndex) =>
          handleDateChange(selectedYear, monthIndex)
        }
      />

      {/* 데이터 시각화 */}
      <ExpenseBarChart expenseData={expenseData} />

      {/* 구분선 */}
      <View style={styles.divider} />

      {/* 감정 통계 섹션 */}
      <EmotionStatistics />

      {/* 피드백 섹션 */}
      <FeedbackSection />

      {/* 결론 섹션 */}
      <ConclusionSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  divider: {
    height: 8, // 높이 8pt
    backgroundColor: "#F9F9F9", // 배경색상
  },
});

export default Statistics;
