import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

export interface ITopicos{
    topicosI: string
}

export function Topicos({ topicosI }: ITopicos) {
    return(
        <Text style={styles.text}>{topicosI}</Text>
    )
}