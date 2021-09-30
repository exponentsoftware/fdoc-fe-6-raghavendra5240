import {useState,useRef } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:90,
    display:'flex',
    flexDirection:"column"
  },
  paper: {
    height:430,
    width:370,
    backgroundColor:"#eeeeee",
   padding:40,
  display:"block",
  marginLeft:"auto",
  marginRight:"auto"
  },
 
  heading :{
    color:'white',
     display:"block",
  marginLeft:"auto",
  marginRight:"auto",
   fontSize:30,
    fontWeight:"bold"

  },
  subheading:{
    color:'#002884',
    marginLeft:15,
    fontSize:20
  },
  input:{
    backgroundColor:"white"
  },
  album :{
    color:"pink",
    fontSize:40
  },
  image:{
    height:100,
    width:100},
  div1 :{
    display:"flex",
    flexDirection:"row"
  } ,
  upload :{
     display:"flex"
  } ,
  link:{
    textDecoration:"none",
    color:"white"
  }

}));


export default function AddAlbum(props) {
 const classes = useStyles();

   const fileInputRef = useRef();
  const { data, setAlbums } = props;
  const [artist, setArtist] = useState("");
  const [albumeName, setAlbumName] = useState("");
  const [albumCover, setAlbumCover] = useState("");

  const onSelectFile = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files.length > 0) {
        setAlbumCover(URL.createObjectURL(e.target.files[0]));
      }
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setAlbums([
      ...data,

      {
        id: new Date().getTime().toString(),
        artist: artist,
        album_title: albumeName,
        album_cover: albumCover,
      },
    ]);
    setArtist("");
    setAlbumName("");
    setAlbumCover("");
  };

  
   


 
  return (
    
     <>
      <div className={classes.root}>
        <form onSubmit={(e) => {
          onsubmit(e);
        }} >
       
        <Typography className={classes.heading}>Add Your <span className={classes.album}> Album </span></Typography>
        <br/><br/>
         <div className={classes.div1}>
        <Paper className={classes.paper}>
        <br /><br />
        <Typography className={classes.subheading}> Add Album Title </Typography>
        
        <TextField
          type="text"
          value={albumeName}
          onChange={(e) => {
            setAlbumName(e.target.value);
          }}
          required
        />
        <br /><br />
        
       
        <br />
        <Typography className={classes.subheading}> Add Atrist Name </Typography>
        <TextField
          type="text"
          value={artist}
          onChange={(e) => {
            setArtist(e.target.value);
          }}
          required
        />
        <br /><br /><br /><br />
        <div className={classes.upload}>
        <div>
        
        
           <input
           margin="normal"
          
           type="file"  ref={fileInputRef}
            onChange={(e) => {
            onSelectFile(e);
          }}
          required /></div>
          <br />
          <br /><br />
          <div>
          {albumCover && <img src={albumCover} alt="image1" className={classes.image} />}</div>
          </div><br/><br/>
         <Button variant="contained" color="primary" type="submit"> Submit</Button>
         
          </Paper>  
        </div>
          </form> 
    </div>
   </>
  );
}

