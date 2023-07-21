import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Tabs from './new/tabs';


export default function App() {

  return (
    <View style={{flex:1}}>
      <Tabs />
    </View>
  );
}

