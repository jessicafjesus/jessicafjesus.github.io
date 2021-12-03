import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from"./styles";
import {
  AppBar,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Link2 from "@mui/material/Link";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  const [search,setSearch] = useState("");
  const [visible,setVisible] = useState(false);
  const isLoggedIn = false;
  const history = useNavigate();

  const logoutHandler = () => {
    //
  };

  const exploreHandler = () => {
    history("/");
  };

  const profileHandler = () => {
    history("/myprofile");
  };

  const activitiesHandler = () => {
    history("/activities");
  };

  const museumsHandler = () => {
    history("/museums");
  };


  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static" color="primary" className="'{classes.AppBar}' py-2">
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
             <img src="amuseBranco.png" alt="logo" className={classes.logo} />
            </Grid>
            {isLoggedIn && (
              <Fragment>
                <Button color="inherit" className={classes.buttonHeader} onClick={activitiesHandler}> Activities </Button>
                <Button color="inherit" className={classes.buttonHeader} onClick={museumsHandler}> Museums </Button>
              </Fragment>
            )}
            {!isLoggedIn && (
              <Fragment>
                <Button color="inherit" className={classes.buttonHeader} onClick={activitiesHandler}> Activities </Button>
                <Button color="inherit" className={classes.buttonHeader} onClick={museumsHandler}> Museums </Button>
              </Fragment>
            )}
          </Toolbar>
        </Grid>
      </AppBar>
    </Fragment>
  );
};

export default Header;