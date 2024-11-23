// 목표 카드 (호텔 뷔페, 미국여행 등)

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Badge from '../atoms/Badge';
import GoalStatus from '../molecules/GoalStatus';

const GoalCard = ({ title, emoji, level, progress }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Badge level={level} backgroundColor="#DFF7F6" textColor="#00B9A5" />
      </View>
    </View>
    <View style={styles.progressContainer}>
      <Image 
        source={require('../../../../assets/Jiyoon/Group/namu.png')} 
        style={styles.treeImage} 
      />
      <GoalStatus progress={progress} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  emoji: {
    fontSize: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  progressContainer: {
    alignItems: 'center',
  },
  treeImage: {
    width: 40,
    height: 40,
    marginBottom: 50,
    resizeMode: 'contain'
  },
  progressText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  }
});

export default GoalCard;