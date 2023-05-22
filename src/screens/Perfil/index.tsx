import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import { ComponentLogo, ComponentTitle, ComponentButton} from "./../../components";
import { TabTypes } from "../../navigations/tab.navigation";
import { AntDesign, Ionicons, MaterialIcons, Feather, FontAwesome } from  '@expo/vector-icons'
import { colors } from "../../styles/colors";
import { LoginTypes } from '../../navigations/login.navigation';

export function Perfil({ navigation }: LoginTypes) {

    return (
        <View style={styles.container}>
            <ComponentLogo />
            <View style={styles.ladinho} /* Título e ícone de edição */>
                <ComponentTitle titleI="Perfil" />
                <TouchableOpacity onPress={() => {navigation.navigate('Edit')}}>
                    <AntDesign name="edit" size={30} color={colors.secondary} />
                </TouchableOpacity>
            </View>
            <View style={styles.panelDados} /* Nome */>
                <View style={styles.ladinho}>
                    <Ionicons name="person-circle" size={30} color={colors.white} />
                    <Text style={styles.texto}>ACSA SILVEIRA</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Email */>
                <View style={styles.ladinho}>
                    <MaterialIcons name="email" size={30} color={colors.white}/>
                    <Text style={styles.texto}>acsa.silveiras@gmail.com</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Telefone */>
                <View style={styles.ladinho}>
                    <Feather name="phone" size={30} color={colors.white}/>
                    <Text style={styles.texto}>(35)98804-9236</Text>
                </View>
            </View>
            <View style={styles.panelDados} /* Aniversário */>
                <View style={styles.ladinho}>
                    <FontAwesome name="birthday-cake" size={30} color={colors.white}/>
                    <Text style={styles.texto}>15/12/2005</Text>
                </View>
            </View>
        </View>
    )
}