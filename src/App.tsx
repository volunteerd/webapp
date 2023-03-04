import React, {useContext} from 'react';
import {Routes, Route, Link, RouterProvider} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { createDatabase, readDatabase } from './script';
import {UserContext} from './components/UserContext'
import {Home} from './components/Home';
import {Login} from './components/Login'

interface Ctx {
  user: { type: string }
  setUser: Function
}

export default function App () {
  const data: Ctx = useContext<any>(UserContext) // user/setUser
  console.log('user', data)

  function changeUser() {
    if (data.user.type === 'default') {
      data.setUser({type: 'notdefault'})
    } else if (data.user.type === 'notdefault') {
      data.setUser({type: 'default' })
    }
    
    console.log('in changeUser')
  }

  return (
        <>
          <button onClick={() => changeUser()}>Hi</button>
          State: {`${data.user.type}`}
          <Routes>
            
            {data.user.type === 'default' ? 
            <Route path='/' element={<Home/>}></Route>
            : 
            <Route path='/' element={<Login/>}></Route>}

          </Routes>
        </>
  )
}