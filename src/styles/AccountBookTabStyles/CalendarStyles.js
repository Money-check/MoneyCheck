// src/styles/AccountBookTabStyles/CalendarStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  todayButton: {
    backgroundColor: '#E3F2FD',
    padding: 3,
    width: 40,
    borderRadius: 5,
  },
  todayText: {
    // color: '#4CAF50',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  
  //캘린더 모달
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  picker: {
    width: '100%',
    color: '#000',
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  pickerContainer: {
    // width: '90%', // Picker의 너비를 화면에 맞게 설정
    backgroundColor: '#FFFFFF', // 흰색 배경
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10, // 위아래 간격
    width: '50%',
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFCDD2',
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#D32F2F',
    fontWeight: 'bold',
  },
      
      //캘린더
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayHeader: {
    width: '13%',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateContainer: {
    width: '13%',
    alignItems: 'center',
    padding: 10,
  },
  dateText: {
    fontSize: 16,
  },
  selectedDate: {
    // color: '#4CAF50',
    color: 'red',
    fontWeight: 'bold',
  },

  selectedDay: {
    backgroundColor: '#E3F2FD', // 선택된 날짜 배경색
    color: '#4CAF50', // 텍스트 색상
    fontWeight: 'bold',
    borderRadius: 20,
    textAlign: 'center',
    width: 30,
    // height: 30,
    // lineHeight: 30,
  },
  
  
});
