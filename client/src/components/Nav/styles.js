import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "10px, 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "2px 20px",
    width: "100%",
    backgroundColor: "#10b475",

  },
  container: {
    alignItems: "center",
    display: "flex",
  },
  headings: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    marginRight: '6px'
   
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  avatar: {

    backgroundColor: "purple",
  },
  userName: {
    color: "white",
    fontSize: "0.8rem",
    display: 'flex',
    alignItems: 'center',
    margin:"0 12px 0 12px"
  },
  span: {
     backgroundColor:  "red",
    borderRadius: "50%",
    zIndex: 1,
     fontSize: "20px",
    fontWeight: "bold"
  },
  shoppingCart: {
    backgroundColor: "white"
  },
  searchBox: {
    display: "flex",
    
  },
  search:{
    color:"white",
    marginRight:"30px"
  },
  textSearch: {
    marginLeft:"22px",
  }
}));