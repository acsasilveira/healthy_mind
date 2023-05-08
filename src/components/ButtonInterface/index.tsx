import React from 'react'
import { TouchableOpacity,TouchableOpacityProps, Text } from 'react-native'
import { styles } from './styles'
export interface IBInterface extends TouchableOpacityProps{
    onPressI: () => void
    title: string
    type: "login" | "geral" | "voltar"
}
export function ButtonInterface({ onPressI, title, type }: IBInterface) {
    return (
        <TouchableOpacity style={
            // Testa qual o tipo de botão para saber qual o estilo do botão
            type == "login" ? styles.buttonLogin :  
                type == "geral" ? styles.buttonSecondary : styles.buttonVoltar
        } onPress={onPressI}
        >
            <Text style={
                // Testa qual o tipo de botão para saber qual o estilo do texto
                type =="login" ? styles.textLogin : 
                    type == "geral" ? styles.textGeral : styles.textVoltar
                }>{title}</Text>
        </TouchableOpacity>
    )
}