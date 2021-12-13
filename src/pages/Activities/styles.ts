import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({

    container: {
        margin: "30px 220px",
    },

    catButton: {
        background: "white",
        padding: "5px 10px",
        color: "#00a3a3",
        fontSize: "18px",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        fontWeight: 600,
        borderRadius: "6px",
        borderWidth: "2px",
        borderColor: "#00a3a3",
        border: "2px solid",
        textTransform: "none",

        "&:hover": {
            color: "white",
            background: "#00a3a3",
        },
    },

    catStyle: {
        color: "#191f24",
        fontSize: "22px",
        fontWeight: 600,
    },

    nearYou: {
        color: "#191f24",
        fontSize: "20px",
        fontWeight: 600,
    },

    alignCenter: {
        textAlign: "center",
    },

    alignLeft: {
        textAlign: "left",
    },

    quizButton: {
        padding: "6px 10px",
        borderRadius: "6px",
        color: "white",
        background: "#ffa552",
        fontSize: "18px",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.5s ease-in-out",
        fontWeight: 600,
        textTransform: "none",
        width: "100%",
        marginTop: "15px",

        "&:hover": {
            background: "#ffa552",
            boxShadow: "0px 2px 10px #adadad",
        },
    },

    filters: {
        color: "#00a3a3",
        fontSize: "14px",
        textTransform: "none",
        margin: "10px 0px 0px -5px",
        fontWeight: 600,
    },

    icons: {
        // color: "#00a3a3",
        width: "20px",
        height: "20px",
        borderRadius: "0px",
    }
}));