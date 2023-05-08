import React from 'react';
import { View, TouchableOpacity, Image } from "react-native";
import {
    ComponentLogo, ComponentFrame, ComponentTitle
} from '../../components';
import { styles } from './styles';
import { TabTypes } from "../../navigations/tab.navigation"


export function Home({ navigation }: TabTypes) {
    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Desabafos da Semana:" />
            <View /* Frames */>
                <ComponentFrame dataI="27 de março" desabafoI="Estou meio perdida!"/>
                <ComponentFrame dataI="28 de março" desabafoI="Nem mexi no código! Jesus toma conta!"/>
                <ComponentFrame dataI="31 de março" desabafoI="Foiiii um pouquinho"/>
            </View>
        </View>
        
    );
}


