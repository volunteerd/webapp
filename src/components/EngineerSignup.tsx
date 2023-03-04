import React from "react";

interface Props {
    setInfo: Function
}

export const EngineerSignup = (props: Props) => {
    return (
        <div>
            <label>
                Languages:
                <label>
                    Javascript
                    <input
                    type='checkbox'
                    name='javascript'
                    value='javascript'></input>
                </label>
                <label>
                    There is no other language
                    <input
                    type='checkbox'
                    name='python'
                    value='python'></input>
                    </label>
            </label>
        </div>
    )
}