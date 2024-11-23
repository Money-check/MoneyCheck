// src/styles/AccountBookTabStyles/AccountBookStyles.js
// import { StyleSheet } from 'react-native';

// export default StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       paddingHorizontal: 20,
//     },
//     tabContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       marginBottom: 10,
//     },
//     tab: {
//       padding: 10,
//       borderBottomWidth: 2,
//       borderColor: 'transparent',
//     },
//     selectedTab: {
//       borderColor: '#4CAF50',
//     },
//     tabText: {
//       fontSize: 16,
//       color: '#333',
//     },
//     selectedTabText: {
//       color: '#4CAF50',
//       fontWeight: 'bold',
//     },

//     summaryContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       // marginHorizontal: 10,
//       // marginVertical: 2,
//     },
    
//   });

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
    justifyContent: 'flex-start', // Align tabs to the left
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    padding: 10,
    marginRight: 20, // Add spacing between tabs
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  selectedTab: {
    borderColor: '#009984',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  selectedTabText: {
    color: '#009984',
    fontWeight: 'bold',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
