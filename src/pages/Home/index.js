import React, { useState } from 'react';
// import scss
import styles from './main.module.scss';
// import components
import Animation from './../Animation';

// Home Page, its functional component
const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.head}>
            <Animation />
            <h1 className={styles.headline}>HCI Notepad</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Home;
