import React from "react";

import Card from "../components/Card/card";
import searchImg from "../assets/search_glass.png";
import livingImg from "../assets/LivingRoomTalking.svg";
import oneImg from "../assets/OneOnOne.svg";

import styles from "../styles/Reflection.module.scss";
import colors from "../styles/colors.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1200,
})

class Reflection extends React.Component {
  render() {
    const cardWidth = "300px"
    const cardHeight = "150px"

    return (
      <div className={styles.container}>
        <div data-aos="fade-left" className={styles.textContainer}>
          <div className={styles.title}>
            <h1>Reflect</h1>
          </div>
          <div className={styles.congratulatoryText}>
            <p>
                You just explained the topic of <i>Pythagorean Theorem!</i>
            </p>
          </div>
          <div className={styles.awesome}>
            <p>
                Awesome!
            </p>
          </div>
          <div className={styles.nextSteps}>
            <p>
                We recommend reflecting on your explanation, such as taking note of what parts of the explanation were confusing or unclear.
            </p>
            <p>
                This helps you correct any mistakes and builds upon your knowledge.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.buttonContainer}>
          <div className={styles.reflectionButton}>
            <button>Email me my reflection</button>
          </div>
           <div className={styles.topicButton}>
            <button>I want to learn another topic</button>
          </div>
        </div>
        <div data-aos="fade-right" className={styles.summaryContainer}>
          <form id="summary">
            <textarea placeholder="Write some thoughts here..."></textarea>
          </form>
        </div>
      </div>
    );
  }
}

export default Reflection;
