import { View, TouchableOpacity, Image } from "react-native";
import { IPage } from '../../../App';
import {
    ComponentButtonSlider ,ComponentLogo, ComponentFrame, ComponentTitle
} from '../../components';
import { styles } from './styles';


export function Home({setPageI}: IPage) {
    const homeIcon = require("../../assets/home.png")
    const ansiedadeIcon = require("../../assets/ansiedade.png")
    const estresseIcon = require("../../assets/estresse.png")
    const desabafoIcon = require("../../assets/desabafo.png")

    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Desabafos da Semana:" />
            <View>
                <ComponentFrame dataI="27 de março" desabafoI="Estou meio perdida!"/>
                <ComponentFrame dataI="28 de março" desabafoI="Nem mexi no código! Jesus toma conta!"/>
                <ComponentFrame dataI="31 de março" desabafoI="Foiiii um pouquinho"/>
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


