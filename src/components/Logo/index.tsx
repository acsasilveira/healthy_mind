import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export function logo() {
    const imagem = require("../../assets/logo.png")

    return(
        <Image source={imagem} style={styles.img} />
    )
}