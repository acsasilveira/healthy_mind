import { View, TouchableOpacity, Image, Text } from "react-native";
import { IPage } from '../../../App';
import {
    ComponentLogo, 
} from '../../components';
import { styles } from './styles';


export function Desabafo({setPageI}: IPage) {
    const homeIcon = require("../../assets/home.png")
    const ansiedadeIcon = require("../../assets/ansiedade.png")
    const estresseIcon = require("../../assets/estresse.png")
    const desabafoIcon = require("../../assets/desabafo.png")
    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <View style={styles.panelData}>
                <Text style={styles.textoDia}>Dia: </Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.textoCaixa}>Escreva seu desabafo...</Text>
                <View style={styles.panel}/>
                <View style={styles.panel}/>
            </View>
            <View style={styles.lugarBotao}>
                <TouchableOpacity onPress={() => {setPageI(1)}} style={styles.button}>
                    <Text style={styles.textoBotao}>Enviar</Text>
                </TouchableOpacity>
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