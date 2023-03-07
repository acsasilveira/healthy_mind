import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function Logo() {
    const imagem = require("../../assets/logo.png")

    return(
        <Image source={imagem} style={styles.img} />
    )
}