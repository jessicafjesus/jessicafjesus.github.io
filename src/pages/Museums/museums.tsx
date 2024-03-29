import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Grid } from '@mui/material';
import { Button, Avatar, Box } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from './styles';
import Quiz from './quiz';
import MuseumItem from './MuseumItem/MuseumItem';
import MuseumItemsJson from "../../json/MuseumItems.json"
import Museum from "../../components/museum/Museum";

export interface Museum { 
  museumName: string;
  museumLocationImage: string;
  museumLocation: string;
  museumType: string;
  museumImage: string;
  museumRating: number;
  museumHours: string;
  museumPrice: string;
  museumDescription: string;
  museumReviews: string[];
  museumWebsite: string;
  museumAdmission: string[];
  museumDescriptionShort: string;
}

const Museums = () => {
  const classes = useStyles();
  const data = MuseumItemsJson
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDefaultView,setShowDefault] = useState(true)
  const [showMuseum,setShowMuseum] = useState(false)
  const [selectedMuseum,setSelectedMuseum] = useState(data.museumItems[0])
  
  const takeQuizHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowQuiz(true);
  };

  const hideQuizHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowQuiz(false);
  };

  const filtersHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    
  };

  return (<Fragment>
    {showDefaultView && (<Fragment>
      {showQuiz && <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} hideQuizHandler={hideQuizHandler} />}
      <Box className={classes.container}>
      <Grid container className="mt-3 mb-3">
        <Grid item xs={9} >
          <a className={`${classes.catStyle} ${classes.alignLeft}`}> Suggested Categories</a>
          <Stack className="mt-3" spacing={3} direction="row">
            <Button className={classes.catButton} startIcon={<Avatar src={'https://cdn-icons.flaticon.com/png/512/3162/premium/3162573.png?token=exp=1638758773~hmac=078c8255ee08b963097134e3f548df16'} className={classes.icons} />}>Modern Art</Button>
            <Button className={classes.catButton} startIcon={<Avatar src={'https://cdn-icons-png.flaticon.com/512/3655/3655554.png'} className={classes.icons} />}>History</Button>
            <Button className={classes.catButton} startIcon={<Avatar src={'https://cdn-icons-png.flaticon.com/512/782/782711.png'} className={classes.icons} />}>Science</Button>
          </Stack>
          <Button className={classes.filters} onClick={filtersHandler}>See more filters<ArrowForwardIosIcon fontSize="small" /></Button>
        </Grid>
        <Grid item xs={3} >
            <div className={`${classes.catStyle} ${classes.alignCenter}`}>Don't know what to visit?</div>
            <Button className={classes.quizButton} onClick={takeQuizHandler}> Take our quiz </Button>
        </Grid>
      </Grid>
      <a className={`${classes.nearYou} ${classes.alignLeft}`}>Near you</a>
      <Stack className="mt-2" spacing={4}>
        {data.museumItems.map((museum) => (
          <MuseumItem museum={museum} viewMuseum={setShowMuseum} viewMain={setShowDefault} setDefault={setSelectedMuseum} />
        ))}
        </Stack>
        </Box>
    </Fragment>)}
    {(showMuseum) && <Museum mProps={selectedMuseum} viewMain={setShowDefault} viewMuseum={setShowMuseum}/>}
  </Fragment>
  );
};

export default Museums;

