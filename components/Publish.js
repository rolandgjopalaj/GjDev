import React from 'react'
import {useState, useEffect} from "react"
import {View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    Pressable
  } from 'react-native'

import axios from 'axios';
const window = Dimensions.get("window")

const Publish = ({getData}) =>{

    const [post, setPost] = useState("")
    function makeAPost(){
       if(post!=""){
        axios.post('http://localhost/addPost', {contenuto: post,}).then(()=>{
            getData()
            setPost("")
        })
       }
    }
    return(
        <>
        <Text></Text>
        <View style={styles.form}>
        <TextInput style={styles.input} 
            placeholder="   Post somrthing" 
            placeholderTextColor="#DDD" 
            onChangeText={txt => setPost(txt)}
            value={post}
            />
        <Text >{" "}</Text>
        <Pressable style={styles.btn} onPress={makeAPost}>
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

export default Publish