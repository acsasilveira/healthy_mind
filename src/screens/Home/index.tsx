import { View } from "react-native";
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentLogo, ComponentRodape, ComponentFrame, ComponentTitle
} from '../../components';
import { styles } from './styles';


export function Home({setPageI}: IPage) {
        return(
        <View style={styles.container}>
            <ComponentLogo></ComponentLogo>
            <ComponentTitle titleI="Desabafos da Semana:" />
            <ComponentFrame dataI="27 de março" desabafoI="Estou meio perdida!"/>
            <ComponentRodape />
        </View>
        
    );
}