import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./styles";
import { Typography } from '@mui/material';
import { useState } from 'react';

interface chipProps {
    label : string,
    setLabels : React.Dispatch<React.SetStateAction<string[]>>
}

const CustomizedChip = (props : chipProps) => {
    const classes = useStyles();
    const [active,setActive] = useState(false)
    return (<div className={active ? classes.rootActive : classes.root}>
        <Typography variant="body2" className={classes.label}>
          <b className='ml-3 mr-3 pl-3'>{props.label}</b>
        </Typography>
        {active ? <CloseIcon
            className={classes.cancelButton}
            onClick={() => {setActive(false)}} fontSize='small'/>
         : <AddIcon
            className={classes.cancelButton}
            onClick={() => {setActive(true);props.setLabels((state) => [...state,props.label])}} fontSize='small'/>}
      </div>)
}

export default CustomizedChip