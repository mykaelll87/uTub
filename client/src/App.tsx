import { Button, Theme, Typography, withStyles } from "@material-ui/core";
import { orange, red } from "@material-ui/core/colors";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import PlaylistPage from "./Containers/Pages/Playlist";
import SingleTrackPage from "./Containers/Pages/SingleTrack";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: orange,
  },
  // status: {
  //   danger: 'yellow'
  // },
  typography: {
    useNextVariants: true,
  },
});

const styles = (t: Theme) => ({
  heroButtons: {
    marginTop: t.spacing.unit * 4,
  },
  heroContent: {
    margin: "0 auto",
    maxWidth: 600,
    padding: `${t.spacing.unit * 8}px 0 ${t.spacing.unit * 6}px`,
  },
  heroUnit: {
    backgroundColor: t.palette.background.paper,
    textAlign: "center" as "center",
  },
});

interface IAppProps {
  classes: Record<"heroUnit" | "heroContent" | "heroButtons", string>;
}

const App: React.FC<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <div id="App" className="app">
          <CssBaseLine />
          <Header />
          {/* Body */}
          <Switch>
            <Route path="/url" component={SingleTrackPage} />
            <Route path="/playlist" component={PlaylistPage} />
            <Route path="/" exact />
            <Route
              render={() => (
                <main>
                  <div className={props.classes.heroUnit}>
                    <div className={props.classes.heroContent}>
                      <Typography variant="h1"> 404 </Typography>
                      <Typography variant="h6">
                        {" "}
                        Sorry, don't know what you're talking about{" "}
                      </Typography>
                      <div className={props.classes.heroButtons}>
                        <Button
                          component={"a"}
                          href="/"
                          variant="contained"
                          color="primary"
                        >
                          {" "}
                          Home{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </main>
              )}
            />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default withStyles(styles)(App);
