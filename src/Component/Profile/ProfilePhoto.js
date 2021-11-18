import React from 'react'
import Profile from '../../images/ProfilePhoto.jpg'
const ProfilePhoto = () => {
    return (
        
            <img src={Profile}  alt="ProfilePhoto"    style={{
        borderRadius: "50%",
        display: "block",
        margin: "5vh auto",
        width: "300px",
        height: "300px",
      }}/>
      
    )
}

export default ProfilePhoto
 