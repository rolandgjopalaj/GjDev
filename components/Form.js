import React from 'react'
import {useState, useEffect} from "react"
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
    TextInput,
    Pressable
  } from 'react-native'

import axios from 'axios';
const window = Dimensions.get("window")

const Form = ({post, getData}) =>{

    const [comm, setComm] = useState("")

    function makeAComment(){

        const send={
            commento: comm,
            post: post
        } 

        axios.post('http://localhost/addComment', send).then(()=>{
            getData()
            setComm("")
        })
        
    }

    return(
        <>
        <View style={styles.form}>
        <TextInput style={styles.input} 
            placeholder="   Comment somrthing" 
            placeholderTextColor="#DDD" 
            onChangeText={txt => setComm(txt)}
            value={comm}
            />
        <Text >{" "}</Text>
        <Pressable style={styles.btn} onPress={makeAComment}>
            <Text style={styles.btnTxt}>{" >"}</Text>
        </Pressable>
        <Text></Text>
        </View>
        <Text></Text>
        </>
    )    
}

const styles = StyleSheet.create({
    form:{
        left:20,
        flexDirection: "row",
    },
    input:{
        height: 50,
        width: 330,
        backgroundColor: "#0d1117",
        color: "white",
        borderRadius: 50,
    },
    btn:{
        backgroundColor: "#454e57",
        height:25,
        width: 35,
        borderRadius: 25,
        top: 13
    },
    btnTxt:{
        color: "white",
        fontSize:17,
        left: 7
    }
})

export default Form