import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Grid } from '@mui/material';
import { Button, Avatar, Box } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from './styles';
import Quiz from './quiz';
import MuseumItem from './MuseumItem/MuseumItem';
import ResultsJson from "../../json/Results.json"
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
  const data = ResultsJson
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

  return (
  <Fragment>
      {showDefaultView && (<Box className={classes.container}>
        <a className={`${classes.nearYou} ${classes.alignLeft}`}>Quiz Results</a>
        <Stack className="mt-2" spacing={4}>
            {data.museumItems.map((museum) => (
            <MuseumItem museum={museum} viewMuseum={setShowMuseum} viewMain={setShowDefault} setDefault={setSelectedMuseum} />
            ))}
            </Stack>
        </Box>)}
        {(showMuseum) && <Museum mProps={selectedMuseum} viewMain={setShowDefault} viewMuseum={setShowMuseum}/>}
  </Fragment>
  );
};

export default Museums;

