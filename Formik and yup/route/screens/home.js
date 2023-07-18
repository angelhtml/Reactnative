import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Modal, ScrollView, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import ReviewForm from './reviewForm';
const color = "#ba00e5"

export default function Home({navigation}){
    const [modalOpen, setModalOpen] = useState(false)

    const [news, setNews] = useState([
        {title: 'Asia Media', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Business Finance', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Computers Sciencs', rating: 5, body: 'lorem ipsum', key: '3'},
        {title: 'Art', rating: 3, body: 'lorem ipsum', key: '4'},
        {title: 'Health', rating: 4, body: 'lorem ipsum', key: '5'},
        {title: 'Music', rating: 5, body: 'lorem ipsum', key: '6'},
    ])

    //add news
    const addNews = (addednews) => {
        addednews.key = Math.random().toString()
        setNews((currentNews) => {
            return [addednews, ...currentNews]
        })
        setModalOpen(false)
    } 
    return(
        <View style={{flex:1}}>
            <Text style={styles.homeTitle}>Home Screen</Text>

            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{height:"100%"}}>
                    <Icon onPress={() => setModalOpen(!modalOpen)} name="closecircle" size={35} color={color} style={styles.plusIcon}/>
                        <Text style={{padding:15,fontSize:20,color:color,fontWeight:800}}>Add News</Text>
                        <ReviewForm addNews={addNews}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Icon onPress={() => setModalOpen(!modalOpen)} name="pluscircle" size={35} color={color} style={styles.plusIcon}/>

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
    homeTitle: {
        fontSize:25,
        textAlign:"center",
        margin:15,
        fontWeight:800,
        color:"#ba00e5"
    },
    title: {
        fontSize: 25,
        textAlign:"center",
        padding:20,
        backgroundColor:color,
        margin:5,
        color:"white",
        borderRadius:15,
    },
    plusIcon: {
        textAlign:"center",
        margin:15,
    }
})