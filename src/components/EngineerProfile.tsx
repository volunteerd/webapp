import React, {useState} from 'react';

const mockData = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCaH5R_0SfWrvcjo5eeBQ_Zg8SfY5-o512OjvB8cAAg&s',
    name: "Sam 'Alexander Samilton' Arnold",
    skills: "you name em, I got em",
    yoe: 'all of them',
    specialties: 'doesn\'t like to pick favorites, so learned everything'
}

export const EngineerProfile = () => {
    const [userInfo, setUserInfo] = useState(mockData)
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '80%', alignItems: 'center', margin: '1em'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
              <img src={mockData.img}></img>
                <h1>{mockData.name}</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%'}}>
                <p><strong>Skills:</strong> {mockData.skills}</p>
                <p><strong>Years of Experience:</strong> {mockData.yoe}</p>
                <p><strong>Specialties:</strong> {mockData.specialties}</p>
            </div>
        </div>
    )
}