// src/styles/AccountBookTabStyles/CalendarStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    // paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  todayButton: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  todayText: {
    color: '#009984',
    fontWeight: 'bold',
    fontSize: 14,
  },
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // height: '68%', // Matches Figma height
    height: 270, // Matches Figma height
    width: '100%', // Matches Figma width
    backgroundColor: '#F9F9F9', // Variables.GrayColorGray50
    paddingVertical: 12, // Matches Figma's .padding(top = 12.dp, bottom = 12.dp)
    borderRadius: 12, // Matches Figma's RoundedCornerShape(size = 12.dp)
    borderWidth: 1, // Matches Figma's .border(width = 1.dp)
    borderColor: 'rgba(0, 0, 0, 0.05)', // Variables.BorderColorBorder1 (0x0D000000 in RGBA)
  },
  dayHeader: {
    width: '13%',
    textAlign: 'center',
    fontSize: 16, // Variables.fontSizeM (16.sp)
    fontWeight: '600', // Variables.fontWeightSemibold (600)
    color: '#1A1A1A', // Variables.GrayColorGray900
    marginBottom: 16, // Matches Figma's spacing for day labels
  },
  dateContainer: {
    width: '13%',
    alignItems: 'center',
    padding: 10, // Matches current padding
  },
  dateText: {
    fontSize: 14, // Variables.fontSizeS (14.sp)
    fontWeight: '400', // Variables.fontWeightRegular (400)
    color: '#1A1A1A', // Variables.GrayColorGray900
  },
  selectedDate: {
    color: '#009984',
    fontWeight: 'bold',
  },
  selectedDay: {
    backgroundColor: '#E3F2FD', // Matches Figma's highlight color for selected day
    color: '#009984', // Text color for the selected day
    fontWeight: 'bold',
    borderRadius: 20, // Rounded corners for the selected day
    textAlign: 'center',
    width: 30,
  },

  
});
