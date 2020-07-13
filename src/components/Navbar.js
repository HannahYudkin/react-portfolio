import React from "react";
import { BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    color: "black",
    height: 70,
    padding: "0 30px",
    marginLeft: "auto",
    align: "center",
    "@media(minWidth: 780px)": {
      height: 100,
    },
  },
  links: {
    padding: theme.spacing(1),
    textDecoration: "none",
    color: "#4c4c4c",
    position: "relative",
    "&:hover": {
      color: "#c9a497",
      borderTop: "1px solid rgba(0, 0, 0, 0.42)",
      borderColor: "#5BAthg",
      borderTopWidth: 4,
    },
  },
  typographyLinks: {
    marginTop: 35,
  },
  name: {
    fontFamily: "Merienda One, cursive",
    fontSize: 40,
    marginTop: 15,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.root}>
        <Toolbar>
          <Grid justify="space-between" container spacing={4}>
            <Grid item>
              <Typography className={classes.name} variant="h5">
                Hannah Yudkin
              </Typography>
            </Grid>
            <Grid item>
              <BrowserRouter>
                <Typography className={classes.typographyLinks} variant="h6">
                  <AnchorLink className={classes.links} href="#aboutme">
                    About Me
                  </AnchorLink>
                  <AnchorLink className={classes.links} href="#portfolio">
                    Portfolio
                  </AnchorLink>
                  <AnchorLink className={classes.links} href="#contact">
                    Contact
                  </AnchorLink>
                </Typography>
              </BrowserRouter>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
