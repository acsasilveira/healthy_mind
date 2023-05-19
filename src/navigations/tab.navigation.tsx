import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenHome, ScreenAnsiedade, ScreenEstresse, ScreenDesabafo, ScreenCamera } from "../screens";
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
        tabBarIcon: () => (
          <AntDesign name="home" size={45} color="white" />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Ansiedade" component={ScreenAnsiedade} options={{
        tabBarIcon: () => (
          <FontAwesome5 name="brain" size={45} color="white" />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Estresse" component={ScreenEstresse} options={{
        tabBarIcon: () => (
          <Feather name="cloud-lightning" size={45} color="white" />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Desabafo" component={ScreenDesabafo} options={{
        tabBarIcon: () => (
          <FontAwesome name="pencil-square-o" size={45} color="white" />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Camera" component={ScreenCamera} options={{
        tabBarIcon: () => (
          <Entypo name="camera" color="white" size={45} />
        ),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Perfil" component={ScreenPerfil} options={{
        tabBarIcon: () => (
          <Ionicons name="person-circle" color="white" size={45} />
        ),
        tabBarShowLabel: false
      }}/>
      
    
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  img: {
    width: 5,
    height: 5
  }
})