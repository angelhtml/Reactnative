import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FlatButton({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor:"#ba00e5"
    },
    buttonText: {
        color:"white",
        fontWeight:"bold",
        fontSize: 16,
        textAlign: 'center'
    }
})