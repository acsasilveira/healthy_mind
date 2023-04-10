import React from "react";
import { View, TouchableOpacity, Image, Text, KeyboardAvoidingView } from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { IPage } from "../../../App";
import { 
    ComponentLogo, ComponentTitle, ComponentButton
} from '../../components';
import { styles } from './styles';
import { colors } from "../../styles/colors";
import { LoginTypes } from "../../navigations/login.navigation";


export function Login({navigation}:LoginTypes) {
    const homeIcon = require("../../assets/home.png")
    const ansiedadeIcon = require("../../assets/ansiedade.png")
    const estresseIcon = require("../../assets/estresse.png")
    const desabafoIcon = require("../../assets/desabafoClick.png")

    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Login" />
            <View style={styles.panel} /* Email */>
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

            <View style={styles.panel} /* Senha */>
                <KeyboardAvoidingView>
                    <View style={styles.ladinho}>
                        <Ionicons  name="md-key-outline" size={24} style={styles.icon} />
                        <TextInput 
                        placeholder="Senha"
                        placeholderTextColor={colors.cinza}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.textoCaixa}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>

            <View style={styles.linkLugar} /* Link para o cadastrar */>
                <TouchableOpacity onPress={() => {navigation.navigate('Cadastrar')}}>
                    <Text style={styles.text}> Ou crie uma conta... </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lugarBotao} /* Botão*/>
                <ComponentButton onPressI={() => {setPageI(1)} title="Entrar" type="geral" />
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