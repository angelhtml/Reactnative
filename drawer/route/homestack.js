import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/home"
import ReviewDetails from './screens/reviewDetails';
import { Main_color } from '../App';



const Stack = createNativeStackNavigator()

export default function HomeStack(){
    return(
        
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown:false, title: 'My home', headerStyle:{backgroundColor:Main_color}, headerTitleStyle:{color:"white"} }}/>
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
          </Stack.Navigator>
        
    )
}