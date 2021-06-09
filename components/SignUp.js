import React, {useState} from 'react'
import {View, 
    Text, 
    TextInput, 
    Button, 
    StyleSheet, 
    ScrollView, 
    useColorScheme, 
    Dimensions,
    ImageBackground,
    TouchableHighlight,
} from 'react-native'
import Picker from '@react-native-picker/picker'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './Header'

const window = Dimensions.get("window")

import axios from 'axios';
import Footer from './Footer';


const SignUp = ({history}) =>{

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [selectedValue, setSelectedValue] = useState("java");
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const postServer = async ()=>{

        const send={
            username: user,
            password: pass
        } 

        await axios.post('https://gjopalajpi.ignorelist.com/app_log', send).then((response)=>{
            console.log(response.data.id)
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
                    <Text style={styles.title}>Sign Up</Text>
                </View>

                <View style={styles.login}>
                    <Text style={styles.text}>Name</Text>
                    <TextInput style={styles.input} placeholder=" Enter your name here" placeholderTextColor="#DDD" onChangeText={user => setUser(user)}/>
                    <Text></Text>
                    <Text style={styles.text}>Surname</Text>
                    <TextInput style={styles.input} placeholder=" Enter your name here" placeholderTextColor="#DDD" onChangeText={user => setUser(user)}/>
                    <Text></Text>
                    <Text style={styles.text}>Email</Text>
                    <TextInput style={styles.input} placeholder=" Enter your email here" placeholderTextColor="#DDD" onChangeText={pass => setPass(pass)}/>
                    <Text></Text>
                    <Text style={styles.text}>Username</Text>
                    <TextInput style={styles.input} placeholder=" Enter your username here" placeholderTextColor="#DDD" onChangeText={user => setUser(user)}/>
                    <Text></Text>
                    <Text style={styles.text}>Pasword</Text>
                    <TextInput style={styles.input} placeholder=" Enter your password here" placeholderTextColor="#DDD" onChangeText={pass => setPass(pass)}/>
                    <Text></Text>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.input} placeholder=" Renter your password here" placeholderTextColor="#DDD" onChangeText={user => setUser(user)}/>
                    <Text></Text>
                    <TouchableHighlight style={styles.button}>
                    <Button title="Sign Up" color="white" onPress={() =>history.push("/Home")}/>
                    </TouchableHighlight>
                    
                </View>
            </View>
            </ImageBackground>
        </ScrollView>
        <Footer title="Log In" to="/"/>
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
        top: window.height/15,
        backgroundColor: '#0d1117',
        height: window.height/1.4,
        width: window.width*0.85,
        borderRadius: 25,
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
        top: window.height*0.05,
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
        right:100,
    }
})

export default SignUp