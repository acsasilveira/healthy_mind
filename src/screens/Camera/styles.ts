import { Dimensions, StyleSheet } from 'react-native';
import { colors } from "./../../styles/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').width,
      justifyContent: 'flex-end'
      
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.white,
    },
    img: {
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').width
    },
    botao1: {
      width: "60%",
      alignItems: "flex-end"
    },
    botao2: {
      width: "40%",
      alignItems: "flex-end"
    },
    ladinho: {
      flexDirection: "row",
      alignItems: "center"
    }
  });