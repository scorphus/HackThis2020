import React from "react";

import Card from "../components/Card/card";
import searchImg from "../assets/search_glass.png";
import livingImg from "../assets/LivingRoomTalking.svg";
import oneImg from "../assets/OneOnOne.svg";

import styles from "../styles/Home.module.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCount: 0,
    };
  }

  addCard = () => {
    this.setState({ cardCount: this.state.cardCount + 1 });
  };

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
          <Card
            topic="Math"
            add={false}
            backgroundColor="red"
            width="30vw"
            height="15vw"
          />
          <Card add={true} border="20px" width="30vw" height="15vw" />
        </div>
        <div className={styles.learningContainer}>
          <div className={styles.living}>
            <img src={livingImg}></img>
          </div>
          <div className={styles.livingContent}>
            <div className={styles.livingText}>
              <p>
                Take your learning to the next level with a technique made by
                one of the world's most influential scientists
              </p>
            </div>
            <div className={styles.livingButton}>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className={styles.expandContainer}>
          <div className={styles.livingContent}>
            <div className={styles.livingText}>
              <p>
                Expand your understanding by engaging in 1-on-1 conversations
              </p>
            </div>
            <div className={styles.livingButton}>
              <button>Get Started</button>
            </div>
          </div>
          <div className={styles.living}>
            <img src={oneImg}></img>
          </div>
        </div>
        <div className={styles.limitContainer}>
          <div className={styles.content}>
            <p>There's no limit to what you can learn when you use NAME</p>
          </div>
          <div className={styles.button}>
            <button>Let's Go!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
