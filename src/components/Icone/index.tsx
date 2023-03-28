import React, { ReactNode } from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

export interface IBSlider {
    onPressI: () => void
    icon: ReactNode
}

export function Rodape(){
    return(
        <View style={styles.imagem} />
    )
    
}