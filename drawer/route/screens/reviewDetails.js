import { View, Text, Button, StyleSheet } from 'react-native';
import { Main_color } from '../../App';

export default function ReviewDetails({route ,navigation}){
    const data = route.params;
    //console.log(data)
    return(
        <View>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.container}>
                <Text style={styles.txtContainer}>{data.body}</Text>
                <Text style={styles.txtContainer}>Rating:{data.rating}</Text>
            </View>
            <Button title='go to home' onPress={() => navigation.goBack()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize:25,
        textAlign:"center",
        padding:10,
        color:Main_color
    },
    container: {
        padding:15,
    },
    txtContainer: {
        color:"black",
        fontSize:20,
    }
})