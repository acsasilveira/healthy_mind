import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    panel: {
        backgroundColor: colors.white,
        margin: 7,
        borderRadius: 20,
        padding: 5
        
    },       
    textData: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 5
    },
    text: {
        fontSize: 15,
        margin: 7
    },
    ladinho: {
        flexDirection: "row",
        alignItems: "center",
    }
})