import React, { ReactNode } from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface IBSlider {
    onPressI: () => void
    icon: ReactNode
}

export function Rodape(){
    const homeIcon = require("../../assets/HomePageIcon.png")
    const ansiedadeIcon = require("../../assets/AnsiedadeIcon.png")
    const estresseIcon = require("../../assets/EstresseIcon.png")
    const desabafoIcon = require("../../assets/DesabafoIcon.png")
    const icones = Array(homeIcon, ansiedadeIcon, estresseIcon, desabafoIcon);
    
    return(
        <>
        {icones.map((i)=>(
            <TouchableOpacity style={styles.buttonSlider}>
                <Image key={i} source={i} style={styles.imagem} />           
            </TouchableOpacity>
        ))}
        </>
    )
    
}