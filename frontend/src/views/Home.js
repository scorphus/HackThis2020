import React from "react";
import searchImg from "../assets/search_glass.png";

import styles from "../styles/Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.signUp}>
          <h1>Sign Up</h1>
        </div>
        <div className={styles.navBar}>
          <div className={styles.hamburger}>
              <div></div>
              <div></div>
              <div></div>
          </div>
        </div>
      </div>
      <div className={styles.square}></div>
      <div className={styles.searchContainer}>
        <div className={styles.user}>
          <h1>NAME</h1>
        </div>
        <div className={styles.caption}>
          <h1>A World Class Learning Experience</h1>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Learn something new..."></input>
          <div className={styles.icon}>
            <img src={searchImg}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
