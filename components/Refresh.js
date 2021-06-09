import React from 'react'
import {
    Button,
} from 'react-native'

const Refresh = ({history}) =>{
    function x(){
        history.push("/Home")
    }
    return(
        <>
        <Button title=" " onPress={x()}/>
        </>
    )
}

export default Refresh