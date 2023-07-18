import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import MyDrawer from './route/drawer';
import 'react-native-gesture-handler';


export default function App() {

  return (
    <View style={{flex:1}}>
      <MyDrawer />
    </View>
  );
}

