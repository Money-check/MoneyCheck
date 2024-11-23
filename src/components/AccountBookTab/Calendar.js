// src/components/Calendar.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import styles from '../../styles/AccountBookTabStyles/CalendarStyles';
// import HeaderWithModal from './HeaderWithModal'; // HeaderWithModal 임포트

// const Calendar = ({ onMonthSelect, onDateClick }) => {
//   const [selectedMonthIndex, setSelectedMonthIndex] = useState(10); // 11월
//   const [selectedYear, setSelectedYear] = useState(2024);
//   const [selectedDay, setSelectedDay] = useState(null); // 선택된 날짜

//   // const months = [
//   //   '1월', '2월', '3월', '4월', '5월', '6월',
//   //   '7월', '8월', '9월', '10월', '11월', '12월',
//   // ];

//   const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//   const getStartDayOfMonth = (year, month) =>
//     new Date(year, month, 1).getDay();

//   const daysInMonth = getDaysInMonth(selectedYear, selectedMonthIndex);
//   const startDay = getStartDayOfMonth(selectedYear, selectedMonthIndex);


//   const allDays = Array.from({ length: startDay }).fill(null).concat(
//     Array.from({ length: daysInMonth }, (_, index) => index + 1)
//   );

//   const trailingEmptyDays = Array.from(
//     { length: 7 - (allDays.length % 7) },
//     () => null
//   );
//   const calendarDays = allDays.concat(trailingEmptyDays);

//   const handleDatePress = (day) => {
//     if (day) {
//       setSelectedDay(day);
//       onDateClick(day);
//     }
//   };

//   const handleMonthChange = (month) => {
//     setSelectedMonthIndex(month - 1);
//     if (onMonthSelect) {
//       onMonthSelect(month);
//     }
//   };

//   const setToday = () => {
//     const today = new Date();
//     setSelectedYear(today.getFullYear());
//     setSelectedMonthIndex(today.getMonth());
//     setSelectedDay(today.getDate());
//     onDateClick(today.getDate()); // Optional: Notify the parent about today's date
//   };

//   return (
//     <View style={styles.container}>
//       {/* HeaderWithModal과 오늘 버튼 */}
//       <View style={styles.headerContainer}>
//         {/* <HeaderWithModal onMonthSelect={handleMonthChange} /> */}
//         <HeaderWithModal
//           selectedYear={selectedYear}
//           selectedMonth={selectedMonthIndex + 1}
//           onMonthSelect={handleMonthChange}
//           setToday={setToday} // Pass the function to HeaderWithModal
//         />

//         <TouchableOpacity
//           style={styles.todayButton}
//           onPress={() => {
//             const today = new Date();
//             setSelectedYear(today.getFullYear());
//             setSelectedMonthIndex(today.getMonth());
//             setSelectedDay(today.getDate());
//             onDateClick(today.getDate());
//           }}
//         >
//           <Text style={styles.todayText}>오늘</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 캘린더 */}
//       <View style={styles.calendarContainer}>
//         {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
//           <Text key={day} style={styles.dayHeader}>
//             {day}
//           </Text>
//         ))}
//         {calendarDays.map((day, index) => {
//           const today = new Date();
//           const isToday =
//             day === today.getDate() &&
//             selectedMonthIndex === today.getMonth() &&
//             selectedYear === today.getFullYear();

//           const isSelected = day === selectedDay;

//           return (
//             <TouchableOpacity
//               key={index}
//               style={styles.dateContainer}
//               onPress={() => handleDatePress(day)}
//               disabled={!day}
//             >
//               <Text
//                 style={[
//                   styles.dateText,
//                   day && isToday && styles.selectedDate,
//                   day && isSelected && styles.selectedDay,
//                 ]}
//               >
//                 {day || ''}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// export default Calendar;

// src/components/Calendar.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import styles from '../../styles/AccountBookTabStyles/CalendarStyles';
// import HeaderWithModal from './HeaderWithModal'; // HeaderWithModal 임포트

// const Calendar = ({ onMonthSelect, onDateClick }) => {
//   const [selectedMonthIndex, setSelectedMonthIndex] = useState(new Date().getMonth()); // 오늘 월
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // 오늘 연도
//   const [selectedDay, setSelectedDay] = useState(null); // 선택된 날짜

