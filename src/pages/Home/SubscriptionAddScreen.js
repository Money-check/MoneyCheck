import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SubscriptionAddScreen = ({ route, navigation }) => {
  const { icon, name } = route.params; // 전달된 데이터 받기
  const [monthlyFee, setMonthlyFee] = useState('');
  const [paymentDay, setPaymentDay] = useState('');

  const handleAddSubscription = () => {
    if (!monthlyFee || !paymentDay) {
      alert('모든 필드를 입력해주세요.');

      
      return;
    }

    // 새로운 구독 정보 생성
    const newSubscription = {
      id: Date.now().toString(),
      title: name,
      icon: icon,
      monthlyFee: `월 ${monthlyFee}원 결제`,
      nextPayment: `매월 ${paymentDay}일`,
    };

    // HomeScreen으로 이동하면서 새로운 구독 정보 전달
    navigation.navigate('Main', {
      screen: 'Home',
      params: { newSubscription },
    });
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={[styles.header, Platform.OS === 'android' && styles.androidHeader]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>구독 추가</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 제목 */}
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>구독 추가</Text>
        <Text style={styles.description}>구독을 추가하세요</Text>
      </View>

      {/* 아이콘 및 이름 */}
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
      </View>

      {/* 입력 필드 */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>월 결제 금액</Text>
        <TextInput
          style={styles.input}
          placeholder="월 결제 금액을 입력해주세요"
          keyboardType="numeric"
          value={monthlyFee}
          onChangeText={setMonthlyFee}
        />
        <Text style={styles.label}>월 결제일</Text>
        <TextInput
          style={styles.input}
          placeholder="월 결제일을 입력해주세요"
          keyboardType="numeric"
          value={paymentDay}
          onChangeText={setPaymentDay}
        />
      </View>

      {/* 구독 추가 버튼 */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddSubscription}>
        <Text style={styles.addButtonText}>구독 추가하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: 60,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  androidHeader: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: Platform.OS === 'android' ? 60 + StatusBar.currentHeight : 60,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009984',
    marginBottom: 8,
  },
  description: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  inputContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#009984',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SubscriptionAddScreen;
