import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
//import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grid from "@material-ui/core/Grid";
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    color: "black",
    height: 48,
    padding: "0 30px",
    marginLeft: "auto",
  },
  links: {
    padding: theme.spacing(1),
    textDecoration: "none",
    color: "#4c4c4c",
    '&:hover': {
      color: "#ffdfd4",
      borderTop: "1px solid rgba(0, 0, 0, 0.42)",
      borderColor: "#5BAthg",
      borderTopWidth: 4
    },
    // visibility: "hidden",
    // transform: scaleX(0),
    // transition: all 0.3s ease-in-out 0s;
  },
}));


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
            <Grid
              justify="space-between" // Add it here :)
              container
              spacing={4}
            >
              <Grid item>
                <Typography variant="h5">Hannah Yudkin</Typography>
              </Grid>
              <Grid item>
                <BrowserRouter>
                  <Typography  variant="h6">
                    <AnchorLink className={ classes.links } href="#aboutme">About Me</AnchorLink>
                    <AnchorLink className={ classes.links } href="#portfolio">Portfolio</AnchorLink>
                    <AnchorLink className={ classes.links } href="#contact">Contact</AnchorLink>
                  </Typography>
                </BrowserRouter>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
