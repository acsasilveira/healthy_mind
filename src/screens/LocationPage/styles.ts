import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    container2: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
      margin: 20,
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height *0.7
    },
    pesquisaFrame: {
      position: 'absolute',
      zIndex: 1,
      width: '90%',
      top: 500,
    },
    pesquisaConteudo: {
      height: 56, 
      borderRadius:7,
      borderWidth: 2, 
      borderColor: colors.secondary
    },
    ladinho: {
      flexDirection: "row",
      alignItems: "center",
    }
  });