import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({

    card: {
        height: "210px",
        width: "100%",
    },

    insideBoxCenter: {
        background: "white",
        borderLeft: "2px dotted #00a3a3",
    },

    insideBoxRight: {
        background: "white",
    },

    imageBox: {
        margin: "0px 10px",
        height: "180px",
        objectFit: "cover",
    },

    titleColor: {
        background: "rgba(0,163,163,0.5)",
        marginTop: "0px",
        height: "52px",
    },

    bold: {
        fontWeight: 600,
        color: "rgba(25,31,36,0.9)",
    },
    
    showButton: {
        padding: "8px 5px",
        borderRadius: "5px",
        color: "white",
        
        fontSize: "18px",
        textAlign: "center",
        transition: "all 0.5s ease-in-out",
        fontWeight: 600,
        textTransform: "none",
        width: "90%",

        "&:hover": {

            boxShadow: "0px 2px 10px #adadad",
        },
    },

    blueButton: {
        background: "#00a3a3",

        "&:hover": {
            background: "#00a3a3",
        },
    },

    orangeButton: {
        background: "#FFA552",

        "&:hover": {
            background: "#FFA552",
        },
    },

    viewProfile: {
        padding: "3px 2px",
        borderRadius: "4px",
        color: "white",
        fontSize: "14px",
        textAlign: "center",
        transition: "all 0.5s ease-in-out",
        fontWeight: 600,
        textTransform: "none",
        width: "90%",

        "&:hover": {
            boxShadow: "0px 2px 10px #adadad",
        },
    },


})); 