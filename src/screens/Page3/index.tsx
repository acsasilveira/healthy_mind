import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { IPage } from '../../../App';
import {
      ComponentLogo, ComponentTitle
} from '../../components';
import { styles } from './styles';



export function Estresse({setPageI}: IPage) {

    const homeIcon = require("../../assets/home.png")
    const ansiedadeIcon = require("../../assets/ansiedade.png")
    const estresseIcon = require("../../assets/estresseClick.png")
    const desabafoIcon = require("../../assets/desabafo.png")

    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Siga o passo a passo:" />
            <View>
                <Text style={styles.texto}>1. Respire fundo</Text>
                <Text style={styles.texto}>2. Conte até 37</Text>
                <Text style={styles.texto}>3. Estale os dedos</Text>
                <Text style={styles.texto}>4. Relaxe o pescoço</Text>
                <Text style={styles.texto}>5. Mude o ponto de vista</Text>
            </View>
            <View style={styles.espaco} />
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