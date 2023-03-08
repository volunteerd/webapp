import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EngineerSignup } from "./EngineerSignup";
import { NonProfitSignup } from "./NonProfitSignup";

interface EngineerInfo {
    languages: Array<string | null>
    skills: Array<string | null>
    specialty: string
    yoe: number
}

export const Signup = () => {

    const [invalidPassword, setInvalidPassword] = useState(false)

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        passwordtwo: '',
        accountType: '',
    })

    const [engineerInfo, setEngineerInfo] = useState<EngineerInfo>({
        languages: [],
        skills: [],
        specialty: '',
        yoe: 0
    })

    const [nonProfitInfo, setNonProfitInfo] = useState({
        name: '',
        ein: '',
        email: '',
        zip: 0
    })

    const changeNPName = (e: any) => {
        setNonProfitInfo({...nonProfitInfo, name: e.target.value})
    }

    const changeEin = (e: any) => {
        setNonProfitInfo({...nonProfitInfo, ein: e.target.value})
    }

    const changeEmail = (e: any) => {
        setNonProfitInfo({...nonProfitInfo, email: e.target.value})
    }

    const changeZip = (e: any) => {
        setNonProfitInfo({...nonProfitInfo, zip: e.target.value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    const checkPasswords = () => {
        if (userInfo.password !== userInfo.passwordtwo) {setInvalidPassword(true)}
        else {setInvalidPassword(false)}
    }

    const changeLanguages = (e: any) => {
        console.log(engineerInfo.languages)
      if (engineerInfo.languages.includes(e.target.value)) {
        const result = []
        for (const langs of engineerInfo.languages) {
            if (langs === e.target.value) {
                continue
            } else {
                result.push(langs)
            }
        }
        setEngineerInfo({...engineerInfo, languages: result})
      } else {
        const lang = [...engineerInfo.languages]
        lang.push(e.target.value)
        setEngineerInfo({...engineerInfo, languages: lang})
      }
    }

    const changeSkills = (e: any) => {
        console.log(engineerInfo.skills)
        if (engineerInfo.skills.includes(e.target.value)) {
          const result = []
          for (const skills of engineerInfo.skills) {
              if (skills === e.target.value) {
                  continue
              } else {
                  result.push(skills)
              }
          }
          setEngineerInfo({...engineerInfo, skills: result})
        } else {
          const skill = [...engineerInfo.skills]
          skill.push(e.target.value)
          setEngineerInfo({...engineerInfo, skills: skill})
        }
    }

    const changeSpecialty = (e: any) => {
        setEngineerInfo({...engineerInfo, specialty: e.target.value})
    }

    const changeYoe = (e: any) => {
        setEngineerInfo({...engineerInfo, yoe: e.target.value})
    }

    useEffect(() => {
        checkPasswords()
    }, [userInfo.passwordtwo])

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
                            placeholder="verify"
                            onChange={((e) => {setUserInfo({...userInfo, passwordtwo: e.target.value})})}></input>
                    </label>
                    <div>
                      {invalidPassword ? <p style={{color: 'red', fontSize: '0.7em'}}>Make sure both passwords match</p> : ''}
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
                        userInfo.accountType === 'non-profit' ? <NonProfitSignup changeNPName={changeNPName} changeEin={changeEin} changeZip={changeZip} changeEmail={changeEmail} /> :  ''}
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