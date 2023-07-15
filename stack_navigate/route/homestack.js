import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/home"
import ReviewDetails from './screens/reviewDetails';
import { Main_color } from '../App';



const Stack = createNativeStackNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ title: 'My home', headerStyle:{backgroundColor:Main_color}, headerTitleStyle:{color:"white"} }}/>
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}