// src/Home.js
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.welcomeMessage}>
                Welcome to the South America Information Portal
            </h1>
        </div>
    );
};

export default Home;
