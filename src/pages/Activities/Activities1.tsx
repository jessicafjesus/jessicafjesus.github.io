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
        <Grid item xs={9} >
          <a className={`${classes.catStyle} ${classes.alignLeft}`}> Suggested Categories</a>
          <Stack className="mt-3" spacing={3} direction="row">
            <Button className={classes.catButton} startIcon={<Avatar src={'https://cdn-icons.flaticon.com/png/512/3162/premium/3162573.png?token=exp=1638758773~hmac=078c8255ee08b963097134e3f548df16'} className={classes.icons} />}>Modern Art</Button>
            <Button className={classes.catButton} startIcon={<Avatar src={'https://cdn-icons-png.flaticon.com/512/3655/3655554.png'} className={classes.icons} />}>History</Button>
            <Button className={classes.catButton} startIcon={<Avatar src={'https://cdn-icons-png.flaticon.com/512/782/782711.png'} className={classes.icons} />}>Science</Button>
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

