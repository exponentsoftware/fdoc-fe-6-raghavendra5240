import  { useEffect} from "react";
import Playlist from "./Playlist"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom"




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    display:'flex',
    flexDirection:"row"
    
  },
 
  album :{
    color:'white',  
    fontSize:30,
    fontWeight:"bold",
    fontFamily: "sans-serif",
    textAlign:"left",
    marginLeft:300,
  
  },
  
 root1: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  div1:{
    display:"flex",
     justifyContent:"space-evenly"
  },
  album1:{
    color:"pink",
    fontSize:40
  },
   grid1:{
       marginLeft: 'auto',
        alignItems: 'center'
  }
  
}));


function Library(props) {
   const classes = useStyles();
    const { playlists, setPlaylists } = props;
     
   
 useEffect(() => {}, [props.data]);
 
    function deleteFile(e) {
    const s =props.playlists.filter((item, index) => index !== e);
  setPlaylists(s);
   
  }
  
  
  
  return (
   
    <div >
    <br/><br/><br/><br/>
    <div >
    <div className={classes.div1}>
    <div >
     <Typography className={classes.album}>My <span className={classes.album1}>Playlists </span> </Typography> 
     </div>
     <div>
      
     </div>
     
     </div>
      <div>
     <br/>
     <Grid container spacing={5}>
     
      
        {playlists?.length > 0 &&
          playlists?.map((playlist,index) =>
          <Grid item
              xs={12}
              sm={3}
             className={classes.grid1}>
             
           <Playlist playlist={playlist} key={index} setPlaylists={setPlaylists} />
         
     <Button variant="contained" color="primary" onClick={() => deleteFile(index)}>
       delete Playlist
      </Button>
           </Grid>
           )}
     
    </Grid>
    </div>
   </div>
   </div>
  );
}


export default withRouter(Library);
