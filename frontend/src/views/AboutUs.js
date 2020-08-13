import React from "react";
import ReactTypingEffect from 'react-typing-effect';

import Tile from '../components/Tile/Tile';

import colors from "../styles/colors.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({});

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../assets/Profile', false, /\.(png|jpe?g|svg)$/));

const ProfileCard = (props) => (
    <Tile
        backgroundColor={props.backgroundColor}
        width="250px"
        height="400px"
        borderRadius="20px"
        style={{boxShadow: "-4px 4px 4px rgba(0,0,0,0.5)"}}
    >
        <img src={props.img} alt={props.fullName} width="200px" height="200px"></img>
        <h4>{props.fullName}</h4>
    </Tile>
)

function AboutUs() {
    const colorBankObj = colors;
    delete colorBankObj.basegrey;
    delete colorBankObj.warningColor;
    const colorBank = Object.values(colorBankObj);

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: "64px"}}>We are <ReactTypingEffect
                text={["innovators.", "developers.", "redefining learning."]}
                speed={50}
                typingDelay={750}
            /></h1>
            <h3 data-aos="fade-down" data-aos-delay="1500" style={{fontWeight: 400, marginBottom: "5vh"}}>Feynman was created from HackThis 2020, a hackathon organized by the HackIllinois team.</h3>
            <h2 data-aos="fade" data-aos-delay="2000"style={{fontSize: "36px"}}>Our team</h2>
            <div data-aos="fade" data-aos-delay="2000" style={{display: 'flex', flexWrap: 'wrap', gap: "1vw", width: "80vw", margin: "2vh auto 5vh", justifyContent: "center"}}>
                {images.map((img) => {
                    let unprocessedName = img.split("/static/media")[1];
                    console.log(unprocessedName)
                    let fullName = unprocessedName.substring(1, unprocessedName.indexOf(".")).replace(/_/g, ' ');
                    console.log(fullName);
                    return <ProfileCard
                        backgroundColor={colorBank.splice(Math.floor(Math.random()*colorBank.length), 1)}
                        img={img}
                        fullName={fullName}
                    />
                })}
            </div>
        </div>
    );
}

export default AboutUs;
