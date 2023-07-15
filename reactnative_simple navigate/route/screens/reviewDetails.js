import { View, Text, Button, StyleSheet } from 'react-native';

export default function ReviewDetails({navigation}){
    return(
        <View>
            <Text>Review Details...</Text>
            <Button title='go to home' onPress={() => navigation.navigate("Home")}></Button>
        </View>
    )
}