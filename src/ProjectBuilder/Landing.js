import React from 'react';

import NavigationItems from '../NavigationBar/NavigationItems'
import Footer from '../Footer/Footer'
import classes from './Landing.css';

function App() {
  return (
    <div className={classes.MainContainer}>
        <NavigationItems/>
        <Footer/>
    </div>
  );
}

export default App;
