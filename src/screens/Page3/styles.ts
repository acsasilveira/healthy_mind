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
    texto: {
        fontSize: 35,
        font: colors.secondary
       
    }
});