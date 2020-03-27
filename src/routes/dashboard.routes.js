import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DeliveryStack from './dashboard.delivery.routes';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
  <Tab.Navigator>
    <Tab.Screen name="DeliveryStack" component={DeliveryStack}></Tab.Screen>
    <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
  </Tab.Navigator>
  );
}
