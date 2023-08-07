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
    panel: {
        backgroundColor: colors.white,
        margin: 20,
        marginTop: 10,
        padding: 10,
        borderRadius: 5
        
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
        width: "40%"        
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
        marginRight: 25,
        marginBottom: 15
    },
    icon: {
        fontSize: 28,
        color: colors.secondary,
        padding: 5
    },
    ladinho :{
        flexDirection: "row",
        alignItems: "center"
    },
    ladoALado: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: '100%'
    },
    olho: {
        justifyContent: "flex-end",
        marginLeft: 25
    }
});