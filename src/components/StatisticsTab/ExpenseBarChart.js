// npm install react-native-picker-select 설치
// npm install react-native-modal-dropdown 설치
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

const ExpenseBarChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("2024년 10월");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // 예제 지출 데이터 (단위: 원)
  const expenseData = [
    { category: "식비", amount: 800000, maxAmount: 1000000 },
    { category: "주거비", amount: 600000, maxAmount: 1000000 },
    { category: "교통비", amount: 400000, maxAmount: 1000000 },
    { category: "의료/건강", amount: 200000, maxAmount: 1000000 },
    { category: "쇼핑", amount: 900000, maxAmount: 1000000 },
    { category: "문화/여가", amount: 300000, maxAmount: 1000000 },
    { category: "반려동물", amount: 700000, maxAmount: 1000000 },
    { category: "기타", amount: 100000, maxAmount: 1000000 },
  ];

  const months = [
    "2024년 1월",
    "2024년 2월",
    "2024년 3월",
    "2024년 4월",
    "2024년 5월",
    "2024년 6월",
    "2024년 7월",
    "2024년 8월",
    "2024년 9월",
    "2024년 10월",
    "2024년 11월",
    "2024년 12월",
  ];

  return (
    <View style={styles.section}>
      {/* 선택된 월 표시 버튼 */}
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setDropdownVisible(true)}
      >
        <Text style={styles.dropdownButtonText}>{selectedMonth}</Text>
      </TouchableOpacity>

      {/* 드롭다운 메뉴 */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isDropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setDropdownVisible(false)}
        >
          <View style={styles.dropdownContainer}>
            <FlatList
              data={months}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedMonth(item);
                    setDropdownVisible(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* 지출 카테고리 섹션 */}
      <Text style={styles.sectionTitle}>지출 카테고리</Text>
      {expenseData.map((item, index) => (
        <View key={index} style={styles.barContainer}>
          <Text style={styles.barLabel}>
            {item.category}: {item.amount.toLocaleString()}원
          </Text>
          {/* 커스텀 ProgressBar */}
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${(item.amount / item.maxAmount) * 100}%` }, // 동적 너비 설정
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#F9F9F9",
    marginBottom: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    maxHeight: 300,
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  barContainer: {
    marginBottom: 10,
  },
  barLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: "#EEE",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#00C4B4",
  },
});

export default ExpenseBarChart;
