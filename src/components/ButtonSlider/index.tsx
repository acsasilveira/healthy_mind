import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from './styles'

export interface IBSlider {
    onPressI: () => void
    icon: ReactNode
}

export function ButtonSlider({ onPressI, icon }: IBSlider){
    return (
        <TouchableOpacity style={styles.img} onPress={onPressI} />
    )
}