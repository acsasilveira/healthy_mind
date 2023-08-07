import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface IFrame{
    dataI: string;
    desabafoI: string;
    onPressN: undefined | void;
}


export function Frame({dataI,desabafoI, onPressN}: IFrame ){
    return(
        <>
            <View style={styles.panel}>
                <View style={styles.ladinho}>
                    <Text style={styles.textData}>{dataI}</Text>
                    <TouchableOpacity onPress={() => {onPressN}}>
                        <AntDesign name="edit" size={20} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>{desabafoI}</Text>
            </View>
        </>
    )
}