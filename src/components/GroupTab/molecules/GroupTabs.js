// 태그 리스트

import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import GroupTag from '../atoms/GroupTag';

const GroupTabs = () => {
  const [selectedTab, setSelectedTab] = useState('우리가족');
  const tabs = ['우리가족', '대학동창', '여자친구', '새로운 공동관리 추가'];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {tabs.map((tab) => (
        <GroupTag
          key={tab}
          label={tab}
          isSelected={selectedTab === tab}
          onPress={() => setSelectedTab(tab)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  }
});

export default GroupTabs;