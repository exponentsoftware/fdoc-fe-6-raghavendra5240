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


export default function Signin(props) {
 const classes = useStyles();

   const fileInputRef = useRef();
  const {signin} = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

 

  
   


 
  return (
    
     <>
      <div className={classes.root}>
        
        <Typography className={classes.heading}> <span className={classes.album}> Login</span></Typography>
        <br/><br/>
         <div className={classes.div1}>
        <Paper className={classes.paper}>
        <br /><br />
        <Typography className={classes.subheading}> Enter username or mail id </Typography>
        
        <TextField
        variant="outlined"
          type="text"
          placeholder="Enter username or mail id "
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br /><br />
        
       
        <br />
        <Typography className={classes.subheading}> Enter Password </Typography>
        <TextField
        variant="outlined"
          type="text"
           placeholder="Enter Password "//encryted
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <br /><br />
       
         <Button variant="contained" color="primary" type="submit"  onClick={()=>{props.setIsAuth(true)}}> Login</Button><br/><br/>
          <Link to="/signup">
                Don't have an account? Sign Up
              </Link>
          </Paper>  
        </div>
         
         
    </div>
   </>
  );
}

