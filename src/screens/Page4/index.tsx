import React from "react";
import { View, TouchableOpacity, Image, Text, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { IPage } from '../../../App';
import {
    ComponentLogo, ComponentButton
} from '../../components';
import { styles } from './styles';
import { colors } from "../../styles/colors";


export function Desabafo({setPageI}: IPage) {
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
                <ComponentButton onPressI={() => {setPageI(1)}} title="Enviar" type="geral" />
            </View>

            <View style={styles.lugarBotaoLogin} /* Botão para fazer login */> 
                <ComponentButton onPressI={() => {setPageI(5)}} title="Entrar" type="login" />
            </View>

            <View style={styles.buttonSLider} /* Rodapé */>
                <TouchableOpacity onPress={() => {setPageI(1)}} style={styles.img}>
                    <Image source={homeIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setPageI(2)}} style={styles.img}>
                    <Image source={ansiedadeIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setPageI(3)}} style={styles.img}>
                    <Image source={estresseIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setPageI(4)}} style={styles.img}>
                    <Image source={desabafoIcon} />
                </TouchableOpacity>
            </View>
        </View>
        
    );
}