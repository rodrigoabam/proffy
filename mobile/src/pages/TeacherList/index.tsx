import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api'; 

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles';

function TeacherList(){
  /* states */
  /* buttonFilter  */
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  const[favorites, setFavorites] = useState<number[]>([]);

  /* filter */
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');


  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if(res) {
        const favoritedTeachers = JSON.parse(res);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })
        setFavorites(favoritedTeachersIds);
      }
    })
  }

  /* functions */
  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFiltersVisible);
  }

  async function handleFilterSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
          subject,
          week_day,
          time
      }
  })
  
  setIsFilterVisible(false);
  setTeachers(response.data);
  }

  return (
  <View style={styles.container}>
    <PageHeader 
    title="Proffys disponíveis" 
    headerRight={( 
    <BorderlessButton onPress={handleToggleFiltersVisible}>
      <Feather name="filter" size={20} color="#fff" />
    </BorderlessButton> 
    )}>

      { isFiltersVisible && ( 
        <View style={styles.searchForm}>
            <Text style={styles.label}>Matérias</Text>
            <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual a matéria?"
            value={subject} onChangeText={text => setSubject(text)} />
          <View style={styles.inputGroup}>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o dia?"
              value={week_day} onChangeText={text => setWeekDay(text)} />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual a hora?" 
              value={time} onChangeText={text => setTime(text)} />
            </View>
          </View>
          <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>
          
        </View>
      )}
    </ PageHeader>

    <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
      {teachers.map((teacher: Teacher) => {
        return (
        <TeacherItem 
        key={teacher.id} 
        teacher={teacher} 
        favorited={favorites.includes(teacher.id)}
        />
        
        )
      })}
    </ ScrollView>
  </ View>
  );
}

export default TeacherList;