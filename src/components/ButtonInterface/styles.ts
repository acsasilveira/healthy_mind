import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    buttonLogin: {
        alignItems: "center",
        backgroundColor: colors.white,
        padding: 10,
        width: "90%",
        margin: 10
    },
    buttonSecondary: {
        backgroundColor: colors.secondary,
        margin: 10,
        borderRadius: 15,
        padding: 10,
        width: "40%"
    },
    textGeral: {
        fontSize: 20,
        textAlign: "center",
        color: colors.primary
    },
    textLogin: {
        color: colors.secondary,
        fontSize: 20
    },
    buttonVoltar: {
        backgroundColor: colors.primary,
        width: "40%",
    },
    textVoltar: {
        color: colors.secondary,
        fontSize: 20
    },
    iconVoltar: {
        color: colors.secondary,
        fontSize: 20
    }

})
