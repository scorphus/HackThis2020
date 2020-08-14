import React, { useState } from "react";
import Cookies from 'js-cookie';

import Card from "../components/Card/card";
import SearchBarAlt from "../components/SearchBarAlt/SearchBarAlt";
import livingImg from "../assets/LivingRoomTalking.svg";
import oneImg from "../assets/OneOnOne.svg";

import styles from "../styles/Home.module.scss";
import colors from "../styles/colors.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1200,
})

export default function Home(props) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (result) => {
      setSearchTerm(result);
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div data-aos="fade-down" data-aos-duration="900" className={styles.title}>
          <h1>Epiphany</h1>
        </div>
        <div data-aos="fade-down" data-aos-duration="900" data-aos-delay="300" className={styles.subtitle}>
          <h2>A World Class Learning Experience</h2>
        </div>
        <div data-aos="fade-down" data-aos-duration="900" data-aos-delay="600" className={styles.searchBar}>
          <SearchBarAlt style={{ width: "60vw", height: "75px", borderRadius: "20px" }}
            placeholderText="Search for an interesting subject or topic here"
            text={searchTerm}
            handleChange={handleSearchChange}
            onClick={() => {
              props.history.push(`/search?q=${searchTerm}`)
            }}
          />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="600" className={styles.cardContainer}>
        <Card
          add={false}
          backgroundColor={colors.primaryColor1}
          borderRadius="30px"
          onClick={() => props.history.push("/search?q=Spanish")}
        ><p style={{fontWeight: "300", fontSize: "48px"}}>Spanish</p></Card>
        <Card
          add={false}
          backgroundColor={colors.primaryColor2}
          borderRadius="30px"
          onClick={() => props.history.push("/search?q=Physics")}
        ><p style={{fontWeight: "300", fontSize: "48px"}}>Physics</p></Card>
        <Card add={true} borderRadius="30px" onClick={() => {
          if (searchTerm.length > 0) {
            if (Cookies.get("username") !== null && Cookies.get("username") !== undefined) {
              props.history.push("/createnew", {
                topic: searchTerm
              });
            }
          } else {
            props.history.push("/login");
          }
        }}/>
      </div>
      <div data-aos="fade-right" className={styles.learningContainer}>
        <div className={styles.living}>
          <img src={livingImg} alt="Living room conversation"></img>
        </div>
        <div className={styles.livingContent}>
          <div className={styles.livingText}>
            <p>
              Take your learning to the next level with a technique made by
              one of the world's most influential scientists
            </p>
          </div>
          <div className={styles.livingButton}>
            <button onClick={() => props.history.push("/faq")}>Learn More</button>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className={styles.expandContainer}>
        <div className={styles.livingContent}>
          <div className={styles.livingText}>
            <p>
              Expand your understanding by engaging in 1-on-1 conversations
            </p>
          </div>
          <div className={styles.livingButton}>
            <button onClick={() => props.history.push("/login")}>Get Started</button>
          </div>
        </div>
        <div className={styles.living}>
          <img src={oneImg} alt="Two people talking in a whiteboard"></img>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.limitContainer}>
        <div className={styles.content}>
          <p>There's no limit to what you can learn when you use Epiphany</p>
        </div>
        <div className={styles.button}>
          <button onClick={() => props.history.push("/login")}>Let's Go!</button>
        </div>
      </div>
    </div>
  );
}
