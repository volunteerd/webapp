import React, {useContext, useState} from 'react';
import {UserContext} from './components/UserContext'
import { NavBar } from './components/NavBar';
import { RouteContainer } from './components/RouteContainer'

interface Ctx {
  user: { type: string }
  setUser: Function
}


export default function App () {
  const data: Ctx = useContext<any>(UserContext) // user/setUser
  // console.log('user', data)

  function changeUser() {
    if (data.user.type === 'default') {
      data.setUser({type: 'volunteer'})
    } else if (data.user.type === 'volunteer') {
      data.setUser({type: 'nonprofit' })
    } else {
      data.setUser({type: 'default'})
    }
    
    console.log('in changeUser')
  }

  return (
        <>
          <NavBar/>
          <button style={{marginBottom: '5px', backgroundColor: 'red'}} onClick={() => changeUser()}>Caution - don&apos;t click</button>{data.user.type}
          <RouteContainer/>
        </>
  )
}