import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BottomNavigationBar from "./components/BottomNavigationBar";
import Projects from "./components/Projects";
import ProjectInfo from "./ProjectInfo.json";
import Wrapper from "./components/Wrapper";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/App.module.css";

const themePink = createMuiTheme({
  palette: {
    background: {
      default: "#ffdfd4",
    },
  },
});

const useStyles = makeStyles(() => ({
  title: {
    backgroundColor: "white",
    width: "100%",
    textAlign: "center",
    marginTop: "5vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <section id="aboutme"></section>
      <MuiThemeProvider theme={themePink}>
        <Navbar />
        <Main />
        <AboutMe />
        <section id="portfolio"></section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Typography className={styles.hoverEffect} variant="h1">
          Portfolio
        </Typography>
        <Wrapper>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Grid container spacing={10}>
              {ProjectInfo.map((project) => (
                <Grid item spacing={3}>
                  <Projects
                    img={project.img}
                    imgAlt={project.imgAlt}
                    logo={project.logo}
                    logoAlt={project.logoAlt}
                    description={project.description}
                    deployed={project.deployed}
                    github={project.github}
                  />
                </Grid>
              ))}
              <Grid item xs={12} />
            </Grid>
          </Grid>
        </Wrapper>
        <Typography className={styles.hoverEffect} variant="h1">
          Contact
          <section id="contact"></section>
        </Typography>
        <Wrapper>
          <Contact />
        </Wrapper>
        <BottomNavigationBar />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
