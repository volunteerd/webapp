import React, {useContext, useState} from "react";
import { createDatabase, readDatabase, changeUser} from "../script";
import {UserContext} from './UserContext'

export const Login = (props: any) => {

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })

    const data = useContext<any>(UserContext)
    console.log(data)
    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <form style={{borderRadius: '1em', width: 'fit-content', padding: '2em', alignItems: 'flex-start', boxShadow: '1.5px 1.5px 1.5px 1.5px lightblue'}}>
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input
                    type="text"
                    name="username"
                    onChange={(e) => setLoginInfo({...loginInfo, username: e.target.value})}
                    placeholder="username"
                    value={loginInfo.username}
                    style={{margin: '5px'}}></input>
                    <input
                    type="password"
                    name="password"
                    onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}
                    placeholder="password"
                    value={loginInfo.password}
                    style={{margin: '5px'}}></input>
                    <div>
                      <h3>I am a:</h3>
                    </div>
                    <input
                    type="submit"
                    name="submitbutton"
                    value='submit'
                    style={{margin: '5px', width: 'fit-content'}}></input>
                </div>
            </form>
        </div>
    )
}