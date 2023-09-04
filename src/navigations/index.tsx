import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from "./login.navigation";
import {useAuth} from "../hooks/auth"
import { TabNavigation } from './tab.navigation';

export function Navigation() {
  const { user } = useAuth();
  return (
    <NavigationContainer /* Declara que por padrão a primeira página é de login */>
      {user?.token ? <TabNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
}