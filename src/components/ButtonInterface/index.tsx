import React from 'react'
import { TouchableOpacity,TouchableOpacityProps, Text } from 'react-native'
import { styles } from './styles'
export interface IBInterface extends TouchableOpacityProps{
    onPressI: () => void
    title: string
    type: "login" | "geral" 
}
export function ButtonInterface({ onPressI, title, type }: IBInterface) {
    return (
        <TouchableOpacity style={
            // Testa qual o tipo de botão para saber qual o estilo do botão
            type == "login" ? styles.buttonLogin :  styles.buttonSecondary
        } onPress={onPressI}
        >
            <Text style={
                // Testa qual o tipo de botão para saber qual o estilo do texto
                type =="login" ? styles.textLogin : styles.textGeral
                }>{title}</Text>
        </TouchableOpacity>
    )
}