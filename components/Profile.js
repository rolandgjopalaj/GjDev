import React from 'react'
import {useState, useEffect} from "react"
import {View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    useColorScheme,
    StatusBar,
    ScrollView,
    ImageBackground,
    Modal,
    Pressable,
    Image,
    Dimensions,
    Alert,
    RefreshControl,
  } from 'react-native'
import Footer from './Footer'
import Header from './Header'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';

const window = Dimensions.get("window")

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Profile = () =>{
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [userData, setUserData] = useState([])
    const [postNR, setPostNR] = useState([])
    const [commNR, setCommNR] = useState([])
    const [languages, setLanguages] = useState([])
    const [allLanguages, setALLLanguages] = useState("")
    const [index, setIndex] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      getData();
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
      getData()
    }, [])

      async function getData(){
        await axios.post('http://localhost/user_data').then((res)=>{ 
          setUserData(res.data)
        },(error)=>{
            console.log(error)
        })

        await axios.post('http://localhost/postNR').then((res)=>{ 
            setPostNR(res.data)
          },(error)=>{
              console.log(error)
          })

        await axios.post('http://localhost/commNR').then((res)=>{ 
          setCommNR(res.data)
        },(error)=>{
            console.log(error)
        })

        await axios.post('http://localhost/linguaggi').then((res)=>{ 
          setLanguages(res.data)
        },(error)=>{
            console.log(error)
        })
      }

      async function getAllLanguage(){
        var string=""
        await axios.post('http://localhost/allLanguages').then((res)=>{ 
            res.data.map((el)=>(
                string+= el.codice+"->"+el.nome+", "
            ))    
            setALLLanguages(string)
        },(error)=>{
            console.log(error)
        })
        await setModalVisible(true)

      }
      
      async function addLanguage(){
        await axios.post('http://localhost/addLanguage',{send: index})
        await setModalVisible(!modalVisible)
        await getData()
      }

    return(
        <>
        <Header title="Profile"/>
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
            <View style={styles.screen}>
                <View style={styles.userData}>
                    <View style={styles.username}><Text style={styles.text}>@{userData.username}</Text></View>
                    <Image style={styles.userImg} source={{uri: userData.foto,}}/>
                    <Text></Text>
                    <Text style={styles.text}>Fullname: {userData.nome} {userData.cognome}</Text>
                    <Text style={styles.text}>Languages: </Text>
                    <View style={styles.lang}>
                    {
                        languages.map((el) =>(
                            <Text key={el.codice} style={styles.text}>{el.linguaggio},  </Text>
                        ))
                    }
                    </View>

                    <Pressable style={styles.addBtn} onPress={getAllLanguage}>
                        <Text style={styles.addBtnTxt}>Add</Text>
                    </Pressable>

                </View>
                <Text style={styles.line}>____________________________________________</Text>
                <View style={styles.posts}>
                    <Text style={styles.text}>Posts:</Text>
                    <Text style={styles.text}>{postNR.nr}</Text>
                </View>
                <Text style={styles.line}>____________________________________________</Text>
                <View style={styles.comms}>
                    <Text style={styles.text}>Comments:</Text>
                    <Text style={styles.text}>{commNR.nr}</Text>
                </View>
                <Text style={styles.line}>____________________________________________</Text>
                <View style={styles.nation}>
                    <Text style={styles.text}>Nation: {userData.nazione}</Text>
                </View>
            </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible);}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{allLanguages}</Text>
            <TextInput placeholder=" Enter the index here" placeholderTextColor="#555555" onChangeText={txt => setIndex(txt)}/>
            <Text></Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={addLanguage}
            >
              <Text style={styles.textStyle}>Add language</Text>
            </Pressable>
            <Text></Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible);}}
            >
              <Text style={styles.textStyle}>Cancle  !</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
        </ScrollView>
        <Footer title="back" to="/Home"/>
        </>
    )    
}

const styles = StyleSheet.create({
    screen:{
        height: window.height*0.65,
        width: window.width*0.85,
        backgroundColor: '#161b22',
        top: window.height/10,
        left: window.width/12,
        borderRadius: 10
    },
    userData:{
        height: window.height*0.30
    },
    posts:{
        height: window.height*0.1
    },
    comms:{
        height: window.height*0.1
    },
    text:{
        color: "#f0f6fc",
        fontSize: 25,
        left: 35,
        top: 10
    },
    lang: {
        flexDirection: "row"
    },
    line:{
        color: "#2c343f"
    },
    userImg:{
        borderRadius: 50,
        height: 60,
        width: 60,
        left: 30
    },
    username:{
        left: 70,
        top: 30
    },
    logo: {
        opacity: 1,
        overflow: 'visible',
        resizeMode: 'cover',
        marginLeft: -(window.width/7),
        marginBottom: -(window.height/1.4),
      },
    addBtn:{
        backgroundColor: "#30363d",
        borderColor: "#8d9493",
        height: window.height/28,
        width: window.width/8,
        borderRadius: 5,
        top: window.height/40,
        left: window.width/11,
    },
    addBtnTxt:{
        color: "#c9d1d9",
        fontSize: 20,
        top: window.height/500,
        left: window.width/80,
    },
    ////////////////////////
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default Profile