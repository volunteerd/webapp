import React from "react";

export const Footer = () => {
    return (
        <div style={{zIndex: '-999', position: 'fixed', height: '5vh', width: '100vw', backgroundColor: 'lightblue', bottom: 0}}>
            <p style={{textAlign: 'left'}}>Copyright 2023 Volunteerd</p>
            <p style={{textAlign: 'right'}}>PTRI GR8 Productions</p>
        </div>
    )
}