//   const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//   const getStartDayOfMonth = (year, month) =>
//     new Date(year, month, 1).getDay();

//   const daysInMonth = getDaysInMonth(selectedYear, selectedMonthIndex);
//   const startDay = getStartDayOfMonth(selectedYear, selectedMonthIndex);

//   const allDays = Array.from({ length: startDay }).fill(null).concat(
//     Array.from({ length: daysInMonth }, (_, index) => index + 1)
//   );

//   const trailingEmptyDays = Array.from(
//     { length: 7 - (allDays.length % 7) },
//     () => null
//   );
//   const calendarDays = allDays.concat(trailingEmptyDays);

//   const handleDatePress = (day) => {
//     if (day) {
//       setSelectedDay(day);
//       onDateClick(day);
//     }
//   };

//   const handleMonthChange = (month) => {
//     setSelectedMonthIndex(month - 1);
//     if (onMonthSelect) {
//       onMonthSelect(month);
//     }
//   };

//   // const handleTodayPress = () => {
//   //   const today = new Date();
//   //   setSelectedYear(today.getFullYear());
//   //   setSelectedMonthIndex(today.getMonth());
//   //   setSelectedDay(today.getDate());
//   //   onDateClick(today.getDate());
//   // };

//   const setToday = () => {
//     const today = new Date();
//     setSelectedYear(today.getFullYear());
//     setSelectedMonthIndex(today.getMonth());
//     onDateClick(today.getDate()); // Optional: Notify the parent about today's date
//   };

//   return (
//     <View style={styles.container}>
//       {/* HeaderWithModal과 오늘 버튼 */}
//       <View style={styles.headerContainer}>
//         <HeaderWithModal
//           defaultYear={selectedYear} // 현재 연도 전달
//           defaultMonth={selectedMonthIndex + 1} // 현재 월 전달
//           onMonthSelect={handleMonthChange}
//         />
//         <TouchableOpacity
//           style={styles.todayButton}
//           onPress={handleTodayPress} // 오늘 버튼 클릭 핸들러
//         >
//           <Text style={styles.todayText}>오늘</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 캘린더 */}
//       <View style={styles.calendarContainer}>
//         {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
//           <Text key={day} style={styles.dayHeader}>
//             {day}
//           </Text>
//         ))}
//         {calendarDays.map((day, index) => {
//           const today = new Date();
//           const isToday =
//             day === today.getDate() &&
//             selectedMonthIndex === today.getMonth() &&
//             selectedYear === today.getFullYear();

//           const isSelected = day === selectedDay;

//           return (
//             <TouchableOpacity
//               key={index}
//               style={styles.dateContainer}
//               onPress={() => handleDatePress(day)}
//               disabled={!day}
//             >
//               <Text
//                 style={[
//                   styles.dateText,
//                   day && isToday && styles.selectedDate,
//                   day && isSelected && styles.selectedDay,
//                 ]}
//               >
//                 {day || ''}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// export default Calendar;



// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import styles from '../../styles/AccountBookTabStyles/CalendarStyles';
// import HeaderWithModal from './HeaderWithModal'; // HeaderWithModal 임포트

// const Calendar = ({ onMonthSelect, onDateClick }) => {
//   const [selectedMonthIndex, setSelectedMonthIndex] = useState(new Date().getMonth()); // 오늘 월
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // 오늘 연도
//   const [selectedDay, setSelectedDay] = useState(null); // 선택된 날짜

//   const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//   const getStartDayOfMonth = (year, month) =>
//     new Date(year, month, 1).getDay();

//   const daysInMonth = getDaysInMonth(selectedYear, selectedMonthIndex);
//   const startDay = getStartDayOfMonth(selectedYear, selectedMonthIndex);

//   const allDays = Array.from({ length: startDay }).fill(null).concat(
//     Array.from({ length: daysInMonth }, (_, index) => index + 1)
//   );

//   const trailingEmptyDays = Array.from(
//     { length: 7 - (allDays.length % 7) },
//     () => null
//   );
//   const calendarDays = allDays.concat(trailingEmptyDays);

//   const handleDatePress = (day) => {
//     if (day) {
//       setSelectedDay(day);
//       onDateClick(day);
//     }
//   };

