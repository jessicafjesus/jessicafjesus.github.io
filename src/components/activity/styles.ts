import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
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
      }
}));