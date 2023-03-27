import React, { ReactNode } from "react";
import { Image } from "react-native";
import { ButtonSlider } from "../ButtonSlider";
import { styles } from "./styles";

export function Rodape(){
    const homeIcon = require("../../assets/HomePageIcon.png")
    const ansiedadeIcon = require("../../assets/AnsiedadeIcon.png")
    const estresseIcon = require("../../assets/EstresseIcon.png")
    const desabafoIcon = require("../../assets/DesabafoIcon.png")
    const icones = Array(homeIcon, ansiedadeIcon, estresseIcon, desabafoIcon);
    
    return(
        <>
        {icones.map((i)=>(
            <ButtonSlider>
            <Image key={i} source={i} style={styles.imagem} />
            </ButtonSlider>
        ))}
        </>
    )
    
}