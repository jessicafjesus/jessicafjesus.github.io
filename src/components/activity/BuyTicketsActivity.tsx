import React, { Fragment, useState } from "react";
import CustomizedStepper from "./CustomizedStepper";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  ButtonGroup,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
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

const BuyTicketsActivity = (props: ActivityProps) => {
  const classes = useStyles();
  const [adultAmount, setAdultAmount] = useState(0);
  const [studentAmount, setStudentAmount] = useState(0);
  const [seniorAmount, setSeniorAmount] = useState(0);
  const [stepValue, setStepValue] = useState(0);
  const adultPrice = 18.0;
  const studentPrice = 13.0;
  const seniorPrice = 13.0;
  const countries = ["Portugal", "Spain"];
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const buttonHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setStepValue(stepValue + 1);
  };

  const payHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setStepValue(stepValue + 1);
  };

  return (
    <Fragment>
      <div className="row mt-4">
        <CustomizedStepper step={stepValue} />
      </div>
      <div className="container mt-4">
        {stepValue === 0 && (
          <Fragment>
            <div className="row mt-5">
              <div className="col justify-content-center align-items-center">
                <img
                  src={props.aProps.activityImage}
                  alt="imageActivity"
                  style={{ borderRadius: "2%" }}
                  className="img-fluid mx-auto d-block mt-3"
                />
              </div>
              <div className="col text-right">
                <h5 className="text-left pt-3" style={{ color: "#47525E" }}>
                  {props.aProps.activityType}
                </h5>
                <h2 className="text-left" style={{ color: "#47525E" }}>
                  <b>{props.aProps.activityName}</b>
                </h2>
                <h5 className="text-left" style={{ color: "#47525E" }}>
                  {props.aProps.activityLocation}
                </h5>
                <div className="mt-3 mb-3">
                  <div className="row text-center mt-2 mb-2">
                    <div className="col-3">
                      <h5 style={{ color: "#47525E" }}>Description</h5>
                    </div>
                    <div className="col-3">
                      <h5 style={{ color: "#47525E" }}>Price</h5>
                    </div>
                    <div className="col-3">
                      <h5 style={{ color: "#47525E" }}>Amount</h5>
                    </div>
                    <div className="col-3">
                      <h5 style={{ color: "#47525E" }}>Total Price</h5>
                    </div>
                  </div>
                  <div className="row text-center  mt-2 mb-2">
                    <div className="col-3">
                      <h5>Adult</h5>
                    </div>
                    <div className="col-3">
                      <h5>€ {adultPrice}</h5>
                    </div>
                    <div className="col-3">
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button
                          disabled={adultAmount <= 0}
                          onClick={() => {
                            setAdultAmount(adultAmount - 1);
                          }}
                        >
                          -
                        </Button>
                        {<Button disabled>{adultAmount}</Button>}
                        {
                          <Button
                            onClick={() => {
                              setAdultAmount(adultAmount + 1);
                            }}
                          >
                            +
                          </Button>
                        }
                      </ButtonGroup>
                    </div>
                    <div className="col-3">
                      <h5>
                        {adultAmount > 0
                          ? "€ " + adultAmount * adultPrice
                          : "-"}
                      </h5>
                    </div>
                  </div>
                  <div className="row text-center  mt-2 mb-2">
                    <div className="col-3">
                      <h5>Student</h5>
                    </div>
                    <div className="col-3">
                      <h5>€ {studentPrice}</h5>
                    </div>
                    <div className="col-3">
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button
                          disabled={studentAmount <= 0}
                          onClick={() => {
                            setStudentAmount(studentAmount - 1);
                          }}
                        >
                          -
                        </Button>
                        {<Button disabled>{studentAmount}</Button>}
                        {
                          <Button
                            onClick={() => {
                              setStudentAmount(studentAmount + 1);
                            }}
                          >
                            +
                          </Button>
                        }
                      </ButtonGroup>
                    </div>
                    <div className="col-3">
                      <h5>
                        {studentAmount > 0
                          ? "€ " + studentAmount * studentPrice
                          : "-"}
                      </h5>
                    </div>
                  </div>
                  <div className="row text-center  mt-2 mb-2">
                    <div className="col-3">
                      <h5>Senior</h5>
                    </div>
                    <div className="col-3">
                      <h5>€ {seniorPrice}</h5>
                    </div>
                    <div className="col-3">
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button
                          disabled={seniorAmount <= 0}
                          onClick={() => {
                            setSeniorAmount(seniorAmount - 1);
                          }}
                        >
                          -
                        </Button>
                        {<Button disabled>{seniorAmount}</Button>}
                        {
                          <Button
                            onClick={() => {
                              setSeniorAmount(seniorAmount + 1);
                            }}
                          >
                            +
                          </Button>
                        }
                      </ButtonGroup>
                    </div>
                    <div className="col-3">
                      <h5>
                        {seniorAmount > 0
                          ? "€ " + seniorAmount * seniorPrice
                          : "-"}
                      </h5>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3">
                      <h5>
                        {seniorAmount > 0 ||
                        studentAmount > 0 ||
                        adultAmount > 0
                          ? "€ " +
                            (seniorAmount * seniorPrice +
                              studentAmount * studentPrice +
                              adultPrice * adultAmount)
                          : "-"}
                      </h5>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-lg"
                  onClick={buttonHandler}
                  style={{ backgroundColor: "#00A3A3", color: "white" }}
                >
                  Add To Basket
                </button>
              </div>
            </div>
          </Fragment>
        )}
        {stepValue === 1 && (
          <Fragment>
            <div className="row mt-5">
              <div className="col justify-content-center align-items-center">
                <div
                  className="rounded m-5 p-3"
                  style={{ backgroundColor: "#00A3A3" }}
                >
                  <h1 style={{ color: "white" }}>
                    <b>Basket</b>
                  </h1>
                  <h5 className="mt-3" style={{ color: "white" }}>
                    Number of items:{" "}
                    {studentAmount + adultAmount + seniorAmount}
                  </h5>
                  <div
                    className="rounded m-1 p-1"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <h5
                      className="pl-3 pr-3 pt-3 pb-1"
                      style={{ color: "#00A3A3" }}
                    >
                      {adultAmount} x Individual Ticket (Adult) for the workshop
                      Power To Change
                    </h5>
                    <h6
                      className="pl-3 pr-3 pt-1 pb-1"
                      style={{ color: "#47525E" }}
                    >
                      16 November 2021, 17.30
                    </h6>
                    <h6
                      className="pl-3 pr-3 pt-1 pb-3"
                      style={{ color: "#47525E" }}
                    >
                      Adult: {adultPrice} €
                    </h6>
                  </div>
                  <div
                    className="rounded m-1 p-1"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <h5
                      className="pl-3 pr-3 pt-3 pb-1"
                      style={{ color: "#00A3A3" }}
                    >
                      {studentAmount} x Individual Ticket (Student) for the
                      workshop Power To Change
                    </h5>
                    <h6
                      className="pl-3 pr-3 pt-1 pb-1"
                      style={{ color: "#47525E" }}
                    >
                      16 November 2021, 17.30
                    </h6>
                    <h6
                      className="pl-3 pr-3 pt-1 pb-3"
                      style={{ color: "#47525E" }}
                    >
                      Student: {studentPrice} €
                    </h6>
                  </div>
                  <div
                    className="rounded m-1 p-1"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <h5
                      className="pl-3 pr-3 pt-3 pb-1"
                      style={{ color: "#00A3A3" }}
                    >
                      {seniorAmount} x Individual Ticket (Senior) for the
                      workshop Power To Change
                    </h5>
                    <h6
                      className="pl-3 pr-3 pt-1 pb-1"
                      style={{ color: "#47525E" }}
                    >
                      16 November 2021, 17.30
                    </h6>
                    <h6
                      className="pl-3 pr-3 pt-1 pb-3"
                      style={{ color: "#47525E" }}
                    >
                      Senior: {seniorPrice} €
                    </h6>
                  </div>
                  <div className="text-right">
                    <h1 className="mt-3" style={{ color: "white" }}>
                      Total :{" "}
                      {seniorAmount * seniorPrice +
                        studentAmount * studentPrice +
                        adultPrice * adultAmount}{" "}
                      €
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col text-left justify-content-center align-items-center">
                <div className="rounded m-5">
                  <h1 className="text-left" style={{ color: "#FFA552" }}>
                    <b>Guest</b>
                  </h1>
                  <form className={classes.form} onSubmit={payHandler}  style={{ backgroundColor: "#F3F4F4" }}>
                    <Grid
                      container
                      spacing={2}
                    >
                      <Grid item xs={12}>
                        <h3 className="text-left" style={{ color: "#47525E" }}>
                          <b>E-mail</b>
                        </h3>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          type="email"
                          label="Your e-mail"
                          name="email"
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <h3 className="text-left" style={{ color: "#47525E" }}>
                          <b>First Name</b>
                        </h3>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="firstname"
                          label="First Name"
                          name="firstname"
                          type="text"
                          value={firstName}
                          onChange={(event) => {
                            setFirstName(event.target.value);
                          }}
                          autoComplete="firstname"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <h3 className="text-left" style={{ color: "#47525E" }}>
                          <b>Last Name</b>
                        </h3>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastname"
                          label="Last Name"
                          name="lastname"
                          type="text"
                          value={lastName}
                          onChange={(event) => {
                            setLastName(event.target.value);
                          }}
                          autoComplete="lastname"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <h3 className="text-left" style={{ color: "#47525E" }}>
                          <b>Country</b>
                        </h3>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          select
                          label="Your Country"
                        >
                          {countries.map((name) => (
                            <MenuItem key={name} value={name}>
                              {name}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                    <div className="text-right mt-5" style={{backgroundColor: "#F3F4F4"}}>
                      <button
                        className="btn btn-lg"
                        style={{ backgroundColor: "#00A3A3", color: "white" }}
                      >
                        Pay
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Fragment>
        )}
        {stepValue === 2 && <Fragment></Fragment>}
        {stepValue === 3 && <h1>Great Success</h1>}
      </div>
    </Fragment>
  );
};

export default BuyTicketsActivity;
