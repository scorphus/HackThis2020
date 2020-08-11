import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';
import logo from '../logo.svg';
import Card from './Card/card';
import colors from '../styles/colors.scss'

export const NavigationBar = () => {

  const [responsive, setResponsive] = useState(false);

  return (
  <div className={responsive ? styles.navBarResponsive : styles.navBar} id="myNavBar">
    <button className={styles.icon} onClick={() => setResponsive(!responsive) }>
      {responsive ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-bars"></i> }
    </button>
    <div className="profileContainer">
      <Card
        add={false}
        backgroundColor={colors.primaryColor3}
        width="100px"
        height="50px"
        borderRadius="10px"
        z-index={100}
        children={<a href="/profile">Profile</a>}
        />
    </div>
    <Link to="/aboutus">About Us</Link>
    <Link to="/faq">FAQ</Link>
    <Link to="/" class="active">Home</Link>
    <a href="/"><img className={styles.logo} src={logo}/></a>
  </div>);
}