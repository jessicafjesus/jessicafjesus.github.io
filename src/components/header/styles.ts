import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  row: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {},
  AppBar: {
    colorPrimary: "#00A3A3",
    backgroundSize: "cover",
  },

  logo: {
    maxWidth: 120,
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent",
    },
  },

  typo: {
    marginRight: "10px",
    fontSize: "11px",
    color: "#a1a1a1",
  },

  
  buttonHeader: {
    fontSize: "16px",
    background: "#ffffff",
    marginRight: "10px",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px 25px",

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
    },
  },
}));

export default useStyles;