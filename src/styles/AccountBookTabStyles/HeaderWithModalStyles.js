// src/styles/AccountBookTabStyles/HeaderWithModalStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    // borderBottomWidth: 1,
    // borderBottomColor: '#E0E0E0',
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#333333',
  // },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009984',
    marginRight: 5,
  },
  todayButton: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  todayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    color: '#333333',
    fontSize: 16,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#009984',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    width: '40%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#FFCDD2',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#D32F2F',
    fontWeight: 'bold',
  },
  



  // closeButton: {
  //   marginTop: 20,
  //   backgroundColor: '#FFCDD2',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  // },
  // closeButtonText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#D32F2F',
  // },
  icon: {
    marginLeft: 5,
    fontSize: 18,
    color: '#4CAF50',
  },





});
