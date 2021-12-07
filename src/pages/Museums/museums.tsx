import React, { Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//import ModalContent from "../components/modals/Modal";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import Avatar from "@material-ui/core/Avatar";
import useStyles from './styles';
import Quiz from './quiz';


const Museums = () => {
  const classes = useStyles();
  const [showQuiz, setShowQuiz] = useState(false);
  const history = useNavigate();
  
  const takeQuizHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowQuiz(true);
    // history("/quiz");
  };

  const filtersHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    
  };

  let now = 50
  return (
    <Fragment>
      <Quiz quiz={showQuiz} />
      <Grid container spacing={2} className="mt-3 ml-4">
        <div className={classes.leftBlock}>
          <a className={`${classes.catStyle} ${classes.alignLeft}`}> Suggested Categories</a>
          <Stack className="mt-3" spacing={3} direction="row">
            <Button className={classes.catButton} startIcon={<Avatar src={'https://cdn-icons.flaticon.com/png/512/3162/premium/3162573.png?token=exp=1638758773~hmac=078c8255ee08b963097134e3f548df16'} className={classes.icons} />}>Modern Art</Button>
            <Button className={classes.catButton} startIcon={<Avatar src={'https://cdn-icons-png.flaticon.com/512/3655/3655554.png'} className={classes.icons} />}>History</Button>
            <Button className={classes.catButton} startIcon={<Avatar src={'https://cdn-icons-png.flaticon.com/512/782/782711.png'} className={classes.icons} />}>Science</Button>
          </Stack>
          <Button className={classes.filters} onClick={filtersHandler}>See more filters<ArrowForwardIosIcon fontSize="small" /></Button>
        </div>
        <Stack className={classes.rightBlock} spacing={2} >
            <div className={`${classes.catStyle} ${classes.alignCenter}`}>Don't know what to visit?</div>
            <Button className={classes.quizButton} onClick={takeQuizHandler}> Take our quiz </Button>
        </Stack>
      </Grid>
    </Fragment>
  );
};

export default Museums;

