import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack';

import Delivery from '~/pages/Delivery';
import DeliveryDetail from '~/pages/Delivery/Detail';
import ReportProblem from '~/pages/Delivery/ReportProblem';
import ViewProblem from '~/pages/Delivery/ViewProblem';

const Stack = createStackNavigator();

export default function DeliveryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="DeliveryDetail"
        component={DeliveryDetail}
        options={{
          title: 'Detalhes da encomenda',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
          }
        }}
      />

      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{
          title: 'Informar problema',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
          }
        }}
      />

      <Stack.Screen
        name="DeliViewProblemvery"
        component={ViewProblem}
        options={{
          title: 'Visualizar problemas',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
          }
        }}
      />
    </Stack.Navigator>
  );
}
