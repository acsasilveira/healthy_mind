import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenLogin } from "../screens";

const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ScreenLogin} />
    </Stack.Navigator>
  );
}