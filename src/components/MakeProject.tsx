import React, { useContext } from "react";
import { createDatabase } from "../script";
import { UserContext } from "./UserContext";

export const MakeProject = (props: any) => {
const data = useContext<any>(UserContext);
const handleSubmit = (e: any) => {
    e.preventDefault()
}
  console.log(data);
    return (
        <div>
            <h1>Create a New Project</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>Project Name
                            <input type="text" id="projectname" name="projectname"/>
                        </label>
                    </li>
                    <li>
                        <label>Project Description
                            <input type="text" id="projectdescription" name="projectdescription"/>
                        </label>
                    </li>
                    <li>
                        <input type="submit" value="Submit" id="projectSubmit"></input> 
                    </li>
                </ul>

            </form>

        </div>
    )
}
