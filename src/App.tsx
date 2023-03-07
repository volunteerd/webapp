import React, {useContext} from 'react';
import {Routes, Route, Link, RouterProvider} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { createDatabase, readDatabase } from './script';
import {UserContext} from './components/UserContext'
import {Home} from './components/Home';
import {Login} from './components/Login'
import { Signup } from './components/Signup';
import { List } from './components/List';
import { NavBar } from './components/NavBar';
import { RouteContainer } from './components/RouteContainer'
import { Footer } from './components/Footer';

interface Ctx {
  user: { type: string }
  setUser: Function
}

export default function App () {
  const data: Ctx = useContext<any>(UserContext) // user/setUser
  console.log('user', data)

  function changeUser() {
    if (data.user.type === 'default') {
      data.setUser({type: 'volunteer'})
    } else if (data.user.type === 'volunteer') {
      data.setUser({type: 'default' })
    }
    
    console.log('in changeUser')
  }

  return (
        <>
          {/* <button onClick={() => changeUser()}>Hi</button>
          State: {`${data.user.type}`} */}
          <NavBar/>
          <RouteContainer/>
          <Footer/>
        </>
  )
}