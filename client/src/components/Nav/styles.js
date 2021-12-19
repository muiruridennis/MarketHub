import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( (theme) => ({
  appBar: {
    backgroundColor:"#008080",
    position: "sticky",
    left: 0,
    borderRadius:4,
    // marginBottom:theme.spacing(25),
  },
 
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTask:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow:1,
  },

  container: {
    display: 'flex',

  },
  title: {
    textDecoration:"none",
    color: "#d1ac09",
  },

  span: {
    borderRadius: "100%",
    color: "#ff0000",
    fontWeight: "bold",
    fontSize:"1.5rem",
    '&:hover': {
      background: "#09aa6c",},
      
  },
  task: {
    marginRight:"50px"
  },
  mobileSpan: {
    borderRadius: "100%",
    color: "#ff0000",
    fontSize:"1rem",
  
  },
  shoppingCart: {
    fontSize:"50px",
    alignSelf:"center",
  },

  profile: {
    display:"flex"
    
  },
  mobileProfile: {
    display:"flex",    
  },
  userName: {
    color: "white",
    fontSize: ".8rem",
    display: 'flex',
    alignItems: 'center',
    margin:"0 12px 0 12px"
  },
  mobileLogout: {
    fontSize:"0.7rem"

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