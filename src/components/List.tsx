import React, { useContext, useState } from "react";

export const List = (props: any) => {

    const [items, setItems] = useState(["a", "b", "c"]);

    const list = items.map((item, index) => <p key={index}>{item}</p>);

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