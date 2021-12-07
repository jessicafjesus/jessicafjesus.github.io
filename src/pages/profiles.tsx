import React, { Fragment } from 'react';
import MuseumsJson from "../json/MuseumsJson.json"
import ProfilesJson from "../json/ProfilesJson.json"
import Profile from "../components/profile/Profile"


const ProfilePage = () => {
    const data = MuseumsJson
    const pData = ProfilesJson
    const museumsMap = data.museums.map((act) => {return (<Profile museumP={act} profileP={pData.profiles[0]}/>)})
    return (
        <Fragment>
            {museumsMap}
        </Fragment>
    )
}

export default ProfilePage;


