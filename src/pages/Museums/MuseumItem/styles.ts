import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({

    insideBoxCenter: {
        borderLeft: "2px dotted #00a3a3",
        borderRight: "2px solid #FFA552",
    },

    imageBox: {
        margin: "10px 10px",
        alignContent: "center",
        height: "130px",
        objectFit: "cover",
    },

    title: {
        background: "rgba(0,163,163,0.5)",
        width: "66%",
        height: "50px",
        // marginTop: "-10px",
    },

    showButton: {
        background: "00a3a3",
        borderRadius: "10px",
        padding: "0px 5px",
    },

    bold: {
        fontWeight: 600,
    },


})); 