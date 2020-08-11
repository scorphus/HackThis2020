import React from "react";
import { useLocation } from "react-router-dom";
import NotFoundImage from '../assets/NotFound_Image.svg';

import Card from '../components/Card/card';

import colors from '../styles/colors.scss';
// animation on scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({});

const aosLength = "600"

function NotFound(props) {
    let location = useLocation();

    const containerStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }

    return (
        <div style={containerStyles}>
            <p data-aos="zoom-out-down" data-aos-duration={aosLength} style={{fontSize: "44px", marginBottom: "20px"}}>You've reached uncharted territory!</p>
            <p data-aos="zoom-out-down" data-aos-duration={aosLength} style={{fontSize: "24px", marginBottom: "24px"}}>We couldn't find a page called {location.pathname}. Perhaps try going back?</p>
            <div data-aos="zoom-out-down" data-aos-duration={aosLength}>
                <Card
                    add={false}
                    backgroundColor={colors.primaryColor3}
                    width="200px"
                    height="80px"
                    borderRadius="10px"
                    onClick={() => props.history.goBack()}
                >Go Back</Card>
            </div>
            <img data-aos="zoom-out-up" data-aos-duration={aosLength} style={{marginTop: "40px"}} src={NotFoundImage} alt="Person pointing to distance"/>
        </div>
    );
}

export default NotFound;
