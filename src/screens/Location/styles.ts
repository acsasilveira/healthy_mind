import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
      margin: 20,
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height *0.8
    }
  });