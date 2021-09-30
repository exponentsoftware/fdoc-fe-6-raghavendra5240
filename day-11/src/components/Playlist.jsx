import React from 'react';
// import rockstar from "./rockstar.jpg"
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:50,
    display:'flex',
    flexDirection:"row"
  },
  paper: {
    height:350,
    width:270,
    backgroundColor:"#212121",
   padding:10
   
  },
   paper1: {
    height:240,
    width:250,
    backgroundColor:"#d7ccc8",
   padding:10
   
  },
  

  album :{
    color:'black',  
    fontSize:40,
    fontWeight:"bold",
    fontFamily: "sans-serif",
    textAlign:"left",
    marginLeft:24,
  },
  
  icon :{
    color:'#3f51b5',
    fontSize:90,
     marginTop:10,
     marginLeft:15
  },
   link : {
   textDecoration:"none",
  
  },
  
 
  
}));

export default function Playlist(props) {

  const classes = useStyles();
const playlist=props.playlist

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      
       <Paper className={classes.paper}>
        
         <Paper className={classes.paper1}> <br/>  <br/>  <br/> 
         
       <Typography className={classes.album}>{props?.playlist?.name}</Typography>

       <Link to={{ pathname:`/playlist/${props.playlist.name}`,state:{playlist:playlist}}} className={classes.link}> <IconButton >
          <PlayCircleFilledIcon className={classes.icon}/>
           </IconButton>  </Link>
              </Paper>
             
                    <br/>
                 
            
              </Paper>  
             
      </Grid>
    </Grid>
  );
}