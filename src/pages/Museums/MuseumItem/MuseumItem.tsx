import React from 'react';
import { Box, Stack, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Typography, IconButton} from "@material-ui/core";
import { Museum } from '../Museums';
import useStyles from './styles';

const MuseumItem = ({museum}:{museum:Museum}) => {
    const classes = useStyles();

    return (
        <Box >
        <Card >
            <div className={classes.title}>
            <img src={museum.museumImage} style={{ borderRadius: "2%", width: "25%", borderColor : "white", borderWidth : "3px", borderStyle : "solid"}}
                className={`"ml-1 position-relative " ${classes.imageBox}`}></img>
            </div>
            
            
            <Box sx={{ display: 'flex', flexDirection: 'column' }} color="#191f24">
                <CardContent>
                <Typography component="div" variant="h6" className={classes.bold}>{museum.museumName}
                </Typography>
                <Typography variant="subtitle1" component="div">
                {museum.museumLocation}
                </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                
                </Box>
            </Box>
            
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
