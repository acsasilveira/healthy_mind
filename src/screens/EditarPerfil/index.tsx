import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { styles } from "./styles";
import { ComponentLogo, ComponentTitle, ComponentButton} from "./../../components";
import { LoginTypes } from '../../navigations/login.navigation';
import { Ionicons, MaterialIcons, Feather, FontAwesome, Entypo } from  '@expo/vector-icons'
import { colors } from "../../styles/colors";

export function EditarPerfil({navigation}: LoginTypes) {

    return (
        <View style={styles.container}>
            <ComponentLogo />
                <ComponentTitle titleI="Perfil" />
                
            <View style={styles.panelDados} /* Email */>
                <View style={styles.ladinho}>
                    <View style={styles.ladinho}>
                        <Ionicons name="person-circle" size={30} color={colors.white} />
                        <Text style={styles.texto}>ACSA SILVEIRA</Text>
                        <Entypo name='lock' size={20} color={colors.white} />
                    </View>
                </View>
            </View>
            <View style={styles.panelDados} /* Data */>
                <View style={styles.ladinho}>
                    <MaterialIcons name="email" size={30} color={colors.white}/>
                    <Text style={styles.texto}>acsa.silveiras@gmail.com</Text>
                    <Entypo name='lock' size={20} color={colors.white} />
                </View>
            </View>
            
            <View style={styles.panelDados} /* Data */>
                <KeyboardAvoidingView>
                    <View style={styles.ladinho}>
                        <Feather name="phone" size={30} color={colors.white}/>
                        <TextInput 
                        placeholder="(35)98804-9236"
                        placeholderTextColor={colors.cinza}
                        autoCapitalize="none"
                        style={styles.texto}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
            <View style={styles.panelDados} /* Data */>
                <KeyboardAvoidingView>
                    <View style={styles.ladinho}>
                        <FontAwesome name="birthday-cake" size={30} color={colors.white}/>
                        <TextInput 
                        placeholder="15/12/2005"
                        placeholderTextColor={colors.cinza}
                        autoCapitalize="none"
                        style={styles.texto}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
            <View style={styles.panelDados} /* Data */>
                <KeyboardAvoidingView>
                    <View style={styles.ladinho}>
                        <Ionicons  name="md-key-outline" size={30} color={colors.white} />
                        <TextInput 
                        placeholder="******"
                        placeholderTextColor={colors.cinza}
                        autoCapitalize="none"
                        style={styles.texto}
                        />
                        <TouchableOpacity onPress={() => {}}>
                            <Entypo name="eye-with-line" size={24} color={colors.white} style={styles.olho} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
            <View  style={styles.lugarBotao} /* Botão */>
                <ComponentButton onPressI={() => navigation.navigate('Tab')} title="Salvar" type="geral" />
            </View>
            
        </View>
    )
}