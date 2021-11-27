import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=> ({
    searchBar:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '12px',
    },
    textSearch: {
        padding: "2px 5px 2px 5px",
        alignSelf: "center",
    },
    search : {
        paddingTop: "25px",
        backgroundColor:"orange"
    }
}))