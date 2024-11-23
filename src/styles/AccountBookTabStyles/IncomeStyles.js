// src/styles/AccountBookTabStyles/IncomeStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFF5F5',
    padding: 20,
    // marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: 170, // Fixed width
    height: 100, // Fixed height
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  label: {
    color: '#FF6F61',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  amount: {
    marginTop: 6,
    color: '#FF6F61',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
