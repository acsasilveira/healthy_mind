import { View, Text } from "react-native";
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
            <View style={styles.texto}>
                <Text>1. Respire fundo</Text>
                <Text>2. Conte até 37</Text>
                <Text>3. Estale os dedos</Text>
                <Text>4. Relaxe o pescoço</Text>
                <Text>5. Mude o ponto de vista</Text>
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