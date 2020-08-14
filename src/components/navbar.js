import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"
import styles from "../styles/navbar.module.scss";
import logo from "../logo.svg";
import Card from "./Card/card";
import colors from "../styles/colors.scss";

export const NavigationBar = () => {
    const [responsive, setResponsive] = useState(false);

    return (
        <div
            className={responsive ? styles.navBarResponsive : styles.navBar}
            id="myNavBar"
        >
            <button
                className={styles.icon}
                onClick={() => setResponsive(!responsive)}
            >
                {responsive ? (
                    <i className="fa fa-times" aria-hidden="true"></i>
                ) : (
                    <i className="fa fa-bars"></i>
                )}
            </button>
            <button
                disabled={true}
                className={
                    responsive ? styles.tempButton : styles.tempButtonHide
                }
            ></button>

            <div className={styles.profileButton}>
                <Card
                    add={false}
                    backgroundColor={colors.primaryColor3}
                    width="auto"
                    height="50px"
                    borderRadius="10px"
                    z-index={100}
                >
                    {!!Cookies.get("username") ? <Link to="/profile">Profile</Link> : <Link to="/login">Login</Link>}
                </Card>
            </div>
            <Link className={styles.navLink} to="/aboutus">
                About Us
            </Link>
            <Link className={styles.navLink} to="/faq">
                FAQ
            </Link>
            <Link className={styles.navLink} to="/">
                Home
            </Link>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="Logo" />
            </Link>
        </div>
    );
};
