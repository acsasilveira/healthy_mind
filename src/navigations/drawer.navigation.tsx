import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { ScreenCamera, ScreenPerfil, ScreenLogin, ScreenCadastro} from "../screens";
import { colors } from '../styles/colors';
import { color } from 'react-native-reanimated';


type DrawerParamList = {
  Perfil: undefined
};

type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Perfil' >
export type DrawerTypes ={
  navigation: DrawerScreenNavigationProp
}

export function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: colors.primary
      },
      drawerInactiveTintColor: colors.white,
      drawerActiveTintColor: colors.secondary
    }}>
      <Drawer.Screen name="Login" component={ScreenLogin} />
      <Drawer.Screen name="Cadastro" component={ScreenCadastro} />
    </Drawer.Navigator>
  );
}