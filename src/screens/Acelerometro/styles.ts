import { Dimensions, StyleSheet } from 'react-native';
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    title: {
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: colors.primary,
    },
    text: {
      textAlign: 'center',
      color: colors.white
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: 15
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: colors.secondary,
      padding: 10
    },
    middleButton: {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: colors.white
    },
    fundo: {
      width: "100%",
    }
  });