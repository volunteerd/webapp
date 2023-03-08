import React, { useContext, useState } from "react";
import { createDatabase } from "../script";
import { UserContext } from "./UserContext";

export const MakeProject = (props: any) => {

    // TODO: update name/ein properties with correct names and pull from props?
    const [projectInfo, setProjectInfo] = useState({
        nonprofitname: '',
        nonprofit_ein: '',
        projectName: '',
        projectDescription: ''
    })
    console.log('projectInfo: ', projectInfo)

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const projectData = { projectInfo };
        console.log('project object: ', projectData);

        // TODO: update to correct endpoint
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(projectData)
        }).then(() => {
            console.log('project submitted')
        })
    }
    
    const data = useContext<any>(UserContext);
    console.log(data);

    return (
        <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>

            <h1>Create a New Project</h1>

            <form onSubmit={handleSubmit} style={{borderRadius: '1em', minWidth: '600px', padding: '2em', alignItems: 'flext-start', boxShadow: '1.5px 1.5px 1.5px 1.5px lightblue'}}>
                <div style={{display: 'flex', flexDirection: 'column', }}>
                    <label>Project Name</label>
                    <input 
                        type="text" 
                        id="projectname" 
                        name="projectname"
                        required    
                        style={{margin: '5px'}}
                        onChange={(e) => setProjectInfo({...projectInfo, projectName: e.target.value})}
                    />

                    <label>Project Description</label>
                    <textarea 
                        id="projectdescription" 
                        name="projectdescription"
                        required
                        style={{margin: '5px'}}
                        onChange={(e) => setProjectInfo({...projectInfo, projectDescription: e.target.value})}
                    />
                    
                    <input 
                        type="submit" 
                        name="submitProjectButton"
                        value="Submit" 
                        style={{justifyContent: 'center'}}
                        id="submitProjectButton"
                        className="button-submitGeneric"
                    />
                        
                </div>

            </form>

        </div>
    )
}

