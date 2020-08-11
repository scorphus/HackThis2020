import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';
import logo from '../logo.jpg';

export const NavigationBar = () => {

  const [responsive, setResponsive] = useState(false);

  return (
  <div className={responsive ? styles.navBarResponsive : styles.navBar} id="myNavBar">
    <button className={styles.icon} onClick={() => setResponsive(!responsive) }>
      {responsive ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-bars"></i> }
    </button>
    <Link to="/profile">Profile</Link>
    <Link to="/aboutus">About Us</Link>
    <Link to="/faq">FAQ</Link>
    <Link to="/" class="active">Home</Link>
    <img className={styles.logo} src={logo}/>
  </div>);
}