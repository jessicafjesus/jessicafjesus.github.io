import { Button } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import useStyles from "./styles";

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

const Profile = (props: ActivityProps) => {
  const classes = useStyles();
  const [activitiesActive, setActivitiesActive] = useState(false);
  const [museumsActive, setMuseumsActive] = useState(true);
  const [visitTogetherActive, setVisitTogetherActive] = useState(false);

  const profileActivitiesHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setMuseumsActive(false);
    setVisitTogetherActive(false);
    setActivitiesActive(true);
  };

  const profileMuseumsHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setVisitTogetherActive(false);
    setActivitiesActive(false);
    setMuseumsActive(true);
  };

  const profileVisitTogetherHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setMuseumsActive(false);
    setActivitiesActive(false);
    setVisitTogetherActive(true);
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="row bg-primary">
        <div className="col-5 bg-success">
          <img
            src={props.aProps.activityImage}
            alt="imageActivity"
            style={{ borderRadius: "2%" }}
            className="img-fluid mx-auto d-block mt-3"
          />
          <div className="row mt-3 align-items-center pl-5 pr-5 bg-secondary">
            <hr
              style={{
                border: "2px solid #F6AE2D",
                color: "#F6AE2D",
                opacity: "100%",
                borderRadius: "7px 7px 7px 7px",
                margin: "auto",
                width: "93%",
              }}
              className="mt-3 mb-3"
            />
            <p className="text-left">{props.aProps.activityDescription}</p>
          </div>
        </div>
        <div className="col-7 bg-warning">
          <div className={classes.div2} >
            <Button color="inherit" className={activitiesActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={profileActivitiesHandler}>Activities</Button>
            <Button color="inherit" className={museumsActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={profileMuseumsHandler}> Museums</Button>
            <Button color="inherit" 
            className={visitTogetherActive ? classes.buttonHeaderActive : classes.buttonHeader} 
            onClick={profileVisitTogetherHandler}>Visit Together &nbsp; 
            <span className="badge bg-danger">4</span></Button>
          </div>
          <div  className="container" >
            <div className = "row  mt-3 rounded " style={{borderColor : "#00a3a3", borderWidth : "2px", borderStyle : "solid", backgroundColor : "#ffffff"}}> 
                <div className="col-3 bg-success">
                  <img
                   src={props.aProps.activityImage}
                   alt="imageActivity"
                   style={{ borderRadius: "2%" }}
                   className="img-fluid mx-auto d-block mt-3 mb-3"/>
                </div>
                <div className="col-9 bg-dark">kk</div>
             </div>
            </div>

          {museumsActive && (
            <Fragment>
              <h5 className="text-left pt-3" style={{ color: "#47525E" }}>
                {props.aProps.activityType}
              </h5>
              <h2 className="text-left" style={{ color: "#47525E" }}>
                <b>museum</b>
              </h2>
              <h5 className="text-left" style={{ color: "#47525E" }}>
                {props.aProps.activityLocation}
              </h5>
            </Fragment>
          )}
                    {visitTogetherActive && (
            <Fragment>
              <h5 className="text-left pt-3" style={{ color: "#47525E" }}>
                {props.aProps.activityType}
              </h5>
              <h2 className="text-left" style={{ color: "#47525E" }}>
                <b>{props.aProps.activityName}</b>
              </h2>
              <h5 className="text-left" style={{ color: "#47525E" }}>
                {props.aProps.activityLocation}
              </h5>
            </Fragment>
          )}
                    {activitiesActive && (
            <Fragment>
              <h5 className="text-left pt-3" style={{ color: "#47525E" }}>
                {props.aProps.activityType}
              </h5>
              <h2 className="text-left" style={{ color: "#47525E" }}>
                <b>{props.aProps.activityName}</b>
              </h2>
              <h5 className="text-left" style={{ color: "#47525E" }}>
                {props.aProps.activityLocation}
              </h5>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
