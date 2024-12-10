import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TodoHeader = ({navigation}) => {
    return(
        <View style={styles.container}>
                <Pressable
                    style={{marginLeft : 25}}
                    onPress={() => navigation.navigate('Home')}
                >
                    <MaterialIcons name="arrow-back" size={25} color="#e57373"/>
                </Pressable>
            <Text style={styles.headerText}>ADD TODO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        flexDirection : 'row', 
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    headerText : {
        fontWeight : 'bold',
        fontSize : 18,
        marginRight : 25
    }

})

export default TodoHeader