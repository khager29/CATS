import React from 'react';
import { default as DefaultApp } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// This is so typescript recognizes the css prop within the app, it doesn't do anything beyond that
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _ from 'styled-components/cssprop';
import { baseTheme } from '@greatminds/dp-atomic-ui-lib';
import '@greatminds/dp-icominds-lib/dist/css/style.css';
import MainLayout from '../components/organisms/layout/MainLayout/MainLayout.component';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Circular Std';
    margin: 0;
    overflow-y: auto;
  } 
  * {
    box-sizing: border-box;
  }
`;

class App extends DefaultApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    );
  }
}

export default App;
