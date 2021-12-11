import React, { Fragment } from 'react';

import Museum from '../../components/museum/Museum';
import MuseumsJson from "../../json/MuseumsJson.json"

function VisitTogether ()  {
    
        const data = MuseumsJson
        const museumsMap = data.museums.map((act) => {return (<Museum mProps={act} key={Math.random()}/>)})
        return (
            <Fragment>
                {museumsMap}
            </Fragment>
        )
    
}

export default VisitTogether;


