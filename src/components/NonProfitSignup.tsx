import React from "react";

interface Props {
   changeNPName: Function
   changeEmail: Function
   changeZip: Function
   changeEin: Function
}

export const NonProfitSignup = (props: Props) => {
    return (
        <div style={{display: 'flex', maxWidth: '25vw', flexDirection: 'column', justifyContent: 'flex-start'}}>
            <label style={{display: 'flex', justifyContent: 'space-between'}}>
                Organization Name:
                <input
                type="text"
                name="org-name"
                placeholder="organization name"
                onChange={(e) => props.changeNPName(e)}></input>
            </label>
            <br></br>
            <label style={{display: 'flex', justifyContent: 'space-between'}}>
                Zip:
                <input
                type="text"
                name="zip"
                placeholder="zip code"
                onChange={(e) => props.changeZip(e)}></input>
            </label>
            <br></br>
            <label style={{display: 'flex', justifyContent: 'space-between'}}>
                Email:
                <input
                type="text"
                name="email"
                placeholder="email"
                onChange={(e) => props.changeEmail(e)}></input>
            </label>
            <br></br>
            <label style={{display: 'flex', justifyContent: 'space-between'}}>
                EIN:
                <input
                type="text"
                name="ein"
                placeholder="EIN"
                onChange={(e) => props.changeEin(e)}></input>
            </label>
        </div>
    )
}