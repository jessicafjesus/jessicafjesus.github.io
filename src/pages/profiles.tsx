import React, { Fragment } from 'react';
import ActivitiesJson from "../json/ActivitiesJson.json"
import Profile from "../components/profile/Profile"

const ProfilePage = () => {
    const data = ActivitiesJson
    return (
        <Fragment><Profile aProps={data.activities[0]}/></Fragment>
    )
}

export default ProfilePage;


