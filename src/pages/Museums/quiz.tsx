import React, {Fragment, useState} from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

interface QuizProps {
    showQuiz : boolean;
    setShowQuiz : React.Dispatch<React.SetStateAction<boolean>>;
    hideQuizHandler : (event: React.MouseEvent) => void;
}

const Quiz = (qProps: QuizProps) => {
    const answers = ["","","","",""];
    const [answer1Selected, setAnswer1Selected] = useState(false);
    
    const answer1Handler = (event : React.MouseEvent) => {
        event.preventDefault();
        answers[0] = "bruh";
        console.log(answer1Selected)
        setAnswer1Selected(!answer1Selected)
        console.log(answer1Selected)
        console.log(answers);
    }

    let now = 50
    return (
        <Fragment>
        { <Modal
              open={qProps.showQuiz}
              onClose={() => qProps.setShowQuiz(false)}
              aria-labelledby="qqcoisa"
              aria-describedby="outracoisa"
            >
              <div className="row h-100 d-flex align-items-center">
                <div className="col w-100 d-flex justify-content-center text-center">
                  <div className="container-sm d-inline-block ">
                    <div
                      className="row"
                      style={{
                        backgroundColor: "#00A3A3",
                        borderRadius: "7px 7px 0px 0px",
                      }}
                    >
                      <div className="row-sm text-right">
                        <IconButton onClick={qProps.hideQuizHandler}>
                          <CloseIcon fontSize="large" />
                        </IconButton>
                      </div>
                      <div className="row-sm">
                        {" "}
                        <h1 className="mt-5 mb-4">
                          If you had some time off, what would you rather be doing?
                        </h1>
                      </div>
                    </div>
                    <div
                      className="row d-flex"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <div className="col-md">
                        <div className="row-md">
                          <div
                            className="card m-2"
                            style={{
                              backgroundColor: answer1Selected ? "#F1F7F3" : "#000000",
                              borderColor: "#00A3A3",
                            }}
                            onClick={answer1Handler}
                          >
                            <div className="row">
                              <div className="col-sm">
                                <img
                                  src="activity1.jpg"
                                  alt="option1"
                                  className="m-2 rounded img-fluid"
                                  style={{ height: "250px", width: "250px" }}
                                ></img>
                              </div>
                              <div className="col-sm d-flex justify-content-center align-items-center">
                                <h4>John Doe</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row-md">
                          <div
                            className="card m-2"
                            style={{
                              backgroundColor: "#F1F7F3",
                              borderColor: "#00A3A3",
                            }}
                          >
                            <div className="row">
                              <div className="col-sm">
                                <img
                                  src="activity1.jpg"
                                  alt="option1"
                                  className="m-2 rounded img-fluid"
                                  style={{ height: "250px", width: "250px" }}
                                ></img>
                              </div>
                              <div className="col-sm d-flex justify-content-center align-items-center">
                                <h4>John Doe</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="row-md">
                          <div
                            className="card m-2"
                            style={{
                              backgroundColor: "#F1F7F3",
                              borderColor: "#00A3A3",
                            }}
                          >
                            <div className="row">
                              <div className="col-sm">
                                <img
                                  src="activity1.jpg"
                                  alt="option1"
                                  className="m-2 rounded img-fluid"
                                  style={{ height: "250px", width: "250px" }}
                                ></img>
                              </div>
                              <div className="col-sm d-flex justify-content-center align-items-center">
                                <h4>John Doe</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row-md">
                          <div
                            className="card m-2"
                            style={{
                              backgroundColor: "#F1F7F3",
                              borderColor: "#00A3A3",
                            }}
                          >
                            <div className="row">
                              <div className="col-sm">
                                <img
                                  src="activity1.jpg"
                                  alt="option1"
                                  className="m-2 rounded img-fluid"
                                  style={{ height: "250px", width: "250px" }}
                                ></img>
                              </div>
                              <div className="col-sm d-flex justify-content-center align-items-center">
                                <h4>John Doe</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row p-3 "
                      style={{
                        backgroundColor: "#00A3A3",
                        borderRadius: "0px 0px 7px 7px",
                      }}
                    >
                    <div className="col p-3 text-center"><LinearProgress color="success" variant="determinate" style={{borderColor:"black"}} value={now} /></div>
                    <div className="col col-lg-2 text-right"><button className="btn" style={{backgroundColor:"#FFA552"}}><b>Next</b></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
        }
        </Fragment>
    );
  }

  export default Quiz;