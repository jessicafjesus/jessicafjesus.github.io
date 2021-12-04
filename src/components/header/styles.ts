import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  
  grow: {
    flexGrow: 1,
  },
  
  container: {},

  AppBar: {
    colorSecondary: "#00a3a3",
    height: "30px",
    backgroundSize: "cover",
  },

  logo: {
    maxWidth: 120,
    justifyContent: "left",

    "&:hover": {
      background: "transparent",
    },
  },

  buttonHeader: {
    fontSize: "16px",
    background: "white",
    marginRight: "-10px",
    color: "#191f24",
    borderRadius: "5px",
    padding: "10px 20px",

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
    },
  },
}));