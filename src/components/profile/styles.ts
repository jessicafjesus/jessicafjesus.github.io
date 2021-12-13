import { makeStyles } from "@material-ui/core/styles";
import { Bolt } from "@mui/icons-material";


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
    background: "#f6f7f7",
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

  buttonHeaderVS: {
    fontSize: "16px",
    background: "#f6f7f7",
    marginRight: "-10px",
    color: "#191f24",
    borderRadius: "5px",
    padding: "10px 20px",

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
     
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
    zIndex: 10,

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
      zIndex: "10",
      color: "white",
      padding: "12px 20px",
    },
  },

  buttonHeaderActiveVS: {
    fontSize: "16px",
    background: "#191f24",
    marginRight: "-10px",
    color: "white",
    borderRadius: "5px",
    padding: "12px 20px",
    

    "&:hover": {
      background: "#191f24",
      boxShadow: "0px 2px 10px #888888",
      
      color: "white",
      padding: "12px 20px",
    },
  },

  buttonNotRated: {
    fontSize: "14px",
    background: "#191f24",
    marginBottom: "5%",
    color: "white",
    borderRadius: "5px",
    padding: "5px 20px",
    float:"right",

    "&:hover": {
      background: "white" ,
      boxShadow: "0px 2px 10px #888888",
      zIndex: "10",
      color: "#191f24",
      fontWeight: "bold",
      borderColor: "#191f24",
      borderWidth: "2px",
    },
  },

  pendingRequests: {
    fontSize: "14px",
    background: "#FFA552",
    marginBottom: "5%",
    color: "white",
    borderRadius: "5px",
    padding: "5px 20px",
    
    fontWeight: "bold",

    "&:hover": {
      background: "white" ,
      boxShadow: "0px 2px 10px #888888",
      color: "#191f24",
      fontWeight: "bold",
      borderColor: "#191f24",
      borderWidth: "2px",
    },
  },


  accept: {
    fontSize: "14px",
    background: "#13CE66",
    marginBottom: "5%",
    color: "white",
    borderRadius: "5px",
    padding: "5px 20px",
    float:"right",
    fontWeight: "bold",

    "&:hover": {
      background: "#5fe39a" ,
      boxShadow: "0px 2px 10px #888888",
      color: "#191f24",
      fontWeight: "bold",
      borderColor: "#13CE66",
      borderWidth: "5px",
    },
  },

  decline: {
    fontSize: "14px",
    background: "#FF0000",
    marginBottom: "5%",
    color: "white",
    borderRadius: "5px",
    padding: "5px 20px",
    fontWeight: "bold",
    

    "&:hover": {
      background: "#ff6e6e" ,
      boxShadow: "0px 2px 10px #888888",
      color: "#191f24",
      fontWeight: "bold",
      borderColor: "#191f24",
      borderWidth: "2px",
    },
  },

  buttonConfirm: {
    fontSize: "14px",
    background: "#191f24",
    marginRight: "2%",
    marginBottom: "3%",
    color: "white",
    borderRadius: "5px",
    padding: "8px 20px",
    width: "25%",

    "&:hover": {
      background: "white" ,
      boxShadow: "0px 2px 10px #888888",
      zIndex: "10",
      color: "#191f24",
      fontWeight: "bold",
      borderColor: "#191f24",
      borderWidth: "2px",
    },
  },

  selectedTabLeft: {
    background: "#cbd1d1",
    color: "#191F34",
    fontWeight: "bold",
    borderRadius : "0px 13px 0px 0px",
    width: "100%",

    "&:hover": {
    background: "#cbd1d1",
    color: "#191F34",
    fontWeight: "bold",
    borderRadius : "0px 13px 0px 0px",
    width: "100%",
    },
  },

  selectedTabRight: {
    background: "#cbd1d1",
    color: "#191F34",
    fontWeight: "bold",
    borderRadius : "13px 0px 0px 0px",
    width: "100%",

    "&:hover": {
      background: "#cbd1d1",
      color: "#191F34",
      fontWeight: "bold",
      borderRadius : "13px 0px 0px 0px",
      width: "100%",
    },
  },

  notSelectedTab: {
    
    background: "#f6f7f7",
    color: "#47525e",
    fontWeight: "normal",
    borderRadius : "0px 0px 0px 0px",
    width: "100%",

    "&:hover": {
      background: "#f6f7f7" ,
      boxShadow: "0px 2px 10px #888888",
      color: "#191f24",
      fontWeight: "bold",
      
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

  square: {
    width: "5vw",
    height: "5vw",
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
    paddingTop: "3%"
  },
  
  div3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: "1",
    marginRight: "40px",
  }

  
  

}));