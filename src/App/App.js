import React from 'react';
import { hot } from 'react-hot-loader/root';
import ReactGA from 'react-ga';

import Search from 'components/Search';
import UsersList from 'components/UsersList';
import Footer from 'components/Footer';

import css from './App.css';

const TRACKING_ID = 'UA-198123428-2';
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className={css.root}>
      <Search />
      <UsersList />
      <Footer />
    </div>
  );
}

export default hot(App);
