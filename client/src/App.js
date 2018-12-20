import React, { Component } from 'react';
import Header from './Components/Header';
import CssBaseLine from '@material-ui/core/CssBaseline'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
const theme = createMuiTheme({
  palette:{
    primary: red
  },
  status:{
    danger:'yellow'
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div id="App" className="app">
          <CssBaseLine/>
          <Header/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
