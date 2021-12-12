import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Grid } from '@mui/material';
import { Button, Avatar, Box } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from './styles';
import ActivityItem from './ActivityItem/ActivityItem';
import ActivityItemJson from "../../json/ActivitiesJson.json"

export interface Activity { 
  activityName: string, 
  activityLocation:string, 
  activityType: string, 
  activityImage: string, 
  activityRating: number, 
  activityDate: string[],
  fillingFast: boolean
}

const Activities = () => {
  const classes = useStyles();
  const [showQuiz, setShowQuiz] = useState(false);
  const data = ActivityItemJson


  const filtersHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    
  };

  return (
    <Fragment>
      <Box className={classes.container}>
      <Grid container className="mt-3">
        <Grid item xs={12} >
          <a className={`${classes.catStyle} ${classes.alignLeft}`}> Suggested Categories</a>
          <Stack className="mt-3" spacing={5} direction="row">
            <Button className={classes.catButton}>Workshop</Button>
            <Button className={classes.catButton}>Course</Button>
            <Button className={classes.catButton}>Talk/Lectures</Button>
            <Button className={classes.catButton}>Tour</Button>
            <Button className={classes.catButton}>Online</Button>
            <Button className={classes.catButton}>For children</Button>
          </Stack>
          <Button className={classes.filters} onClick={filtersHandler}>See more filters<ArrowForwardIosIcon fontSize="small" /></Button>
        </Grid>
      </Grid>
      <Stack className="mt-4" spacing={4}>
        {data.activities.map((act) => (
          <ActivityItem act={act} />
        ))}
        </Stack>
        </Box>
    </Fragment>
  );
};

export default Activities;

