import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "20px",
    marginBottom: "0",
  },
  grid: {
    flexGrow: 1,
  },
  title: {
    fontWeight: "bold",
    textAlign: "left",
    color: "#EF6F6C",
  },
  logo: {
    height: "100px"
  },
  body: {
    // color: "#005C97",
    // fontWeight: "bold",
    // padding: "15px",
    // paddingTop: "0",
    // marginTop: "0",
     fontSize: "14pt",
    height: "115px"
  },
  buttons: {
    margin: "auto",
  },
});

export default function Projects(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.imgAlt}
          height="200px"
          src={require(`../../public/images/${props.img}`)}
          title={props.title}
        />
        <CardContent>
          <CardMedia
          className={classes.logo}
            component="img"
            alt={props.logoAlt}
            //height="80px"
            src={require(`../../public/images/${props.logo}`)}
            title={props.title}
          />
          <Typography gutterBottom variant="h5" component="h2">
            {" "}
            {props.title}
          </Typography>
          <Typography className={classes.body} variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.buttons}
          size="small"
          color="default"
          target="_blank"
          href={props.deployed}
          rel="noopener"
        >
          View Site
        </Button>
        <Button
          className={classes.buttons}
          size="small"
          color="default"
          target="_blank"
          href={props.github}
          rel="noopener"
        >
          See the Code
        </Button>
      </CardActions>
    </Card>
  );
}
