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
import BusinessBlueprint from "../images/BusinessBlueprint.png";
import BusinessBlueprintLogo from "../images/BusinessBlueprintLogo.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
});

export default function BusinessBlueprintCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="FuriendFinderImg"
          height="140"
          image={BusinessBlueprint}
          title="FuriendFinder Img"
        />
        <CardMedia
          component="img"
          alt="FuriendFinderLogo"
          width="140"
          image={BusinessBlueprintLogo}
          title="FuriendFinder Logo"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Helping small businesses to manage their every day opperations by
            finding a more cost effective alternative for managing customer
            base, tracking sales per customer, and issueing any outstanding
            invoices.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link target="_blank" href="https://github.com/lalliere/business-blueprint">
          <Button size="small" color="primary">
            Code
          </Button>
        </Link>
        <Link target="_blank" href="https://bcs-project-2.herokuapp.com/">
            <Button size="small" color="primary">
            Deployed Site
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
