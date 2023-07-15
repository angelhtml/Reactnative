import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({navigation}){
    return(
        <View>
            <Text>Home...</Text>
            <Button title='go to review det' onPress={() => navigation.navigate("ReviewDetails")}></Button>
        </View>
    )
}