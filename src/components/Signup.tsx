import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EngineerSignup } from "./EngineerSignup";
import { NonProfitSignup } from "./NonProfitSignup";

export const Signup = () => {

    const [invalidPassword, setInvalidPassword] = useState(false)

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        passwordtwo: '',
        accountType: '',
    })

    const [engineerInfo, setEngineerInfo] = useState({
        languages: [''],
        skills: [''],
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

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    const checkPasswords = () => {
        if (userInfo.password !== userInfo.passwordtwo) {setInvalidPassword(true)}
        else {setInvalidPassword(false)}
    }

    const changeLanguages = (e: any) => {
        console.log(engineerInfo.languages)
      const lang = [...engineerInfo.languages]
      lang.push(e.target.value)
      setEngineerInfo({...engineerInfo, languages: lang})
    }

    const changeSkills = (e: any) => {
        const lang = [...engineerInfo.skills]
        lang.push(e.target.value)
        setEngineerInfo({...engineerInfo, skills: lang})
    }

    const changeSpecialty = (e: any) => {
        setEngineerInfo({...engineerInfo, specialty: e.target.value})
    }

    const changeYoe = (e: any) => {
        setEngineerInfo({...engineerInfo, yoe: e.target.value})
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <form style={{ borderRadius: '1em', width: 'fit-content', padding: '2em', alignItems: 'flex-start', boxShadow: '1.5px 1.5px 1.5px 1.5px lightblue' }} onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ textAlign: 'center', margin: '5px' }}>Sign up</h1>
                    <br></br>
                    <label style={{display: 'flex', justifyContent: 'space-between'}}>
                        Username:
                        <input
                            type='text'
                            name="username"
                            placeholder="username"
                            onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}></input>
                    </label>
                    <br></br>
                    <label style={{display: 'flex', justifyContent: 'space-between'}}>
                        Password:
                        <input
                            type='password'
                            name="password"
                            placeholder="password"
                            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}></input>
                    </label>
                    <br></br>
                    <label style={{display: 'flex', justifyContent: 'space-between'}}>
                        Verify Password:
                        <input
                            type='password'
                            name="password2"
                            placeholder="password two"
                            onChange={((e) => {setUserInfo({...userInfo, passwordtwo: e.target.value});checkPasswords()})}></input>
                    </label>
                    <div>
                      {invalidPassword ? <p>Make sure both passwords match</p> : ''}
                    </div>
                    <br></br>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        Choose Account Type:
                        <label>
                            <input
                                type='radio'
                                value='engineer'
                                name='account'
                                onChange={(e) => setUserInfo({ ...userInfo, accountType: e.target.value })}></input>
                            Engineer
                        </label>
                        <label style={{display: 'flex', alignItems: 'center'}}>
                            <input
                                type='radio'
                                value='non-profit'
                                name='account'
                                onChange={(e) => setUserInfo({ ...userInfo, accountType: e.target.value })}></input>
                            Non-Profit
                        </label>
                    </label>
                    <br></br>
                    {userInfo.accountType === 'engineer' ? <EngineerSignup changeSkills={changeSkills} changeLanguages={changeLanguages} changeYoe={changeYoe} changeSpecialty={changeSpecialty} /> :
                        userInfo.accountType === 'non-profit' ? <NonProfitSignup setInfo={setNonProfitInfo} /> :  ''}
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '3vh'}}>
                    <input
                    type="submit"
                    value="Submit"
                    id="loginSubmit"></input>
                </div>
            </form>
            <div style={{marginTop: '5vh'}}>
                Already have an account? <Link to='/login'>Log in</Link>
            </div>
        </div>
    )
}