//   // const handleMonthChange = (month) => {
//   //   setSelectedMonthIndex(month - 1);
//   //   setSelectedYear(year); // 연도도 함께 업데이트
//   //   if (onMonthSelect) {
//   //     onMonthSelect(month);
//   //   }
//   // };
//   const handleMonthChange = ({ month, year }) => {
//     setSelectedMonthIndex(month - 1); // month는 1부터 시작하므로 인덱스로 변환
//     setSelectedYear(year); // 전달된 연도로 상태 업데이트
//     if (onMonthSelect) {
//       onMonthSelect(month); // 부모 컴포넌트로 월 정보 전달
//     }
//   };

//   const handleTodayPress = () => {
//     const today = new Date();
//     setSelectedYear(today.getFullYear());
//     setSelectedMonthIndex(today.getMonth());
//     setSelectedDay(today.getDate());
//     onDateClick(today.getDate()); // Notify the parent about today's date
//   };

//   return (
//     <View style={styles.container}>
//       {/* HeaderWithModal과 오늘 버튼 */}
//       <View style={styles.headerContainer}>
//         <HeaderWithModal
//           defaultYear={selectedYear} // 현재 연도 전달
//           defaultMonth={selectedMonthIndex + 1} // 현재 월 전달
//           onMonthSelect={handleMonthChange}
//         />
//         <TouchableOpacity
//           style={styles.todayButton}
//           onPress={handleTodayPress} // 오늘 버튼 클릭 핸들러
//         >
//           <Text style={styles.todayText}>오늘</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 캘린더 */}
//       <View style={styles.calendarContainer}>
//         {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
//           <Text key={day} style={styles.dayHeader}>
//             {day}
//           </Text>
//         ))}
//         {calendarDays.map((day, index) => {
//           const today = new Date();
//           const isToday =
//             day === today.getDate() &&
//             selectedMonthIndex === today.getMonth() &&
//             selectedYear === today.getFullYear();

//           const isSelected = day === selectedDay;

//           return (
//             <TouchableOpacity
//               key={index}
//               style={styles.dateContainer}
//               onPress={() => handleDatePress(day)}
//               disabled={!day}
//             >
//               <Text
//                 style={[
//                   styles.dateText,
//                   day && isToday && styles.selectedDate,
//                   day && isSelected && styles.selectedDay,
//                 ]}
//               >
//                 {day || ''}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// export default Calendar;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/AccountBookTabStyles/CalendarStyles';
import HeaderWithModal from './HeaderWithModal';

const Calendar = ({ onDateClick }) => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(null);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getStartDayOfMonth = (year, month) =>
    new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonthIndex);
  const startDay = getStartDayOfMonth(selectedYear, selectedMonthIndex);

  const allDays = Array.from({ length: startDay }).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, index) => index + 1)
  );

  const trailingEmptyDays = Array.from(
    { length: 7 - (allDays.length % 7) },
    () => null
  );
  const calendarDays = allDays.concat(trailingEmptyDays);

  const handleDatePress = (day) => {
    if (day) {
      setSelectedDay(day);
      onDateClick(day);
    }
  };

  const handleMonthChange = ({ year, month }) => {
    setSelectedYear(year);
    setSelectedMonthIndex(month - 1);
  };

  const handleTodayPress = () => {
    const today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonthIndex(today.getMonth());
    setSelectedDay(today.getDate());
    onDateClick(today.getDate());
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderWithModal
          selectedYear={selectedYear}
          selectedMonth={selectedMonthIndex + 1}
          onMonthSelect={handleMonthChange}
        />
        <TouchableOpacity style={styles.todayButton} onPress={handleTodayPress}>
          <Text style={styles.todayText}>오늘</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calendarContainer}>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <Text key={day} style={styles.dayHeader}>
            {day}
          </Text>
        ))}
        {calendarDays.map((day, index) => {
          const today = new Date();
          const isToday =
            day === today.getDate() &&
            selectedMonthIndex === today.getMonth() &&
            selectedYear === today.getFullYear();

          const isSelected = day === selectedDay;

          return (
            <TouchableOpacity
              key={index}
              style={styles.dateContainer}
              onPress={() => handleDatePress(day)}
              disabled={!day}
            >
              <Text
                style={[
                  styles.dateText,
                  day && isToday && styles.selectedDate,
                  day && isSelected && styles.selectedDay,
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
