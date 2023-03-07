import React from "react";

interface Props {
    changeSkills: Function,
    changeLanguages: Function,
    changeSpecialty: Function,
    changeYoe: Function
}

export const EngineerSignup = (props: Props) => { 
    return (
        <div>
            <label style={{display: 'flex', maxWidth: '25vw', flexDirection: 'column', justifyContent: 'flex-start'}}>
                Languages - choose all that apply:
                <div style={{display: 'flex', margin: '5px', flexWrap: 'wrap'}}>
                    <label style={{ margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
                        <input
                        type='checkbox'
                        name='javascript'
                        value='javascript'
                        onChange={(e) => props.changeLanguages(e)}></input>
                        Javascript
                    </label>
                    <label style={{ margin: '5px' }}>
                        <input
                        type='checkbox'
                        name='typescript'
                        value='typescript'
                       ></input>
                        Typescript
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='python'
                        value='python'></input>
                        Python
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='C++'
                        value='C++'></input>
                        C++
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='java'
                        value='java'></input>
                        Java
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='C'
                        value='C'></input>
                        C
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='swift'
                        value='swift'></input>
                        Swift
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='kotlin'
                        value='kotlin'></input>
                        Kotlin
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='go'
                        value='go'></input>
                        Go
                    </label>
                </div>
            </label>
            <label style={{display: 'flex', maxWidth: '25vw', flexDirection: 'column', justifyContent: 'flex-start'}}>
                Interests - choose all that apply:
                <div style={{display: 'flex', margin: '5px', flexWrap: 'wrap'}}>
                    <label style={{ margin: '5px' }}>
                        <input
                        type='checkbox'
                        name='frontend'
                        value='frontend'
                        ></input>
                        Frontend
                    </label>
                    <label style={{ margin: '5px' }}>
                        <input
                        type='checkbox'
                        name='fullstack'
                        value='fullstack'
                        ></input>
                        Fullstack
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='backend'
                        value='backend'></input>
                        Backend
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='devops'
                        value='devops'></input>
                        Devops
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='databases'
                        value='databases'></input>
                        Databases
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='microservices'
                        value='microservices'></input>
                        Microservices
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='web-development'
                        value='web-development'></input>
                        Web Development
                    </label>
                    <label style={{margin: '5px'}}>
                        <input
                        type='checkbox'
                        name='mobile-development'
                        value='mobile-development'></input>
                        Mobile Development
                    </label>
                </div>
            </label>
        </div>
    )
}