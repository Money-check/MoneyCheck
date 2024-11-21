import React from 'react';
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

const GoalAddScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={[styles.header, Platform.OS === 'android' && styles.androidHeader]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>목표 추가하기</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 제목 */}
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>목표 추가</Text>
        <Text style={styles.description}>목표를 추가해 보세요</Text>
      </View>

      {/* 이미지 추가 영역 */}
      <TouchableOpacity style={styles.imageAddContainer} onPress={() => alert('이미지 추가')}>
        <Ionicons name="camera-outline" size={32} color="#b0b0b0" />
        <Text style={styles.imageAddText}>이미지 추가하기</Text>
      </TouchableOpacity>

      {/* 입력 필드 */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>목표 제목</Text>
        <TextInput
          style={styles.input}
          placeholder="목표 제목을 입력해 주세요"
        />
        <Text style={styles.label}>목표 금액</Text>
        <TextInput
          style={styles.input}
          placeholder="목표 금액을 입력해 주세요"
          keyboardType="numeric"
        />
        <Text style={styles.label}>목표 개월 수</Text>
        <TextInput
          style={styles.input}
          placeholder="월 결제 금액을 입력해 주세요"
          keyboardType="numeric"
        />
        <Text style={styles.label}>월 결제일</Text>
        <TextInput
          style={styles.input}
          placeholder="월 결제일을 입력해 주세요"
          keyboardType="numeric"
        />
      </View>

      {/* 추가 버튼 */}
      <TouchableOpacity style={styles.addButton} onPress={() => alert('목표가 추가되었습니다!')}>
        <Text style={styles.addButtonText}>목표 추가하기</Text>
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
  imageAddContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  imageAddText: {
    fontSize: 14,
    color: '#b0b0b0',
    marginTop: 8,
  },
  inputContainer: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,
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
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default GoalAddScreen;
