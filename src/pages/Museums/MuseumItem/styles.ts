import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({

    card: {
        height: "180px",
    },

    insideBoxCenter: {
        borderLeft: "2px dotted #00a3a3",
        borderRight: "2px solid #FFA552",
    },

    imageBox: {
        margin: "15px 10px",
        height: "150px",
        objectFit: "cover",
    },

    titleColor: {
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