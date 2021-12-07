import React, { Fragment } from 'react';
import MuseumsJson from "../json/MuseumsJson.json"
import Profile from "../components/profile/Profile"


const ProfilePage = () => {
    const data = MuseumsJson
    const museumsMap = data.museums.map((act) => {return (<Profile mProps={act}/>)})
    return (
        <Fragment>
            {museumsMap}
        </Fragment>
    )
}

export default ProfilePage;


