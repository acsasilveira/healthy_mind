import { Dimensions, StyleSheet } from 'react-native';
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.primary
    },
    camera: {
      flex: 1,
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').width,
      justifyContent: "flex-end"
      
    },
    camera2: {
      flex: 1,
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').width,
      justifyContent: "center",
      alignItems: "center"
      
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.white,
    },
    img: {
      height: "100%",
      width: Dimensions.get('window').width
    },
    botao1: {
      width: "50%",
      alignItems: "flex-end"
    },
    botao2: {
      width: "25%",
      alignItems: "flex-end",
      marginRight: 5
    },
    botao3: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginLeft: 5,
      marginTop: 50
    },
    ladinho: {
      flexDirection: "row",
      alignItems: "center"
    },
    ladinho2: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: 10,
      marginRight: 10,
      marginTop: 15
    },
    setinha: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: 50
    }
  });