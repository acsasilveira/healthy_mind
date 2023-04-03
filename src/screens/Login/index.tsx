import React from "react";
import { View, TouchableOpacity, Image, Text, KeyboardAvoidingView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { IPage } from '../../../App';
import {
    ComponentLogo, ComponentTitle 
} from '../../components';
import { styles } from './styles';
import { colors } from "../../styles/colors";


export function Login({setPageI}: IPage) {
    const homeIcon = require("../../assets/home.png")
    const ansiedadeIcon = require("../../assets/ansiedade.png")
    const estresseIcon = require("../../assets/estresse.png")
    const desabafoIcon = require("../../assets/desabafoClick.png")

    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Login" />
            <View style={styles.panel}>
                <KeyboardAvoidingView>
                    <View style={styles.ladinho}>
                        <MaterialIcons name="email" style={styles.icon} />
                        <TextInput 
                        placeholder="E-mail"
                        placeholderTextColor={colors.cinza}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.textoCaixa}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>

            <View style={styles.lugarBotao}>
                <TouchableOpacity onPress={() => {setPageI(1)}} style={styles.button}>
                    <Text style={styles.textoBotao}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonSLider}>
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