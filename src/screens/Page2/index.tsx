import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import {
    ComponentLogo, ComponentFrase, ComponentTitle
} from '../../components';
import { styles } from './styles';
import { TabTypes } from "../../navigations/tab.navigation"


export function Ansiedade({}: TabTypes) {  
    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Frase Reguladora do dia:" />
            <ComponentFrase fraseI="'Não tente ser sempre forte e perfeito(a)! Seja apenas você mesmo!'" />
        </View>
        
    );
}