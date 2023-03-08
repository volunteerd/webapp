import React, { useContext, useEffect, useState } from "react";
import { ListItem } from "./ListItem";

export const List = (props: any) => {

    const fauxData = [
        {
            EIN: 12345678,
            NonProfit: "Salvation Army",
            ProjectName: "Donation Website",
            VolunteerTotal: 5,
            Status: true,
            Volunteers: ['Henry', 'Mariko', 'Holly', 'Jacob', 'Victor'],
            Details: 'An amazing donation website'
        },
        {
            EIN: 87654321,
            NonProfit: "A Chance in Life",
            ProjectName: "Take out the Metaverse with a viral payload",
            VolunteerTotal: 1,
            Status: false,
            Volunteers: ["Matt"],
            Details: 'Destroy those incongruous with reality'
        },
        {
            EIN: 1000001,
            NonProfit: "Robinhood",
            ProjectName: "Equalize",
            VolunteerTotal: 1000,
            Status: true,
            Volunteers: ['The Developers'],
            Details: 'Infiltrate all world banks and distribute money to those in need'
        }
    ];

    const [EIN, NonProfit, ProjectName, VolunteerTotal, Status] = fauxData;

    const [items, setItems] = useState(fauxData);

    const [renderedItems, setRenderedItems] = useState(fauxData)

    const list = renderedItems.map((item, index) => <ListItem key={index} data={fauxData[index]} />);

    const [searchString, setSearchString] = useState('')

    const filterOrgs = () => {
        const oldList = items;
        const result = []
        for (const item of oldList) {
            if (item.NonProfit.toLowerCase().includes(searchString.toLowerCase())) result.push(item)
        }
        setRenderedItems(result)
    }

    useEffect(() => {
      filterOrgs()
    }, [searchString])

    // console.log(items)

    // const list = <div>hi</div>

    // query our NPO API
    // const data = await fetch('a');
    // const result = await data.json();

    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <div style={{margin: '1em'}}>
                <form>
                    <label>
                        Search: 
                        <input
                        style={{marginLeft: '10px'}}
                        type="text"
                        placeholder="...name"
                        onChange={(e) => setSearchString(e.target.value.toLowerCase())}></input>
                    </label>
                    <label style={{marginLeft: '10px'}}>
                        Project Status: 
                        <select 
                        style={{marginLeft: '5px'}} 
                        name="select"
                        onChange={(e) => console.log(e.target.value)}>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </label>
                </form>
            </div>
            <div>
              {list}
            </div>
        </div>
    );
}