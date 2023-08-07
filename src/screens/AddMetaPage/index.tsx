import React from "react";
import { View, TouchableOpacity, Image, Text, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
    ComponentLogo, ComponentButton, ComponentTitle
} from '../../components';
import { styles } from './styles';
import { colors } from "../../styles/colors";
import { Entypo } from '@expo/vector-icons'
import { LoginTypes } from "../../navigations/login.navigation";
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

export function AddMeta({navigation}:LoginTypes) {

    return(
        <View style={styles.container}>
            <ComponentLogo />
            <View style={styles.container2}>
                <View style={styles.ladinho}>
                    <TouchableOpacity onPress={() => navigation.navigate('Metas')}>
                        <Ionicons name="caret-back-circle" size={40} color={colors.secondary} />
                    </TouchableOpacity>
                    <ComponentTitle titleI="Nova Meta" />
                </View>
            </View>
            <View style={styles.panelData} /* Data */>
                <Text style={styles.textoDia}>DATA LIMITE: </Text>
                    <TextInput 
                        placeholder="03/10/2023"
                        placeholderTextColor={colors.primary}
                        keyboardType="default"
                        inputMode="numeric"
                        style={styles.textoDia}
                    />
            </View>

            <View style={styles.panel} /* Meta */>
                <Text style={styles.textoMeta}>Nome da Meta: </Text>
                <TextInput 
                    placeholder="Dê um nome à sua meta..."
                    placeholderTextColor={colors.cinza}
                    keyboardType="default"
                    autoCapitalize="none"
                    style={styles.textoCaixa}
                />
            </View>

            <View style={styles.lugarBotao} /* Botão */>
                <ComponentButton onPressI={() => navigation.navigate('Metas')} title="Salvar" type="geral" />
            </View>

        </View>
        
    );
}