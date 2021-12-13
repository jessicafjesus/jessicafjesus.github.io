import { Badge, Button, Modal } from "@material-ui/core";
import { Box, Rating } from "@mui/material";
import React, { Fragment, useState } from "react";
import useStyles from "./styles";
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import MuseumsJson from "../../json/MuseumsJson.json" ;
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

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
  const [showKevin, setShowKevin] = useState(true);
  const [inscritos, setInscritos] = useState(3);
  

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
    
  };

  const pendingRequestsCloseHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setPendingRequestsModal(false);
   
  };

  const acceptHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowKevin(false);
    setInscritos(inscritos+1);
    setNotifValue(notifValue-1);
   
  };

  const declineHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setPendingRequestsModal(false);
   
  };
  

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="row h-100 ">
        <div className="col-5 " style={{backgroundColor:"#f6f7f7"}}>
            <img
                src={props.profileP.profileImage}
                alt="imageActivity"
                style={{ borderRadius: "2%", width: "60%", borderColor : "#00a3a3", borderWidth : "4px", borderStyle : "solid"}}
                className="img-fluid   mx-auto d-block mt-3"/>
              
            <div className="row pl-4 pt-3 rounded ml-5 mt-3 mr-5 align-items-center "
             style={{ borderRadius: "5px", backgroundColor:"#cbd1d1"}}>
              
              <p className="text-left "> <b>Name :</b> {props.profileP.profileName}</p>
              <p className="text-left "> <b>Email :</b> {props.profileP.profileEmail}</p>
              <p className="text-left "> <b>Bio :</b> {props.profileP.profileBio}</p>
              <p className="text-left "> <b>Interests :</b> {props.profileP.profileInterests[0]}</p>
            </div>
        
        </div>

        <div className="col-7  pr-5 pl-3">
          <div className={classes.div2} >
            <Button color="inherit" className={activitiesActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={profileActivitiesHandler}>Activities</Button>
            <Button color="inherit" className={museumsActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={profileMuseumsHandler}> Museums</Button>
            
            <Badge color="error"  badgeContent={notifValue } >
            <Button color="inherit" 
            className={visitTogetherActive ? classes.buttonHeaderActiveVS : classes.buttonHeaderVS} 
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
                    src="solomonMuseum-4.3.jpg"
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
        src="metMuseum-4.3.jpg"
        alt="imageActivity"
        style={{ borderRadius: "2%" }}
        className="img-fluid center-block d-block "/>
      </div>
    </div>
  </div>

<div className="col-9 ">
  <h6 className="text-left mt-3" style={{ color: "#47525E" }}>
    <b>Metropolitan Museum of Art</b>
  </h6>
  <h6 className="text-left mt-1" style={{ color: "#47525E" }}>
   <small className="text-left">The Metropolitan Museum of Art of New York City, colloquially "the Met",[a] is the largest art museum in the United States. Its permanent collection contains over two million works,[1] divided among 17 curatorial departments.</small>
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
        src="MoMa.jpg"
        alt="imageActivity"
        style={{ borderRadius: "2%" }}
        className="img-fluid center-block d-block "/>
      </div>
    </div>
  </div>

<div className="col-9 ">
  <h6 className="text-left mt-3" style={{ color: "#47525E" }}>
    <b>Museum of Modern Art</b>
  </h6>
  <h6 className="text-left mt-1" style={{ color: "#47525E" }}>
   <small className="text-left">The Museum of Modern Art or MoMA plays a major role in developing and collecting modern art, and is often identified as one of the largest and most influential museums of modern art in the world.</small>
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
              <div  className= "col-6  overflow-hidden pr-0" style={{ backgroundColor : "#f6f7f7"}}>
                <Button disableRipple className={createdVisits ? classes.selectedTabLeft : classes.notSelectedTab} 
                onClick={joinedVisitsHandler}> Created visits &nbsp; <Badge color="error"  badgeContent={" " + notifValue }></Badge></Button>
              </div>
              <div className="col-6  overflow-hidden pl-0" style={{ backgroundColor : "#f6f7f7"}}>
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
                          <h6 className="text-left bg-white pl-0" style={{ color: "#33E051" }}>
                        <b>{inscritos}/5</b>
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
                          <h6 className="text-left bg-white pl-0" style={{ color: "#FF0000" }}>
                        <b>4/4</b>
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
                          <h6 className="text-left bg-white pl-0" style={{ color: "#33E051" }}>
                        <b>2/5</b>
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
                      <h6 className="text-left bg-white pl-0" style={{ color: "#FF0000" }}>
                    <b>4/4</b>
                  </h6> 
                    </div>
                    <div className="col d-flex  justify-content-end">
                   
                    <Button className={classes.pendingRequests}
                        onClick={pendingRequestsHandler}>Unjoin</Button>
                    
                    </div>
                  </div>
                  
                  </div>
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
                <div className="col d-flex ">
                  <div className="container-sm d-inline-block w-75 rounded bg-white pl-0 pr-0 overflow-hidden">
                    <div className="row pt-2 pb-2 pl-3  " style={{backgroundColor : "#00a3a3"}}>
                      <div className="col-6 mt-3 ">
                      <h5 style={{ color: "#ffffff" }}><b>{props.museumP.museumName} </b></h5>
                    </div>

                    <div className="col-3 mt-3   ">
                      <h5  style={{ color: "#ffffff", verticalAlign:"middle" }}><b>18-12-2021</b></h5>
                    </div>

                    <div className="col-2 mt-3 ">
                      <h5 style={{ color: "#ffffff" }}><b>10 am</b></h5>
                    </div>

                    <div className="col-1  ">
                    <IconButton onClick={pendingRequestsCloseHandler}>
                          <CloseIcon fontSize="large" />
                        </IconButton>
                    </div>

                    </div>
                    
                     
                    <div className="row gx-2 ">
                     
                        <div className="col   pt-5 pl-3 pb-5" style={{backgroundColor : "#E3E6E6"}}>
                          <div className="container rounded bg-white">
                            <div className="row mh-25 justify-content-center">
                          <img
                            src="person-icon-1.jpg"
                            alt="imageActivity"
                            style={{ borderRadius: "2%", width: "auto", height: "10vw" }}
                            className="img-fluid center-block d-block pt-2 "/>
                          
                          <h5 className="pt-3" style={{textAlign : "center"}}><small><b>Peter K.</b></small></h5>
                          <h6 className="pt-2" style={{textAlign : "center"}}><small>Hi! I have been dying to go to the Guggenheim, excited to join!</small></h6>
                          </div>
                          <div className="row pb-2">
                            <div className="col-6 "> 
                              <Button className={classes.accept}
                              onClick={pendingRequestsHandler}>Accept</Button>
                            </div>
                            <div className="col-6"> 
                              <Button className={classes.decline}
                              onClick={pendingRequestsHandler}>Decline</Button>
                            </div>

                          </div>
                            
                          </div>
                        </div>
                        <div className="col   pt-5 pl-3 pb-5" style={{backgroundColor : "#E3E6E6"}}>
                          <div className="container rounded bg-white">
                            <div className="row mh-25 justify-content-center">
                          <img
                            src="person-icon-2.jpg"
                            alt="imageActivity"
                            style={{ borderRadius: "2%", width: "auto", height: "10vw" }}
                            className="img-fluid center-block d-block pt-2 "/>
                          
                          <h5 className="pt-3" style={{textAlign : "center"}}><small><b>Angela F.</b></small></h5>
                          <h6 className="pt-2" style={{textAlign : "center"}}><small>Really interested in visiting the new Kandinsky exhibition.</small></h6>
                          </div>
                          <div className="row pb-2">
                            <div className="col-6 "> 
                              <Button className={classes.accept}
                              onClick={pendingRequestsHandler}>Accept</Button>
                            </div>
                            <div className="col-6"> 
                              <Button className={classes.decline}
                              onClick={pendingRequestsHandler}>Decline</Button>
                            </div>

                          </div>
                            
                          </div>
                        </div>

                        {showKevin && (<div className="col   pt-5 pl-3 pb-5 pr-3" style={{backgroundColor : "#E3E6E6"}}>
                          <div className="container rounded bg-white">
                            <div className="row mh-25 justify-content-center">
                          <img
                            src="person-icon-3.jpg"
                            alt="imageActivity"
                            style={{ borderRadius: "2%", width: "auto", height: "10vw" }}
                            className="img-fluid center-block d-block pt-2 "/>
                          
                          <h5 className="pt-3" style={{textAlign : "center"}}><small><b>Kevin J.</b></small></h5>
                          <h6 className="pt-2" style={{textAlign : "center"}}><small>Really a fan of Impressionist and Post-Impressionist</small></h6>
                          </div>
                          <div className="row pb-2">
                            <div className="col-6 "> 
                              <Button className={classes.accept}
                              onClick={acceptHandler}>Accept</Button>
                            </div>
                            <div className="col-6"> 
                              <Button className={classes.decline}
                              onClick={declineHandler}>Decline</Button>
                            </div>

                          </div>
                            
                          </div>
                        </div>)}

                        {!showKevin && (
                        <div className="col   pt-5 pl-3 pb-5 pr-3" style={{backgroundColor : "#E3E6E6"}}>
                          
                        </div>)}
                        
                     
                    </div>
                  </div>
                </div>
              </div>
              
              </Modal>

            )}
                    {activitiesActive && (
            <Fragment>
              <h2 className="text-left mt-5 ml-5" style={{ color: "#47525E" }}>
                <b>You haven´t attended any activity yet</b>
              </h2>
              
            </Fragment>
           )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
