import React, { useState, useEffect, useRef } from 'react';
import {Calendar, LocaleConfig, Agenda, AgendaList} from 'react-native-calendars';
import { Text, View } from 'react-native';
import { ComponentButton, ComponentLogo, ComponentTitle } from '../../components';
import { styles } from "./styles"
import { colors } from '../../styles/colors';
import { LoginTypes } from '../../navigations/login.navigation';
import { Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function Calendario({navigation} : LoginTypes) {
  const [selected, setSelected] = useState('');

  LocaleConfig.locales['pt-br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abril', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: "Hoje"
  };
  LocaleConfig.defaultLocale = 'pt-br';
  return (
    <View style={styles.container}>
      <ComponentLogo/>
      <View style={styles.container2}>
        <ComponentTitle titleI="Metas" />
      </View>
      <View style={styles.container2}>
         <Text style={styles.texto}>Aqui você vê o quão perto está sua meta</Text>
      </View>
      <Calendar
        monthFormat={'MM yyyy'}
        onDayPress={day => {
          setSelected(day.dateString);
          
        }}
        markedDates={{
          '2023-07-29': {selected: true, selectedColor: colors.primary, marked: true, dotColor: colors.secondary},
          '2023-08-01': {selected: true, selectedColor: colors.primary, marked: true, dotColor: colors.secondary}
        }}
        style={{
          borderWidth: 1,
          borderColor: colors.secondary,
          height: 350
        }}
      />
      <View style={styles.target}>
        <TouchableOpacity onPress={() => navigation.navigate('Metas')}>
          <Foundation name='target-two' size={60} color={colors.secondary}/>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
            <ComponentButton onPressI={() => navigation.navigate('Metas')} title='Sua Lista de Metas' type='voltar'/>
      </View>
    </View>
  );
};
