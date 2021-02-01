import React from 'react'
import {Route,BrowserRouter,Redirect} from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import Rigister from './pages/Rigister/rigister'


export default function App() {
  return (
    <>
    <BrowserRouter>

      <Route exact path='/' render={props =>　{
        (<Redirect to='/home/'></Redirect>)
      }} ></Route>  
       <Route path="/home" component={Home}></Route>
      <Route exact path='/rigister' component={Rigister}></Route>
      <Route exact path='/login' component={Login}></Route>

    </BrowserRouter>
    </>
  )
}

