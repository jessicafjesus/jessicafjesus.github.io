import { listClasses } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function BuyTickets() {
  const [value, setValue] = useState(new Date());
  const listAdmission = [
    "Adults - $25",
    "Seniors 65+  - $17",
    "Students - $12",
    "Members, Patrons, Children - Free",
  ];

  const [numTickets, setNumTickets] = useState(0);

  const addTicketHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setNumTickets(t => t+1);
  };

  const removeTicketHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setNumTickets(t => t-1);
  };

  return (
    <section
      className="container pr-5 pl-5 pb-3 pt-3 pb-1 border bg rounded-3 shadow mx-auto mt-5 mb-5"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h1 style={{ color: "#47525E" }}>
        <b>Get Tickets</b>
      </h1>
      <div className="row">
        <div className="col">
          <h5 style={{ color: "#47525E" }}>
            <b>Choose a Date:</b>
          </h5>
        </div>
        <div className="col">
          <h5 style={{ color: "#47525E" }}>
            <b>Choose a Time:</b>
          </h5>
          <div className="row">
            <div className="col mb-5">
              <button
                className="mt-3 btn btn-sm btn-block border rounded-lg border-secondary"
                style={{ backgroundColor: "#fff", color: "#47525E" }}
              >
                <b>10 AM</b>
              </button>
              <br />
              <button
                className="mt-3 btn btn-sm btn-block border rounded-lg border-secondary"
                style={{ backgroundColor: "#fff", color: "#47525E" }}
              >
                <b>12 AM</b>
              </button>
              <br />
              <button
                className="mt-3 btn btn-sm btn-block border rounded-lg border-secondary"
                style={{ backgroundColor: "#fff", color: "#47525E" }}
              >
                <b>2 PM</b>
              </button>
              <br />
              <button
                className="mt-3 btn btn-sm btn-block border rounded-lg border-secondary"
                style={{ backgroundColor: "#fff", color: "#47525E" }}
              >
                <b>4 PM</b>
              </button>
            </div>
            <div className="col mb-3">
              <button
                className="mt-3 btn btn-sm btn-block border rounded-lg border-secondary"
                style={{ backgroundColor: "#fff", color: "#47525E" }}
              >
                <b>11 AM</b>
              </button>
              <br />
              <button
                className="mt-3 btn btn-sm btn-block border rounded-lg border-secondary"
                style={{ backgroundColor: "#fff", color: "#47525E" }}
              >
                <b>1 PM</b>
              </button>
              <br />
              <button
                className="mt-3 btn btn-sm btn-block border rounded-lg border-secondary"
                style={{ backgroundColor: "#fff", color: "#47525E" }}
              >
                <b>3 PM</b>
              </button>
              <br />
              <button
                className="mt-3 btn btn-sm btn-block border rounded-lg border-secondary"
                style={{ backgroundColor: "#fff", color: "#47525E" }}
              >
                <b>5 PM</b>
              </button>
            </div>
            <div className="col mb-3"></div>
          </div>
          <h5 style={{ color: "#47525E" }}>
            <b>Number of Tickets:</b>
          </h5>
          <ul className="m-0 p-0">
            {React.Children.map(listAdmission, (child) => {
              return (
                <section className="pr-2 pl-2 pb-1 pt-1 pb-1 border bg rounded-3 shadow-sm mx-auto mt-2 mb-2 ml-0">
                  {child}
                  <AddIcon
                    className="ml-5 border mr-5"
                    onClick={addTicketHandler}
                  /> {numTickets}
                  <RemoveIcon className="ml-5 border" onClick={removeTicketHandler}/>
                </section>
              );
            })}
          </ul>
          <button  className="mt-3 btn btn-sm btn-block border rounded-lg border-secondary"
                style={{ backgroundColor: "#fff", color: "#00A3A3" }}><b>Next</b></button>
        </div>
      </div>
    </section>
  );
}

export default BuyTickets;
