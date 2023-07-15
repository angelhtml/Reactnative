import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
//import Sandbox from './component/sandbox';
//import Nav from './component/nav';
import Navigator from './route/homestack'


export default function App() {
  const icons = ["❤", "💙"]
  const [icon, setIcon] = useState(icons[0])
  const [txt, setTxt] = useState("App.js")
  const [data, setData] = useState([
    {name: "kiwi", _id: 0},
    {name: "banna", _id: 1},
    {name: "carrot", _id: 2},
    {name: "leek", _id: 3},
    {name: "pineapple", _id: 4},
    {name: "melon", _id: 5},
    {name: "onion", _id: 6},
  ])
  return (
    <View style={{flex:1}}>
      {/*<ScrollView><Sandbox /></ScrollView>*/}
      {/*<Nav />*/}
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mybutton: {
    width:100,
    padding: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width:200,
    margin: 20,
    borderRadius: 5,
  },
  item: {
    padding: 10,
    fontWeight: 90,
    backgroundColor: 'gray',
    margin: 20,
    width: 300
  }
});
