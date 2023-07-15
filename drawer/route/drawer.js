import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homestack';
import AboutStack from './aboutstack';
import { Main_color } from '../App';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation screenOptions={{drawerStyle:{backgroundColor:Main_color},drawerActiveTintColor:"white",drawerInactiveTintColor:"silver"}}>
          <Drawer.Screen name="Home" component={HomeStack} options={{headerStyle:{backgroundColor:Main_color},headerTitleStyle:{color:"white"},headerTintColor:"white"}}/>
          <Drawer.Screen name="About" component={AboutStack} options={{headerStyle:{backgroundColor:Main_color},headerTitleStyle:{color:"white"},headerTintColor:"white"}}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}