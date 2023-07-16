import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default function Header({navigation,title}){
    return(
        <ImageBackground source={require("../assets/game_bg.png")}>
            <View style={styles.header}>
                <Icon style={styles.icon} name="bars" size={35} color="#ba00e5" onPress={() => navigation.openDrawer()}/>
                <View style={styles.headerTitle}>
                    <Image source={require("../assets/bytes-logo.png")} style={styles.headerImage}/>
                    <Text style={styles.txt}>{title}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height:65,
        marginTop:15,
        borderBottomColor:"#ba00e5",
        borderBottomWidth:1
    },
    txt: {
        fontSize:20,
        color:"#ba00e5",
    },
    icon: {
        position:"absolute",
        left:16,
    },
    headerImage:{
        width:28,
        height:28,
        resizeMode:"contain",
        marginHorizontal:10
    },
    headerTitle: {
        flexDirection:"row"
    }
})