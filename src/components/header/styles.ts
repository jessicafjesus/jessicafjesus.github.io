import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  
  grow: {
    flexGrow: 1,
  },
  
  container: {},

  AppBar: {
    colorSecondary: "#00a3a3",
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
    height: "50px",

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
      zIndex: "10",
      color: "white",
      height: "55px",
    },
  },

  buttonHeaderActive: {
    fontSize: "16px",
    fontWeight: 600,
    background: "#191f24",
    marginRight: "-10px",
    color: "white",
    borderRadius: "5px",
    padding: "10px 20px",
    zIndex: 10,
    height: "55px",

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
      zIndex: "10",
      color: "white",
      height: "55px",
    },
  },

  loggedIn: {
    fontSize: "14px",
    background: "#191f24",
    color: "white",
    borderRadius: "5px",
    padding: "6px 30px 6px 20px",

    "&:hover": {
      background: "#37474f",
      boxShadow: "0px 2px 10px #888888",
      zIndex: "10",
      color: "white",
    },
  },

login: {
    fontSize: "12px",
    borderColor: "#191f24",
    borderWidth: "2px",
    color: "#191f24",
    borderRadius: "5px",
    fontWeight: 600,
    textTransform: "none",

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
      zIndex: "10",
      color: "white",
    },
  },

  smallText: {
    fontSize: "10px",
    color: "#191f24",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,

    "&:hover": {
      color: "#000000",
      textDecoration: "underline #000000"
    },
  },

  profile: {
    padding: "0px 10px 0px 0px",
  },

  divFora: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    height: "85px",
  },

  div1: {
    display: "flex",
    alignItems: "center",
    flex: "1",
    marginLeft: "40px",
  },

  div2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
  },
  
  div3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: "1",
    marginRight: "40px",
    textAlign: "center",
  }
  
  

}));