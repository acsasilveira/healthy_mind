import { Text } from "react-native";
import { styles } from "./styles";

export interface ITitle{
    titleI: string
}

export function Title({ titleI }: ITitle) {
    return(
        <Text style={styles.text}>{titleI}</Text>
    )
}