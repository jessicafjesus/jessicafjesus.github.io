import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./styles";
import { Typography } from '@mui/material';
import { useState } from 'react';

interface chipProps {
    label : string,
    active : string
}

const CustomizedDateChip = (props : chipProps) => {
    const classes = useStyles();
    return (<div className={props.active === props.label ? classes.rootDateActive : classes.rootDate}>
        <Typography variant="body2" className={classes.label}>
          <b className='ml-3 mr-3 pl-3'>{props.label}</b>
        </Typography>
      </div>)
}

export default CustomizedDateChip