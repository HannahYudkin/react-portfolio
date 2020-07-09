import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import FuriendFinderImg from "../images/FuriendFinder.png";
import FuriendFinderLogo from "../images/FuriendFinderLogo.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
});

export default function FuriendFinderCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="FuriendFinderImg"
          height="140"
          image={FuriendFinderImg}
          title="FuriendFinder Img"
        />
        <CardMedia
          component="img"
          alt="FuriendFinderLogo"
          width="140"
          image={FuriendFinderLogo}
          title="FuriendFinder Logo"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Connect potential pet owners with animals currently in need at
            shelters accross the United States!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Link
          target="_blank"
          href="https://github.com/fur-iend-finder/home"
        >
          <Button size="small" color="primary">
            Code
          </Button>
        </Link>
        <Link target="_blank" href="https://fur-iend-finder.github.io/home/">
          <Button size="small" color="primary">
            Deployed Site
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
