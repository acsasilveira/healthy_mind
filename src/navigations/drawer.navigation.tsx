import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { ScreenCamera, ScreenPerfil} from "../screens";
import { Ionicons, Entypo } from '@expo/vector-icons';
import { colors } from '../styles/colors';


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
      <Drawer.Screen name="Perfil" component={ScreenPerfil}
      options={{
        drawerIcon: () => (
          <Ionicons name="person-circle" />
        )
      }} />
      <Drawer.Screen name="Camera" component={ScreenCamera}
      options={{
        drawerIcon: () => (
          <Entypo name="camera" size={24} color={colors.white} />
        )
      }} />
  
    </Drawer.Navigator>
  );
}