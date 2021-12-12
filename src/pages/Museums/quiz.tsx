import React, {Fragment, useState} from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import QuizJson from "../../json/QuizJson.json"

interface QuizProps {
    showQuiz : boolean;
    setShowQuiz : React.Dispatch<React.SetStateAction<boolean>>;
    hideQuizHandler : (event: React.MouseEvent) => void;
}

const Quiz = (qProps: QuizProps) => {
    const questionData = QuizJson.quiz
    const titlesData = QuizJson.title
    const answers = ["","","","",""];
    const [answer1Selected, setAnswer1Selected] = useState(false);
    const [answer2Selected, setAnswer2Selected] = useState(false);
    const [answer3Selected, setAnswer3Selected] = useState(false);
    const [answer4Selected, setAnswer4Selected] = useState(false);
    const [current,setCurrent] = useState(0)
    
    const answer1Handler = (event : React.MouseEvent) => {
        event.preventDefault();
        setAnswer2Selected(false)
        setAnswer3Selected(false)
        setAnswer4Selected(false)
        setAnswer1Selected(!answer1Selected)
        if(answer1Selected)
          answers[current] = "1";
        else
          answers[current] = ""
        console.log(answer1Selected)
        console.log(answers);
    }

    const answer2Handler = (event : React.MouseEvent) => {
      event.preventDefault();
      setAnswer1Selected(false)
      setAnswer3Selected(false)
      setAnswer4Selected(false)
      setAnswer2Selected(!answer2Selected)
      if(answer2Selected)
        answers[current] = "2";
      else
        answers[current] = ""
    }

    const answer3Handler = (event : React.MouseEvent) => {
      event.preventDefault();
      setAnswer1Selected(false)
      setAnswer2Selected(false)
      setAnswer4Selected(false)
      setAnswer3Selected(!answer3Selected)
      if(answer3Selected)
        answers[current] = "3";
      else
        answers[current] = ""
    }

    const answer4Handler = (event : React.MouseEvent) => {
    event.preventDefault();
    setAnswer1Selected(false)
    setAnswer2Selected(false)
    setAnswer3Selected(false)
    setAnswer4Selected(!answer4Selected)
    if(answer4Selected)
      answers[current] = "4";
    else
      answers[current] = ""
    }

    const buttonHandler = (event : React.MouseEvent) => {
      event.preventDefault();
      if(answer1Selected || answer2Selected || answer3Selected || answer4Selected) {
        setAnswer1Selected(false);
        setAnswer2Selected(false);
        setAnswer3Selected(false);
        setAnswer4Selected(false);
        if(current === 4) {
          qProps.setShowQuiz(false)
        }
        setCurrent((state) => state+1)
      }
      }
  


    return (
        <Fragment>
        { <Modal
              open={qProps.showQuiz}
              onClose={() => qProps.setShowQuiz(false)}
              aria-labelledby="qqcoisa"
              aria-describedby="outracoisa"
              style={{position:"absolute",overflow:"scroll"}}
            >
              <div className="row  align-items-center" style={{overflowY:"scroll"}}>
                <div className="col w-100 d-flex justify-content-center text-center">
                  <div className="container-sm d-inline-block mt-5 h-75" style={{height :"50vw"}}>
                    <div
                      className="row "
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
                        <h2 className=" mb-5" style={{color:"white"}}><b>
                          {titlesData[current]}
                        </b></h2>
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
                              backgroundColor: answer1Selected ? "rgb(0, 163, 163,0.35)" : "#F1F7F3",
                              borderColor: "#00A3A3",
                            }}
                            onClick={answer1Handler}
                          >
                            <div className="row ">
                              <div className="col-sm d-flex justify-content-center align-items-center  ">
                                <img
                                  src={questionData[current][0].image}
                                  alt="option1"
                                  className=" m-2 rounded img-fluid"
                                  style={{ height: "75%", width: "auto" }}
                                ></img>
                              </div>
                              <div className="col-sm d-flex justify-content-center align-items-center">
                                <h4>{questionData[current][0].question}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row-md">
                          <div
                            className="card m-2"
                            style={{
                              backgroundColor: answer2Selected ? "rgb(0, 163, 163,0.35)" : "#F1F7F3",
                              borderColor: "#00A3A3",
                            }}
                            onClick={answer2Handler}
                          >
                            <div className="row">
                              <div className="col-sm d-flex justify-content-center align-items-center">
                                <img
                                  src={questionData[current][1].image}
                                  alt="option1"
                                  className="m-2 rounded img-fluid"
                                  style={{ height: "75%", width: "auto" }}
                                ></img>
                              </div>
                              <div className="col-sm d-flex justify-content-center align-items-center">
                                <h4>{questionData[current][1].question}</h4>
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
                              backgroundColor: answer3Selected ? "rgb(0, 163, 163,0.35)" : "#F1F7F3",
                              borderColor: "#00A3A3",
                            }}
                            onClick={answer3Handler}
                          >
                            <div className="row">
                              <div className="col-sm d-flex justify-content-center align-items-center  ">
                                <img
                                  src={questionData[current][2].image}
                                  alt="option1"
                                  className="m-2 rounded img-fluid"
                                  style={{ height: "75%", width: "auto" }}
                                ></img>
                              </div>
                              <div className="col-sm d-flex justify-content-center align-items-center">
                                <h4>{questionData[current][2].question}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row-md">
                          <div
                            className="card m-2"
                            style={{
                              backgroundColor: answer4Selected ? "rgb(0, 163, 163,0.35)" : "#F1F7F3",
                              borderColor: "#00A3A3",
                            }}
                            onClick={answer4Handler}
                          >
                            <div className="row">
                              <div className="col-sm d-flex justify-content-center align-items-center ">
                                <img
                                  src={questionData[current][3].image}
                                  alt="option1"
                                  className="m-2 rounded img-fluid"
                                  style={{ height: "75%", width: "auto" }}
                                ></img>
                              </div>
                              <div className="col-sm d-flex justify-content-center align-items-center">
                                <h4>{questionData[current][3].question}</h4>
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
                    <div className="col p-3 text-center"><LinearProgress color="error" variant="determinate" style={{borderColor:"black"}} value={current*20} /></div>
                    <div className="col col-lg-2 text-right"><button className="btn" style={{backgroundColor:"#FFA552"}} onClick={buttonHandler}><b>Next</b></button></div>
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