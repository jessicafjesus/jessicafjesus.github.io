import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Grid, Chip, ListItem } from '@mui/material';
import { Button, Avatar, Box } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from './styles';
import ActivityItem from './ActivityItem/ActivityItem';
import ActivityItemJson from "../../json/ActivitiesJson.json"
import Filters from "../../components/activity/Filters"
import CustomizedFilterChip from "../../components/activity/CustomizedFilterChip"
import CustomizedNumberChip from "../../components/activity/CustomizedNumberChip"
import Activity from "../../components/activity/Activity";

export interface Activity { 
  activityName: string, 
  activityLocation:string, 
  activityType: string, 
  activityImage: string,
  activityDescriptionTitle : string,
  activityDescription : string,
  activityReviews : string[],
  activityRating: number, 
  activityDate: string[],
  fillingFast: boolean,
  activityPrices: number[]
}

const Activities = () => {
  const classes = useStyles();
  const data = ActivityItemJson
  const [showFilters, setShowFilters] = useState(false);
  const [activeType,setActiveType] = useState(["","","","","","","","","","","",""])
  const [activePrice,setActivePrice] = useState([0,100])
  const [activeDistance,setActiveDistance] = useState([0,250])
  const [activeAge,setActiveAge] = useState(["","",""])
  const [activeRating,setActiveRating] = useState([0,5])
  const [activeOther,setActiveOther] = useState(["",""])
  const [mainView,setMainView] = useState(true)
  const [ActivityView,setActivityView] = useState(false)
  const [selectedActivity,setSelectedActivity] = useState<Activity>(data.activities[0])

  const filterTypeChips = activeType.map((type) => {if(type !== "") {return (<CustomizedFilterChip label={type} setLabels={setActiveType} types={activeType}/>)}})
  const filterAgeChips = activeAge.map((age) => {if(age !== "") {return (<CustomizedFilterChip label={age} setLabels={setActiveAge} types={activeAge}/>)}})
  const filterOtherChips = activeOther.map((other) => {if(other !== "") {return (<CustomizedFilterChip label={other} setLabels={setActiveOther} types={activeOther}/>)}})

  const filtersHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowFilters(true)
  };

  const handleChange = (row : number,setActiveFilter : React.Dispatch<React.SetStateAction<string[]>>,activeFilter :string[] ,value : string, event : React.MouseEvent) => {
    let copy = [...activeFilter];
    copy[row] = value;
    setActiveFilter(copy);
  };

  return (
    <Fragment>{mainView &&
    <Fragment>
      {showFilters && <Filters showFilters={showFilters} setShowFilters={setShowFilters}
      setActiveType={setActiveType} types={activeType} setActivePrice={setActivePrice} prices={activePrice}
      setActiveDistance={setActiveDistance} distance={activeDistance} setActiveAge={setActiveAge} age={activeAge}
      setActiveRating={setActiveRating} rating={activeRating} setActiveOther={setActiveOther} other={activeOther}/>}
      <Box className={classes.container}>
      <Grid container className="mt-3 mb-3">
        <Grid item xs={12} >
          {((activeType.filter((a) => a !== "").length === 0)
        && (  0 === activePrice[0] && 100 === activePrice[1])
        && (  0 === activeDistance[0] && 250 === activeDistance[1])  
        && (activeAge.filter((a) => a !== "").length === 0) 
        && (0 === activeRating[0] &&  5 === activeRating[1]) 
        && (activeOther.filter((a) => a !== "").length === 0)) 
        ? 
        <Fragment>
          <a className={`${classes.catStyle} ${classes.alignLeft}`}> Suggested Categories</a>
          <Stack className="mt-3" spacing={5} direction="row">
            <Button className={classes.catButton} onClick={(event) => {handleChange(0,setActiveType,activeType,"Workshop",event)}}>Workshop</Button>
            <Button className={classes.catButton} onClick={(event) => {handleChange(1,setActiveType,activeType,"Course",event)}}>Course</Button>
            <Button className={classes.catButton} onClick={(event) => {handleChange(2,setActiveType,activeType,"Talk/Lectures",event)}}>Talk/Lectures</Button>
            <Button className={classes.catButton} onClick={(event) => {handleChange(3,setActiveType,activeType,"Tour",event)}}>Tour</Button>
            <Button className={classes.catButton} onClick={(event) => {handleChange(1,setActiveOther,activeOther,"Online",event)}}>Online</Button>
            <Button className={classes.catButton} onClick={(event) => {handleChange(1,setActiveAge,activeAge,"For children",event)}}>For children</Button>
          </Stack>
          <Button className={classes.filters} onClick={filtersHandler}>See more filters<ArrowForwardIosIcon fontSize="small" /></Button></Fragment>
           :
          <Fragment><a className={`${classes.catStyle} ${classes.alignLeft}`}> All Activities</a>
          <ListItem key={Math.random()}>
          <h4>Filters :</h4>
          {filterTypeChips}
          {filterAgeChips}
          {filterOtherChips}
          {(activePrice[0] !== 0 || activePrice[1] !== 100 ) && (<CustomizedNumberChip label={activePrice[0] + "-" + activePrice[1] + " €"} setLabels={setActivePrice} default={[0,100]}/>)}
          {(activeDistance[0] !== 0 || activeDistance[1] !== 250) && (<CustomizedNumberChip label={activeDistance[0] + "-" + activeDistance[1] + " KMs"} setLabels={setActiveDistance} default={[0,250]}/>)}
          {(activeRating[0] !== 0 || activeRating[1] !== 5) && (<CustomizedNumberChip label={activeRating[0] + "-" + activeRating[1] +" Stars"} setLabels={setActiveRating} default={[0,5]}/>)}
          </ListItem>
            </Fragment>
          }
        </Grid>
      </Grid>
      <a className={`${classes.nearYou} ${classes.alignLeft}`}>Happening soon</a>
      <Stack className="mt-2" spacing={4}>
        {data.activities.filter((act) => ((activeType.includes(act.activityType) || (activeType.filter((a) => a !== "").length === 0)) 
        && (act.activityPrices[0] >= activePrice[0] && act.activityPrices[0] <= activePrice[1]) 
        && (activeAge.includes(act.activityType) || (activeAge.filter((a) => a !== "").length === 0)) 
        && (act.activityRating >= activeRating[0] && act.activityRating <= activeRating[1]) 
        && (activeOther.includes(act.activityType) || (activeOther.filter((a) => a !== "").length === 0)))).map((act) => (
          <ActivityItem key={Math.random()} act={act} viewActivity={setActivityView} setDefault={setSelectedActivity} viewMain={setMainView}/>
        ))}
        </Stack>
        </Box>
    </Fragment>}{ActivityView && <Activity aProps={selectedActivity} viewActivity={setActivityView} viewMain={setMainView}/>}</Fragment>
  );
};

export default Activities;

