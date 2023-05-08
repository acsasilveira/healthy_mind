import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { ScreenPerfil} from "../screens";


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
    <Drawer.Navigator>
      <Drawer.Screen name="Perfil" component={ScreenPerfil} />
    </Drawer.Navigator>
  );
}