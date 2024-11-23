import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/StatisticsTabStyles/YearMonthPickerStyle";

const YearMonthPicker = ({
  selectedYear,
  setSelectedYear,
  selectedMonthIndex,
  setSelectedMonthIndex,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  // 임시 상태로 선택값을 저장
  const [tempYear, setTempYear] = useState(selectedYear);
  const [tempMonthIndex, setTempMonthIndex] = useState(selectedMonthIndex);

  // 월 데이터
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  // 모달 열기/닫기
  const toggleModal = () => {
    if (isModalVisible) {
      // 모달 닫힐 때 임시 상태를 초기화
      setTempYear(selectedYear);
      setTempMonthIndex(selectedMonthIndex);
    }
    setModalVisible(!isModalVisible);
  };

  // 확인 버튼 클릭 핸들러
  const handleConfirm = () => {
    setSelectedYear(tempYear);
    setSelectedMonthIndex(tempMonthIndex);
    setModalVisible(false); // 모달 닫기
  };

  return (
    <View style={styles.container}>
      {/* 연도 및 월 표시 버튼 */}
      <TouchableOpacity style={styles.selector} onPress={toggleModal}>
        <Text style={styles.selectorText}>
          {`${selectedYear}년 ${months[selectedMonthIndex]}`}
        </Text>
        <Ionicons name="chevron-down-outline" size={20} color="#009984" />
      </TouchableOpacity>

      {/* 모달 */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.pickerContainer}>
            {/* 연도 선택 */}
            <Text style={styles.pickerLabel}>연도 선택</Text>
            <Picker
              selectedValue={tempYear}
              style={styles.picker}
              onValueChange={(itemValue) => setTempYear(itemValue)}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <Picker.Item
                  key={i}
                  label={`${2020 + i}년`}
                  value={2020 + i}
                />
              ))}
            </Picker>

            {/* 월 선택 */}
            <Text style={styles.pickerLabel}>월 선택</Text>
            <Picker
              selectedValue={tempMonthIndex}
              style={styles.picker}
              onValueChange={(itemValue) => setTempMonthIndex(itemValue)}
            >
              {months.map((month, index) => (
                <Picker.Item key={index} label={month} value={index} />
              ))}
            </Picker>

            {/* 버튼들 */}
            <View style={styles.buttonContainer}>
              {/* 닫기 버튼 */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
              >
                <Text style={styles.closeButtonText}>닫기</Text>
              </TouchableOpacity>
              {/* 확인 버튼 */}
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirm}
              >
                <Text style={styles.confirmButtonText}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default YearMonthPicker;
