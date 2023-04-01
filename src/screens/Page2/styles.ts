import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    buttonSlider: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.secondary,
        height: 100,
        alignItems: "center"
    },
    espaco: {
        margin: 133.5
    },
    img: {
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    }
});