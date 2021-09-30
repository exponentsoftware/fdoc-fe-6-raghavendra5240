import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Song from "./Song"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

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

  icon3 :{
     fontSize: 200,
    color:"#ffa000",
    padding:100
    
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

export default function PlaylistDetails() {
   const { state } = useLocation();
  const classes = useStyles();
  
  const songs=state.playlist.songs
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
          <div className={classes.image}><MusicNoteIcon  className={classes.icon3}/></div>
             <div ><Typography className={classes.albumname}>{state.playlist.name}</Typography><br/><br/>
             <PlayCircleFilledIcon className={classes.icon1}/> <FavoriteIcon className={classes.icon2}/>
             </div>
             
              </div>
          </Paper>
        </Grid>
        
      </Grid>
      
      
     <Song song={song} />
     {songs.map((song,index) =>
        <Song song={song} key={state.playlist.id} />
         
     
           )}
    </div>
  );
}