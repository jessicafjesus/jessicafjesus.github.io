import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./styles";
import { Typography } from '@mui/material';
import React, { useState } from 'react';

interface chipProps {
    label : string,
    setLabels : React.Dispatch<React.SetStateAction<string[]>>,
    col : number;
    values : string[]
}

const CustomizedChip = (props : chipProps) => {
    const classes = useStyles();
    const [active,setActive] = useState(props.values.includes(props.label))

    const addHandler = (event : React.MouseEvent) => {
        event.preventDefault()
        setActive(true);
        let copy = props.values;
        copy[props.col] = props.label
        props.setLabels(copy)
    }

    const deleteHandler = (event : React.MouseEvent) => {
        event.preventDefault()
        setActive(false);
        let copy = props.values;
        copy[props.col] = ""
        props.setLabels(copy)
    }

    return (<div className={active ? classes.rootActive : classes.root}>
        <Typography variant="body2" className={classes.label}>
          <b className='ml-3 mr-3 pl-3'>{props.label}</b>
        </Typography>
        {active ? <CloseIcon
            className={classes.cancelButton}
            onClick={deleteHandler} fontSize='small'/>
         : <AddIcon
            className={classes.cancelButton}
            onClick={addHandler} fontSize='small'/>}
      </div>)
}

export default CustomizedChip