import React, { useRef, useEffect, useState } from "react";
import { View, Text, Animated } from "react-native";
import styles from "../../styles/StatisticsTabStyles/ExpenseBarChartStyle";

const ExpenseBarChart = ({ expenseData }) => {
  const MAX_AMOUNT = 1000000; // 최대 금액

  // State to track animated amounts for display
  const [animatedAmounts, setAnimatedAmounts] = useState(
    expenseData.map(() => 0)
  );

  // Animated values for each category
  const animatedValues = expenseData.map(() => ({
    amount: useRef(new Animated.Value(0)).current,
    progress: useRef(new Animated.Value(0)).current,
  }));

  useEffect(() => {
    expenseData.forEach((item, index) => {
      // Reset animation values
      animatedValues[index].amount.setValue(0);
      animatedValues[index].progress.setValue(0);

      // Animate amount value
      Animated.timing(animatedValues[index].amount, {
        toValue: item.amount,
        duration: 2000, // 애니메이션 시간 (밀리초)
        useNativeDriver: false,
      }).start();

      // Animate progress bar width
      Animated.timing(animatedValues[index].progress, {
        toValue: item.amount / MAX_AMOUNT,
        duration: 2000,
        useNativeDriver: false,
      }).start();

      // Update state with animated value
      animatedValues[index].amount.addListener(({ value }) => {
        setAnimatedAmounts((prev) => {
          const updatedAmounts = [...prev];
          updatedAmounts[index] = Math.round(value); // 정수로 변환
          return updatedAmounts;
        });
      });
    });

    // Clean up listeners on unmount
    return () => {
      animatedValues.forEach(({ amount }) => {
        amount.removeAllListeners();
      });
    };
  }, [expenseData]);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>지출 카테고리</Text>
      {expenseData.map((item, index) => {
        const animatedWidth = animatedValues[index].progress.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "100%"],
        });

        return (
          <View key={index} style={styles.barContainer}>
            {/* 카테고리 이름과 금액 */}
            <View style={styles.barLabelContainer}>
              <Text style={styles.barLabel}>{item.category}</Text>
              <Text style={styles.barAmount}>
                {animatedAmounts[index].toLocaleString()}원
              </Text>
            </View>
            {/* 프로그래스 바 */}
            <View style={styles.progressBarBackground}>
              <Animated.View
                style={[
                  styles.progressBarFill,
                  { width: animatedWidth }, // 비율에 따라 너비 설정
                ]}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ExpenseBarChart;
