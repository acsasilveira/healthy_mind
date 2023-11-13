import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, KeyboardAvoidingView, Alert, ScrollView } from "react-native";
import { MaterialIcons, Ionicons, Entypo, Feather, FontAwesome } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';
import {
    ComponentLogo, ComponentTitle, ComponentButton, ComponentLoading
} from '../../components';
import { styles } from './styles';
import { colors } from "../../styles/colors";
import { LoginTypes } from "../../navigations/login.navigation";
import { IRegister } from "../../services/data/User";
import { Picker } from "@react-native-picker/picker";
import { apiUser } from "../../services/data";
import { AxiosError } from "axios";

export interface IErrorApi {
    errors: {
        rule: string
        field: string
        message: string
    }[]
}

export function Cadastro({ navigation }: LoginTypes) {

    const [data, setData] = useState<IRegister>();
    const [selectedGender, setSelectedGender] = useState<IRegister>();
    const [isLoading, setIsLoading] = useState(true);
    async function handleRegister() {
        try {
            setIsLoading(true)

            if(data?.nome && data?.email && data?.telefone && data?.genero && data?.aniversario && data?.password) {
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.nome} cadastrado(a)!!`)
                navigation.navigate('Login')
            } else {
                Alert.alert(`Você não preencheu todos os campos!`)
            }
        } catch (error) {
            const err = error as AxiosError
            const errData = err.response?.data as IErrorApi
            console.log(errData);
            console.log(err);
            let message = ""
            if(errData) {
                for (const iterator of errData.errors){
                    message = `${message} ${iterator.message} \n`
                }
            }
            Alert.alert(message)
        } finally{
            setIsLoading(false)
        }
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item })
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    return (
        <>
            {isLoading ? (
                <ComponentLoading />
            ) : (
                <ScrollView>
                    <View style={styles.container}>
                        <ComponentLogo />
                        <View style={styles.container2}>
                            <ComponentTitle titleI="Cadastre-se" />
                        </View>
                        <View style={styles.panel} /* Nome */>
                            <KeyboardAvoidingView>
                                <View style={styles.ladinho}>
                                    <Ionicons name="person-circle" style={styles.icon} />
                                    <TextInput
                                        placeholder="Nome"
                                        onChangeText={(i) => handleChange({ nome: i })}
                                        placeholderTextColor={colors.cinza}
                                        autoCapitalize="none"
                                        style={styles.textoCaixa}
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </View>

                        <View style={styles.panel} /* Email */>
                            <KeyboardAvoidingView>
                                <View style={styles.ladinho}>
                                    <MaterialIcons name="email" style={styles.icon} />
                                    <TextInput
                                        placeholder="E-mail"
                                        onChangeText={(i) => handleChange({ email: i })}
                                        placeholderTextColor={colors.cinza}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        style={styles.textoCaixa}
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </View>

                        <View style={styles.panel} /* Telefone */>
                            <KeyboardAvoidingView>
                                <View style={styles.ladinho}>
                                    <Feather name="phone" style={styles.icon} />
                                    <TextInput
                                        placeholder="99999-9999"
                                        onChangeText={(i) => handleChange({ telefone: i })}
                                        placeholderTextColor={colors.cinza}
                                        autoCapitalize="none"
                                        keyboardType="decimal-pad"
                                        style={styles.textoCaixa}
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </View>

                        <View style={styles.panel} /* Aniversário */>
                            <KeyboardAvoidingView>
                                <View style={styles.ladinho}>
                                    <FontAwesome name="birthday-cake" style={styles.icon}/>
                                    <TextInput
                                        placeholder="01/01/2000"
                                        onChangeText={(i) => handleChange({ aniversario: i })}
                                        placeholderTextColor={colors.cinza}
                                        autoCapitalize="none"
                                        keyboardType="name-phone-pad"
                                        style={styles.textoCaixa}
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </View>

                        <View style={styles.panel} /* Gênero */>
                                <View style={styles.ladinho}>
                                    <Ionicons name="ios-people-circle" style={styles.icon} />
                                    <Picker 
                                    selectedValue={selectedGender}
                                    onValueChange={(itemValue, itemIndex) =>
                                    {setSelectedGender(itemValue)
                                        handleChange({ genero: String(itemValue)})
                                        }
                                    }
                                    style={styles.ladoALado}>
                                        <Picker.Item label="Feminino" value="feminino" />
                                        <Picker.Item label="Masculino" value="masculino" />
                                        <Picker.Item label="Outros" value="indefinido" />
                                    </Picker>
                                </View>
                        </View>

                        <View style={styles.panel} /* Senha */>
                            <KeyboardAvoidingView>
                                <View style={styles.ladinho}>
                                    <Ionicons name="md-key-outline" size={24} style={styles.icon} />
                                    <TextInput
                                        placeholder="Senha"
                                        onChangeText={(i) => handleChange({ password: i })}
                                        placeholderTextColor={colors.cinza}
                                        secureTextEntry={true}
                                        autoCapitalize="none"
                                        style={styles.textoCaixa}
                                    />
                                    <TouchableOpacity onPress={() => { }} style={styles.olho}>
                                        <Entypo name="eye-with-line" size={24} color={colors.secondary} />
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        </View>

                        <View>
                            
                        </View>
                        <View style={styles.ladoALado}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Login') }} /* Voltar */>
                                <Ionicons name="caret-back-circle" size={40} color={colors.white} />
                            </TouchableOpacity>
                            <View /* Botão */>
                                <ComponentButton onPressI={handleRegister} title="Entrar" type="login" />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            )}
        </>
    );
}