import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrate } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import theme from './styles/theme';

const $root = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot($root);

if ($root.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    $root
  );
} else {
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}
