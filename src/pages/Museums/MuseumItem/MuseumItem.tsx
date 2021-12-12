import React from 'react';
import { Box, Stack, Card, Rating } from '@mui/material';
import { Typography, Grid, Button} from "@material-ui/core";
import { Museum } from '../museums';
import useStyles from './styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MuseumItem = ({museum}:{museum:Museum}) => {
    const classes = useStyles();

    return (
        <Box >
            <Card className={classes.card}>
                <Grid container className={classes.titleColor} spacing={4}>
                    <Grid item xs={3}>
                        <img src={museum.museumImage} style={{ borderRadius: "2%", width: "100%", borderColor : "white", borderWidth : "3px", borderStyle : "solid"}}
                    className={`"ml-1 position-relative align-middle" ${classes.imageBox}`}></img>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack spacing={2.5}>
                        <Typography component="div" variant="h6" className={classes.bold}>{museum.museumName} </Typography>
                        <Typography variant="subtitle1" component="div" className={classes.bold}><LocationOnIcon fontSize="large" style={{ color: "#FFA552", marginLeft: "-7px"}} />{museum.museumLocation}</Typography>
                        <Stack spacing={2} direction="row">
                            <Rating value={museum.museumRating} readOnly={true} size="large" style={{ color: "#FFA552", marginLeft: "-3px"}}/>
                            <Typography component="div" variant="h6" className="mt-auto">{museum.museumRating} </Typography>
                        </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} className={classes.insideBoxCenter}>
                        <Stack spacing={2}>
                        <Typography component="div" variant="h5" className={classes.bold}>Price: {museum.museumPrice} </Typography>
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
    //    <Card className={classes.outsideBox}>
    //        {/* <Stack direction="row"> */}
    //        {/* <CardMedia image={museum.museumImage}  /> */}
    //        {/* </Stack> */}
    //    </Card>
    )
}

export default MuseumItem;

