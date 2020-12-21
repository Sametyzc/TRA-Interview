import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Sale from './Sale';
import Purchase from './Purchase';

export default function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Purchase"
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 14 },
      }}
    >
      <Tab.Screen
        name="Purchase"
        component={Purchase}
        options={{
          tabBarLabel: 'Alış Emirleri',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ focused, size }) => {
            const IcoColor = focused ? 'blue' : 'gray';
            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name="store"
                size={size}
                color={IcoColor}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Sale"
        component={Sale}
        options={{
          tabBarLabel: 'Satış İşlemleri',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ focused, size }) => {
            const IcoColor = focused ? 'blue' : 'gray';
            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name="storefront"
                size={size}
                color={IcoColor}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
