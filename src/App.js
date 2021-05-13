import React from 'react'
import {Route,BrowserRouter,Redirect} from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import MusciList from './pages/Music/MusciList'
import Rigister from './pages/Rigister/rigister'
import AAA from './pages/Slide/index'
import Sports from './pages/Sports/Sports.jsx'
import Shop from './pages/Shop/index.jsx'


export default function App() {

  return (
    <>
    <BrowserRouter>

      <Route exact path='/' render={props =>　{
        return <Redirect to='/home'></Redirect>
      }} ></Route>  
      <Route path="/home" component={Home}></Route>
      <Route exact path='/rigister' component={Rigister}></Route>
      <Route exact path='/login' component={Login}></Route>
      {/* <Route exact path='/music/musiclist' component={MusciList}></Route> */}
      {/* <Route exact path='/AAA' component={AAA}></Route> */}
      {/* <Route  path='/sports' component={Sports}></Route> */}
      <Route  path='/shop' component={Shop}></Route>

    </BrowserRouter>
    </>
  )
}

