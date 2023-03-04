import React, {useContext} from "react";
import { createDatabase, readDatabase, changeUser} from "../script";
import {UserContext} from './UserContext'

export const Home = (props: any) => {
    const data = useContext<any>(UserContext)
    console.log(data)

    function changeUser() {
        console.log('in ChangeUser');
        // user.switchUser()
        console.log('switch?' );
        data.switchUser();
    }
    return (
        <div>
            Hi
            <button onClick={() => createDatabase()}>Write</button>
            <button onClick={() => readDatabase()}>Read</button>
            <button onClick={() => changeUser()}>Change User</button>
        </div>
    )
}