import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./styles";
import { Typography } from '@mui/material';
import React, { useState } from 'react';

interface chipProps {
    label : string,
    setLabels : (value: string[]) => void;
    types : string[]
}

const CustomizedFilterChip = (props : chipProps) => {
    const classes = useStyles();

    const closeHandler = (event : React.MouseEvent) => {
        event.preventDefault()
        const typesFiltered = props.types.filter((type) => {if(type === props.label) {return ""} else {return type}})
        props.setLabels(typesFiltered)
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