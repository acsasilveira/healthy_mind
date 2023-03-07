import React, { ReactNode } from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function Rodape(){
    const homeIcon = require("../../assets/HomePageIcon.png")
    const ansiedadeIcon = require("../../assets/AnsiedadeIcon.png")
    const estresseIcon = require("../../assets/EstresseIcon.png")
    const desabafoIcon = require("../../assets/DesabafoIcon.png")
    const icones = Array(homeIcon, ansiedadeIcon, estresseIcon, desabafoIcon);
    for(var i=0; i < 4; i++){
        return(
            <Image source={icones[i]} style={styles.imagem} />
        )
    }
}