import React from "react";
import { View, TouchableOpacity, Image, Text, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
    ComponentLogo, ComponentButton
} from '../../components';
import { styles } from './styles';
import { colors } from "../../styles/colors";
import { TabTypes } from "../../navigations/tab.navigation"


export function Desabafo({}: TabTypes) {
    const homeIcon = require("../../assets/home.png")
    const ansiedadeIcon = require("../../assets/ansiedade.png")
    const estresseIcon = require("../../assets/estresse.png")
    const desabafoIcon = require("../../assets/desabafoClick.png")
    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <View style={styles.panelData} /* Data */>
                <Text style={styles.textoDia}>Dia: </Text>
                    <TextInput 
                        placeholder="03 de abril..."
                        placeholderTextColor={colors.cinza}
                        keyboardType="default"
                        autoCapitalize="none"
                        style={styles.textoDia}
                    />
            </View>

            <View style={styles.panel} /* Caixa de Texto */>
                <TextInput 
                    placeholder="Escreva seu desabafo..."
                    placeholderTextColor={colors.cinza}
                    keyboardType="default"
                    autoCapitalize="none"
                    style={styles.textoCaixa}
                />
            </View>

            <View style={styles.lugarBotao} /* Botão */>
                <ComponentButton onPressI={() => {}} title="Enviar" type="geral" />
            </View>

            <View style={styles.lugarBotaoLogin} /* Botão para fazer login */> 
                <ComponentButton onPressI={() => {}} title="Entrar" type="login" />
            </View>
        </View>
        
    );
}