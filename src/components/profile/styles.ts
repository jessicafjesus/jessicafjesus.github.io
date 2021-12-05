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

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
      zIndex: "10",
      color: "white",
      padding: "12px 20px",
    },
  },

  buttonHeaderActive: {
    fontSize: "16px",
    background: "#191f24",
    marginRight: "-10px",
    color: "white",
    borderRadius: "5px",
    padding: "12px 20px",

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
      zIndex: "10",
      color: "white",
      padding: "12px 20px",
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

  profile: {
    padding: "0px 10px 0px 0px",
  },

  divFora: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    height: "80px",
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
    paddingTop: "10%"
  },
  
  div3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: "1",
    marginRight: "40px",
  }
  

}));