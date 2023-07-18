import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './screens/about';
const color = "#ba00e5"



const Stack = createNativeStackNavigator()

export default function AboutStack(){
    return(
        
          <Stack.Navigator initialRouteName="AboutScreen">
            <Stack.Screen name="About" component={About} options={{headerShown:false, title: 'About', headerStyle:{backgroundColor:color}, headerTitleStyle:{color:"white"} }}/>
          </Stack.Navigator>
        
    )
}