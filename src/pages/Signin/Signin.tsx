import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TokenHandler from "../../token/TokenHandler";
import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, IconButton, InputAdornment, TextField, Typography} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert } from "@mui/lab";
import CloseIcon from '@mui/icons-material/Close';
import Link2 from "@material-ui/core/Link";
import useStyles from './styles';
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const history = useNavigate()

  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");


  const tokenContext = useContext(TokenHandler);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    tokenContext.login();
    history("/myprofile");
  }
        
  return (
            <section className="container pl-2 pr-2 pt-5 pb-5 border bg rounded shadow row mx-auto mt-5" style={{backgroundColor : "#FFFFFF" }}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <form className={classes.form} onSubmit={submitHandler} style={{backgroundColor : "#FFFFFF" }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Username "
                  name="username"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(event) => {setUsername(event.target.value)}}
                  autoComplete="email"
                  autoFocus
                  className="pt-3 pb-3"
                />
                <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="pt-3 pb-3"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                        InputProps={{
                          // <-- This is where the toggle button is added.
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit  && classes.but}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link onClick={() => {history("/")}} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            </Container>
            </section>
        )
    }

export default Signin;