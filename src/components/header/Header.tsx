import { Fragment, useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AppBar,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import TokenHandler from "../../token/TokenHandler";
import Stack from '@mui/material/Stack';
import useStyles from './styles'
import { Search } from "@mui/icons-material";


const Header = () => {
  const classes = useStyles();
  const [search,setSearch] = useState("");
  const [activitiesActive, setActivitiesActive] = useState(false);
  const [museumsActive, setMuseumsActive] = useState(true);
  const [visitTogetherActive, setVisitTogetherActive] = useState(false);
  const history = useNavigate();

  const [value, setValue] = useState('one');
  const tokenContext = useContext(TokenHandler);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const activitiesHandler = () => {
    history("/activities");
    setMuseumsActive(false);
    setVisitTogetherActive(false);
    setActivitiesActive(true);
  };

  const museumsHandler = () => {
    history("/museums");
    setVisitTogetherActive(false);
    setActivitiesActive(false);
    setMuseumsActive(true);
  };

  const visitTogetherHandler = () => {
    history("/visitTogether");
    setMuseumsActive(false);
    setActivitiesActive(false);
    setVisitTogetherActive(true);
  };

  const profileHandler = () => {
    history("/profile");
  };

  const loginHandler = () => {
    history("/signin");
  };

  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.AppBar}>
        <Box  className={classes.container}>
          <div className={classes.divFora}> 
            <div className={classes.div1}> 
              <Grid className={classes.grow}>
                <img src="amuseBranco.png" alt="logo" className={classes.logo} />
              </Grid>
            </div>
            <div className={classes.div2}> 
                <Button color="inherit" className={activitiesActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={activitiesHandler}> Activities </Button>
                <Button color="inherit" className={museumsActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={museumsHandler}> Museums </Button>
                <Button color="inherit" className={visitTogetherActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={visitTogetherHandler}> Visit Together </Button>
            </div>
            {tokenContext.isLoggedIn ? (
              <div className={classes.div3}>
                  <Button color="inherit" className={classes.loggedIn} onClick={profileHandler}><PermIdentityIcon className={classes.profile} fontSize="large" /> Profile </Button>
              </div>
            ):(
              <div className={classes.div3} >
                <Stack spacing={0.1}>
                <Button color="inherit" className={classes.login} variant="outlined" onClick={loginHandler}> Log in </Button>
                  <p className={classes.smallText}>or</p>
                  <a href="#" className={classes.smallText}>Sign up</a>
                </Stack>
              </div>
            )}
            </div>
        </Box>
      </AppBar>
      <form className={classes.boxSearch} >
          <Search fontSize="large" className={classes.searchIcon}/>   
          <input className={`$"form-control " ${classes.searchBar}`} type="search" placeholder="Search" ></input>
      </form>
    </Fragment>
  );
};

export default Header;