import React, {useState} from 'react'
import {View, 
    Text, 
    TextInput, 
    Button, 
    StyleSheet, 
    StatusBar, 
    ScrollView, 
    useColorScheme, 
    Dimensions,
    ImageBackground,
    TouchableHighlight,
} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './Header'

const window = Dimensions.get("window")

import axios from 'axios';
import Footer from './Footer';


const LogIn = ({history}) =>{

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    async function postServer(){

        const send={
            type: "app",
            username: user,
            password: pass
        } 

        await axios.post('http://localhost/login', send).then((res)=>{
            if(res.data.state=="ok")
            {
                history.push("/Home")
            }
          },(error)=>{
              console.log(error)
          })
    }

    return(
        <>
        <Header title="GjDev"/>
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
            <ImageBackground source={require('./img/bg.jpg')} style={styles.background} imageStyle={styles.logo}>
            <View style={backgroundStyle, styles.center}>

                <View>
                    <Text style={styles.title}>Wellcome to </Text>
                    <Text style={[styles.title,{left:window.width*0.15}]}>GjDev</Text>
                </View>

                <View style={styles.login}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput style={styles.input} placeholder=" Enter your username here" placeholderTextColor="#DDD" onChangeText={user => setUser(user)}/>
                    <Text></Text>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.input} placeholder=" Enter your password here" placeholderTextColor="#DDD" onChangeText={pass => setPass(pass)} secureTextEntry={true}/>
                    <Text></Text>
                    <View style={styles.button} >
                    <Button title="LogIn" color="white" onPress={postServer}/>
                    </View>
                    
                    <TouchableHighlight >
                    <Text style={{color:"white", top:10}}>Forgot password?</Text>
                    </TouchableHighlight>
                    
                </View>
            </View>
            </ImageBackground>
        </ScrollView>
        <Footer title="Register" to="/SignUP"/>
        </>
    )
}

const styles = StyleSheet.create({
    center:{
        flex: 1,
        alignItems: "center"
    },
    login:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: window.height/5.5,
        backgroundColor: '#0d1117',
        height: window.height/2.7,
        width: window.width*0.85,
        borderRadius: 50,
    },
    background: {
    },
    logo: {
        opacity: 1,
        overflow: 'visible',
        resizeMode: 'cover',
        marginLeft: -(window.width/7),
        marginBottom: -(window.height/1.4),
      },
    input: {
        height: window.height/20,
        width:window.width-(window.width/3), 
        margin: window.height/170,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "#00c9db",
        color: "white",
    },
    button:{
        backgroundColor:"#00c9db", 
        borderRadius:50,
        width:100
    },
    title:{
        top: window.height*0.1,
        fontSize: window.height/20,
        color: "#00c9db",
        fontWeight: "bold"
    },
    about:{
        height: window.height*0.07,
        backgroundColor: "#1d1d1f",
    },
    text:{
        color: "white",
        right:80,
        fontSize: 20
    }
})

export default LogIn