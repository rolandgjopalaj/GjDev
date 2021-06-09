import React from 'react'
import {View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
  } from 'react-native'
  import Comment from './Comment'
  import Form from './Form'

const window = Dimensions.get("window")

const Post = ({dataPost, comments, getData}) =>{
    return(
        <>
        <Text></Text>
        <View style={styles.commArea}>
            <View style={styles.comment}>
                <View style={styles.username}>
                    <Image style={styles.userIcon} source={{uri: dataPost.foto,}}/>
                    <Text style={styles.usernameTxt}>{dataPost.username}</Text>
                </View>
                <Text></Text>
                <Text style={styles.dateText}>{dataPost.data}</Text>
            </View>
            <Text></Text>
            <Text style={styles.commText}> {dataPost.contenuto} </Text>
            <Text style={{color:"#2c343f"}}> ___________________________________________________</Text>
            <Text style={{color:"white", fontSize:17, left:  20}}>Comments :</Text>
            <Text style={{color:"#2c343f"}}> ___________________________________________________</Text>
        

            {comments.map((comm)=>(
            <View key={comm.codice}>
                <Text></Text>
                <Comment  data={comm}/>
            </View>
        ))}
        <Text style={{color:"#2c343f"}}> ___________________________________________________</Text>
        <Text></Text>
        <Form key={dataPost.codice} post={dataPost.codice} getData={getData}/>
        </View>    
        </>
    )    
}

const styles = StyleSheet.create({
    comment:{
        
    },
    commArea:{
        backgroundColor: "#161b22",
        borderRadius: 5,
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
        left: 10
    },
    username:{
        backgroundColor: "#0d1117",
        flexDirection: "row",
    }
})

export default Post