import React from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchHome = () => {
    return(
        <View style={styles.container}>
            <View style={styles.iconBox}>
                <Pressable
                    onPress={() => alert('ok')}
                >
                    <MaterialIcons name="search" size={20} color="#b0bec5"/>
                </Pressable>
            </View>
            <TextInput placeholder="Type Here ..." style={styles.inputBox} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        flexDirection : 'row', 
        alignSelf : 'center', 
        marginTop : 15
    },

    inputBox : {
        width : '90%', 
        backgroundColor : '#cfd8dc', 
        borderRadius : 20, 
        padding : 0, 
        margin : 0, 
        paddingLeft : 40
    },

    iconBox : {
        position : 'absolute', 
        left : 10, 
        top : 15, 
        zIndex : 1
    }

})

export default SearchHome