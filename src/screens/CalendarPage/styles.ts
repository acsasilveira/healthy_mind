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
    target: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20
    },
    texto: {
      fontSize: 20,
      color: colors.secondary, 
      marginTop: 5,
      marginBottom: 10
  },
  ladinho :{
    flexDirection: "row",
    alignItems: "center"
  },
  });