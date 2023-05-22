import React from "react";
import { View, TouchableOpacity, Image, Text, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
    ComponentLogo, ComponentButton
} from '../../components';
import { styles } from './styles';
import { colors } from "../../styles/colors";
import { Entypo } from '@expo/vector-icons'
import { LoginTypes } from "../../navigations/login.navigation";


export function Desabafo({navigation}:LoginTypes) {
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
                        placeholderTextColor={colors.primary}
                        keyboardType="default"
                        autoCapitalize="none"
                        style={styles.textoDia}
                    />
            </View>

            <View style={styles.panel} /* Desabafo */>
                <TextInput 
                    placeholder="Escreva seu desabafo..."
                    placeholderTextColor={colors.black}
                    keyboardType="default"
                    autoCapitalize="none"
                    style={styles.textoCaixa}
                />
                < TouchableOpacity onPress={() => navigation.navigate('Photo')} style={styles.camera}  /* Câmera */>
                    <Entypo name="camera" size={35} color={colors.secondary} />
                </TouchableOpacity>
            </View>

            <View style={styles.lugarBotao} /* Botão */>
                <ComponentButton onPressI={() => {}} title="Enviar" type="geral" />
            </View>

        </View>
        
    );
}