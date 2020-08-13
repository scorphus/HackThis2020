import React, { useState, useEffect } from "react";

import SearchBarAlt from "../components/SearchBarAlt/SearchBarAlt";
import Card from "../components/Card/card";

import styles from "../styles/Search.module.scss";
import colors from "../styles/colors.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({});

export default function Search(props) {
  const cardWidth = "300px";
  const cardHeight = "150px";


  const initialSearchTerm = props.location.search.substring(3,).replace('+', ' ').replace('%20', ' ');
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchResults, setSearchResults] = useState([]);
  const [cardColors, setCardColors] = useState([]);

  useEffect(() => {
    const colorBankObj = colors;
    delete colorBankObj.basegrey;
    delete colorBankObj.warningColor;
    const colorBank = Object.values(colorBankObj);
    setCardColors(colorBank.sort(() => Math.random() - 0.5))
  }, [])

  function handleSearchChange(result) {    
      setSearchTerm(result);
  }

  // temporary placeholder until backend gets wired in
  useEffect(() => {
    async function populateInitialSearch() {
      const SEResults = await fetch("https://dog.ceo/api/breeds/image/random");
      setSearchResults(["Math", "Physics", "Science", "Biology", "Something here", "Somethingelsehere", "hi"]);
    }
    populateInitialSearch();
  }, []);

  // for debugging
  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div className={styles.container}>
      <div data-aos="fade-down" data-aos-duration="200" className={styles.searchContainer}>
        <SearchBarAlt style={{ width: "800px", height: "75px", borderRadius: "20px" }}
          placeholderText="Search for subject"
          text={searchTerm}
          handleChange={handleSearchChange}
          onClick={() => {
            props.history.push(`/search?q=${searchTerm}`)
          }}
        />
      </div>
      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className={styles.cardContainer}>
          {searchResults.map((result, index) => {
            let fontSize = result.length < 12 ? "2rem" : "1.5rem"
            return <Card key={index}
            add={false}
            backgroundColor={cardColors[index % cardColors.length]}
            width={cardWidth}
            height={cardHeight}
            borderRadius="30px"
            onClick={() => {
              props.history.push("/info", {
                topic: result
              })
            }}
            >
              <p style={{padding: "0 20px", fontSize: fontSize, color: "black", textDecoration: "none"}}>{result}</p>
            </Card>
          })}
          <Card key={searchResults.length}
          add={true} 
          borderRadius="30px" 
          width={cardWidth} 
          height={cardHeight}
          onClick={() => {
            props.history.push("/createnew", {
              topic: searchTerm
            })
          }}
          />
      </div>
    </div>
  );
}
