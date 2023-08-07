import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    container2: {
        alignItems: 'center'
    },
    buttonSLider: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.secondary,
        height: 100,
        alignItems: "center"
    },
    panelData: {
        backgroundColor: colors.secondary,
        margin: 20,
        padding: 25
        
    },
    panel: {
        backgroundColor: colors.white,
        margin: 20,
        marginTop: 10,
        padding: 25
        
    },
    img: {
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        color: colors.primary,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        padding: 10,
        width: "30%"        
    },
    textoDia: {
        color: colors.primary,
        fontSize: 20
    },
    textoBotao: {
        color: colors.primary,
        fontSize: 20
    },
    textoCaixa: {
        color: colors.black,
        fontSize: 20
    },
    lugarBotao: {
        alignItems: "flex-end",
        marginRight: 25,
        marginBottom: 15
    },
    buttonLogin: {
        alignItems: "center",
        backgroundColor: colors.white,
        padding: 10,
        width: "90%"
    },
    textoBotaoLogin: {
        color: colors.secondary,
        fontSize: 20
    },
    lugarBotaoLogin: {
        alignItems: "center",
        marginBottom: 15,
        marginTop: 20
    },
    camera: {
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});