import React from 'react'
import profiles from '../fakeData'

console.log(profiles)

const ProfileCard = ({image, name, title, description}) => {
    return (
    <div 
        style={{ 
            backgroundColor: 'white', 
            margin: 10, 
            padding:3, 
            borderRadius: 10 
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={image} alt='img' height='50px' style={{ borderRadius: 10}}/>
        <div>
            <h2 style={{marginLeft: '10px'}}> {name} </h2>
            <h6 style={{marginLeft: '10px'}}> {title} </h6>
        </div>    
        </div>   

        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <p style={{ fontSize: '10px', padding: 5 }}>{description}</p>
        </div>

    </div>
    )
}

export default ProfileCard
