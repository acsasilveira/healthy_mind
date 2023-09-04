import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, KeyboardAvoidingView, Alert } from "react-native";
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { 
    ComponentLogo, ComponentTitle, ComponentButton,
} from '../../components';
import { styles } from './styles';
import { colors } from "../../styles/colors";
import { LoginTypes } from "../../navigations/login.navigation";
import { useAuth } from "../../hooks/auth";
import { IAuthenticate } from "../../services/data/User";
import { AxiosError } from "axios";


export function Login({navigation}:LoginTypes) {
    const {signIn} = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);
    async function handleSignIn() {
        try {
            setIsLoading(true);
            if (data?.email && data.password) {
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos!!!");
                setIsLoading(false);
            }
        } catch (error) {
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
            setIsLoading(false);
        }
    }
    return(
        <View style={styles.container}>
            <ComponentLogo />
            <View style={styles.container2}>
                <ComponentTitle titleI="Login" />
            </View>
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
                        <TouchableOpacity onPress={() => {}} style={styles.olho}>
                            <Entypo name="eye-with-line" size={24} color={colors.secondary} />
                        </TouchableOpacity>
                        
                    </View>
                </KeyboardAvoidingView>
            </View>

            <View style={styles.linkLugar} /* Link para o cadastrar */>
                <TouchableOpacity onPress={() => {navigation.navigate('Cadastrar')}}>
                    <Text style={styles.text}> Ou crie uma conta... </Text>
                </TouchableOpacity>
            </View>

            <View  style={styles.lugarBotao} /* Botão */>
                <ComponentButton onPressI={() => navigation.navigate('Tab')} title="Entrar" type="login" />
            </View>

            
        </View>
        
    );
}