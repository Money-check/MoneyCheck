// // src/components/CustomHeader.js
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import styles from '../styles/CustomHeaderStyles';

// const CustomHeader = ({ title, showProfile }) => {
//   return (
//     <View style={styles.container}>
//       {showProfile ? (
//         <View style={styles.profileContainer}>
//           <Image source={require('../../assets/profile_icon.png')} style={styles.profileIcon} />
//           <Text style={styles.title}>머니췍 님  </Text>
//         </View>
//       ) : (
//         <Text style={styles.title}>{title}</Text>
//       )}
//       <View style={styles.iconContainer}>
//         <TouchableOpacity onPress={() => alert('알림')}>
//           <Ionicons name="notifications-outline" size={24} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => alert('메뉴')} style={styles.menuIcon}>
//           <Ionicons name="menu-outline" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };


// export default CustomHeader;

// src/components/CustomHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/CustomHeaderStyles';

const CustomHeader = ({ title, showProfile }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, Platform.OS === 'android' && styles.androidHeader]}>
        {showProfile ? (
          <View style={styles.profileContainer}>
            <Image source={require('../../assets/profile_icon.png')} style={styles.profileIcon} />
            <Text style={styles.title}>머니췍 님</Text>
          </View>
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => alert('알림')}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('메뉴')} style={styles.menuIcon}>
            <Ionicons name="menu-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
