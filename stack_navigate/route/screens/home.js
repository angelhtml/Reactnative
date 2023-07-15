import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Main_color } from '../../App';

export default function Home({navigation}){
    const [news, setNews] = useState([
        {title: 'Asia Media', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Business Finance', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Computers Sciencs', rating: 5, body: 'lorem ipsum', key: '3'},
        {title: 'Art', rating: 3, body: 'lorem ipsum', key: '4'},
        {title: 'Health', rating: 4, body: 'lorem ipsum', key: '5'},
        {title: 'Music', rating: 5, body: 'lorem ipsum', key: '6'},
    ])
    return(
        <View>
            <Text>Home...</Text>
            {/*<Button title='go to review det' onPress={() => navigation.navigate("ReviewDetails")}></Button>*/}

            <FlatList data={news} 
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign:"center",
        padding:20,
        backgroundColor:Main_color,
        margin:5,
        color:"white",
    }
})