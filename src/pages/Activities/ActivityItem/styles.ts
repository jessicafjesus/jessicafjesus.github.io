import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({

    card: {
        height: "160px",
        width: "100%",
    },

    insideBoxCenter: {
        background: "white",
        borderLeft: "2px dotted #00a3a3",
        borderRight: "2px solid #FFA552",
    },

    insideBoxRight: {
        background: "white",
    },

    imageBox: {
        margin: "0px 10px",
        height: "130px",
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
        width: "100%",

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

    goButton: {
        justifyContent:"start",
        alignContent: "center",
        color: "#FFA552",
        height: "100%",
        padding: "10px",
        marginLeft: "-10px",

        "&:hover": {
            background: "white",
            marginLeft: "-5px",
        },
    }


})); 