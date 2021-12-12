import React, { useState, useEffect } from "react";
import { Box, Stack, Card, Rating } from '@mui/material';
import { Typography, Grid, Button} from "@material-ui/core";
import { Activity } from "../Activities1";
import useStyles from './styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import AlarmIcon from '@mui/icons-material/Alarm';

const MuseumItem = ({act}:{act:Activity}) => {
    const classes = useStyles();
    const dateSplit = act.activityDate[0].split(" ")
    const hours = dateSplit[0]
    const dayComp = new Date(dateSplit[1].toString())
    const day = dayComp.toDateString()
    const [blue, setBlue] = useState(true)

    const changeButtonHandler = () => {
        setBlue(!blue);
    }

    const goActivityHandler = () => {
        
    }
    

    return (
        <Box >
            <Card className={classes.card}>
                <Grid container className={classes.titleColor} spacing={4}>
                    <Grid item xs={3}>
                        <img src={act.activityImage} style={{ borderRadius: "2%", width: "100%", borderColor : "white", borderWidth : "3px", borderStyle : "solid"}}
                    className={`"ml-1 position-relative align-middle" ${classes.imageBox}`}></img>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack spacing={2}>
                            <Typography component="div" style={{ fontSize: "18px" }} className={classes.bold}>{act.activityName} </Typography>
                            <Stack direction="row" spacing={4}>
                                <Typography variant="subtitle1" component="div"><LocationOnIcon fontSize="large" style={{ color: "#FFA552", marginLeft: "-7px"}} />{act.activityType}</Typography>
                                <Typography variant="subtitle1" component="div" ><AccessTimeIcon fontSize="large" style={{ color: "#FFA552", paddingRight: "5px"}} />{hours} EDT</Typography>
                            </Stack>
                            <Stack spacing={2} direction="row">
                            <Typography variant="subtitle1" component="div" ><EventIcon fontSize="large" style={{ color: "#FFA552", marginLeft: "-7px", paddingRight: "5px"}} />{day}</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} className={classes.insideBoxCenter}>
                        <Stack spacing={4}>
                            { blue ? (
                                <Button className={`${classes.showButton} ${classes.blueButton}`} onClick={changeButtonHandler}>Reserve spot</Button>
                            ) : (
                                <Button className={`${classes.showButton} ${classes.orangeButton}`} onClick={changeButtonHandler}>Reserve spot</Button>
                            )}
                        
                        {act.fillingFast ? (
                            <Typography component="div" variant="subtitle1" style={{ color: "red", textAlign: "center"}} className={classes.bold}><AlarmIcon fontSize="large" style={{ color: "red"}}/> Filling up fast</Typography>
                        ) : (
                            <Typography component="div" variant="subtitle1" style={{textAlign: "center"}} className={classes.bold}>Other dates available</Typography>
                        )}
                        
                        </Stack>
                    </Grid>
                    <Grid item xs={1} className={classes.insideBoxRight}>
                        <Button className={classes.goButton} onClick={goActivityHandler}>
                            <ArrowForwardIosIcon fontSize="large"/>
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}

export default MuseumItem;

