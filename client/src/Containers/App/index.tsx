import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from '../../redux/store';
import { theme } from '../../shared/style/theme';
import Header from '../../Components/Header';
import { Routing } from './routing';

interface IProvidersProps {
  children: React.ReactElement
}
const Providers: React.FC<IProvidersProps> = props => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)

interface IAppProps { }

export const App: React.FC<IAppProps> = props => (
  <Providers>
    <div>
      <Header />
      <Routing/>
    </div>
  </Providers>
)