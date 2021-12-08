import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
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
        //   fontFamily: 'Lato, sansSerif
        fontSize: "22px",
        fontWeight: 600,
    },

    alignCenter: {
        textAlign: "center",
    },

    alignLeft: {
        textAlign: "left",
    },

    // export const CatImageM = styled(CatButton)`
    //   background: noRepeat left/20%
    //     url(https://cdn-icons.flaticon.com/png/512/3162/premium/3162573.png?token=exp=1638191578~hmac=b520cd6dbf76ae61d0e67b3e241c9d5c),
    // `,

    // export const CatImageH = styled(CatButton)`
    //   background: noRepeat left/20%
    //     url(https://cdn-icons.flaticon.com/png/512/3673/premium/3673777.png?token=exp=1638207956~hmac=78a8c090c591ca2684bd0e383d8e307d),
    // `,
    // export const CatImageS = styled(CatButton)`
    //   background: noRepeat left/20%
    //     url(https://cdn-icons-png.flaticon.com/512/782/782711.png),
    // `,

    leftBlock: {
        marginLeft:"30px",
        padding: "20px",
        width: "750px",
        float: "left",
    },

    rightBlock: {
        display: "flex",
        padding: "20px 70px 20px 0px",
        marginRight: "30px",
        marginLeft: "30px",
        flex: "1",
    },

    quizButton: {
        padding: "5px",
        borderRadius: "6px",
        color: "white",
        background: "#ffa552",
        fontSize: "20px",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.5s ease-in-out",
        fontWeight: 600,
        textTransform: "none",

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