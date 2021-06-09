import React from 'react'
import {NativeRouter, Route, Switch} from 'react-router-native'

import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import News from './components/News'
import Refresh from './components/Refresh'

const App = () =>{
  return(
    <>
    <NativeRouter>
    <Switch>
      <Route exact path="/" component={LogIn}/>
      <Route exact path="/SignUp" component={SignUp}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Profile" component={Profile}/>
      <Route exact path="/News" component={News}/>
      <Route exact path="/Refresh" component={Refresh}/>
    </Switch>
    </NativeRouter>
    </>
  )
}

export default App