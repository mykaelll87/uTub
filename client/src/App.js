import React, { Component } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './Components/Header';

const theme = createMuiTheme({
  palette:{
    primary: red
  },
  status:{
    danger:'yellow'
  },
  typography:{
    useNextVariants: true
  }
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
            <Switch>
              <Route path="url"/>
              <Route path="playlist"/>
              <Route path="/" exact/>
              <Route/>
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
