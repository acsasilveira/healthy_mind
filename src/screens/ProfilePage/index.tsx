import React, { useState } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from "./styles";
import { ComponentLogo, ComponentTitle, ComponentButton} from "./../../components";
import { TabTypes } from "../../navigations/tab.navigation";
import { AntDesign, Ionicons, MaterialIcons, Feather, FontAwesome, Entypo } from  '@expo/vector-icons'
import { colors } from "../../styles/colors";
import { LoginTypes } from '../../navigations/login.navigation';
import { useAuth } from '../../hooks/auth';

export function Perfil({ navigation }: LoginTypes) {
    const [selectedValue, setSelectedValue] = useState("Selecione uma opção");
    const {signOut,user} = useAuth();
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
                    <Text style={styles.texto}>{user?.user.nome}</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Gênero */>
                <View style={styles.ladinho}>
                    <Ionicons name="ios-people-circle" size={30} color={colors.white}/>
                    <Text style={styles.texto}>{user?.user.genero}</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Email */>
                <View style={styles.ladinho}>
                    <MaterialIcons name="email" size={30} color={colors.white}/>
                    <Text style={styles.texto}>{user?.user.email}</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Telefone */>
                <View style={styles.ladinho}>
                    <Feather name="phone" size={30} color={colors.white}/>
                    <Text style={styles.texto}>{user?.user.telefone}</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Aniversário */>
                <View style={styles.ladinho}>
                    <FontAwesome name="birthday-cake" size={30} color={colors.white}/>
                    <Text style={styles.texto}>{user?.user.aniversario}</Text>
                </View>
            </View>
            <View /* Logout */>
                <View style={{margin: 20}}>
                    <TouchableOpacity onPress={() => signOut()}>
                        <AntDesign name="logout" size={30} color={colors.secondary}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}