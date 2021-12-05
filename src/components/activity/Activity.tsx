import Rating from "@mui/material/Rating"
import React, { Fragment, useState } from "react";
import BuyTicketsActivity from "./BuyTicketsActivity";
interface ActivityProps {
  aProps: {
    activityName: string;
    activityType: string;
    activityRating: number;
    activityDate: string[];
    activityDescription: string;
    activityLocation: string;
    activityReviews: string[];
    activityImage: string;
  };
}

const Activity = (props: ActivityProps) => {
  const DateSet = props.aProps.activityDate.map((date) => {
    return (
      <h4>{date}</h4>
    )
  })
  const [defaultView,setDefaultView] = useState(true)
  const [buyTickets,setBuyTickets] = useState(false)
  const [createVisit,setCreateVisit] = useState(false)

  const buyTicketsHandler = (event : React.MouseEvent) => {
    event.preventDefault()
    setDefaultView(false)
    setCreateVisit(false)
    setBuyTickets(true)
  }

  const createVisitHandler = (event : React.MouseEvent) => {
    event.preventDefault()
    setDefaultView(false)
    setBuyTickets(false)
    setCreateVisit(true)
  }

  return (
    <Fragment>
      {defaultView && (
        <section
        className="container pr-5 pl-5 pb-3 pt-3 pb-1 border bg rounded-3 shadow mx-auto mt-5 mb-5"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="row">
          <div className="col">
            <img src={props.aProps.activityImage} alt="imageActivity" style={{borderRadius:"2%"}} className="img-fluid mx-auto d-block mt-3" />
          </div>
          <div className="col">
            <h5 className="text-left pt-3" style={{color:"#47525E"}}>{props.aProps.activityType}</h5>
            <h2 className="text-left" style={{color:"#47525E"}}><b>{props.aProps.activityName}</b></h2>
            <h5 className="text-left" style={{color:"#47525E"}}>{props.aProps.activityLocation}</h5>
            <Rating value={props.aProps.activityRating} readOnly={true} size="large"/>
            {DateSet}
            <button className="btn btn-lg btn-block" style={{backgroundColor:"#00A3A3", color:"#FFFFFF"}} onClick={buyTicketsHandler}>Get Tickets</button>
            <button className="btn btn-lg btn-block" style={{backgroundColor:"#00A3A3", color:"#FFFFFF"}} onClick={createVisitHandler}>Create Visit</button>
          </div>
        </div>
        <div className="row mt-3 align-items-center pl-5 pr-5">
          <hr style={{border:"2px solid #F6AE2D", color:"#F6AE2D" , opacity:"100%", borderRadius:"7px 7px 7px 7px", margin:"auto", width:"93%"}} className="mt-3 mb-3"/>
          <p className="text-left">{props.aProps.activityDescription}</p>
        </div>
      </section>
      )}
      {createVisit && (<Fragment></Fragment>)}
      {buyTickets && (<BuyTicketsActivity aProps={props.aProps}/>)}
    </Fragment>
  );
};

export default Activity;
