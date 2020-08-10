import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{ 
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          width: 2,
          height: 22,

          flex: 0,
        },
        labelStyle: {
          marginLeft: 16,

          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32364d'
       }}
    
    >
      <Screen name="TeacherList" component={TeacherList} 
      options={{ tabBarLabel:'Proffys', 
      tabBarIcon: ({ color, size, focused }) => {
        return (
          <Ionicons name="ios-easel" size={size} color={focused ? '#023E7D' : color} />
        );
      } }} />

      <Screen name="Favorites" component={Favorites} 
      options={{ tabBarLabel:'Favoritos', 
      tabBarIcon: ({ color, size, focused }) => {
        return (
          <Ionicons name="ios-heart" size={size} color={focused ? '#DF0209' : color} />
        );
      } }}
      />
    </Navigator>
  );
}

export default StudyTabs;