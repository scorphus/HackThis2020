import React, { useState } from 'react';

import searchImg from "../../assets/search_glass.png";
import "./searchBarAlt.scss";

export default function SearchBarAlt(props) {
    const [value, setValue] = useState(props.text);

    function handleEventChange(e) {        
        setValue(e.target.value);        
        props.handleChange(e.target.value);
    }

    return (
        <div className="searchBarAlt">
            <input style={props.style} className="searchText" 
                type="text" placeholder={props.placeholderText} onChange={handleEventChange}
                value={value}
                onKeyDown={(event) => {
                    if (event.key === 13 || event.which === 13) {      
                        props.onClick();                  
                    }
                }}
                />
            <button className="icon" onClick={() => {
                props.handleChange(value);                
            }}>
                <img src={searchImg} alt="Search icon"></img>
            </button>
        </div>
    )
}