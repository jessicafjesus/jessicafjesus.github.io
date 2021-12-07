import { Button, Modal } from "@material-ui/core";
import { Box, Rating } from "@mui/material";
import React, { Fragment, useState } from "react";
import useStyles from "./styles";

interface MuseumProps {
    museumName: string;
    museumType: string;
    museumRating: number;
    museumDescription: string;
    museumLocation: string;
    museumReviews: string[];
    museumImage: string;
    museumWebsite: string;
    museumHours: string;
    museumAdmission: string[];
    museumDescriptionShort: string;
}

interface ProfileProps {
    profileName: string;
    profileEmail: string;
    profileBio: string;
    profileInterests: string[];
    profileImage: string;
}

interface DualProps{
  profileP: ProfileProps; 
  museumP: MuseumProps;
}

const Profile = (props: DualProps) => {
  const classes = useStyles();
  const [activitiesActive, setActivitiesActive] = useState(false);
  const [museumsActive, setMuseumsActive] = useState(true);
  const [visitTogetherActive, setVisitTogetherActive] = useState(false);
  const [rated, setRated] = useState(false);
  const [ratingModal, setRatingModal] = useState(false);
  const [value, setValue] = useState(0);


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

  const rateHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    //abrir o modal para dar rate
    setRatingModal(true);
    //setRated(true);
  };

  const confirmRatingHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    
    setRatingModal(false);
    setRated(true);
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="row bg-danger pl-5 pr-4">
        <div className="col-5 bg-success">
            <img
                src={props.profileP.profileImage}
                alt="imageActivity"
                style={{ borderRadius: "2%", width: "60%", borderColor : "#00a3a3", borderWidth : "2px", borderStyle : "solid"}}
                className="img-fluid  mx-auto d-block mt-3"/>
              
            <div className="row mt-3 align-items-center bg-secondary">
              <hr
                style={{
                  border: "2px solid #F6AE2D",
                  color: "#F6AE2D",
                  opacity: "100%",
                  borderRadius: "7px 7px 7px 7px",
                  margin: "auto",
                  width: "93%",
                }}
                className="mt-3 mb-3"/>
              <p className="text-left fw-bold"> Name : {props.profileP.profileName}</p>
              <p className="text-left fw-bold"> Email : {props.profileP.profileEmail}</p>
              <p className="text-left fw-bold"> Bio : {props.profileP.profileBio}</p>
              <p className="text-left fw-bold"> Interests : {props.profileP.profileInterests[0]}</p>
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
          

            {museumsActive && (
            
            <div  className="container" >
              <div className = "row  mt-3 rounded " style={{borderColor : "#00a3a3", borderWidth : "2px", borderStyle : "solid", backgroundColor : "#ffffff"}}> 
                <div className="col-3 bg-success">
                <div className="row h-100 d-flex align-items-center">
            <div className="col w-100 d-flex justify-content-center text-center">
                  <img
                   src={props.museumP.museumImage}
                   alt="imageActivity"
                   style={{ borderRadius: "2%" }}
                   className="img-fluid center-block d-block "/>
                </div>
                </div>
                </div>
               
                <div className="col-9 ">
                  <h6 className="text-left mt-1" style={{ color: "#47525E" }}>
                    <b>{props.museumP.museumName}</b>
                  </h6>
                  <h6 className="text-left mt-1" style={{ color: "#47525E" }}>
                   <small className="text-left">{props.museumP.museumDescriptionShort}</small>
                  </h6>
                  <div className="row justify-content-end">
                    <div className="col-6 align-self-end ">{(!rated) && (<Button className={classes.buttonNotRated}
                        onClick={rateHandler}>Rate</Button>)}
                        {rated && (
                          <div className="row ">
                        <div className="col-5 ">My rating: </div>
                           <div className="col-7 ">
                          <Rating
                          readOnly
                          name="simple-controlled" 
                          value={value}
                          /></div>
                          </div>
                          
                        )}
                      
                    </div>
                  </div>
                </div>
             </div>
            </div>
            
            )} 
            
            {ratingModal && (
              <Modal
              open={ratingModal}
              onClose={() => setRatingModal(false)}
              aria-labelledby="qqcoisa"
              aria-describedby="outracoisa">
              
              <div className="row h-100 d-flex align-items-center">
                <div className="col d-flex justify-content-center text-center">
                  <div className="container-sm d-inline-block w-25 rounded bg-white">
                    <div className="row pt-4 pb-4">
                      <h4>Rate</h4>
                      <h6>{props.museumP.museumName}</h6>
                    </div>
                      <Rating
                      className="simple-controlled size-large"
                      value={value}
                      size="large"
                      onChange={(event, newValue) => {
                        event.preventDefault();
                        if (typeof newValue === "number") {
                        setValue(newValue);
                        } 
                      }}/>
                    <div className="row d-flex justify-content-center align-items-center  pt-4 pb-3">
                      <Button className={classes.buttonConfirm} onClick={confirmRatingHandler}>Confirm</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              </Modal>

            )}
                    {visitTogetherActive && (
            <Fragment>
              <h2 className="text-left" style={{ color: "#47525E" }}>
                <b>{props.museumP.museumName}</b>
              </h2>
              <h5 className="text-left" style={{ color: "#47525E" }}>
                {props.museumP.museumLocation}
              </h5>
            </Fragment>
            )}
                    {activitiesActive && (
            <Fragment>
              <h2 className="text-left" style={{ color: "#47525E" }}>
                <b>{props.museumP.museumName}</b>
              </h2>
              <h5 className="text-left" style={{ color: "#47525E" }}>
                {props.museumP.museumLocation}
              </h5>
            </Fragment>
           )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
