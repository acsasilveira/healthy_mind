import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenLogin, ScreenCadastro, ScreenCamera, ScreenPerfil, ScreenPhoto, ScreenMetas, ScreenAddMeta, ScreenLocation, ScreenEditProfile, ScreenEditDesabafo, ScreenEditMeta } from "../screens";
import { TabNavigation } from "./tab.navigation";

type LoginStackParamList = {
  // Define os parâmetros desse tipo de navigation
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
  CameraTake: undefined
  Perfil: undefined
  EditPerfil: undefined
  Photo: undefined | {photo: string}
  Metas: undefined
  AddMeta: undefined
  EditMeta: undefined
  Location: undefined
  EditDesabafo: undefined
};

type LoginScreenNavigation = StackNavigationProp<LoginStackParamList, 'Login' >
export type LoginTypes ={
  navigation: LoginScreenNavigation
}

const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} /* Faz as ligações entre os parâmetros e as páginas */>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastro} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Photo" component={ScreenPhoto} />
      <Stack.Screen name="CameraTake" component={ScreenCamera} />
      <Stack.Screen name="Perfil" component={ScreenPerfil} />
      <Stack.Screen name="EditPerfil" component={ScreenEditProfile} />
      <Stack.Screen name="EditDesabafo" component={ScreenEditDesabafo} />
      <Stack.Screen name="Metas" component={ScreenMetas} />
      <Stack.Screen name="AddMeta" component={ScreenAddMeta} />
      <Stack.Screen name="EditMeta" component={ScreenEditMeta} />
      <Stack.Screen name="Location" component={ScreenLocation} />
    </Stack.Navigator>
  )
}