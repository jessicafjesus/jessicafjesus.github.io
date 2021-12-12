import { Badge, Button, Modal } from "@material-ui/core";
import { Box, Rating } from "@mui/material";
import React, { Fragment, useState } from "react";
import useStyles from "./styles";
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import MuseumsJson from "../../json/MuseumsJson.json" ;

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
  const [value2, setValue2] = useState(3);
  const [value3, setValue3] = useState(4);
  const [createdVisits, setCreatedVisits] = useState(true);
  const [notifValue, setNotifValue] = useState(3);
  const [pendingRequestsModal, setPendingRequestsModal] = useState(false);
  

  const dataMuseums = MuseumsJson

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

  };

  const confirmRatingHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setRatingModal(false);
    setRated(true);
  };

  const joinedVisitsHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setCreatedVisits(true);
  };

  const createdVisitsHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setCreatedVisits(false);
  };

  const pendingRequestsHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setPendingRequestsModal(true);
    setRated(true);
  };
  

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="row h-100 bg-danger pl-5 pr-4 ">
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
            
            <Badge color="error"  badgeContent={notifValue }>
            <Button color="inherit" 
            className={visitTogetherActive ? classes.buttonHeaderActive : classes.buttonHeader} 
            onClick={profileVisitTogetherHandler}>Visit Together &nbsp; 
            </Button></Badge>
          </div>
          

            {museumsActive && (
            <Fragment>
            <div  className="container" >
            <div className = "row  mt-3 rounded " style={{borderColor : "#00a3a3", borderWidth : "2px", borderStyle : "solid", backgroundColor : "#ffffff"}}> 
              <div className="col-3 pr-0 ">
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
              <h6 className="text-left mt-3" style={{ color: "#47525E" }}>
                <b>{props.museumP.museumName}</b>
              </h6>
              <h6 className="text-left mt-1" style={{ color: "#47525E" }}>
               <small className="text-left">{props.museumP.museumDescriptionShort}</small>
              </h6>
              <div className="row justify-content-end">
                <div className="col-6 align-self-end ">
                    
                      <div className="row ">
                    <div className="col-5 ">My rating: </div>
                       <div className="col-7 ">
                      <Rating
                      readOnly
                      name="simple-controlled" 
                      value={value2}
                      /></div>
                      </div>
                      
                    
                  
                </div>
              </div>
            </div>
         </div>
        </div>

<div  className="container" >
<div className = "row  mt-3 rounded " style={{borderColor : "#00a3a3", borderWidth : "2px", borderStyle : "solid", backgroundColor : "#ffffff"}}> 
  <div className="col-3 pr-0 ">
    <div className="row h-100 d-flex align-items-center">
      <div className="col w-100 d-flex justify-content-center text-center">
        <img
        src="metMuseum.jpg"
        alt="imageActivity"
        style={{ borderRadius: "2%" }}
        className="img-fluid center-block d-block "/>
      </div>
    </div>
  </div>

<div className="col-9 ">
  <h6 className="text-left mt-3" style={{ color: "#47525E" }}>
    <b>Whitney Museum of American Art</b>
  </h6>
  <h6 className="text-left mt-1" style={{ color: "#47525E" }}>
   <small className="text-left">The Whitney Museum of American Art, known informally as "The Whitney", is an art museum that focuses on 20th- and 21st-century American art. Its permanent collection, spanning the late-19th century to the present, comprises more than 25,000 paintings, sculptures, drawings, prints, photographs, films, videos, and artifacts.</small>
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

<div  className="container" >
<div className = "row  mt-3 rounded " style={{borderColor : "#00a3a3", borderWidth : "2px", borderStyle : "solid", backgroundColor : "#ffffff"}}> 
  <div className="col-3 pr-0 ">
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
  <h6 className="text-left mt-3" style={{ color: "#47525E" }}>
    <b>{props.museumP.museumName}</b>
  </h6>
  <h6 className="text-left mt-1" style={{ color: "#47525E" }}>
   <small className="text-left">{props.museumP.museumDescriptionShort}</small>
  </h6>
  <div className="row justify-content-end">
    <div className="col-6 align-self-end ">
          <div className="row ">
        <div className="col-5 ">My rating: </div>
           <div className="col-7 ">
          <Rating
          readOnly
          name="simple-controlled" 
          value={value3}
          /></div>
          </div>
          
        
      
    </div>
  </div>
</div>
</div>
</div>
</Fragment>  
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
            <div  className="container  rounded  mt-3 mr-1 ml-1 mb-2 pb-2 pl-0 pr-0 overflow-hidden " 
            style={{ backgroundColor : "#cbd1d1"}} > 
              <div className="row bg-white rounded-top  ">
              <div  className= "col-6  overflow-hidden pr-0" style={{ backgroundColor : "#E3E6E6"}}>
                <Button disableRipple className={createdVisits ? classes.selectedTabLeft : classes.notSelectedTab} 
                onClick={joinedVisitsHandler}> Created visits &nbsp; <Badge color="error"  badgeContent={" " + notifValue }></Badge></Button>
              </div>
              <div className="col-6  overflow-hidden pl-0" style={{ backgroundColor : "#E3E6E6"}}>
              <Button disableRipple className={!createdVisits ? classes.selectedTabRight : classes.notSelectedTab}
              onClick={createdVisitsHandler}> Joined Visits  </Button>
              
              </div>
              </div>
              
              <div className="container" >

                {createdVisits && (
                  <Fragment>
                  <div className = "row rounded  mt-3 pr-3  " style={{ backgroundColor : "#ffffff"}}> 
                  <div className="col-3 pr-0 ">
                        <div className="row h-100 d-flex align-items-center">
                          <div className="col w-100 d-flex justify-content-center text-center">
                            <img
                            src="solomonMuseum.jpg"
                            alt="imageActivity"
                            style={{ borderRadius: "2%" }}
                            className="img-fluid center-block d-block "/>
                          </div>
                        </div>
                      </div>
                      <div className="col-9">
                      <h6 className="text-left mt-2" style={{ color: "#47525E" }}>
                        <small><b>Solomon R. Guggenheim Museum</b></small>
                      </h6> 
                      <div className="row " >
                        <div className="col-md-auto ">
                          <div ><EventIcon style={{fill: "#FFA552"}}/> </div>
                        </div>
                        <div className="col  pl-0">
                          <h6 className="text-left bg-white pl-0" style={{ color: "#47525E" }}>
                        <small><b>Saturday, December 18, 2021</b></small>
                      </h6> 
                        </div>
                      </div>
    
                      <div className="row " >
                        <div className="col-md-auto ">
                          <div >< AccessTimeIcon style={{fill: "#FFA552"}}/> </div>
                        </div>
                        <div className="col-2  pl-0">
                          <h6 className="text-left bg-white pl-0" style={{ color: "#47525E" }}>
                        <small><b>10 am</b></small>
                      </h6> 
                        </div>
                        <div className="col-md-auto ">
                          <div >< PersonIcon style={{fill: "#FFA552"}}/> </div>
                        </div>
                        <div className="col-1 pl-0">
                          <h6 className="text-left bg-white pl-0" style={{ color: "#47525E" }}>
                        <small><b>3/5</b></small>
                      </h6> 
                        </div>
                        <div className="col d-flex justify-content-end">
                        <Badge color="error"  badgeContent={" " + notifValue }>
                        <Button className={classes.pendingRequests}
                            onClick={pendingRequestsHandler}>Pending Requests</Button>
                        </Badge>
                        </div>
                      </div>
                      
                      </div>
                  </div>
              

              <div className = "row rounded  mt-3 pr-3  " style={{backgroundColor : "#ffffff"}}> 
                  <div className="col-3 pr-0 ">
                        <div className="row h-100 d-flex align-items-center">
                          <div className="col w-100 d-flex justify-content-center text-center">
                            <img
                            src="metMuseum.jpg"
                            alt="imageActivity"
                            style={{ borderRadius: "2%" }}
                            className="img-fluid center-block d-block "/>
                          </div>
                        </div>
                      </div>
                      <div className="col-9">
                      <h6 className="text-left mt-2" style={{ color: "#47525E" }}>
                        <small><b>Metropolitan Museum of Art</b></small>
                      </h6> 
                      <div className="row " >
                        <div className="col-md-auto">
                          <div ><EventIcon style={{fill: "#FFA552"}}/> </div>
                        </div>
                        <div className="col  pl-0">
                          <h6 className="text-left bg-white pl-0" style={{ color: "#47525E" }}>
                        <small><b>Wednesday, December 15, 2021</b></small>
                      </h6> 
                        </div>
                      </div>
    
                      <div className="row " >
                        <div className="col-md-auto ">
                          <div className="">< AccessTimeIcon style={{fill: "#FFA552"}}/> </div>
                        </div>
                        <div className="col-2  pl-0">
                          <h6 className="text-left bg-white pl-0" style={{ color: "#47525E" }}>
                        <small><b>3 pm</b></small>
                      </h6> 
                        </div>
                        <div className="col-md-auto ">
                          <div >< PersonIcon style={{fill: "#FFA552"}}/> </div>
                        </div>
                        <div className="col-1  pl-0">
                          <h6 className="text-left bg-white pl-0" style={{ color: "#47525E" }}>
                        <small><b>4/4</b></small>
                      </h6> 
                        </div>
                        <div className="col d-flex  justify-content-end">
                       
                        <Button className={classes.pendingRequests}
                            onClick={pendingRequestsHandler}>Pending Requests</Button>
                        
                        </div>
                      </div>
                      
                      </div>
                  </div>
              

              <div className = "row rounded  mt-3 pr-3  " style={{ backgroundColor : "#ffffff"}}> 
                  <div className="col-3 pr-0 ">
                        <div className="row h-100 d-flex align-items-center">
                          <div className="col w-100 d-flex justify-content-center text-center">
                            <img
                            src="solomonMuseum.jpg"
                            alt="imageActivity"
                            style={{ borderRadius: "2%" }}
                            className="img-fluid center-block d-block "/>
                          </div>
                        </div>
                      </div>
                      <div className="col-9">
                      <h6 className="text-left mt-2" style={{ color: "#47525E" }}>
                        <small><b>Solomon R. Guggenheim Museum</b></small>
                      </h6> 
                      <div className="row" >
                        <div className="col-md-auto ">
                          <div ><EventIcon style={{fill: "#FFA552"}}/> </div>
                        </div>
                        <div className="col  pl-0">
                          <h6 className="text-left bg-white pl-0" style={{ color: "#47525E" }}>
                        <small><b>Sunday, December 19, 2021</b></small>
                      </h6> 
                        </div>
                      </div>
    
                      <div className="row " >
                        <div className="col-md-auto ">
                          <div >< AccessTimeIcon style={{fill: "#FFA552"}}/> </div>
                        </div>
                        <div className="col-2 pl-0">
                          <h6 className="text-left bg-white pl-0" style={{ color: "#47525E" }}>
                        <small><b>11 am</b></small>
                      </h6> 
                        </div>
                        <div className="col-md-auto ">
                          <div >< PersonIcon style={{fill: "#FFA552"}}/> </div>
                        </div>
                        <div className="col-1 pl-0">
                          <h6 className="text-left bg-white pl-0" style={{ color: "#47525E" }}>
                        <small><b>3/5</b></small>
                      </h6> 
                        </div>
                        <div className="col d-flex justify-content-end">
                       
                        <Button className={classes.pendingRequests}
                            onClick={pendingRequestsHandler}>Pending Requests</Button>
                        
                        </div>
                      </div>
                      
                      </div>
                  </div>
              </Fragment>
              
              )}

            {!createdVisits && (
              <div className="row justify-content-center">
                <h2>Nothing to see here</h2>
                <h2>You have not joined any activities yet</h2>
                </div>
            )}
              </div>
                    
            </div>
            )}



            {pendingRequestsModal && (
              <Modal
              open={pendingRequestsModal}
              onClose={() => setPendingRequestsModal(false)}
              aria-labelledby="qqcoisa"
              aria-describedby="outracoisa">
              
              <div className="row rounded h-100 d-flex align-items-center ">
                <div className="col d-flex   bg-warning">
                  <div className="container-sm d-inline-block w-75 rounded bg-white pl-0 pr-0 overflow-hidden">
                    <div className="row pt-3 pb-4 pl-3  " style={{backgroundColor : "#00a3a3"}}>
                      <div className="col-7">
                      <h6 style={{ color: "#ffffff" }}><b>{props.museumP.museumName} </b></h6>
                    </div>

                    <div className="col-3 ">
                      <h6 style={{ color: "#ffffff" }}><b>{props.museumP.museumType}</b></h6>
                    </div>

                    <div className="col-2 ">
                      <h6 style={{ color: "#ffffff" }}><b>{props.museumP.museumRating}</b></h6>
                    </div>

                    </div>
                    
                     
                    <div className="row gx-2 bg-success">
                     
                        <div className="col   pt-2 pl-3 pb-5" style={{backgroundColor : "#E3E6E6"}}>
                          <div className="container rounded bg-white">
                            <div className="row mh-25 justify-content-center">
                          <img
                            src="person-icon-1.jpg"
                            alt="imageActivity"
                            style={{ borderRadius: "2%" }}
                            className="img-fluid center-block d-block "/>
                          </div>
                          <h6><small><b>Peter K.</b></small></h6>
                          <div className="row">
                            <div className="col-6"> 
                              <Button className={classes.pendingRequests}
                              onClick={pendingRequestsHandler}>Accept</Button>
                            </div>
                            <div className="col-6"> 
                              <Button className={classes.pendingRequests}
                              onClick={pendingRequestsHandler}>Decline</Button>
                            </div>

                          </div>
                            
                          </div>
                        </div>
                        <div className="col bg-danger">hh</div>
                        <div className="col bg-warning">
                        <div className="container rounded bg-white">
                          <div>imagem</div>
                          <div className="row">
                            <div className="col-6"> 
                              <Button className={classes.pendingRequests}
                              onClick={pendingRequestsHandler}>Accept</Button>
                            </div>
                            <div className="col-6"> 
                              <Button className={classes.pendingRequests}
                              onClick={pendingRequestsHandler}>Decline</Button>
                            </div>

                          </div>
                        </div>
                        </div>
                     
                    </div>
                  </div>
                </div>
              </div>
              
              </Modal>

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
