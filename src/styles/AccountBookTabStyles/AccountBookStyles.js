// src/styles/AccountBookTabStyles/AccountBookStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    tab: {
      padding: 10,
      borderBottomWidth: 2,
      borderColor: 'transparent',
    },
    selectedTab: {
      borderColor: '#4CAF50',
    },
    tabText: {
      fontSize: 16,
      color: '#333',
    },
    selectedTabText: {
      color: '#4CAF50',
      fontWeight: 'bold',
    },

    summaryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // marginHorizontal: 10,
      // marginVertical: 2,
    },
    
  });
