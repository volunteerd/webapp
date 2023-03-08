import React, { useContext, useState } from "react";
import { UserContext } from './UserContext'
import { Link, useLocation } from "react-router-dom";

export const ProjectDetails = (props: any) => {
  // const data = useContext<any>(UserContext) // user/setUser

  const location = useLocation();
  const { faux } = location.state

  // const volunteers = [ 'Henry', 'Mariko', 'Holly', 'Jacob', 'Victor' ]

  const dummy = {
    EIN: 12345678,
    NonProfit: "Salvation Army",
    ProjectName: "Donation Website",
    VolunteerTotal: 5,
    Status: true,
  }

  const { EIN, NonProfit, ProjectName, VolunteerTotal, Status, Volunteers, Details } = faux;

  const volunteerList = Volunteers.map((volunteer: []) => <li>{volunteer}</li>)

  return (
    <div style={{ border: 'none', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', margin: '1em', boxShadow: '1px 1px 1px 1px grey' }}>
      Project Details
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
      <p>
        Description: <ul>{Details}</ul>
      </p>
      <p>
        Volunteers: <ul>{volunteerList}</ul>
      </p>
      {/* {data.user.type === 'volunteer' || data.user.type === 'nonprofit' ? <Link to={'/MakeProject'}><button>details</button></Link> : <Link to={'/Signup'}>{'Sign up to view details'}</Link>} */}

    </div>
  );
}