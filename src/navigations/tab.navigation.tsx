import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenHome, ScreenAnsiedade, ScreenEstresse, ScreenDesabafo } from "../screens";
import { colors } from '../styles/colors';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TabParamList = {
  Perfil: undefined
  Home: undefined
  Ansiedade: undefined
  Estresse: undefined
  Desabafo: undefined

};

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil' >
export type TabTypes ={
  navigation: TabScreenNavigationProp
}

type HomeScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Home' >
export type HomeTypes ={
  navigation: HomeScreenNavigationProp
}

type AnsiedadeScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Ansiedade' >
export type AnsiedadeTypes ={
  navigation: AnsiedadeScreenNavigationProp
}

type EstresseScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Estresse' >
export type EstresseTypes ={
  navigation: EstresseScreenNavigationProp
}

type DesabafoScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Desabafo' >
export type DesabafoTypes ={
  navigation: DesabafoScreenNavigationProp
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
      <Tab.Screen name="Perfil" component={ScreenPerfil} options={{
        tabBarIcon: () => (
          <Ionicons name="person-circle" />
        ),
        tabBarShowLabel: false
      }}/>
    
    </Tab.Navigator>
  );
}