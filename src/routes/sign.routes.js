import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();

export default function Sign() {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, headerTitle: '' }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
