import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@material-ui/core";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import useStyles from "./styles";

import { TextField} from "@mui/material";



function BuyTickets() {
  const classes = useStyles();

  const listAdmission = [
    "Adults - $25",
    "Seniors 65+  - $17",
    "Students - $12",
    "Members, Patrons, Children - Free",
  ];

  const [numTickets, setNumTickets] = useState(0);
  const [time, setTime] = useState(0);
  
  const [date, setDate] = useState<Date>();
  const [dateInString, setDateInString] = useState("");

  const addTicketHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setNumTickets(numTickets + 1);
  };

  const removeTicketHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setNumTickets(numTickets - 1);
  };

  return (
    <>
      <section >
        <h1 className="mt-5" style={{ color: "#47525E", marginLeft:"110px" }}>
          <b>Get Tickets</b>
        </h1>
      </section>
      <section
        className="container pr-5 pl-5 pb-3 pt-3 pb-1 border bg rounded-3 shadow mx-auto mb-5"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="row mt-4">
          <div className="col">
            <h5 style={{ color: "#47525E" }}>
              <b>Choose a Date:</b>
            </h5>
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date:"
                    minDate={new Date()}
                    maxDate={new Date(Date.now() + 220898482000)}
                    value={date}
                    onChange={(newValue) => {
                      if (newValue?.getMonth && newValue?.getDay) {
                        setDateInString(
                          newValue.getDay +
                            " " +
                            newValue.getMonth() +
                            1 +
                            " " +
                            newValue.getFullYear()
                        );
                        setDate(newValue);
                      }
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
          </div>
          <div className="col">
            <h5 style={{ color: "#47525E" }}>
              <b>Choose a Time:</b>
            </h5>
            <div className="row">
              <div className="col mb-5">
                <button
                  className={"mt-3 btn btn-sm btn-block"}
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "7px 7px 7px 7px",
                    width: "120px",
                  }}
                  onClick={() => {
                    setTime(10);
                  }}
                >
                  <b>10 AM</b>
                </button>
                <br />
                <button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "7px 7px 7px 7px",
                    width: "120px",
                  }}
                  onClick={() => {
                    setTime(12);
                  }}
                >
                  <b>12 AM</b>
                </button>
                <br />
                <button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "7px 7px 7px 7px",
                    width: "120px",
                  }}
                  onClick={() => {
                    setTime(2);
                  }}
                >
                  <b>2 PM</b>
                </button>
                <br />
                <button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "7px 7px 7px 7px",
                    width: "120px",
                  }}
                  onClick={() => {
                    setTime(4);
                  }}
                >
                  <b>4 PM</b>
                </button>
              </div>
              <div className="col mb-3">
                <button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "7px 7px 7px 7px",
                    width: "120px",
                  }}
                  onClick={() => {
                    setTime(11);
                  }}
                >
                  <b>11 AM</b>
                </button>
                <br />
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "7px 7px 7px 7px",
                    width: "120px",
                  }}
                  className="mt-3 btn btn-sm btn-block "
                  onClick={() => {
                    setTime(1);
                  }}
                >
                  <b>1 PM</b>
                </button>
                <br />
                <button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "7px 7px 7px 7px",
                    width: "120px",
                  }}
                  onClick={() => {
                    setTime(3);
                  }}
                >
                  <b>3 PM</b>
                </button>
                <br />
                <button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "7px 7px 7px 7px",
                    width: "120px",
                  }}
                  onClick={() => {
                    setTime(5);
                  }}
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
                  <section className="pr-2 pl-2 pb-1 pt-1 pb-1 border bg rounded-3 shadow-sm mx-auto mt-2 mb-2 ml-0" style={{ color: "#47525E" }}>
                    {child}
                    <IconButton disabled={numTickets <= 0} aria-label="small outlined button" style={{width:"20px",  marginLeft:"100px"}}>
                      <RemoveIcon
                        onClick={removeTicketHandler}
                        style={{border: "2px solid",  float:"right", marginLeft:"100px"}}
                      />
                    </IconButton>
                    {numTickets}
                    <AddIcon
                      onClick={addTicketHandler}
                      style={{border: "2px solid", marginRight:"10px",  float:"right", marginTop:"13px"}}
                    />
                  </section>
                );
              })}
            </ul>

            <button
              className="mt-3 btn btn-sm btn-block"
              style={{
                backgroundColor: "#fff",
                color: "#00A3A3",
                border: "3px solid #00A3A3",
                borderRadius: "7px 7px 7px 7px",
                width: "120px",
              }}
            >
              <b>Next</b>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyTickets;
