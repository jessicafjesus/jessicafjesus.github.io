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
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Link2 from "@mui/material/Link";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import useStyles from './styles'


const Header = () => {
  const classes = useStyles();
  const [search,setSearch] = useState("");
  const [visible,setVisible] = useState(false);
  const isLoggedIn = true;
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

  const profileHandler = () => {
    history("/");
  };

  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.AppBar}>
        {/* <Grid  className={classes.container}> */}
          {/* <Toolbar> */}
          <div className={classes.divFora}> 
            <div className={classes.div1}> 
              <Grid className={classes.grow}>
                <img src="amuseBranco.png" alt="logo" className={classes.logo} />
              </Grid>
              </div>
              <div className={classes.div2}> 
                <Button color="inherit" className={classes.buttonHeader} onClick={activitiesHandler}> Activities </Button>
                  <Button color="inherit" className={classes.buttonHeader} onClick={museumsHandler}> Museums </Button>
                  <Button color="inherit" className={classes.buttonHeader} onClick={visitTogetherHandler}> Visit Together </Button>
              </div>
            {isLoggedIn ? (
              <div className={classes.div3}>
                  <Button color="inherit" className={classes.loggedIn} onClick={profileHandler}><PermIdentityIcon className={classes.profile} fontSize="large" /> Profile </Button>
              </div>
            ):(
              <div className={classes.div3} >
                  <Button color="inherit" className={classes.loggedIn} onClick={profileHandler}> Profile </Button>
              </div>
            )}
            </div>
          {/* </Toolbar> */}
        {/* </Grid> */}
      </AppBar>
    </Fragment>
  );
};

export default Header;