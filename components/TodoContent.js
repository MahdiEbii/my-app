import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { addTodo } from './redux/action/reducer'
import { useDispatch } from 'react-redux';

const TodoContent = (props) => {
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDecriptionInput] = useState('');
    const dispatch = useDispatch()

    const TitleChenged = (value) => {
        setTitleInput(value)
    }

    const DescriptionChanged = (value) => {
        setDecriptionInput(value)
    }

    const TodoSubmitting = () => {
        const data = {
            id: Date.now().toString(),
            title : titleInput,
            description : descriptionInput,
            status : 'incomplete'
        }
        dispatch(addTodo(data))
        // props.reducerSlice?.list(data)||[]
        props.navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.introTitle}>Enter the item you want to follow in the future!</Text>
            <View style={styles.inputBox}>
                <View>
                    <TextInput placeholder="Title" style={styles.input} onChangeText={(value) => TitleChenged(value)} value={titleInput}/>
                    <TextInput multiline numberOfLines={5} placeholder="Description" style={styles.input} onChangeText={(value) => DescriptionChanged(value)} value={descriptionInput} />
                </View>
                <Pressable
                    style={styles.saveBotton}
                    onPress={() => {
                        TodoSubmitting();
                        console.log(TodoSubmitting)
                        // props.navigation.navigate('Home');
                    }}
                >
                    <MaterialIcons name="save-alt" size={25} color="#fff"/>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 10, 
        padding : 10
    },

    inputBox : {
        flex : 10,
        backgroundColor : '#cfd8dc',
        marginTop : 5,
        borderRadius : 10,
        padding : 10
    },

    item : {
        fontWeight : 'bold'
    }, 

    saveBotton : {
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#377e3c',
        borderRadius : 10,
        alignSelf : 'center',
        position : 'absolute',
        bottom : 25,
        padding : 5
    },

    introTitle : {
        fontWeight : 'bold',
        fontSize : 16,
        padding : 10,
        backgroundColor : '#e57373',
        borderRadius : 10
    },

    input : {
        width : '100%',
        alignSelf : 'center',
        backgroundColor : '#b0bec5',
        borderRadius : 10,
        marginTop : 15
    }



})

// export default connect(mapStateToProps, {Add_Todo})(TodoContent)
export default TodoContent








// onChangeText={(value) => TitleChenged(value)} value={titleInput}
// onChangeText={(value) => DescriptionChanged(value)} value={descriptionInput}