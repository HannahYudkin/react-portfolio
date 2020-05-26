import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
//import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Main from "./Main"
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  root: {
    background: 'white',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
});

  //MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary mui-fixed MuiPaper-elevation0

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
  
}

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography variant="h6">Hannah Yudkin</Typography>
            <BrowserRouter> 
              <Link to="/aboutme"> 
                About Me
              </Link>
              <Link to="/portfolio"> 
                Portfolio
              </Link>
              <Link to="/contact"> 
                Contact
              </Link>
            </BrowserRouter>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}