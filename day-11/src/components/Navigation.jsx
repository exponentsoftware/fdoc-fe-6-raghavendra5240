import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:"flex",
    justifyContent:"space-around",
   
  },
 
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  link : {
   textDecoration:"none",
   color:"white"
  }
  
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.root}>
          <div>
          <Typography className={classes.title} variant="h8" noWrap>
          <Link to="/albums" className={classes.link} > Albums</Link>
          </Typography>
          </div>
          <div>
          <Typography className={classes.title} variant="h8" noWrap>
            <Link to="/addalbums" className={classes.link}>Add Albums</Link>
          </Typography>
          </div>
          <div>
          <Typography className={classes.title} variant="h8" noWrap>
            <Link to="/addplaylist" className={classes.link}>Create Playlist</Link>
          </Typography>
          </div>
          <div>
          <Typography className={classes.title} variant="h8" noWrap>
            <Link to="/library" className={classes.link}>Library</Link>
          </Typography>
          </div>
           <div>
          <Typography className={classes.title} variant="h8" noWrap>
            <Link to="/signin" className={classes.link}>Login</Link>
          </Typography>
          </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
