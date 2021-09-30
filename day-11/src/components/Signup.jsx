import {useState,useRef } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom"

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
   textAlign:"left",
    fontSize:15,
    marginLeft:70
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
  const {signup, setSignup} = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const onsubmit = (e) => {
    e.preventDefault();
    setSignup([
      ...signup,

      {
        id: new Date().getTime().toString(),
        name:name,
        email: email,
        password:password, 
      },
    ]);
    setName("");
    setEmail("");
    setPassword("");
  };
   


 
  return (
    
     <>
      <div className={classes.root}>
        <form onSubmit={(e) => {
          onsubmit(e);
        }} >
       
        <Typography className={classes.heading}> <span className={classes.album}> Sign Up</span></Typography>
        <br/><br/>
         <div className={classes.div1}>
        <Paper className={classes.paper}>
        <br /><br />
        <Typography className={classes.subheading}> Enter Name </Typography>
        
        <TextField
        variant="outlined"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
         <br /><br />
         <Typography className={classes.subheading}> Enter mail id </Typography>
        
        <TextField
        variant="outlined"
          type="text"
          placeholder="Enter mail id "
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />
        
       
        <br />
        <Typography className={classes.subheading}> Enter Password </Typography>
        <TextField
        variant="outlined"
          type="text"
           placeholder="Enter Password "//decrypte the password
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <br /><br />
       
         <Button variant="contained" color="primary" type="submit"> Sign in</Button><br/>
        <Link to="/signin">
               Already have an account? Sign In
              </Link>
          </Paper>  
        </div>
          </form> 
          
    </div>
   </>
  );
}

