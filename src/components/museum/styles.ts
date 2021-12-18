import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  root: {
    paddingTop : 2,
    paddingBottom : 2,
    margin: '4px',
    backgroundColor: '#FFFFFF',
    borderColor : '#00A3A3',
    borderWidth : '1px',
    borderStyle : "solid",
    display: 'inline-flex',
    boxSizing: 'border-box',
    borderRadius: '25px 25px 25px 25px',
  },      
  rootActive: {
    paddingTop : 2,
    paddingBottom : 2,
    margin: '4px',
    backgroundColor: '#00A3A3',
    borderColor : '#00A3A3',
    borderWidth : '1px',
    borderStyle : "solid",
    display: 'inline-flex',
    boxSizing: 'border-box',
    borderRadius: '25px 25px 25px 25px',
  },
  label: {
    verticalAlign : "middle",
    color : "#191F24",
    paddingTop: 0,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
  },
  cancelButton: {
    verticalAlign : "middle",
    cursor: 'pointer',
    margin: 0,
    color: 'rgba(0, 0, 0, 0.6)'
  },

  hoursButton: {
    backgroundColor: "#fff",
    color: "#47525E",
    border: "3px solid #00A3A3",
    borderRadius: "9px",
    width: "80px",
    marginTop: "20px",
  },

  hoursButtonSelected: {
    backgroundColor: "#00A3A3",
    color: "#fff",
    border: "3px solid #00A3A3",
    borderRadius: "9px",
    width: "80px",
    marginTop: "20px",

    "&:hover": {
      backgroundColor: "#008282",
    }
  },

}));
