import { Formik } from "formik";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import * as yup from 'yup'
import FlatButton from "../../shared/button";

const NewsSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

export default function ReviewForm({addNews}){
    return(
        <View style={styles.formContainer}>
            <Formik
            initialValues={{ title: '', body: '', rating: ''}}
            validationSchema={NewsSchema }
            onSubmit={(values) => {
                addNews(values)
                console.log(values)
            }}
            >
                {(props) => (
                    <View>

                        <TextInput 
                          style={styles.formInput}
                          placeholder="News title"
                          onChangeText={props.handleChange('title')}
                          value={props.values.title}
                        />
                        <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput 
                          multiline minHeight={60}
                          style={styles.formInput}
                          placeholder="Body"
                          onChangeText={props.handleChange('body')}
                          value={props.values.body}
                        />
                        <Text style={styles.errorText}>{props.touched.body && props.errors.body}</Text>

                        <TextInput 
                          style={styles.formInput}
                          placeholder="Rating"
                          onChangeText={props.handleChange('rating')}
                          value={props.values.rating}
                          keyboardType="numeric"
                        />
                        <Text style={styles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton text="Submit" onPress={props.handleSubmit}/>

                    </View>
                )}

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        margin:10,
        padding:5,
    },
    formInput: {
        marginTop:10,
        padding:10,
        borderColor:"#ba00e5",
        borderWidth:2,
        borderRadius:5,
    },
    errorText: {
        color:"red",
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    }
})