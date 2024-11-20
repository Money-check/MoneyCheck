// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './navigation/TabNavigator';
import GoalScreen from './pages/Home/GoalScreen'; // GoalScreen 추가
import GoalDetailScreen from './pages/Home/GoalDetailScreen'; // GoalScreen 추가
import SubscriptionScreen from './pages/Home/SubscriptionScreen'; // SubscriptionScreen 추가


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* TabNavigator를 메인 화면으로 설정 */}
        <Stack.Screen name="Main" component={TabNavigator} />
        {/* GoalScreen 추가 */}
        <Stack.Screen name="GoalScreen" component={GoalScreen} />
        <Stack.Screen name="GoalDetail" component={GoalDetailScreen} />
        <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
