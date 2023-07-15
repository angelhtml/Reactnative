import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import MyDrawer from './route/drawer';
import 'react-native-gesture-handler';
import HomeStack from './route/homestack';
export const Main_color = "#ba00e5"


export default function App() {

  return (
    <View style={{flex:1}}>
      <MyDrawer />
    </View>
  );
}

