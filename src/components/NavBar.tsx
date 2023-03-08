import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

interface Ctx {
  user: { type: string }
  setUser: Function
}

export const NavBar = (props: any) => {

  const data: Ctx = useContext<any>(UserContext)

  return (
    <div style={{display: 'flex', backgroundColor: 'lightblue', height: '8vh', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5vh'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', width: '30vw', padding: '10px'}}>
          <Link className='navlink' to="/">Home</Link>
          {data.user.type !== 'default' ? <Link to='/profile'>Profile</Link> : ''}
          {data.user.type === 'nonprofit' ? 
          <Link className='navlink' to="/makeproject">Make Project</Link>: ''}
        </div>
        <div style={{marginRight: '5vw'}}>
          <button style={{padding: '7px', backgroundColor: 'lightblue', border: '1px solid black'}}><Link className='navlink' to="/login">Login</Link></button>
        </div>
    </div>
  )
} 