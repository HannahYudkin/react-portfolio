import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./styles/App.css";
import BottomNavigationBar from "./components/BottomNavigationBar";
import Projects from "./components/Projects";
import ProjectInfo from "./ProjectInfo.json";
import Wrapper from "./components/Wrapper";
import AboutMe from './components/AboutMe';
import Typography from "@material-ui/core/Typography";

const themePink = createMuiTheme({
  palette: {
    background: {
      default: "#ffdfd4",
    },
  },
});

function App() {
  return (
    <div className="App">
        <section id="aboutme"></section>
      <MuiThemeProvider theme={themePink}>
        <Navbar />
        <Main />
        <AboutMe />
          <section id="portfolio"></section>
        <Wrapper> 
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h1">
            Portfolio
          </Typography>
          <Grid container spacing={10}>
            {ProjectInfo.map((project) => (
              <Grid item spacing={3}>
                <Projects
                  img={project.img}
                  imgAlt={project.imgAlt}
                  logo = {project.logo}
                  logoAlt={project.logoAlt}
                  description={project.description}
                  deployed={project.deployed}
                  github={project.github}
                />
              </Grid>
            ))}
            <Grid item xs={12} />
          </Grid>
        <Typography variant="h1">
            Contact
            <section id="contact"></section>
        </Typography>
        </Grid>
        </Wrapper>
        <BottomNavigationBar />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
