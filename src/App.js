import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FuriendFinderCard from "./components/FuriendFinderCard";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./styles/App.css";
import BottomNavigationBar from "./components/BottomNavigationBar";
import BusinessBlueprintCard from "./components/BusinessBlueprintCard";

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
      <MuiThemeProvider theme={themePink}>
        <Navbar />
        <Main />
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={2}
        >
          {/* <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <ImgMediaCard />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <ImgMediaCard />
          </Grid>
        </Grid> */}
          <FuriendFinderCard />
          <BusinessBlueprintCard />
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <FuriendFinderCard />
          <BusinessBlueprintCard />
        </Grid>
        <BottomNavigationBar />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
