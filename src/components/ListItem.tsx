import React, { useContext, useState } from "react";
import { UserContext } from './UserContext'
import { Link } from "react-router-dom";

export const ListItem = (props: any) => {
  const data = useContext<any>(UserContext) // user/setUser

  const dummy = {
    EIN: 12345678,
      NonProfit: "Salvation Army",
        ProjectName: "Donation Website",
          VolunteerTotal: 5,
            Status: true,
        }
  
  const { EIN, NonProfit, ProjectName, VolunteerTotal, Status, Volunteers, Details } = props.data;

  return (
    <div style={{ border: 'none', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '1em', boxShadow: '1px 1px 1px 1px grey'}}>
    <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <p>
          EIN: {EIN}
        </p>
        <p>
          Non-Profit: {NonProfit}
        </p>
        <p>
          Name: {ProjectName}
        </p>
        <p>
          Volunteer #: {VolunteerTotal}
        </p>
        <p>
          Status: {Status ? "Active" : "Inactive"}
        </p>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%', marginRight: '4vw'}}>
          {data.user.type === 'volunteer' || data.user.type === 'nonprofit' ? <Link to={'/ProjectDetails'} state={{faux: props.data}}><button>details</button></Link> : <Link to={'/Signup'}>{'Sign up to view details'}</Link> }
        </div>

    </div>
  );
}