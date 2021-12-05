import React, { Fragment } from 'react';
import ActivitiesJson from "../json/ActivitiesJson.json"
import Profile from "../components/Profile/Profile"

const ProfilePage = () => {
    const data = ActivitiesJson
    const activitiesMap = data.activities.map((act) => {return (<Profile aProps={act}/>)})
    return (
        <Fragment>
            {activitiesMap}
        </Fragment>
    )
}

export default ProfilePage;


