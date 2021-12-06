import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AppBar,
  Button,
  Grid,
} from "@material-ui/core";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Stack from '@mui/material/Stack';
import useStyles from './styles'


const Header = () => {
  const classes = useStyles();
  const [search,setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activitiesActive, setActivitiesActive] = useState(false);
  const [museumsActive, setMuseumsActive] = useState(true);
  const [visitTogetherActive, setVisitTogetherActive] = useState(false);
  const history = useNavigate();

  const [value, setValue] = useState('one');

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
    history("/");
  };

  const loginHandler = () => {
    history("/signin");
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
                  <Button color="inherit" className={activitiesActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={activitiesHandler}> Activities </Button>
                  <Button color="inherit" className={museumsActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={museumsHandler}> Museums </Button>
                  <Button color="inherit" className={visitTogetherActive ? classes.buttonHeaderActive : classes.buttonHeader} onClick={visitTogetherHandler}> Visit Together </Button>
              </div>
            {isLoggedIn ? (
              <div className={classes.div3}>
                {/* <Box className="text-secondary bg-transparent" component="form" sx={{
                  '& > :not(style)': { mx: 4, width: '10ch'},
                }} noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Search" variant="standard" />
                </Box> */}
                  <Button color="inherit" className={classes.loggedIn} onClick={profileHandler}><PermIdentityIcon className={classes.profile} fontSize="large" /> Profile </Button>
              </div>
            ):(
              <div className={classes.div3} >
                <Stack spacing={0.1}>
                <Button color="inherit" className={classes.login} variant="outlined" onClick={profileHandler}> Log in </Button>
                  <p className={classes.smallText}>or</p>
                  <a href="#" className={classes.smallText}>Sign up</a>
                </Stack>
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