import React from 'react'
import {View,
    Text,
    Button,
    StyleSheet,
    useColorScheme,
    StatusBar,
    ScrollView,
    ImageBackground,
    Image,
    Dimensions,
  } from 'react-native'

const window = Dimensions.get("window")

const Comment = ({data}) =>{

    return(
        <>
            <View style={styles.commArea}>
                <View style={styles.username}>
                    <Image style={styles.userIcon} source={{uri: data.foto,}}/>
                    <Text style={styles.usernameTxt}>{data.username}</Text>
                    <Text style={styles.usernameTxt}>{"     "+data.data}</Text>
                </View>
            </View>
            <Text style={styles.commText}> {data.contenuto} </Text>
            
        </>
    )    
}

const styles = StyleSheet.create({
    commArea:{
        backgroundColor: "#161b22",
        borderRadius: 50,
        left: window.width/9,
        width: window.width/1.15,
        height: window.height/12,
    },
    commText:{
        color: "white",
        left: window.width/8,
        backgroundColor: "#0d1117",
        width: window.width/1.2,
        fontSize: 17,
    },
    dateText:{
        color: "white",
        left: 50,
    },
    userIcon:{
        width: window.width/8,
        height: window.height/18,
        borderRadius: 50,
        top: window.height/560,
    },usernameTxt:{
        color: "#ffffff",
        fontSize: 17,
        top: 15,
        left: 10,
    },
    username:{
        flexDirection: "row"
    },
})

export default Comment