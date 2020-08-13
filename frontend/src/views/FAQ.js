import React from "react";

import Tile from "../components/Tile/Tile";

import styles from "../styles/Faq.module.scss";
import colors from "../styles/colors.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1200,
})

class Question {
    constructor(question, answer, fadeDir, color) {
        this.question = question;
        this.answer = answer;
        this.fadeDir = fadeDir;
        this.color = color;
    }
}

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCount: 0,
    };
  }

  render() {
    const cardWidth = "90vw"
    const cardHeight = "33vh"

    const questions = [new Question("Are we potatoes?", "Yes.", "fade-right", colors.mutedColor1),
                       new Question("Does this work?", "Of course.", "fade-left", colors.mutedColor2)]
    const output = questions.map((questions) => 
        <div data-aos={questions.fadeDir} data-aos-duration='500' data-aos-delay='600' className={styles.cardContainer}>
            <Tile 
                backgroundColor={questions.color} 
                width={cardWidth} 
                height={cardHeight} 
                borderRadius='30px'
                justifyContent='flex-start'>
            <h1 className={styles.question}><b><i>{questions.question}</i></b></h1>
            <p className={styles.answer}>{questions.answer}</p>
        </Tile></div>
    );

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <div data-aos="fade-down" data-aos-duration="500" className={styles.user}>
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>
        <div>{output}</div>
      </div>
    );
  }
}

export default Faq;