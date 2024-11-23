import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GroupManagement from '../pages/Group/GroupManagement';
import GroupDetail from '../pages/Group/GroupDetail';

const Stack = createStackNavigator();

const GroupStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="GroupManagement" 
        component={GroupManagement}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="GroupDetail" 
        component={GroupDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default GroupStackNavigator;