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
    height:340,
    width:270,
    backgroundColor:"#212121",
   padding:10
   
  },
  

  album :{
    color:'white',  
    fontSize:20,
    fontWeight:"bold",
    fontFamily: "sans-serif",
    textAlign:"left",
    marginLeft:24
  },
  name:{
    color:'#bdbdbd',  
    fontSize:17,
    fontFamily: "sans-serif",
     textAlign:"left",
     marginLeft:24,
     textDecoration:"underline"
  },
  image :{
     height:230,
    width:230,
    marginTop:40,
     marginRight: 'auto',
    marginLeft: 'auto',
    
  
  },
  icon :{
    color:'green',
    fontSize:70,
     marginTop:140,
     marginLeft:130
  }
  
}));

export default function Album(props) {
 const albums=props.data
  const classes = useStyles();


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      
       <Paper className={classes.paper}>
          <Link to={{ pathname:`/albums/${props.data.id}`,state:{albums:albums}}}>
         <Paper
       className={classes.image}
        style={{
          backgroundImage: `url('${props?.data?.album_cover}')`,
        backgroundSize:'100% 100%',marginTop:30
        }}
      >   <IconButton >
          <PlayCircleFilledIcon className={classes.icon}/>
           </IconButton>
              </Paper>
              </Link>
                    <br/>
                  <Typography className={classes.album}>{props?.data?.album_title}</Typography>
                  <Typography className={classes.name}>{props?.data?.artist}</Typography>
            
              </Paper>  
             
      </Grid>
    </Grid>
  );
}