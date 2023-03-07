import React, {useContext, useState} from "react";
import { createDatabase, readDatabase, changeUser} from "../script";
import { Link } from "react-router-dom";
import {UserContext} from './UserContext'

export const Login = (props: any) => {

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
        accountType: ''
    })

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(loginInfo)
    }

    const data = useContext<any>(UserContext)
    console.log(data)
    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <form onSubmit={handleSubmit} style={{borderRadius: '1em', width: 'fit-content', padding: '2em', alignItems: 'flex-start', boxShadow: '1.5px 1.5px 1.5px 1.5px lightblue'}}>
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
                    <p>Account Type:</p>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                        <label>
                            <input
                            type="radio"
                            value="engineer"
                            name='account'
                            onChange={(e) => setLoginInfo({...loginInfo, accountType: e.target.value})}></input>
                        Engineer
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="non-profit"
                            name='account'
                            onChange={(e) => setLoginInfo({...loginInfo, accountType: e.target.value})}></input>
                        Non-Profit
                        </label>
                    </div>
                    <input
                    type="submit"
                    name="submitbutton"
                    value='submit'
                    id="loginSubmit"></input>
                </div>
            </form>
            <div style={{marginTop: '5vh'}}>
                Don&apos;t have an account? <Link to="/signup">Sign up!</Link>
            </div>
        </div>
    )
}