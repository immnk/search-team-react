import React from 'react';
import { hot } from 'react-hot-loader/root';
import ReactGA from 'react-ga';

import css from './App.css';

const TRACKING_ID = 'UA-198123428-2';
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return <div className={css.root}>Welcome to React searching</div>;
}

export default hot(App);
