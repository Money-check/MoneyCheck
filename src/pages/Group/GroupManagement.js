//공동 관리 탭 화면
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GroupManagement = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subtitle}>공동관리 팀 만들기</Text>
        <Text style={styles.title}>지금 바로 공동관리를 시작해 보세요!</Text>
        
        <Image 
          source={require('../../../assets/Jiyoon/Group/coin.png')} 
          style={styles.image}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('GroupDetail')}
        >
          <View style={styles.buttonContent}>
            <Image 
              source={require('../../../assets/Jiyoon/Group/start.png')} 
              style={styles.buttonIcon} 
            />
            <Text style={styles.buttonText}>공동관리 시작하기</Text>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#009984',
    fontWeight: 'bold',
    fontFamily: 'SF Pro',
    marginBottom: 8,
    textAlign: 'left',
  },
  title: {
    fontSize: 22,
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontFamily: 'SF Pro',
    marginBottom: 40,
    textAlign: 'left',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#00AB96',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginRight: 12,
  },
});

export default GroupManagement;
