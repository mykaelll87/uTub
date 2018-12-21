import React, { Component } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import Header from './Components/Header';
import SingleTrack from './Pages/SingleTrack';
import { Typography, Button, withStyles } from '@material-ui/core';
import { orange, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette:{
        primary: red,
        secondary: orange
    },
    status:{
        danger:'yellow'
    },
    typography:{
        useNextVariants: true
    }
})

const styles = theme =>({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
        textAlign: "center"
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div id="App" className="app">
            <CssBaseLine/>
            <Header/>
            {/* Body */}
            <main>
              <Switch>
                <Route path="/url" Component={SingleTrack}/>
                <Route path="/playlist"/>
                <Route path="/" exact/>
                <Route render={props=>(
                  <div className={this.props.classes.heroUnit}>
                    <div className={this.props.classes.heroContent}>
                        <Typography variant="h1">404</Typography>
                        <Typography variant="h6">Sorry, don't know what you're talking about</Typography>
                        <div className={this.props.classes.heroButtons}>
                            <Link to="/" type="routerLink">
                                <Button variant="contained" color="primary">Home</Button>
                            </Link>
                        </div>
                    </div> 
                  </div>
                )}/>
              </Switch>
            </main>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
