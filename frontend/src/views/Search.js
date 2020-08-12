import React from "react";
import SearchBarAlt from "../components/SearchBarAlt/SearchBarAlt";


import Card from "../components/Card/card";
import searchImg from "../assets/search_glass.png";
import livingImg from "../assets/LivingRoomTalking.svg";
import oneImg from "../assets/OneOnOne.svg";

import styles from "../styles/Search.module.scss";
import colors from "../styles/colors.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1200,
})

class Queue extends React.Component {

  render() {
    const cardWidth = "300px"
    const cardHeight = "150px"

    return (
      <div className={styles.container}>
        <div data-aos="fade-down" className={styles.searchContainer}>
          <SearchBarAlt/>
        </div>
        <div data-aos="fade-up" className={styles.cardContainer}>
          <Card
            add={false}
            backgroundColor={colors.primaryColor1}
            width={cardWidth}
            height={cardHeight}
            borderRadius="30px"
          ><p style={{fontWeight: "300", fontSize: "48px"}}>Spanish</p></Card>
          <Card
            add={false}
            backgroundColor={colors.primaryColor2}
            width={cardWidth}
            height={cardHeight}
            borderRadius="30px"
          ><p style={{fontWeight: "300", fontSize: "48px"}}>Physics</p></Card>
          <Card add={true} borderRadius="30px" width={cardWidth} height={cardHeight} />
        </div>
      </div>
    );
  }
}

export default Queue;
