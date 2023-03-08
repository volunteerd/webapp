import React, { useContext } from 'react';
import { Routes, Route, Link, RouterProvider } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { createDatabase, readDatabase } from '../script';
import { UserContext } from './UserContext'
import { Home } from './Home';
import { Login } from './Login'
import { Signup } from './Signup';
import { List } from './List';
import { NavBar } from './NavBar';
import { MakeProject } from './MakeProject';
import {ProjectDetails } from './ProjectDetails';
import { EngineerProfile } from './EngineerProfile';
import { NPOProfile } from './NPOProfile';

interface Ctx {
    user: { type: string }
    setUser: Function
}

export const RouteContainer = () => {
    const data: Ctx = useContext<any>(UserContext) // user/setUser
    console.log('user', data)

    // function changeUser() {
    //     if (data.user.type === 'default') {
    //         data.setUser({ type: 'volunteer' })
    //     } else if (data.user.type === 'volunteer') {
    //         data.setUser({ type: 'default' })
    //     }
    //     console.log('in changeUser')
    // }

    return (
        <>
            <Routes>
                {data.user.type === 'default' ?
                    <>
                        <Route path='/' element={<List />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/signup' element={<Signup />}></Route>
                    </>
                    : data.user.type === 'volunteer' ?
                        <>
                            <Route path='/' element={<List />}></Route>
                            <Route path='/profile' element={<EngineerProfile />}></Route>
                            <Route path='/login' element={<Login />}></Route>
                            <Route path='/signup' element={<Signup />}></Route>
                            <Route path='/projectdetails' element={<ProjectDetails />} />
                        </>
                        : data.user.type === 'nonprofit' ?
                            <>
                                <Route path='/' element={<List />}></Route>
                                <Route path='/profile' element={<NPOProfile />}></Route>
                                <Route path='/login' element={<Login />}></Route>
                                <Route path='/signup' element={<Signup />}></Route>
                                <Route path='/makeproject' element={<MakeProject />} />
                                <Route path='/projectdetails' element={<ProjectDetails />} />
                            </>
                        : <>User not identified - what are you doing</>
                }
                <Route path='*' element={<List />}/>
            </Routes>
        </>
    )
}