import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
   
    color: theme.palette.text.secondary,
    backgroundColor:"#212121",
    height:20,
    width:1000,
    marginLeft:200
  },
  div1 :{
    display:"flex",justifyContent:"space-between",color:"white"
  }
}));

export default function Songs(props) {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div className={classes.div1} >
          <div ><MusicNoteIcon />{props.song.song_name}</div>
             <div >{props.song.vide_count}</div>
              <div >{props.song.duration}</div>
               <div ><MoreHorizIcon /> </div>  
                  </div>
              </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
