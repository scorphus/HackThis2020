import React from "react";

import Card from "../components/Card/card";
import searchImg from "../assets/search_glass.png";

import styles from "../styles/Home.module.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCount: 0
    };
  }

  addCard = () => {
    this.setState({cardCount: this.state.cardCount + 1});
  }

  render() {
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
        <div className={styles.cardContainer}>
          <Card topic="Math" add={false} backgroundColor="red" width="30vw" height="15vw" />
          <Card add={true} width="30vw" height="15vw"/>
        </div>
        <div classname={styles.learningContainer}>
        </div>
        <div className={styles.expandContainer}>          
        </div>
        <div className={styles.limitContainer}>          
        </div>
      </div>
    );
  }
}

export default Home;
