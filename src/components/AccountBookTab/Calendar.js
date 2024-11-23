// src/components/Calendar.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/AccountBookTabStyles/CalendarStyles';

// const Calendar = ({ onDateClick }) => {
  const Calendar = ({ onMonthSelect ,onDateClick}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(10); // 11월
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedDay, setSelectedDay] = useState(null); // 선택된 날짜

  const months = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월',
  ];

  // 달의 일수 계산
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  // 현재 달의 시작 요일 계산
  const getStartDayOfMonth = (year, month) =>
    new Date(year, month, 1).getDay();

  // 현재 달의 일수와 시작 요일 계산
  const daysInMonth = getDaysInMonth(selectedYear, selectedMonthIndex);
  const startDay = getStartDayOfMonth(selectedYear, selectedMonthIndex);

  // 빈 칸과 실제 날짜 포함한 배열 생성
  const allDays = Array.from({ length: startDay }).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, index) => index + 1)
  );

  // 빈 칸으로 마지막 줄을 채우기 위한 로직
  const trailingEmptyDays = Array.from(
    { length: 7 - (allDays.length % 7) },
    () => null
  );
  const calendarDays = allDays.concat(trailingEmptyDays);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleMonthSelect = (index) => {
    setSelectedMonthIndex(index);
    toggleModal();
    onMonthSelect(months[index]); // 선택된 달 전달
  };

  const handleDatePress = (day) => {
    if (day) {
      setSelectedDay(day);
      onDateClick(day); // 날짜 클릭 이벤트 전달
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* 달 선택 */}
        <TouchableOpacity style={styles.monthSelector} onPress={toggleModal}>
          <Text style={styles.monthText}>
            {`${selectedYear}년 ${months[selectedMonthIndex]}`}
          </Text>
          <Ionicons name="chevron-down-outline" size={20} color="#4CAF50" />
        </TouchableOpacity>

        {/* 오늘 버튼 */}
        <TouchableOpacity
          style={styles.todayButton}
          onPress={() => {
            const today = new Date();
            setSelectedYear(today.getFullYear());
            setSelectedMonthIndex(today.getMonth());
            setSelectedDay(today.getDate());
            onDateClick(today.getDate()); // 오늘 날짜로 데이터 업데이트
          }}
        >
          <Text style={styles.todayText}>Today</Text>
        </TouchableOpacity>
      </View>

      {/* 연도와 달 선택 모달 */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            {/* 연도 선택 */}
            <Text style={styles.pickerLabel}>연도 선택</Text>
            <Picker
              style={styles.picker}
              selectedValue={selectedYear}
              onValueChange={(itemValue) => setSelectedYear(itemValue)}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <Picker.Item
                  key={i}
                  label={`${2020 + i}년`}
                  value={2020 + i}
                />
              ))}
            </Picker>

            {/* 달 선택 */}
            <Text style={styles.pickerLabel}>달 선택</Text>
            <Picker
              style={styles.picker}
              selectedValue={selectedMonthIndex}
              // onValueChange={(itemValue) => setSelectedMonthIndex(itemValue)}
              onValueChange={(itemValue) => handleMonthSelect(itemValue)}
            >
              {months.map((month, index) => (
                <Picker.Item key={index} label={month} value={index} />
              ))}
            </Picker>
          </View>

          {/* 닫기 버튼 */}
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* 달력 표시 */}
      <View style={styles.calendarContainer}>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <Text key={day} style={styles.dayHeader}>
            {day}
          </Text>
        ))}
        {calendarDays.map((day, index) => {
          // 오늘 날짜 확인
          const today = new Date();
          const isToday =
            day === today.getDate() &&
            selectedMonthIndex === today.getMonth() &&
            selectedYear === today.getFullYear();

          // 선택된 날짜 확인
          const isSelected = day === selectedDay;

          return (
            <TouchableOpacity
              key={index}
              style={styles.dateContainer}
              onPress={() => handleDatePress(day)}
              disabled={!day} // 빈 날짜는 클릭 비활성화
            >
              <Text
                style={[
                  styles.dateText,
                  // isToday && styles.selectedDate, // 오늘 날짜 강조
                  // isSelected && styles.selectedDay, // 선택된 날짜 강조
                  day && isToday && styles.selectedDate, // 오늘 날짜 강조
                  day && isSelected && styles.selectedDay, // 선택된 날짜 강조
                ]}
              >
                {day || ''}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Calendar;
