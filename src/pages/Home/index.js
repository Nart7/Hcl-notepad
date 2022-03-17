import React, { useState } from 'react';
// import scss
import styles from './main.module.scss';
// import components
import Animation from './../Animation';
import Draggable from './../Draggable';

// Home Page, its functional component
const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.head}>
            <Animation />
            <h1 className={styles.headline}>HCI Notepad</h1>
            <br></br>
            <p style={{
              position: 'absolute',
              top: '30%',
              width: '30%',
              color: 'black',
            }}>
              <strong
                style={{
                  color: 'black',
                }}>
                Description
              </strong> :
              <br></br>
              the world's third largest country in size and nearly the third largest in terms of population.
              Located in North America.
            </p>
            <Draggable />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Home;
