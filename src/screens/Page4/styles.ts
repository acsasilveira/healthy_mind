import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary
    },
    buttonSLider: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    frame: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: colors.secondary
    },
    caixaDeTexto: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 4,
        backgroundColor: colors.white,
    },
    button: {
        color: colors.white,
        backgroundColor: colors.secondary,
        borderRadius: 15        
    }
});