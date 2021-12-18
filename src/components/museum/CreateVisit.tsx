import React, { Fragment, useState } from "react";
import MuseumsNamesJson from "../../json/MuseumsNames.json";
import { TextField, MenuItem, ButtonGroup, Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useStyles from './styles';
import { Button } from "@material-ui/core";

interface CreateProps {
  showCreate : boolean;
  setShowCreate : React.Dispatch<React.SetStateAction<boolean>>;
  museumName : string;
}

const CreateVisit = (props : CreateProps) => {
  const museums = MuseumsNamesJson.museumsName;
  const [museum, setMuseum] = useState("");
  const classes = useStyles();

  const [date, setDate] = useState<Date>();
  const [dateInString, setDateInString] = useState("");

  const [numPeople, setNumPeople] = useState(0);
  const [createVisit, setCreateVisit] = useState(false);

  const [selectedButton, setSelectedButton] = useState("");

  return (
    <Fragment>
      {
        <Modal
          open={props.showCreate}
          onClose={() => props.setShowCreate(false)}
          style={{ position: "absolute", overflow: "scroll"}}
        >
          <div className="d-flex justify-content-center align-items-center color-overlay">
          <div
                className="border bg rounded-3 shadow"
                style={{
                  backgroundColor: "#FFFFFF",
                  height: "auto",
                  marginTop: "0px",
                  textAlign: "center",
                }}
              > 
            {!createVisit && 
            <div>
              <CloseIcon className="mt-1" style={{float:"right", marginRight: "20px", cursor: "pointer"}} fontSize="large" onClick={(event) => {props.setShowCreate(false)}}/>
                <h2
                  style={{
                    marginTop: "30px",
                    textAlign: "center",
                    marginLeft: "40px"
                  }} > Create a Visit </h2>
                <p
                  style={{
                    marginTop: "20px",
                    marginRight: "50px",
                    marginLeft: "70px",
                  }}
                >
                  Don't have anyone to visit this museum with? Don't worry! Just
                  create a visit and people will join you.
                </p>
                <form
                  onSubmit={() => {
                    if(selectedButton !== "" && dateInString !== "" && numPeople > 0)
                      setCreateVisit(true);
                  }}
                >
                  <div className="row">
                    <div
                      className="col"
                      style={{ marginLeft: "70px", marginTop: "20px" }}
                    >
                      <b className="mb-4" style={{float:"left"}}>Museum : {props.museumName}</b>
                      <div style={{ marginTop: "30px" }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Visit Date"
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
                        <div
                          style={{
                            marginTop: "20px",
                            height: "50px",
                            border: "1px solid #969FAA",
                            borderRadius: "4px",
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <h6 className="mt-3 ml-3">Number of People:</h6>
                          <ButtonGroup 
                            size="small"
                            aria-label="small outlined button group"
                          >
                            <Button style={{border: "1px solid #969FAA"}}
                              disabled={numPeople <= 0}
                              onClick={() => {
                                setNumPeople(numPeople - 1);
                              }}
                            > - </Button>
                            {<Button disableElevation>{numPeople}</Button>}
                            {
                              <Button style={{border: "1px solid #969FAA", width: "10%"}}
                                onClick={() => {
                                  setNumPeople(numPeople + 1);
                                }}
                              > + </Button>
                            }
                          </ButtonGroup>
                        </div>
                        <input
                          type="text"
                          placeholder="What kind of people are you looking to join you?"
                          required
                          style={{
                            marginTop: "20px",
                            height: "100px",
                            width: "365px",
                            border: "1px solid #969FAA",
                            padding: "10px",
                            borderRadius: "4px",
                            textAlign: "left",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col ml-5">
                      <Button
                        className={selectedButton==="10AM" ? `${classes.hoursButtonSelected}` : `${classes.hoursButton}`}
                        onClick={() => {setSelectedButton("10AM")}}
                      >
                        <b>10 AM</b>
                      </Button>
                      <br />
                      <Button
                        className={selectedButton==="12AM" ? `${classes.hoursButtonSelected}` : `${classes.hoursButton}`}
                        onClick={() => {setSelectedButton("12AM")}}
                      >
                        <b>12 AM</b>
                      </Button>
                      <br />
                      <Button
                        className={selectedButton==="2PM" ? `${classes.hoursButtonSelected}` : `${classes.hoursButton}`}
                        onClick={() => {setSelectedButton("2PM")}}
                      >
                        <b>2 PM</b>
                      </Button>
                      <br />
                      <Button
                        className={selectedButton==="4PM" ? `${classes.hoursButtonSelected}` : `${classes.hoursButton}`}
                        onClick={() => {setSelectedButton("4PM")}}
                      >
                        <b>4 PM</b>
                      </Button>
                    </div>

                    <div className="col mb-3">
                      <Button
                        className={selectedButton==="11AM" ? `${classes.hoursButtonSelected}` : `${classes.hoursButton}`}
                        onClick={() => {setSelectedButton("11AM")}}
                      >
                        <b>11 AM</b>
                      </Button>
                      <br />
                      <Button
                        className={selectedButton==="1PM" ? `${classes.hoursButtonSelected}` : `${classes.hoursButton}`}
                        onClick={() => {setSelectedButton("1PM")}}
                      >
                        <b>1 PM</b>
                      </Button>
                      <br />
                      <Button
                        className={selectedButton==="3PM" ? `${classes.hoursButtonSelected}` : `${classes.hoursButton}`}
                        onClick={() => {setSelectedButton("3PM")}}
                      >
                        <b>3 PM</b>
                      </Button>
                      <br />
                      <Button
                        className={selectedButton==="5PM" ? `${classes.hoursButtonSelected}` : `${classes.hoursButton}`}
                        onClick={() => {setSelectedButton("5PM")}}
                      >
                        <b>5 PM</b>
                      </Button>
                    </div>
                    <div className="col mb-3"></div>
                  </div>
                  <button
                    className="btn btn-lg mt-4 mb-3"
                    style={{ backgroundColor: "#00A3A3", color: "white" }}
                  >
                    Create Visit
                  </button>
                </form>
            </div>}
            {createVisit && (
              <div className="m-5">
                  <h3 className="mt-3" style={{ color: "#343F4B"}}><b>Visit Created With Success</b></h3>
                  <div onClick={() => props.setShowCreate(false)}>
                  <CheckCircleIcon
                    sx={{ fontSize: "100px", marginTop: "20px" }}
                  /></div>
                  <h3 style={{ color: "#343F4B"}}><b>Check your inbox and click to continue</b></h3>
              </div>
            )}
          </div>
          </div>
        </Modal>
      }
    </Fragment>
  );
};

export default CreateVisit;
