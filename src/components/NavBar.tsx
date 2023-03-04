import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (props: any) => {
  return (
    <div>
      NavBar
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  )
} 