import React, {Children, createContext, useEffect, useState} from "react";

export const UserContext = createContext({});

export default function Context (props: any) {
    const [user, setUser] = useState({ type: 'default' })

    const switchUser = () => {
        if (user.type === 'default') {
            setUser({ type: 'notdefault' })
        } else if (user.type === 'notdefault') {
            setUser({ type: 'default' })
        }

        console.log('in changeUser')
    }

    const getUserInfo = async () => {
        try {
            console.log('hi')
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getUserInfo()
    }, [])
    return (
        <UserContext.Provider value={{user, setUser, switchUser}}>{props.children}</UserContext.Provider>
    )
}