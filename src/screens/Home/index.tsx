import { View } from "react-native";
import { IPage } from '../../../App';
import {
    ComponentButtonSlider ,ComponentLogo, ComponentFrame, ComponentTitle
} from '../../components';
import { styles } from './styles';

export function Home({setPageI}: IPage) {
    const homeIcon = require("../../assets/HomePageIcon.png")
    const ansiedadeIcon = require("../../assets/AnsiedadeIcon.png")
    const estresseIcon = require("../../assets/EstresseIcon.png")
    const desabafoIcon = require("../../assets/DesabafoIcon.png")

    return(
        <View>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Desabafos da Semana:" />
            <View style={styles.panel}>
                <ComponentFrame dataI="27 de março" desabafoI="Estou meio perdida!"/>
            </View>
            <View style={styles.buttonSLider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} icon={homeIcon} />
                <ComponentButtonSlider onPressI={() => setPageI(2)} icon={ansiedadeIcon} />
                <ComponentButtonSlider onPressI={() => setPageI(3)} icon={estresseIcon} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} icon={desabafoIcon} />    
            </View>
        </View>
        
    );
}