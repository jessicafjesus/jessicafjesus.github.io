import React, { Fragment } from 'react';
import MuseumsJson from "../json/MuseumsJson.json"
import ProfilesJson from "../json/ProfilesJson.json"
import Profile from "../components/profile/Profile"


const ProfilePage = () => {
    const data = MuseumsJson
    const pData = ProfilesJson
    
    return (
        <Fragment>
            <Profile museumP={data.museums[0]} profileP={pData.profiles[0]}/>
        </Fragment>
    )
}

export default ProfilePage;


