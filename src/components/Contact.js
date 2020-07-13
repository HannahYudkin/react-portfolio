import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    minHeight: 200,
    padding: "25px",
    fontSize: 20,
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
  },
  content: {},
});

export default function Contact() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography variant="h5" color="textSecondary" component="h5">
        Email: HannahYudkin@gmail.com
      </Typography>
      <Typography variant="h5" color="textSecondary" component="h5">
        Phone: (603) 921 - 0450
      </Typography>
      <Typography variant="h5" color="textSecondary" component="h5">
        LinkedIn: www.linkedin.com/in/hannahyudkin/{" "}
      </Typography>
      <Typography variant="h5" color="textSecondary" component="h5">
        Github: https://github.com/HannahYudkin
      </Typography>
    </Card>
  );
}
