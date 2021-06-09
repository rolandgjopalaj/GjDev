import React from 'react'
import {useState, useEffect} from "react"
import {View,
  Text,
  StyleSheet,
  useColorScheme,
  StatusBar,
  ScrollView,
  Dimensions,
  RefreshControl,
} from 'react-native'

import axios from 'axios';

import {Colors} from 'react-native/Libraries/NewAppScreen';
const window = Dimensions.get("window")

import Nav from './Nav'
import Footer from './Footer'
import Post from './Post'
import Publish from './Publish'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Home = () =>{

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    getData()
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    await axios.post('http://localhost/posts').then((res)=>{ 
      setPosts(res.data)
    },(error)=>{
        console.log(error)
    })
    await axios.post('http://localhost/comments').then((res)=>{ 
      setComments(res.data)
    },(error)=>{
        console.log(error)
    })
  }

  function getComments(codice){
    const comm = comments.filter(commEl => commEl.post==codice);
    return comm
  }

  return(
    <>
    <Nav />
    <Publish getData={getData}/>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
        />

        <View>

        {posts.map((post)=>(
          <View key={post.codice}>
            <Post  dataPost={post} comments={getComments(post.codice)} getData={getData}/>
            <Text></Text>
          </View>
        ))}

        </View>

    </ScrollView>
    <Footer title="News" to="/News"/>
    </>
  )
}

const styles =  StyleSheet.create({
  center:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  background: {
  },
  logo: {
    opacity: 1,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -window.width,
    marginBottom: -window.height,
  },
})

export default Home