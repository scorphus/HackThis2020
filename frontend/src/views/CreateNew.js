import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card/card";
import Tile from "../components/Tile/Tile";
import SearchBarAlt from "../components/SearchBarAlt/SearchBarAlt";
import TopicSelector from "../components/TopicSelector/TopicSelector";
import GoogleLogo from "../assets/GoogleLogo.svg";
import WikipediaLogo from "../assets/Wikipedia_W.svg";

import styles from "../styles/CreateNew.module.scss";
import colors from "../styles/colors.scss";

// animation on scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1200,
})

export default function CreateNew(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [summary, setSummary] = useState("");

    console.log(props.location.state.topic);
    const topic = props.location.state.topic;
    // const topic = "pythagoras"; // test term
    const googleSearchTerm = topic.replace(' ', '+');
    const wikipediaSearchTerm = topic.replace(' ', '_');

    function handleSearchChange(result) {        
        console.log(result);
        setSearchTerm(result);
    }

    function handleSummaryChange(event) {
        setSummary(event.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftHalf} data-aos="fade-right" data-aos-duration="500">
                <Tile   backgroundColor={colors.mutedColor4}
                        width="100%"
                        height="150px"
                        borderRadius="20px"
                        boxShadow="-4px 4px 4px rgba(0,0,0,0.5)"
                        style={{marginBottom: "50px"}}>
                    <h1 style={{textAlign: "center", fontWeight: "bold"}}>{topic.toLocaleUpperCase()}</h1>
                </Tile>
                <Tile   backgroundColor="#ffffff"
                        width="100%"
                        height="500px"
                        borderRadius="20px"
                        boxShadow="-4px 4px 4px rgba(0,0,0,0.5)">
                    <h2 style={{textAlign: "center", fontWeight: "normal", fontSize: "28px", marginTop: "-20px"}}><br/>Summary</h2>
                    <textarea onChange={handleSummaryChange} style={{height: "30vw", marginBottom: "20px"}} rows={20} placeholder="Write your summary here"/>
                </Tile>
            </div>
            <div className={styles.rightHalf} data-aos="fade-left" data-aos-duration="500">
                <Tile   backgroundColor={colors.primaryColor1}
                        width="100%"
                        height="425px"
                        borderRadius="20px"
                        boxShadow="-4px 4px 4px rgba(0,0,0,0.5)">
                    <h2 style={{textAlign: "center", fontWeight: "normal", fontSize: "28px"}}>Select one Subject</h2>
                    <SearchBarAlt style={{width:"100%", height:"50px", borderRadius: "10px"}} 
                        placeholderText="Search for subject"
                        text={searchTerm}
                        handleChange={handleSearchChange}
                        onClick={() => {
                            // retrieve search results
                            const SEResults = ["something here", "something else here", "even more shit here",
                            "something here", "something else here", "even more shit here","something here", "something else here", "even more shit here",];
                            setSearchResults(SEResults);
                        }}
                        />
                    <TopicSelector results={searchResults} selectLimit={1} style={{backgroundColor: "#fafafa"}}/>
                </Tile>
                <Tile   backgroundColor={colors.primaryColor2}
                        width="100%"
                        height="150px"
                        borderRadius="20px"
                        boxShadow="-4px 4px 4px rgba(0,0,0,0.5)">
                    <h2 style={{textAlign: "center", fontWeight: "normal", fontSize: "28px"}}>Quick References</h2>
                    <div className={styles.logoContainer}>
                        <a href={`https://www.google.com/search?q=${googleSearchTerm}`}><img src={GoogleLogo} alt="Link to Google search"/></a>
                        <a href={`https://en.wikipedia.org/w/index.php?search=${wikipediaSearchTerm}`}><img src={WikipediaLogo} alt="Link to Wikipedia page"/></a>
                    </div>
                </Tile>
                <Card
                    add={false}
                    backgroundColor={colors.primaryColor3}
                    width="100%"
                    height="75px"
                    borderRadius="20px"
                    onClick={(event) => {
                        const alphanumeric = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
                        if (searchTerm.length === 0 || !searchTerm.includes(alphanumeric)) {
                            console.log("not a valid term")
                            event.preventDefault();
                        }
                    }}>
                    <Link to="/chat" style={{textDecoration: "none", color: "black"}} data={{
                        isSummarizer: true,
                        summary: summary
                    }}>
                        I'm Ready
                    </Link>
                </Card>
            </div>
        </div>
    )
}