import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#FFA552",
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      but : {
        backgroundColor : "#FFA552",
        "&:hover": {
          background: "#00A3A3",
          boxShadow: "0px 2px 10px #888888",
        },
      },
    
}))