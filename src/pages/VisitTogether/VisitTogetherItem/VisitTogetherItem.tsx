import React, { useState, useEffect } from "react";
import { Box, Stack, Card, Rating } from '@mui/material';
import { Typography, Grid, Button} from "@material-ui/core";
import { VisitTogether } from "../visitTogether";
import useStyles from './styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';

const VisitTogetherItem = ({vis}:{vis:VisitTogether}) => {
    const classes = useStyles();
    const dateSplit = vis.visitDate[0].split(" ")
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
                        <img src={vis.visitImage} style={{ borderRadius: "2%", width: "100%", borderColor : "white", borderWidth : "3px", borderStyle : "solid"}}
                    className={`"ml-1 position-relative align-middle" ${classes.imageBox}`}></img>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={2}>
                            <Typography component="div" variant="h6" className={classes.bold}>{vis.visitName} </Typography>
                            <Typography variant="subtitle1" component="div" className={classes.bold}><LocationOnIcon fontSize="large" style={{ color: "#FFA552", marginLeft: "-7px"}} />{vis.visitLocation}</Typography>
                            <Stack spacing={2} direction="row">
                                <Rating value={vis.visitRating} readOnly={true} size="large" style={{ color: "#FFA552", marginLeft: "-3px"}}/>
                                <Typography component="div" variant="h6" className="mt-auto">{vis.visitRating} </Typography>
                            </Stack>
                            <Stack spacing={2} direction="row">
                                <Typography variant="subtitle1" component="div" ><EventIcon fontSize="large" style={{ color: "#FFA552", marginLeft: "-7px", paddingRight: "5px"}} />{day}</Typography>
                                <Typography variant="subtitle1" component="div" ><AccessTimeIcon fontSize="large" style={{ color: "#FFA552", paddingRight: "5px"}} />{hours} EDT</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} className={classes.insideBoxCenter}>
                        <Stack spacing={1.5}>
                        <Typography component="div" variant="subtitle1" className={classes.bold}>Organizer: {vis.visitOrganizer}</Typography>
                        <Button className={`${classes.viewProfile} ${classes.orangeButton}`} >See profile</Button>
                        <Typography component="div" variant="h6" className={classes.bold} style={{ color: "#FFA552", textAlign: "center"}}><PersonIcon fontSize="large" style={{ color: "#FFA552", marginLeft: "-20px"}}/>{vis.visitNumber}</Typography>
                            { blue ? (
                                <Button className={`${classes.showButton} ${classes.blueButton}`} onClick={changeButtonHandler}>Ask to join</Button>
                            ) : (
                                <Button className={`${classes.showButton} ${classes.orangeButton}`} onClick={changeButtonHandler}>Ask to join</Button>
                            )}
                        
                        </Stack>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}

export default VisitTogetherItem;

