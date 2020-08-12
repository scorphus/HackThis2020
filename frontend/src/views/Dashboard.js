import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Card from "../components/Card/card";
import SearchBarAlt from "../components/SearchBarAlt/SearchBarAlt";

import styles from "../styles/Dashboard.module.scss";
import colors from "../styles/colors.scss";

export default function Dashboard(props) {
    // const username = props.username;
    const username = "potato";

    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchChange(result) {
        console.log(result);
        setSearchTerm(result);
    }

    const colorBankObj = colors;
    delete colorBankObj.basegrey;
    delete colorBankObj.warningColor;
    const colorBank = Object.values(colorBankObj);

    // retrieve user interests here:
    // const userPrefs = somethingsomethinghere
    const userPrefs = ["Pharmaceuticals", "Biomedical Engineering", "Complex Algebra"]

    return (
        <div className={styles.dashboardContainer}>
            <h1 style={{ textAlign: "center", fontSize: "48px", marginTop: "50px"}}>Welcome, {username}</h1>
            <h2 style={{ textAlign: "center", fontSize: "28px", fontWeight: 400, marginBottom: "8vh", padding: "0 10vw"}}>What would you like to learn today?</h2>
            <div className={styles.dashboardSearchContainer}>
                <SearchBarAlt
                    style={{ width: "50vw", height: "75px", borderRadius: "25px" }}
                    placeholderText="Search for topic or subject"
                    text={searchTerm}
                    handleChange={handleSearchChange}
                    onClick={() => history.push(`/search?q=${searchTerm.replace(' ', '+')}`)}
                />
            </div>
            <h3 style={{ textAlign: "center", fontSize: "22px"}}>Your favorite subjects</h3>
            <div className={styles.cardContainer}>
                {userPrefs.map((pref, index) => {
                    let cardColor = colorBank.splice(Math.floor(Math.random()*colorBank.length), 1);
                    let fontSize;
                    if (pref.length < 10) {
                        fontSize = "36px"
                    } else {
                        fontSize = "24px";
                    }
                    return <div key={index} class={styles.cardWrapper}><Card add={false}
                    width="100%"
                    height="150px"
                    borderRadius="30px"
                    fontSize={fontSize}
                    backgroundColor={cardColor}
                    >
                        <Link style={{color: "black", textDecoration: "none"}} to={`/search?q=${pref.replace(' ', '+')}`}>
                            <h3 style={{fontWeight: 400}}>{pref}</h3>
                        </Link>
                    </Card></div>
                })}
            </div>
        </div>
    )
}