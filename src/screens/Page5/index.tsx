import React from "react";
import { IPage } from "../../../App";
import { Navigation } from "../../navigations";
import { TouchableOpacity} from "react-native";
import { ComponentLogo } from "../../components";
import { styles } from './styles';

export function Page5({setPageI}:IPage){
    return(
        <>
            <TouchableOpacity onPress={() => setPageI(1)} style={styles.container}>
                    <ComponentLogo></ComponentLogo>
            </TouchableOpacity>
            <Navigation />
        </>
    )
}