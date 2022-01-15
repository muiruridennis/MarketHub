import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme)=>({
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    marginTop:"20px",
  },

  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  heading: {
    fontWeight: "bold",
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
 
 loadingPaper: {
  display: 'flex',
   justifyContent: 'center', 
   alignItems: 'center',
    padding: '20px',
    borderRadius: '15px', 
    height: '39vh',
 },
 recommendedItems: {
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
},

}));