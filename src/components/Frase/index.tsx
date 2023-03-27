import { Text } from "react-native";
import { styles } from "./styles";

export interface IFrase{
    fraseI: string
}

export function Frase({ fraseI }: IFrase) {
    return(
        <Text style={styles.text}>{fraseI}</Text>
    )
}