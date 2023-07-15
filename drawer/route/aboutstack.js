import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main_color } from '../App';
import About from './screens/about';



const Stack = createNativeStackNavigator()

export default function AboutStack(){
    return(
        
          <Stack.Navigator initialRouteName="About">
            <Stack.Screen name="About" component={About} options={{headerShown:false, title: 'About', headerStyle:{backgroundColor:Main_color}, headerTitleStyle:{color:"white"} }}/>
          </Stack.Navigator>
        
    )
}