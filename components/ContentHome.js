import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Pressable, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {addTodo,doneTodo,removeTodo} from './redux/action/reducer'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const ContentHome = ({navigation}) => {
    const [changed, setChanged] = useState(false);
    const isFocused = useIsFocused();
    const todos = useSelector((state) => state.todo.list); // todo is name of the slice in the createSlice 
    const dispatch = useDispatch();
    
    // Perform any required side-effects here 
    useEffect(() => { 
        }, [isFocused]);

    const handleDoneItem = (value) => {
            dispatch(doneTodo({
                id: value.id ,
                status:value.status=='incomplete'?'complete':'incomplete'
            }))
                setChanged(!changed)
             };

    const handleAddItem = (item) => { 
        dispatch(addTodo({ 
            id: item.id,
            title: item.title,
            status: item.status 
        }));
        setChanged(!changed) };
    return(
        <View style={styles.container}>
            <ScrollView>
                {
                     todos.map((item, id) => (
                        console.log(todos),
                        item.status == 'incomplete' ? 
                            <View key={id}>
                                <View style={styles.itemBox}>
                                    <View style={{flexDirection : 'row'}}>
                                        <Pressable
                                            onPress={() => {
                                                handleDoneItem(item);
                                                setChanged(!changed)
                                                
                                            }}
                                            style={{marginLeft : 20}}
                                        >
                                            <MaterialIcons name="radio-button-unchecked" size={22} color="#e57373" />
                                        </Pressable>

                                        <View>
                                            <View>
                                                <Text style={{color : '#000', marginLeft : 15, fontWeight : 'bold'}}>{item.title}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Pressable 
                                            onPress={() => navigation.navigate('Detail Todo', { values : item})}
                                            style={{marginRight : 20}}
                                        >
                                            <MaterialIcons name="arrow-forward-ios" size={22} color="#e57373"/>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>

                            :

                                // <View/>
                                
                                    <View key={id}>
                                        <View style={[styles.itemBox, {backgroundColor : '#eeeeee'}]}>
                                            <View style={{flexDirection : 'row'}}>
                                                <Pressable
                                                    onPress={() => {
                                                        
                                                        handleDoneItem(item);
                                                        setChanged(!changed);
                                                    }}
                                                    style={{marginLeft : 20}}
                                                >
                                                    <MaterialIcons name="check-circle" size={22} color="#e57373" />
                                                </Pressable>
            
                                                <View>
                                                    <View>
                                                        <Text style={{color : '#000', marginLeft : 15, fontWeight : 'bold', textDecorationLine : 'line-through'}}>{item.title}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                
                            ))
                         }

            </ScrollView>
            <View style={styles.navBotton}>
                <Pressable
                    onPress={() =>navigation.navigate('Add Todo')}
                >
                    <Foundation name="plus" size={20} color="#fff" />
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 12, 
        width : '100%',
        alignSelf : 'center',
        backgroundColor : '#fff'
    },

    itemBox : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingTop : 25,
        paddingBottom : 25,
        marginBottom : 0.5,
        backgroundColor : '#ffebee'
    },

    navBotton : {
        position : 'absolute',
        bottom : 35,
        right : 25,
        justifyContent : 'center',
        alignItems : 'center',
        width : 40,
        height : 40,
        borderRadius : 40,
        backgroundColor : '#e57373'
    }

})

// export default connect(mapStateToProps, {Add_Todo, Remove_Todo})(ContentBox)

export default ContentHome