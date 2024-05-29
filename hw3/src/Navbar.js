import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/list">Country List</Link></li>
                <li><Link to="/population">Population Chart</Link></li>
                <li><Link to="/gdp">GDP pie Chart</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
