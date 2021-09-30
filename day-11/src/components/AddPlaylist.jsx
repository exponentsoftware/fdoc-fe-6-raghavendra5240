import {useState} from "react";
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
    height:330,
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
  
  album :{
    color:"pink",
    fontSize:40
  },
 
  div1 :{
    display:"flex",
    flexDirection:"row"
  } ,
 

}));


export default function AddAlbum(props) {
 const classes = useStyles();
 const { playlists, setPlaylists } = props;
  const [name, setName] = useState("");
  

  
  const onsubmit = (e) => {
    e.preventDefault();
    setPlaylists([
      ...playlists,

      {
        id: new Date().getTime().toString(),
       name: name,
       
      },
    ]);
    setName("");
    
  };

  
   


 
  return (
    
     <>
      <div className={classes.root}>
        <form onSubmit={(e) => {
          onsubmit(e);
        }} >
       
        <Typography className={classes.heading}>Add  <span className={classes.album}> Playlist </span></Typography>
        <br/><br/>
         <div className={classes.div1}>
        <Paper className={classes.paper}>
        <br /><br />
        <Typography className={classes.subheading}> Add Playlist Name </Typography>
        
        <TextField
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <br/><br/><br/>
         <Button variant="contained" color="primary" type="submit"> Add </Button>
         
          </Paper>  
        </div>
          </form> 
    </div>
   </>
  );
}

