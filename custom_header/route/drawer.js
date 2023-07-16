import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homestack';
import AboutStack from './aboutstack';
import Header from '../shared/header';
import Icon from 'react-native-vector-icons/AntDesign';
const color = "#ba00e5"

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation screenOptions={{drawerIcon:() => <Icon name="exclamationcircle" size={20} color="white" />,drawerStyle:{backgroundColor:color},drawerActiveTintColor:"white",drawerInactiveTintColor:"silver"}}>
          <Drawer.Screen name="Home" component={HomeStack} options={({navigation}) => {return{header:() => <Header navigation={navigation} title={"home header"}/>}}} />
          <Drawer.Screen name="About" component={AboutStack} options={({navigation}) => {return{header:() => <Header navigation={navigation} title={"about header"}/>}}}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}