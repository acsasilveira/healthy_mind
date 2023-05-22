import React from 'react';
import { View } from "react-native";
import {
    ComponentLogo, ComponentFrame, ComponentTitle
} from '../../components';
import { styles } from './styles';
import { TabTypes } from "../../navigations/tab.navigation"


export function Home({}: TabTypes) {
    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <View style={styles.container2}>
                <ComponentTitle titleI="Desabafos da Semana:" />
            </View>
            <View /* Frames */>
                <ComponentFrame dataI="27 de março" desabafoI="Estou meio perdida!"/>
                <ComponentFrame dataI="28 de março" desabafoI="Nem mexi no código! Jesus toma conta!"/>
                <ComponentFrame dataI="31 de março" desabafoI="Foiiii um pouquinho"/>
                <ComponentFrame dataI="21 de maio" desabafoI="Estou extremamente feliz! Está mara!! Falta só o backend pra rodar ;)"/>
            </View>
        </View>
        
    );
}


