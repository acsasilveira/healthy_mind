import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from "./../../styles/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary
    },
    container2: {
      alignItems: 'center'
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
      width: "35%",
      alignItems: "flex-end",
      marginRight: 5
    },
    botao3: {
      width: "15%",
      alignItems: "flex-end",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginLeft: 5
    },
    ladinho: {
      flexDirection: "row",
      alignItems: "center"
    },
    setinha: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: 50
    }
  });