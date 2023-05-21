import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenLogin, ScreenCadastro, ScreenCamera, ScreenPerfil, ScreenEdit } from "../screens";
import { TabNavigation } from "./tab.navigation";
import { DrawerNavigation } from "./drawer.navigation";

type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
  Drawer: undefined
  Camera: undefined
  Perfil: undefined
  Edit: undefined
};

type LoginScreenNavigation = StackNavigationProp<LoginStackParamList, 'Login' >
export type LoginTypes ={
  navigation: LoginScreenNavigation
}

const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastro} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="Camera" component={ScreenCamera} />
      <Stack.Screen name="Perfil" component={ScreenPerfil} />
      <Stack.Screen name="Edit" component={ScreenEdit} />
    </Stack.Navigator>
  )
}