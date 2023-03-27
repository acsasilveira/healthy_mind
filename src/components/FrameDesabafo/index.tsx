import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export interface IFrame{
    dataI: string;
    desabafoI: string;
}


export function Frame({dataI,desabafoI}: IFrame){
    return(
        <>
            <View style={styles.quadro}>
                <Text style={styles.text}>{dataI}</Text>
                <Text style={styles.text}>{desabafoI}</Text>
            </View>
        </>
    )
}