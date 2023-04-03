import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from "./login.navigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      <LoginNavigation />
    </NavigationContainer>
  );
}