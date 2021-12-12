import React from 'react';
import { Box, Stack, Card, Rating } from '@mui/material';
import { Typography, Grid, Button} from "@material-ui/core";
import { Activity } from "../Activities1";
import useStyles from './styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MuseumItem = ({act}:{act:Activity}) => {
    const classes = useStyles();

    return (
        <Box >
            <Card className={classes.card}>
                <Grid container className={classes.titleColor} spacing={4}>
                    <Grid item xs={3}>
                        <img src={act.activityImage} style={{ borderRadius: "2%", width: "100%", borderColor : "white", borderWidth : "3px", borderStyle : "solid"}}
                    className={`"ml-1 position-relative align-middle" ${classes.imageBox}`}></img>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack spacing={2.5}>
                        <Typography component="div" variant="h6" className={classes.bold}>{act.activityName} </Typography>
                        <Typography variant="subtitle1" component="div" className={classes.bold}><LocationOnIcon fontSize="large" style={{ color: "#FFA552", marginLeft: "-7px"}} />{act.activityLocation}</Typography>
                        <Stack spacing={2} direction="row">
                            <Rating value={act.activityRating} readOnly={true} size="large" style={{ color: "#FFA552", marginLeft: "-3px"}}/>
                            <Typography component="div" variant="h6" className="mt-auto">{act.activityRating} </Typography>
                        </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} className={classes.insideBoxCenter}>
                        <Stack spacing={2}>
                        <Typography component="div" variant="h6" className={classes.bold}>Activities available</Typography>
                        <Button className={classes.showButton}>Show more</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} className={classes.insideBoxRight}>
                        <Button className={classes.goButton}>
                            <ArrowForwardIosIcon fontSize="large"/>
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}

export default MuseumItem;

