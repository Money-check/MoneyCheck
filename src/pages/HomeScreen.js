import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import PagerView from 'react-native-pager-view';
import CustomHeader from '../components/CustomHeader';
import GoalCard from '../components/Home/GoalCard';
import SubscriptionCard from '../components/Home/SubscriptionCard';

const { width: screenWidth } = Dimensions.get('window');

const HomeScreen = () => {
  // 목표 데이터
  const goals = [
    {
      id: '1',
      title: '맥북',
      level: 1,
      progress: 50,
      status: '목표를 위해 가는 중',
      image: require('../assets/applewatch.png'),
    },
    {
      id: '2',
      title: '애플워치',
      level: 1,
      progress: 30,
      status: '목표를 위해 가는 중',
      image: require('../assets/applewatch.png'),
    },
  ];

  // 구독 데이터
  const subscriptions = [
    { id: '1', title: 'Netflix', price: 12000 },
    { id: '2', title: 'Spotify', price: 8000 },
  ];

  return (
    <View style={styles.container}>
      {/* 상단 커스텀 헤더 */}
      <CustomHeader title="Home" />

      {/* 목표 목록 (뷰페이저) */}
      <Text style={styles.sectionTitle}>목표 목록</Text>
      <PagerView style={styles.pagerView} initialPage={0}>
        {goals.map((goal, index) => (
          <View key={index} style={styles.page}>
            <GoalCard
              title={goal.title}
              level={goal.level}
              progress={goal.progress}
              status={goal.status}
              image={goal.image}
            />
          </View>
        ))}
      </PagerView>

      {/* 구독 목록 */}
      <Text style={styles.sectionTitle}>구독 목록</Text>
      <FlatList
        data={subscriptions}
        renderItem={({ item }) => (
          <SubscriptionCard title={item.title} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#222',
  },
  pagerView: {
    height: 250,
    marginBottom: 16,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
  },
  list: {
    marginBottom: 16,
  },
});

export default HomeScreen;
