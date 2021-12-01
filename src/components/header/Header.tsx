import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Link2 from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  row: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {},
  buttonFontSize: {
    fontSize: "11px",
    color: "#a1a1a1",
  },

  AppBar: {
    backgroundColor: "#e6ffff",
    backgroundSize: "cover",
  },
  mainLogo: {
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent",
    },
  },

  avatar: {
    height: "100%",
    borderRadius: 0,
  },

  typo: {
    marginRight: "10px",
    fontSize: "11px",
    color: "#a1a1a1",
  },

  loginButton: {
    background: "#89eded",
    marginRight: "10px",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",

    "&:hover": {
      background: "#0b6275",
      boxShadow: "0px 2px 10px #888888",
    },
  },
  registerButton: {
    background: "#0b6275",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",

    "&:hover": {
      background: "#89eded",
      boxShadow: "0px 2px 10px #888888",
    },
  },
}));

const Header = () => {
  const [search,setSearch] = useState("");
  const [visible,setVisible] = useState(false);
  const isLoggedIn = true;
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

  const loginHandler = () => {
    history("/login");
  };

  const registerHandler = () => {
    history("/register");
  };


  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
              <Button className={classes.mainLogo}>
                <Link to="/">
                  <Avatar src="logo.png" className={classes.avatar} />
                </Link>
              </Button>
            </Grid>
            {isLoggedIn && (
              <Fragment>
                {visible &&
                <TextField
                  variant="outlined"
                  size="small"
                  id="outlined-size-small"
                  type="text"
                  label="Search User"
                  name="name"
                  value={search}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Link2
                  onClick={()=>{
                    history("/profile/" + search);
                    setVisible(false);
                    setSearch("");
                  }}
                  variant="body2"
                >
                  <SearchIcon />
                </Link2>
                <Link2
                  onClick={() => {
                    setVisible(false);
                    setSearch("");
                  }}
                  variant="body2"
                >
                  <CloseIcon />
                </Link2>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                  autoComplete="name"
                />}
                {!visible && <Grid item>
                <Link2
                  onClick={() => {
                    setVisible(true);
                  }}
                  variant="body2"
                >
                  <SearchIcon />
                </Link2>
              </Grid>}
                <Button
                  color="inherit"
                  className={classes.buttonFontSize}
                  onClick={exploreHandler}
                >
                  Discover
                </Button>
                <Button
                  color="inherit"
                  className={classes.buttonFontSize}
                  onClick={profileHandler}
                >
                  Profile
                </Button>
                <Typography className={classes.typo}>
                  Logged in as
                </Typography>
                <Button
                  color="inherit"
                  className={classes.buttonFontSize && classes.loginButton}
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              </Fragment>
            )}
            {!isLoggedIn && (
              <Fragment>
                <Button
                  color="inherit"
                  className={classes.buttonFontSize && classes.loginButton}
                  onClick={loginHandler}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  className={classes.buttonFontSize && classes.registerButton}
                  onClick={registerHandler}
                >
                  Register
                </Button>
              </Fragment>
            )}
          </Toolbar>
        </Grid>
      </AppBar>
    </Fragment>
  );
};

export default Header;