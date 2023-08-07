import React from 'react';
import { TouchableOpacity, View } from "react-native";
import {
    ComponentLogo, ComponentFrame, ComponentTitle
} from '../../components';
import { styles } from './styles';
import { LoginTypes } from '../../navigations/login.navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';


export function Metas({navigation}: LoginTypes) {
    return(
        <View style={styles.container}>
            <ComponentLogo />
            <View style={styles.container2}>
                <View style={styles.ladinho}>
                    <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
                        <Ionicons name="caret-back-circle" size={40} color={colors.secondary} />
                    </TouchableOpacity>
                    <ComponentTitle titleI="Lista de Metas" />
                    <TouchableOpacity onPress={() => navigation.navigate('AddMeta')}>
                        <MaterialIcons name="post-add" size={40} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
            </View>
            <View /* Frames */>
                <ComponentFrame dataI="25/07/2023" desabafoI="Fazer 10 agradecimentos" onPressN={navigation.navigate('EditMeta')}/>
                <ComponentFrame dataI="01/08/2023" desabafoI="Meditar por 30 minutos" onPressN={navigation.navigate('EditMeta')} />
            </View>
        </View>
        
    );
}


