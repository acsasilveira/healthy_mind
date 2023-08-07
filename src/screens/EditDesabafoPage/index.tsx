import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { styles } from "./styles";
import { ComponentLogo, ComponentTitle, ComponentButton} from "../../components";
import { LoginTypes } from '../../navigations/login.navigation';
import { colors } from "../../styles/colors";

export function EditarDesabafo({navigation}: LoginTypes) {

    return (
        <View style={styles.container}>
            <ComponentLogo />
            <View style={styles.container2}>
                <ComponentTitle titleI="Editando o desabafo" />
            </View>
            <View style={styles.panelData} /* Data */>
                <Text style={styles.textoDia}>Dia: </Text>
                    <TextInput 
                        placeholder="28 de março"
                        placeholderTextColor={colors.primary}
                        keyboardType="default"
                        autoCapitalize="none"
                        style={styles.textoDia}
                    />
            </View>

            <View style={styles.panel} /* Desabafo */>
                <TextInput 
                    placeholder="Nem mexi no código! Jesus toma conta!"
                    placeholderTextColor={colors.cinza}
                    keyboardType="default"
                    autoCapitalize="none"
                    style={styles.textoCaixa}
                />
            </View>
            <View  style={styles.lugarBotao} /* Botão */>
                <ComponentButton onPressI={() => navigation.navigate('Tab')} title="Salvar" type="geral" />
            </View>
            
        </View>
    )
}