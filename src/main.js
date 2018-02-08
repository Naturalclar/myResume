/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import './styles.css';
import App from './components/App';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');
  * {
    box-sizing: border-box;
  }

  body {
    background: azure;
    font-family: 'Merriweather', serif;
    margin: 0;
    padding: 0;
  }
`;

render(
  <App />,
  document.getElementById('app'),
);
