import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MenuHome = () => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection : 'row'}}>
                <Ionicons name="checkmark-done" size={18} color="#e57373" />
                <Text style={[styles.remainBox, {marginLeft : 15}]}>Remain : </Text>
                <Text style={styles.remainBox}>4</Text>
            </View>
            <View style={styles.itemBox}>
                <View style={[styles.item, {borderRightWidth : 1, borderRightColor : '#bddbdb'}]}>
                    <Text style={{fontWeight : 'bold', fontSize : 12, marginRight : 15}}>All</Text>
                </View>

                <View style={[styles.item, {borderRightWidth : 1, borderRightColor : '#bddbdb'}]}>
                    <Text style={{fontWeight : 'bold', fontSize : 12, marginRight : 15}}>Active</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontWeight : 'bold', fontSize : 12}}>Completed</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        flexDirection : 'row',
        width : '90%',
        alignSelf : 'center',
        backgroundColor : '#fff',
        marginTop : 20,
        justifyContent : 'space-between'
    },

    remainBox : {
        fontWeight : 'bold',
        fontSize : 12
    },

    itemBox : {
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },

    item : {
        paddingLeft : 15,
        height : 15,
        alignItems : 'center'
    }

})

export default MenuHome