import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Song from "./Song"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useLocation} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor:"black",
    height:400
  },
  albumname:{
  fontSize:50,
  color:"white",
  fontWeight:"bold",
  marginTop:100
 
  },

  image :{
    width:300,
    height:300,
   marginTop:10
    
  },
  fix:{
    display:"flex",
  justifyContent:"space-evenly",
  width:1000

  },
  icon1:{
    fontSize: 70,
    color:"#3f51b5"
  },
  icon2:{
    fontSize: 70,
    color:'#d81b60'
    
  }
}));

export default function Songs() {
   const { state } = useLocation();
  const classes = useStyles();
  
  const songs=state.albums.songs
const song={
  song_name: "Song Names",
        vide_count:"Vide Count",
        duration :"Duration",
  
}
   
  return (
   <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div className={classes.fix} >
          <div className={classes.image}><img src={state.albums.album_cover}  className={classes.image} alt={state.albums.album_title}/></div>
             <div ><Typography className={classes.albumname}>{state.albums.album_title}</Typography><br/><br/>
             <PlayCircleFilledIcon className={classes.icon1}/> <FavoriteIcon className={classes.icon2}/>
             </div>
             
              </div>
          </Paper>
        </Grid>
        
      </Grid>
      
      
     <Song song={song} />
     {songs.map((song,index) =>
        <Song song={song} key={state.albums.id} />
         
     
           )}
    </div>
  );
}