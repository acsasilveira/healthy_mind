import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from "./login.navigation";
import { DrawerNavigation } from './drawer.navigation';

export function Navigation() {
  return (
    <NavigationContainer /* Declara que por padrão a primeira página é de login */>
      <LoginNavigation />
    </NavigationContainer>
  );
}