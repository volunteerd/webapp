import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (props: any) => {
  return (
    <div style={{display: 'flex', backgroundColor: 'lightblue', height: '5vh', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5vh'}}>
      
      <ul style={{display: 'flex', marginRight: "5vw", listStyleType: 'none'}}>
        <li style={{margin: '5px', color: 'black', textDecoration: 'none'}}><Link className='navlink' to="/">Home</Link></li>
        <li style={{margin: '5px'}}><Link className='navlink' to="/list">List</Link></li>
        <li style={{margin: '5px'}}><Link className='navlink' to="/login">Login</Link></li>
        <li style={{margin: '5px'}}><Link className='navlink' to="/makeproject">Make Project</Link></li>
      </ul>

    </div>
  )
} 