import React, { Fragment, useState} from "react";
import styled from "styled-components";
//import ModalContent from "../components/modals/Modal";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

const Museums = () => {
  const answers = ["","","","",""];
  const backgroundColor2 = "#FFFFFF"
  const [answer1Selected, setAnswer1Selected] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const takeQuizHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowQuiz(true);
  };
  const hideQuizHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowQuiz(false);
  };
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
      {showQuiz && (
        <Modal
          open={showQuiz}
          onClose={() => setShowQuiz(false)}
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
                    <IconButton onClick={hideQuizHandler}>
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
                >~
                <div className="col p-3 text-center"><LinearProgress color="success" variant="determinate" style={{borderColor:"black"}} value={now} /></div>
                <div className="col col-lg-2 text-right"><button className="btn" style={{backgroundColor:"#FFA552"}}><b>Next</b></button></div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <LeftBlock>
        <CatStyle> Suggested Categories</CatStyle>
        <CatImageM className="categoriesBtn">Modern Art</CatImageM>
        <CatImageH className="categoriesBtn">History</CatImageH>
        <CatImageS className="categoriesBtn">Science</CatImageS>
      </LeftBlock>
      <RightBlock>
        <CatStyle>Don't know what to visit?</CatStyle>
        <TakeQuizBtn className="categoriesBtn" onClick={takeQuizHandler}>
          Take our quiz
        </TakeQuizBtn>
      </RightBlock>
    </Fragment>
  );
};

export default Museums;

export const CatButton = styled.button`
  border: 3px solid #00a3a3;
  border-radius: 6px;
  padding: 10px;
  left-margin: 20px;
  width: 184px;
  height: 53px;
  color: #00a3a3;
  font-family: Lato, sans-serif;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #00a3a3;
    outline: auto;
    border: 3px solid #00a3a3;
    font-weight: bold;
  }
`;

export const CatStyle = styled.h1`
  color: #191f24;
  font-family: Lato, sans-serif;
  font-size: 23px;
  line-height: 35px;
  text-align: left;
  padding: 40px;
  font-weight: bold;
`;

export const CatImageM = styled(CatButton)`
  background: no-repeat left/20%
    url(https://cdn-icons.flaticon.com/png/512/3162/premium/3162573.png?token=exp=1638191578~hmac=b520cd6dbf76ae61d0e67b3e241c9d5c);
`;

export const CatImageH = styled(CatButton)`
  background: no-repeat left/20%
    url(https://cdn-icons.flaticon.com/png/512/3673/premium/3673777.png?token=exp=1638207956~hmac=78a8c090c591ca2684bd0e383d8e307d);
`;
export const CatImageS = styled(CatButton)`
  background: no-repeat left/20%
    url(https://cdn-icons-png.flaticon.com/512/782/782711.png);
`;

export const LeftBlock = styled.div`
  margin: 10px 20px;
  padding: 20px;
  width: 750px;
  float: left;
`;

export const RightBlock = styled.div`
  margin: 10px 50px;
  padding: 20px;
  width: 400px;
  float: right;
`;

export const TakeQuizBtn = styled.button`
  padding: 10px;
  border-radius: 6px;
  border: 3px solid #ffa552;
  left-margin: 20px;
  width: 184px;
  height: 53px;
  color: #fff;
  background-color: #ffa552;
  font-family: Lato, sans-serif;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    outline: auto;
    font-weight: bold;
  }
`;
