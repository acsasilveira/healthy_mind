import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary
    },
    panel: {
        flex: 1,
        marginTop: 40,
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: colors.white
    },
    buttonSLider: {
        flexDirection: "row",
        justifyContent: 'space-around'
    }
});