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
}));
