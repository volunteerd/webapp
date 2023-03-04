import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EngineerSignup } from "./EngineerSignup";
import { NonProfitSignup } from "./NonProfitSignup";

export const Signup = () => {

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        accountType: '',
    })

    const [engineerInfo, setEngineerInfo] = useState({
        languages: [],
        skills: [],
        specialty: '',
        yoe: 0
    })

    const [nonProfitInfo, setNonProfitInfo] = useState({
        name: '',
        field: '',
        country: '',
        state: '',
        address: '',
        zip: 0
    })

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <form style={{ borderRadius: '1em', width: 'fit-content', padding: '2em', alignItems: 'flex-start', boxShadow: '1.5px 1.5px 1.5px 1.5px lightblue' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ textAlign: 'center', margin: '5px' }}>Sign up</h1>
                    <label style={{ margin: '5px' }}>
                        Username:
                        <input
                            type='text'
                            name="username"
                            placeholder="username"
                            onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}></input>
                    </label>
                    <label style={{ margin: '5px' }}>
                        Password:
                        <input
                            type='password'
                            name="password"
                            placeholder="password"
                            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}></input>
                    </label>
                    <label style={{ margin: '5px' }}>
                        Verify Password:
                        <input
                            type='password'
                            name="password2"
                            placeholder="password two"></input>
                    </label>
                    <label style={{ margin: '5px' }}>
                        Choose Account Type:
                        <label>
                            <input
                                type='radio'
                                value='engineer'
                                name='account'
                                onChange={(e) => setUserInfo({ ...userInfo, accountType: e.target.value })}></input>
                            Engineer
                        </label>
                        <label>
                            <input
                                type='radio'
                                value='non-profit'
                                name='account'
                                onChange={(e) => setUserInfo({ ...userInfo, accountType: e.target.value })}></input>
                            Non-Profit
                        </label>
                    </label>
                    {userInfo.accountType === 'engineer' ? <EngineerSignup setInfo={setEngineerInfo} /> :
                        userInfo.accountType === 'non-profit' ? <NonProfitSignup setInfo={setNonProfitInfo} /> : ''}
                </div>
            </form>
            <div>
                Already have an account? <Link to='/'>Log in</Link>
            </div>
        </div>
    )
}