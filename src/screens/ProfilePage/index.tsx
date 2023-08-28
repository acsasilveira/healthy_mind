import React, { useState } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from "./styles";
import { ComponentLogo, ComponentTitle, ComponentButton} from "./../../components";
import { TabTypes } from "../../navigations/tab.navigation";
import { AntDesign, Ionicons, MaterialIcons, Feather, FontAwesome, Entypo } from  '@expo/vector-icons'
import { colors } from "../../styles/colors";
import { LoginTypes } from '../../navigations/login.navigation';

export function Perfil({ navigation }: LoginTypes) {
    const [selectedValue, setSelectedValue] = useState("Selecione uma opção");
    return (
        <View style={styles.container}>
            <ComponentLogo />
            <View style={styles.ladinho} /* Título e ícone de edição */>
                <ComponentTitle titleI="Perfil" />
                <TouchableOpacity onPress={() => {navigation.navigate('EditPerfil')}}>
                    <AntDesign name="edit" size={30} color={colors.secondary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                    <Entypo name="location-pin" color={colors.secondary} size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.panelDados} /* Nome */>
                <View style={styles.ladinho}>
                    <Ionicons name="person-circle" size={30} color={colors.white} />
                    <Text style={styles.texto}>ACSA SILVEIRA</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Gênero */>
                <View style={styles.ladinho}>
                    <Ionicons name="ios-people-circle" size={30} color={colors.white}/>
                    <Picker>
                            <Picker.Item label="Feminino" value="feminino" />
                            <Picker.Item label="Masculino" value="masculino" />
                            <Picker.Item label="Outros" value="indefinido" />
                    </Picker>
                </View>
            </View>
            <View style={styles.panelDados} /* Email */>
                <View style={styles.ladinho}>
                    <MaterialIcons name="email" size={30} color={colors.white}/>
                    <Text style={styles.texto}>acsa.silveiras@gmail.com</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Telefone */>
                <View style={styles.ladinho}>
                    <Feather name="phone" size={30} color={colors.white}/>
                    <Text style={styles.texto}>(35)98804-9236</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Aniversário */>
                <View style={styles.ladinho}>
                    <FontAwesome name="birthday-cake" size={30} color={colors.white}/>
                    <Text style={styles.texto}>15/12/2005</Text>
                </View>
            </View>
        </View>
    )
}