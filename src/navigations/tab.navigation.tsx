import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenHome, ScreenAnsiedade, ScreenEstresse, ScreenDesabafo, ScreenCamera } from "../screens";
import { colors } from '../styles/colors';
import { Image } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

type TabParamList = {
  Perfil: undefined
  Home: undefined
  Ansiedade: undefined
  Estresse: undefined
  Desabafo: undefined
  Camera: undefined

};

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil' >
export type TabTypes ={
  navigation: TabScreenNavigationProp
}

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    const homeIcon = require("../assets/home.png")
    const ansiedadeIcon = require("../assets/ansiedade.png")
    const estresseIcon = require("../assets/estresse.png")
    const desabafoIcon = require("../assets/desabafo.png")

  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveBackgroundColor: colors.secondary,
      tabBarActiveTintColor: colors.white,
      headerShown: false
       }}>
      <Tab.Screen name="Home" component={ScreenHome} options={{
        tabBarIcon: () => (
          <Image source={homeIcon}/>
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Ansiedade" component={ScreenAnsiedade} options={{
        tabBarIcon: () => (
          <Image source={ansiedadeIcon}/>
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Estresse" component={ScreenEstresse} options={{
        tabBarIcon: () => (
          <Image source={estresseIcon}/>
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Desabafo" component={ScreenDesabafo} options={{
        tabBarIcon: () => (
          <Image source={desabafoIcon}/>
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Camera" component={ScreenCamera} options={{
        tabBarIcon: () => (
          <Entypo name="camera" colors={colors.white} size={24} />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Perfil" component={ScreenPerfil} options={{
        tabBarIcon: () => (
          <Ionicons name="person-circle" />
        ),
        tabBarShowLabel: false
      }}/>
      
    
    </Tab.Navigator>
  );
}