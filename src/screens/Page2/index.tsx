import { View, TouchableOpacity, Image } from "react-native";
import { IPage } from '../../../App';
import {
    ComponentLogo, ComponentFrase, ComponentTitle
} from '../../components';
import { styles } from './styles';


export function Ansiedade({setPageI}: IPage) {
    const homeIcon = require("../../assets/home.png")
    const ansiedadeIcon = require("../../assets/ansiedade.png")
    const estresseIcon = require("../../assets/estresse.png")
    const desabafoIcon = require("../../assets/desabafo.png")
    
    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Frase Reguladora do dia:" />
            <ComponentFrase fraseI="'Não tente ser sempre forte e perfeito(a)! Seja apenas você mesmo!'" />
            <View style={styles.espaco} />
            <View style={styles.buttonSlider}>
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