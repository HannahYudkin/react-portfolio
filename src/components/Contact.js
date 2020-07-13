import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: "80%",
    minHeight: 500,
  },
  title: {
    fontSize: 50,
    textAlign: "center",
  },
  content: {},
});

export default function Contact() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>Contact Me</Typography>
      <Typography>Email: HannahYudkin@gmail.com</Typography>
      <Typography>Phone: (603) 921 - 0450</Typography>
      <Typography>LinkedIn: www.linkedin.com/in/hannahyudkin/ </Typography>
      <Typography>Github: https://github.com/HannahYudkin</Typography>
    </Card>
  );
}
