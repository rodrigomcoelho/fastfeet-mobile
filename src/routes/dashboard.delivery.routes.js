import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack';

import Delivery from '~/pages/Delivery';
import DeliveryDetail from '~/pages/Delivery/Detail';
import ReportProblem from '~/pages/Delivery/ReportProblem';
import ViewProblem from '~/pages/Delivery/ViewProblem';

const Stack = createStackNavigator();

export default function DeliveryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, headerTitle: '' }} >
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="DeliveryDetail" component={DeliveryDetail} />
      <Stack.Screen name="ReportProblem" component={ReportProblem} />
      <Stack.Screen name="DeliViewProblemvery" component={ViewProblem} />
    </Stack.Navigator>
  );
}
