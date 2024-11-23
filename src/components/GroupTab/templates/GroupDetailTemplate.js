// 공동관리 페이지 템플릿

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import GroupTabs from '../molecules/GroupTabs';
import TransactionSummary from '../organisms/TransactionSummary';
import GoalCard from '../organisms/GoalCard';

const GroupDetailTemplate = ({ goals }) => (
  <ScrollView style={styles.container}>
    <GroupTabs />
    <TransactionSummary />
    <View style={styles.goalContainer}>
      {goals.map((goal, index) => (
        <GoalCard 
          key={index}
          title={goal.title}
          emoji={goal.emoji}
          level={goal.level}
          progress={goal.progress}
        />
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  goalContainer: {
    padding: 16,
  }
});

export default GroupDetailTemplate;