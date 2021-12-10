import React, { useState } from "react";
import MuseumsNamesJson from "../../json/MuseumsNames.json";
import { TextField, MenuItem, ButtonGroup, Button } from "@mui/material";

import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CreateVisit = () => {
  const museums = MuseumsNamesJson.museumsName;
  const [museum, setMuseum] = useState("");

  const [date, setDate] = useState<Date>();
  const [dateInString, setDateInString] = useState("");

  const [numPeople, setNumPeople] = useState(0);
  const [createVisit, setCreateVisit] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center color-overlay">
        <div
          className="border bg rounded-3 shadow"
          style={{
            backgroundColor: "#FFFFFF",
            height: "570px",
            marginTop: "0px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            Create a Visit
          </h2>
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
              setCreateVisit(true);
            }}
          >
            <div className="row">
              <div
                className="col"
                style={{ marginLeft: "70px", marginTop: "20px" }}
              >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={museum}
                  onChange={(e) => setMuseum(e.target.value)}
                  select
                  label="Choose Museum"
                >
                  {museums.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
                <div style={{ marginLeft: "-90px", marginTop: "30px" }}>
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
                      marginLeft: "90px",
                      marginTop: "20px",
                      height: "50px",
                      width: "auto",
                      border: "1px solid #969FAA",
                      borderRadius: "4px",
                      display: "flex",
                    }}
                  >
                    <h6 className="mt-3 ml-3">Number of People:</h6>
                    <ButtonGroup
                      size="small"
                      aria-label="small outlined button group"
                      style={{ marginLeft: "80px" }}
                    >
                      <Button
                        disabled={numPeople <= 0}
                        onClick={() => {
                          setNumPeople(numPeople - 1);
                        }}
                      >
                        -
                      </Button>
                      {<Button disabled>{numPeople}</Button>}
                      {
                        <Button
                          onClick={() => {
                            setNumPeople(numPeople + 1);
                          }}
                        >
                          +
                        </Button>
                      }
                    </ButtonGroup>
                  </div>
                  <input
                    type="text"
                    placeholder="What kind of people are you looking to join you?"
                    style={{
                      marginLeft: "90px",
                      marginTop: "20px",
                      height: "100px",
                      width: "350px",
                      border: "1px solid #969FAA",
                      borderRadius: "4px",
                      textAlign: "left",
                    }}
                  />
                </div>
              </div>

              <div className="col ml-5">
                <Button
                  className={"btn btn-sm btn-block"}
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "9px 9px 9px 9px",
                    width: "80px",
                    marginTop: "20px",
                  }}
                >
                  <b>10 AM</b>
                </Button>
                <br />
                <Button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "9px 9px 9px 9px",
                    width: "80px",
                  }}
                >
                  <b>12 AM</b>
                </Button>
                <br />
                <Button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "9px 9px 9px 9px",
                    width: "80px",
                  }}
                >
                  <b>2 PM</b>
                </Button>
                <br />
                <Button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "9px 9px 9px 9px",
                    width: "80px",
                  }}
                >
                  <b>4 PM</b>
                </Button>
              </div>

              <div className="col mb-3">
                <Button
                  className="btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "9px 9px 9px 9px",
                    width: "80px",
                    marginTop: "20px",
                  }}
                >
                  <b>11 AM</b>
                </Button>
                <br />
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "9px 9px 9px 9px",
                    width: "80px",
                  }}
                  className="mt-3 btn btn-sm btn-block "
                >
                  <b>1 PM</b>
                </Button>
                <br />
                <Button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "9px 9px 9px 9px",
                    width: "80px",
                  }}
                >
                  <b>3 PM</b>
                </Button>
                <br />
                <Button
                  className="mt-3 btn btn-sm btn-block"
                  style={{
                    backgroundColor: "#fff",
                    color: "#47525E",
                    border: "3px solid #00A3A3",
                    borderRadius: "9px 9px 9px 9px",
                    width: "80px",
                  }}
                >
                  <b>5 PM</b>
                </Button>
              </div>
              <div className="col mb-3"></div>
            </div>
            <button
              className="btn btn-lg mt-4"
              style={{ backgroundColor: "#00A3A3", color: "white" }}>
              Create Visit
            </button>
          </form>
        </div>
      </div>
      {createVisit && (
        <>
          <div className="d-flex justify-content-center align-items-center color-overlay"></div>
          <div
            style={{
              background: "white",
              alignContent: "center",
              textAlign: "center",
              position: "absolute",
              marginLeft: "450px",
              marginTop: "200px",
              height: "200px",
              width: "400px",
            }}
          >
            <h3 className="mt-3">Visit Created With Success</h3>
            <CheckCircleIcon sx={{ fontSize: "100px", marginTop: "20px" }} />
          </div>
        </>
      )}
    </>
  );
};

export default CreateVisit;
