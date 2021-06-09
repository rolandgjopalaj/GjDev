import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const window = Dimensions.get("window")

const Header = ({title}) =>{
    return(
        <>
        <View style={styles.header}>
            
            <View style={styles.txtView}>
                <Text style={styles.text}>{title}</Text>
            </View>      

        </View>
        </> 
    );
    
};

const styles = StyleSheet.create({
    header:{
        height: window.height/12,
        backgroundColor: "#0d1117",
    },
    txtView:{
        alignItems: 'center',
    },
    text:{
        color: "#ffffff",
        top: window.height/24,
        fontSize: window.height/35,
    },
})

Header.defaultProps = {
    title:"GjDev"
}

export default Header