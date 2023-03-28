import { View } from "react-native";
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentLogo, ComponentRodape, ComponentFrase, ComponentTitle
} from '../../components';
import { styles } from './styles';



export function Estresse({setPageI}: IPage) {

    const homeIcon = require("../../assets/HomePageIcon.png")
    const ansiedadeIcon = require("../../assets/AnsiedadeIcon.png")
    const estresseIcon = require("../../assets/EstresseIcon.png")
    const desabafoIcon = require("../../assets/DesabafoIcon.png")

    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Siga o passo a passo:" />
            <ComponentFrase fraseI="Conte até 37" />
            <View>
                <ComponentButtonSlider onPressI={() => setPageI(1)} icon={homeIcon} />
                <ComponentButtonSlider onPressI={() => setPageI(2)} icon={ansiedadeIcon} />
                <ComponentButtonSlider onPressI={() => setPageI(3)} icon={estresseIcon} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} icon={desabafoIcon} />    
            </View>
        </View>
        
    );
}