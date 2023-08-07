import { StyleSheet } from 'react-native';
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.primary
    },
    ladinho :{
        flexDirection: "row",
        alignItems: "center"
    },
    panelDados: {
        backgroundColor: colors.secondary,
        margin: 10,
        marginBottom: 7,
        padding: 10
        
    },
    texto:{
        color: colors.white,
        fontSize: 20,
        marginLeft: 20
    }
})