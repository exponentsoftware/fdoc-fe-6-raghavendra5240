import  { useEffect, useState } from "react";
import Album from "./Album"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



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
    marginLeft:24
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


function Albums(props) {
   const classes = useStyles();
    const { data, setAlbums } = props;
    const [input, setInput] = useState("")
 useEffect(() => {}, [props.data]);
 
    function deleteFile(e) {
    const s =props.data.filter((item, index) => index !== e);
    setAlbums(s);
   
  }
  const searchHandler = e => {
    const val = e.target.value
    setInput(val)
  
  }
  const search = (e) => {
   e.preventDefault();
    setAlbums(
      data.filter(album => album.artist.toLowerCase() === input.toLowerCase() || album.album_title.toLowerCase() === input.toLowerCase()
      )
    )
  }
  
  return (
   
    <div >
    <br/><br/><br/><br/>
    <div >
    <div className={classes.div1}>
    <div >
     <Typography className={classes.album}><span className={classes.album1}>Music </span> for Everyone</Typography> 
     </div>
     <div>
      <Paper component="form" className={classes.root1}>
      
      <InputBase
        className={classes.input}
        placeholder="Search Music here"
        inputProps={{ 'aria-label': 'search Music here' }}
      
        onChange={searchHandler}
      />
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon  onClick={search} />
      </IconButton>
     
    </Paper>
     </div>
     
     </div>
      <div>
     <br/>
     <Grid container spacing={5}>
     
      
        {props?.data?.length > 0 &&
          props?.data?.map((albumData,index) =>
          <Grid item
              xs={12}
              sm={3}
            className={classes.grid1}>
             
           <Album data={albumData} key={props.id}  />
         
     <Button variant="contained" color="primary" onClick={() => deleteFile(index)}>
       delete
      </Button>
           </Grid>
           )}
     
    </Grid>
    </div>
   </div>
   </div>
  );
}


export default Albums;
