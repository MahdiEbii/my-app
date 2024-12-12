// import { StyleSheet, Text, View } from 'react-native';
// import DetailTodo from '../components/DetailTodo';

// export default function DetailScreen(props) {
//   return (
//     <View style={styles.container}>
//         <DetailTodo {...props} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {useState,useEffect} from 'react';
import {StyleSheet, View, Text, Pressable, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import reducerSlice, { addTodo } from './redux/action/reducer'
import { useDispatch, useSelector } from 'react-redux';
import { doneTodo } from '../components/redux/action/reducer';


const DetailScreen = (props) => {
    const {route} = props
    const {values}=route.params
    const [titleInput, setTitleInput] = useState(values.title);
    const [descriptionInput, setDecriptionInput] = useState(values.description);
    const dispatch = useDispatch()
    const todos= useSelector(props=>props.todo.list) 

    useEffect(() => {
        // console.log(values)
        // console.log(route.params)
         if (route.params?.values) {
             setTitleInput(route.params.values.title);
             setDecriptionInput(route.params.values.description || '');
             } }, [route.params?.values]);

    const TitleChenged = (value) => {
        setTitleInput(value)
    }

    const DescriptionChanged = (value) => {
        setDecriptionInput(value)
    }

    const TodoSubmitting = () => {
        const data = {
            id: values.id,
            title : titleInput,
            description : descriptionInput,
            status : values.status
        }
        let index = todos.indexOf(data)
        if(index >=0){
            todos.splice(index ,1)
            todos(data)
        }
        dispatch(doneTodo(data))
        // props.reducerSlice?.list(data)||[]
        props.navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.introTitle}>Change your Todo</Text>
            <View style={styles.inputBox}>
                <View>
                    <TextInput placeholder="Title" style={styles.input} onChangeText={(value) => TitleChenged(value)} value={titleInput}/>
                    <TextInput multiline numberOfLines={5} placeholder="Description" style={styles.input} onChangeText={(value) => DescriptionChanged(value)} value={descriptionInput} />
                </View>
                <Pressable
                    style={styles.saveBotton}
                    onPress={() => {
                        TodoSubmitting();
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
        padding : 10,
        width:'90%'
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
        borderRadius : 10,
        textAlign:'center'
    },

    input : {
        width : '100%',
        alignSelf : 'center',
        backgroundColor : '#b0bec5',
        borderRadius : 10,
        marginTop : 15
    }



})

export default DetailScreen
