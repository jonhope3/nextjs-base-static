// components/Navbar.js
import React from 'react';
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarMenu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
