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
    Pressable,
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

const News = () =>{
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [news, setNews] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    axios.post('http://localhost/notizie').then((res)=>{ 
        setNews(res.data)
      })
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(async() => {
    await axios.post('http://localhost/notizie').then((res)=>{ 
      setNews(res.data)
    })
  }, [])

    return(
        <>
        <Header title="News"/>
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
        />
            
            {
                news.map((el)=>(
                    <View key={el.id}>
                        <View style={styles.screen}>
                            <View style={styles.comms}>
                                <Text style={styles.textName}>{el.person}</Text>
                                <Text style={styles.text}>{el.title}</Text>
                                <Text></Text>
                                <Text style={styles.text}>{el.content}</Text>
                            </View>
                            <View style={styles.btn}><Button title="Check here"/></View>
                        </View>
                        <Text></Text><Text></Text>
                    </View>
                ))
            }
            
        </ScrollView>
        <Footer title="back" to="/Home"/>
        </>
    )    
}

const styles = StyleSheet.create({
    screen:{
        height: window.height*0.25,
        width: window.width*0.85,
        backgroundColor: '#161b22',
        top: window.height/20,
        left: window.width/12,
        borderRadius: 10
    },
    comms:{
        height: window.height*0.1,
        width: window.width*0.7
    },
    text:{
        color: "#f0f6fc",
        fontSize: 20,
        left: 35,
        top: 10
    },

    textName:{
        color: "#ffffff",
        fontSize: 30,
        left: 35,
        top: 10
    },
    btn:{
        top: 70,
        right: 86
    },
})

export default News