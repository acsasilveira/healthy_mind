import React from 'react';
import { View } from "react-native";
import {
    ComponentLogo, ComponentFrame, ComponentTitle
} from '../../components';
import { styles } from './styles';
import { TabTypes } from "../../navigations/tab.navigation"
import { LoginTypes } from '../../navigations/login.navigation';


export function Home({}: TabTypes, {navigation}: LoginTypes) {
    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <View style={styles.container2}>
                <ComponentTitle titleI="Desabafos da Semana:" />
            </View>
            <View /* Frames */>
                <ComponentFrame dataI="27 de março" desabafoI="Estou meio perdida!" onPressN={navigation.navigate('EditDesabafo')}/>
                <ComponentFrame dataI="28 de março" desabafoI="Nem mexi no código! Jesus toma conta!" onPressN={navigation.navigate('EditDesabafo')}/>
                <ComponentFrame dataI="31 de março" desabafoI="Foiiii um pouquinho" onPressN={navigation.navigate('EditDesabafo')}/>
                <ComponentFrame dataI="21 de maio" desabafoI="Estou extremamente feliz! Está mara!! Falta só o backend pra rodar ;)" onPressN={navigation.navigate('EditDesabafo')}/>
                <ComponentFrame dataI="26 de junho" desabafoI="Ai meu Deus!! Tá ficando lindo" onPressN={navigation.navigate('EditDesabafo')}/>
            </View>
        </View>
        
    );
}


