import React, { useContext, useState } from "react";

export const ListItem = (props: any) => {

  const dummy = {
    EIN: 12345678,
      NonProfit: "Salvation Army",
        ProjectName: "Donation Website",
          VolunteerTotal: 5,
            Status: true,
        }
  
  const { EIN, NonProfit, ProjectName, VolunteerTotal, Status } = props.data;

  return (
    <div style={{ border: '1px gray solid', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
    
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
  );
}