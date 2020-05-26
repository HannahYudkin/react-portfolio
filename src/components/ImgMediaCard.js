import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FuriendFinderImg from "../images/FuriendFinder.png"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            FuriendFinder
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Connect potential pet owners with animals currently in need at shelters accross the United States!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}