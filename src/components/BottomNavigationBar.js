import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import AnchorLink from "react-anchor-link-smooth-scroll";

//import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    width: "100%",
    postion: "center",
    bottom: 10,
  },
  underline: {
    textDecoration: "none",
    borderBottom: "none",
  },
  heart: {
    textDecoration: "none",
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
});

export default function BottomNavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.palette}
        target="_blank"
        href="https://github.com/HannahYudkin"
        label="Github"
        icon={<GitHubIcon />}
      />
      <AnchorLink href="#aboutme" className="underline">
        <BottomNavigationAction
          label="Return to Top"
          showLabel={true}
          icon={<FavoriteIcon />}
          className={classes.heart}
        />
      </AnchorLink>

      <BottomNavigationAction
        target="_blank"
        href="https://www.linkedin.com/in/hannahyudkin/"
        label="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        target="_blank"
        href="https://docs.google.com/document/d/e/2PACX-1vSapqfQ_rSYnV7t1Yr0jxUiP0totED_ZoBBU9X7XThpWvzyUx4UHMRqTyqE1o8_aQ/pub"
        label="Resume"
        icon={<DescriptionIcon />}
      />
    </BottomNavigation>
  );
}
