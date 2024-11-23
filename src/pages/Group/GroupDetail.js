import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GroupDetailTemplate } from '../../components/GroupTab';

const GroupDetail = () => {
    const goals = [
        {
            title: "호텔 뷔페",
            emoji: "🍽️",
            level: 1,
            progress: 0.7
        },
        {
            title: "미국여행",
            emoji: "🇺🇸",
            level: 1,
            progress: 0.4
        }
    ];

    return (
        <View style={styles.container}>
            <GroupDetailTemplate goals={goals} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default GroupDetail;
