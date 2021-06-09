import React from 'react'
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native'
import {Link} from 'react-router-native'
const window = Dimensions.get("window")

const Nav = ({title}) =>{
    return(
        <>
        <View style={styles.header}>
            <View style={styles.profile}>
            <Link to="/Profile">
                <Text style={styles.text}>Profile</Text>
            </Link> 
            </View>
            <View style={styles.refresh}>
            <Link to="/Refresh">
                <Text style={styles.text}>Refresh</Text>
            </Link> 
            </View>
            <View style={styles.logout}>
            <Link to="/">
                <Text style={styles.text}>Log Out</Text>
            </Link> 
            </View>
        </View>
        </> 
    );
    
};

const styles = StyleSheet.create({
    header:{
        height: window.height/12,
        backgroundColor: "#1d1d1f",
        flexDirection: "row"
    },
    txtView:{
        alignItems: 'center',
    },
    text:{
        color: "#ffffff",
        fontSize: 17
    },
    profile:{
        top: window.height/22,
        left: window.width/20
    },

    refresh:{
        top: window.height/22,
        left: window.width/3.2
    },
    logout:{
        top: window.height/22,
        left: window.width/1.9
    },
})

export default Nav