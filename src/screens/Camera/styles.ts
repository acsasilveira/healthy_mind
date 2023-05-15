import { Dimensions, StyleSheet } from 'react-native';
import { colors } from "./../../styles/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
      height: Dimensions.get('window').width *0.7,
      width: Dimensions.get('window').width *0.7
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.white,
    },
    img: {
      height: Dimensions.get('window').width *0.7,
      width: Dimensions.get('window').width *0.7
    }
  });