import { View } from "react-native";
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentLogo, ComponentRodape, ComponentFrase, ComponentTitle
} from '../../components';
import { styles } from './styles';


export function Ansiedade({setPageI}: IPage) {
    return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Frase Reguladora do dia:" />
            <ComponentFrase fraseI="'Não tente ser sempre forte e perfeito(a)! Seja apenas você mesmo!'" />
            <ComponentRodape />
        </View>
        
    );
}