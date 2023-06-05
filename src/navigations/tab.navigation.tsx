import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenHome, ScreenAnsiedade, ScreenEstresse, ScreenDesabafo, ScreenLocation} from "../screens";
import { colors } from '../styles/colors';
import { Image, StyleSheet } from 'react-native';
import { Ionicons, Entypo, AntDesign, FontAwesome5, Feather, FontAwesome } from '@expo/vector-icons';
import { styles } from '../components/Logo/styles';
import { color } from 'react-native-reanimated';

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
      tabBarActiveBackgroundColor: colors.primary,
      tabBarActiveTintColor: colors.white,
      tabBarInactiveBackgroundColor: colors.secondary,
      headerShown: false
       }}>
      <Tab.Screen name="Home" component={ScreenHome} options={{
        // Ícone do Home
        tabBarIcon: () => (
          <AntDesign name="home" size={45} color="white" />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Ansiedade" component={ScreenAnsiedade} options={{
        // Ícone da Ansiedade (cérebro)
        tabBarIcon: () => (
          <FontAwesome5 name="brain" size={45} color="white" />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Estresse" component={ScreenEstresse} options={{
        // Ícone do Estresse (nuvem com raio)
        tabBarIcon: () => (
          <Feather name="cloud-lightning" size={45} color="white" />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Desabafo" component={ScreenDesabafo} options={{
        // Ícone do Desabafo (lápis)
        tabBarIcon: () => (
          <FontAwesome name="pencil-square-o" size={45} color="white" />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Location" component={ScreenLocation} options={{
        // Ícone da Localização
        tabBarIcon: () => (
          <Entypo name="location-pin" color="white" size={45} />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Perfil" component={ScreenPerfil} options={{
        // Ícone do Perfil
        tabBarIcon: () => (
          <Ionicons name="person-circle" color="white" size={45} />
        ),
        tabBarShowLabel: false
      }}/>
      
    
    </Tab.Navigator>
  );
}