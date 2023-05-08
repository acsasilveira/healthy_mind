import { View, Text } from 'react-native';
import { styles } from "./styles";
import { ComponentLogo, ComponentTitle, ComponentButton} from "./../../components";
import { TabTypes } from "../../navigations/tab.navigation"

export function Perfil({ navigation }: TabTypes) {
    function handleVoltar() {
        const tab = navigation.getParent()
        tab?.goBack()
    }


    return (
        <View style={styles.container}>
            <ComponentButton onPressI={handleVoltar} title="Voltar" type='login' />
            <ComponentLogo />
            <ComponentTitle titleI="Perfil" />
        </View>
    )
}