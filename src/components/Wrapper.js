import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "20vh",
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    textAlign: "left",
  },
}));

export default function Wrapper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main}>
        {props.children}
      </Container>
    </div>
  );
}
