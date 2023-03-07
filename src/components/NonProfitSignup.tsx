import React from "react";

interface Props {
    setInfo: Function
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
                ></input>
            </label>
            <br></br>
            <label style={{display: 'flex', justifyContent: 'space-between'}}>
                Zip:
                <input
                type="text"
                name="zip"
                placeholder="zip code"></input>
            </label>
            <br></br>
            <label style={{display: 'flex', justifyContent: 'space-between'}}>
                Email:
                <input
                type="text"
                name="email"
                placeholder="email"></input>
            </label>
            <br></br>
            <label style={{display: 'flex', justifyContent: 'space-between'}}>
                EIN:
                <input
                type="text"
                name="ein"
                placeholder="EIN"></input>
            </label>
        </div>
    )
}