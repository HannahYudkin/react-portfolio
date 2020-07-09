import React, { Component} from "react";
import Headshot from "../images/LinkedInPhoto.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: "0 0 8px 8px white inset",
    },
    main: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        textAlign: "left",
      },
      secondary: {
          backgroundColor: "#d1b7b3"
      },
      image: {
        backgroundColor: "#ffffff"
      },
      h1: {
          fontSize: "45px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
          borderColor: "#5BAthg",
          borderBottomWidth: 10
      }
  }));

export default function AboutMe() {
        const classes = useStyles();
        return(
            <>
            <Grid className={classes.main} container spacing={3}>
                <Grid item className ={classes.image} xs={6}>
                <img className={classes.root} width="100%" alt="headshot" src={Headshot}></img>
                </Grid>
                <Grid className={classes.secondary} item xs={5}>
                    <h1 className={classes.h1}>About Me</h1>
                    <br>
                    </br>
                    <h2>Full-Stack Web Developer with a background in marketing aiming to create a more consumer-centric experience on the web. Earned a full-stack web development certification through the University of New Hampshire which focused on developing skills in JavaScript, HTML, MongoDB, Express, React, and Node to connect front- and back-end design to make responsive web pages. </h2>
                </Grid>
            </Grid>
            </>
        )
}

