import React, { Fragment } from 'react';
import Activity from '../../components/activity/Activity';
import ActivitiesJson from "../../json/ActivitiesJson.json"

function activities() {
    const data = ActivitiesJson
    const activitiesMap = data.activities.map((act) => {return (<Activity aProps={act} key={Math.random()}/>)})
    return (
        <Fragment>
            {activitiesMap}
        </Fragment>
    )
}

export default activities;
