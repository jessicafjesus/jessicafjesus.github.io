import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./styles";
import { Typography } from '@mui/material';
import React, { useState } from 'react';

interface chipProps {
    label : string,
    setLabels : (value: number[]) => void;
    default : number[]
}

const CustomizedFilterChip = (props : chipProps) => {
    const classes = useStyles();

    const closeHandler = (event : React.MouseEvent) => {
        event.preventDefault()
        props.setLabels(props.default)
    }

    return (<div className={classes.root}>
        <Typography variant="body2" className={classes.label}>
          <b className='ml-3 mr-3 pl-3'>{props.label}</b>
        </Typography>
        <CloseIcon
            className={classes.cancelButton}
            onClick={closeHandler} fontSize='small'/>
      </div>)
}

export default CustomizedFilterChip