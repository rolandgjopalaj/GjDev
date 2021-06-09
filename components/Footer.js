import React from 'react'

import {View, StyleSheet, Text, Dimensions} from 'react-native'
import {Link} from 'react-router-native'

const window = Dimensions.get("window")

const Footer = (props) =>{
    return(
        <View style={styles.footer}>
            
            <Link to={props.to} underlayColor="#1d1d1f" style={styles.link}>
                <Text style={styles.txt}>{props.title}</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        marginBottom: 0,
        height: window.height/15,
        backgroundColor: "#0d1117",
        alignItems: 'center',
    },
    txt:{
        color: "white",
        fontSize: window.height/42,
    },
    link:{
        top: window.height/84,
    },
})

export default Footer
