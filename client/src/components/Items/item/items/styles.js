import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  card: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    // margin: '4px',
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover" : {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    paddingBottom:0,

  },
  media: {
    paddingTop: ".25%",
    transition: "0.3s",
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backgroundBlendMode: 'darken',
    height:"40%",
    paddingBottom:0
    

  },
  cardActions: {
    padding: '0 4px 4px 4px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  heading: {
    fontWeight: "bold",
  },
  description: {
    textAlign: "stretch",
    fontSize: "0.8rem",
 },
 cart: {
   marginTop:0,
 }

});