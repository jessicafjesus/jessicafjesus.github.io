import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AppBar,
  Button,
  ButtonGroup,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Link2 from "@mui/material/Link";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import useStyles from './styles'


const Header = () => {
  const classes = useStyles();
  const [search,setSearch] = useState("");
  const [visible,setVisible] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  // const isLoggedIn = true;
  const history = useNavigate();

  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const activitiesHandler = () => {
    history("/activities");
  };

  const museumsHandler = () => {
    history("/museums");
  };

  const visitTogetherHandler = () => {
    history("/visitTogether");
  };

  useEffect(() => {
    setIsLoggedIn(true)
  })
  

  return (
    <Fragment>
      <AppBar position="static" color="primary" className="'{classes.AppBar}' py-2">
        <Grid item sm={7} xs={7} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
             <img src="amuseBranco.png" alt="logo" className={classes.logo} />
            </Grid>
            {isLoggedIn ? (
              <>
                <Button color="inherit" className={classes.buttonHeader} onClick={activitiesHandler}> Activities </Button>
                <Button color="inherit" className={classes.buttonHeader} onClick={museumsHandler}> Museums </Button>
                <Button color="inherit" className={classes.buttonHeader} onClick={visitTogetherHandler}> Visit Together </Button>
              </>
            ):(
              <Tabs value={value} className={classes.buttonHeader}>
              <Tab  value="one" label="Item One" />
              <Tab value="two" label="Item Two" />
              <Tab value="three" label="Item Three" />
            </Tabs>
            )}
          </Toolbar>
        </Grid>
      </AppBar>
    </Fragment>
  );
};

export default Header;