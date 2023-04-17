import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenLogin, ScreenCadastro } from "../screens";

type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
};

type LoginScreenNavigation = StackNavigationProp<LoginStackParamList, 'Login' >
export type LoginTypes ={
  navigation: LoginScreenNavigation
}

type CadastroScreenNavigation = StackNavigationProp<LoginStackParamList, 'Cadastrar' >
export type CadastroTypes ={
  navigation: CadastroScreenNavigation
}

const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastro} />
    </Stack.Navigator>
  );
}