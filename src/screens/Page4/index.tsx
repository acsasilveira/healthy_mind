import { View } from "react-native";
import { IPage } from '../../../App';
import {
    ComponentLogo, ComponentButtonSlider, ComponentFrase, ComponentTitle
} from '../../components';
import { styles } from './styles';


export function Desabafo({setPageI}: IPage) {
    const homeIcon = require("../../assets/HomePageIcon.png")
    const ansiedadeIcon = require("../../assets/AnsiedadeIcon.png")
    const estresseIcon = require("../../assets/EstresseIcon.png")
    const desabafoIcon = require("../../assets/DesabafoIcon.png")
    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <form method="post" action="">
                <label htmlFor="data">Dia: </label>
                <input type={"text"} name="data" id="data" style={styles.frame} placeholder="20 de março..." />
                <label htmlFor="desabafo"></label>
                <input type={"text"} name="desabafo" id="desabafo" style={styles.frame} placeholder="Escreva seu desabafo..." />
                <button type="submit" style={styles.button}>Enviar</button>
            </form>
            <View style={styles.buttonSLider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} icon={homeIcon} />
                <ComponentButtonSlider onPressI={() => setPageI(2)} icon={ansiedadeIcon} />
                <ComponentButtonSlider onPressI={() => setPageI(3)} icon={estresseIcon} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} icon={desabafoIcon} />    
            </View>
        </View>
        
    );
}