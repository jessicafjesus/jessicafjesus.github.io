import React from 'react';
import { Box, Stack, Card, Rating } from '@mui/material';
import { Typography, Grid, Button} from "@material-ui/core";
import { Museum } from '../museums';
import useStyles from './styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface mProps {
    museum : Museum,
    viewMuseum : React.Dispatch<React.SetStateAction<boolean>>;
    viewMain : React.Dispatch<React.SetStateAction<boolean>>;
    setDefault : React.Dispatch<React.SetStateAction<Museum>>
}

const MuseumItem = (props : mProps) => {
    const classes = useStyles();

    const goMuseumHandler = (event : React.MouseEvent) => {
        event.preventDefault()
        props.setDefault(props.museum);
        props.viewMain(false);
        props.viewMuseum(true);
    }

    return (
        <Box >
            <Card className={classes.card}>
                <Grid container className={classes.titleColor} spacing={4}>
                    <Grid item xs={3}>
                        <img src={props.museum.museumImage} style={{ borderRadius: "2%", width: "100%", borderColor : "white", borderWidth : "3px", borderStyle : "solid"}}
                    className={`"ml-1 position-relative align-middle" ${classes.imageBox}`}></img>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack spacing={2.5}>
                        <Typography component="div" variant="h6" className={classes.bold}>{props.museum.museumName} </Typography>
                        <Typography variant="subtitle1" component="div" className={classes.bold}><LocationOnIcon fontSize="large" style={{ color: "#FFA552", marginLeft: "-7px"}} />{props.museum.museumLocation}</Typography>
                        <Stack spacing={2} direction="row">
                            <Rating value={props.museum.museumRating} readOnly={true} size="large" style={{ color: "#FFA552", marginLeft: "-3px"}}/>
                            <Typography component="div" variant="h6" className="mt-auto">{props.museum.museumRating} </Typography>
                        </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} className={classes.insideBoxCenter}>
                        <Stack spacing={2}>
                        <Typography component="div" variant="h5" className={classes.bold}>Price: {props.museum.museumPrice} </Typography>
                        <Typography component="div" variant="h6" className={classes.bold}>Activities available</Typography>
                        <Button className={classes.showButton} onClick={goMuseumHandler}>Show more</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} className={classes.insideBoxRight}>
                        <Button className={classes.goButton} onClick={goMuseumHandler}>
                            <ArrowForwardIosIcon fontSize="large"/>
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    //    <Card className={classes.outsideBox}>
    //        {/* <Stack direction="row"> */}
    //        {/* <CardMedia image={museum.museumImage}  /> */}
    //        {/* </Stack> */}
    //    </Card>
    )
}

export default MuseumItem;

