import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    heading:{
        color:"#000080",
        fontSize:"1.2rem",
    },
    pics:{
        minHeight:"70px",
         width:"80px"
    },
    checkout:{
        background:"orange",
        marginTop:"9px",
        fontSize:"0.8rem",
        // alignItems:"center",
        // transformItems:"center"
    },
    noCheckout:{
        display: "none ",
    },
    p: {
        color: "#000080",
        marginTop:"9px",
    },
    isNull: {
        display: "none"
    },
    userLogged: {
        display: "block"
    }

}))