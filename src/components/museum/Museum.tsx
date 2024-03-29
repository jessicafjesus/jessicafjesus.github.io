import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";
import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import BuyTickets from "./BuyTickets";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateVisit from "./CreateVisit";

interface MuseumProps {
  mProps: {
    museumName: string;
    museumType: string;
    museumRating: number;
    museumDescription: string;
    museumLocationImage: string;
    museumLocation: string;
    museumReviews: string[];
    museumImage: string;
    museumWebsite: string;
    museumHours: string;
    museumAdmission: string[];
  },
  viewMain : React.Dispatch<React.SetStateAction<boolean>>;
  viewMuseum : React.Dispatch<React.SetStateAction<boolean>>;
}

const Museum = (props: MuseumProps) => {

  const handleCreateVisit = (event: React.MouseEvent) => {
    event.preventDefault();
    setCreateVisit(true);
  };

  const [defaultView, setDefaultView] = useState(true);
  const [buyTickets, setBuyTickets] = useState(false);
  const [createVisit, setCreateVisit] = useState(false);

  const handleGetTickets = (event: React.MouseEvent) => {
    event.preventDefault();
    setDefaultView(false);
    setCreateVisit(false);
    setBuyTickets(true);
  };

  const defaultHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setBuyTickets(false);
    setCreateVisit(false);
    setDefaultView(true);
  };

  return (
    <Fragment>
      {defaultView && (
        <div>
        <button className="mt-2 ml-2 btn" style={{backgroundColor:"#FFA552"}} onClick={() => {props.viewMuseum(false);props.viewMain(true)}}><ArrowBackIcon/></button>
        <section
          className="container pr-5 pl-5 pb-3 pt-3 pb-1 border bg rounded-3 shadow mx-auto mt-5 mb-5"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="row">
            <div className="col">
              <img
                src={props.mProps.museumImage}
                alt="imageMuseum"
                style={{ borderRadius: "1%" }}
                className="img-fluid mx-auto d-block mt-3"
              />
              <div className="row">
                <div className="col-4 pt-2">
                  <Rating
                    value={props.mProps.museumRating}
                    readOnly={true}
                    size="large"
                  />
                </div>
                <div className="col-1 pt-3  ">
                  <h5 className="text-left " style={{ color: "#47525E" }}>
                    {props.mProps.museumRating}
                  </h5>
                </div>
              </div>
              <input
                type="text"
                placeholder="write a review... "
                className="pr-2 pl-2 pb-1 pt-1 pb-1 border bg rounded-3 shadow-sm mx-auto mt-4 mb-2 ml-0"
              />
              <ul className="m-0 p-0">
                {React.Children.map(props.mProps.museumReviews, (child) => {
                  return (
                    <section className="pr-2 pl-2 pb-1 pt-1 pb-1 border bg rounded-3 shadow-sm mx-auto mt-2 mb-2 ml-0">
                      {child}
                    </section>
                  );
                })}
              </ul>
              <div className="row mt-5">
                <div className="col-1">
                  <LocationOnIcon style={{ fill: "#FFA552" }} />
                </div>
                <div className="col-3">
                  <h4 className="text-left" style={{ color: "#47525E" }}>
                    <b>Location:</b>
                  </h4>
                </div>
              </div>
              <img
                src={props.mProps.museumLocationImage}
                alt="imageMuseumLoc"
                style={{ borderRadius: "1%" }}
                className="img-fluid mx-auto d-block mt-3"
              />
            </div>

            <div className="col">
              <h2 className="text-left pt-3" style={{ color: "#47525E" }}>
                <b>{props.mProps.museumName}</b>
              </h2>
              <p className="text-left">{props.mProps.museumDescription}</p>

              <h5 className="text-left mt-5">
                <b>Website: </b>
                {props.mProps.museumWebsite}
              </h5>
              <div className="row mt-5">
                <div className="col">
                  <b>Opening hours: </b>
                  <br />
                  {props.mProps.museumHours}
                </div>
                <div className="col">
                  <b>Admission: </b>
                  <ul className="m-0 p-0 list-unstyled">
                    {React.Children.map(
                      props.mProps.museumAdmission,
                      (child) => {
                        return <li>{child}</li>;
                      }
                    )}
                  </ul>
                  <button
                    className="mt-3 btn btn-sm btn-block"
                    style={{ backgroundColor: "#00A3A3", color: "#FFFFFF" }}
                    onClick={handleGetTickets}
                  >
                    Get Tickets
                  </button>
                  <button
                    className="mt-3 btn btn-sm btn-block"
                    style={{ backgroundColor: "#00A3A3", color: "#FFFFFF" }}
                    onClick={handleCreateVisit}
                  >
                    Create a Visit for this museum
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section></div>
      )}
      {buyTickets && (
        <BuyTickets mProps={props.mProps} setBack={defaultHandler} />
      )}
      {createVisit && (<CreateVisit showCreate={createVisit} setShowCreate={setCreateVisit} museumName={props.mProps.museumName}/>)}
    </Fragment>
  );
};

export default Museum;
