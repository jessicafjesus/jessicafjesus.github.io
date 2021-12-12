import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Grid } from '@mui/material';
import { Button, Avatar, Box, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from './styles';
import VisitTogetherItem from './VisitTogetherItem/VisitTogetherItem';
import VisitTogetherJson from "../../json/VisitTogetherItems.json"

export interface VisitTogether { 
    visitName: string,
    visitLocation: string,
    visitImage: string,
    visitRating: number,
    visitDate: string[],
    visitOrganizer: string,
    visitNumber: string
}

const VisitTogether = () => {
  const classes = useStyles();
  const [showQuiz, setShowQuiz] = useState(false);
  const data = VisitTogetherJson


  const filtersHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    
  };

  return (
    <Fragment>
      <Box className={classes.container}>
        <div className={classes.centerButton}>
            <Button className={classes.catButton}>Create Visit</Button>
        </div>
        <a className={`${classes.nearYou} ${classes.alignLeft}`}>Next visits</a>
        <Stack className="mt-2" spacing={4}>
          {data.visitTogether.map((vis) => (
            <VisitTogetherItem vis={vis} />
          ))}
          </Stack>
        </Box>
    </Fragment>
  );
};

export default VisitTogether;

