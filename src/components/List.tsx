import React, { useContext, useState } from "react";
import { ListItem } from "./ListItem";

export const List = (props: any) => {

    const fauxData = [
        {
            EIN: 12345678,
            NonProfit: "Salvation Army",
            ProjectName: "Donation Website",
            VolunteerTotal: 5,
            Status: true,
        }
    ];

    const [EIN, NonProfit, ProjectName, VolunteerTotal, Status] = fauxData;

    const [items, setItems] = useState(fauxData);

    const list = items.map((item, index) => <ListItem key={index} data={fauxData[index]} />);

    // console.log(items)

    // const list = <div>hi</div>

    // query our NPO API
    // const data = await fetch('a');
    // const result = await data.json();

    return (
        <div>
            {list}
        </div>
    );
}