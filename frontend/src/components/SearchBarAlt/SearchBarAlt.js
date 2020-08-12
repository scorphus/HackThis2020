import React, { useState } from 'react';

import searchImg from "../../assets/search_glass.png";
import "./searchBarAlt.scss";

export default function SearchBarAlt(props) {
    const [value, setValue] = useState(props.text);

    function handleEventChange(e) {        
        setValue(e.target.value);
    }

    return (
        <div className="searchBarAlt">
            <input style={props.style} className="searchText" 
                type="text" placeholder={props.placeholderText} onChange={handleEventChange}
                // defaultValue={props.children}
                defaultValue={value}
                onKeyDown={(event) => {
                    if (event.key === 13 || event.which === 13) {
                        props.onClick();
                        props.handleChange(value);                        
                    }
                }}
                />
            <button className="icon" onClick={() => {
                props.onClick();
                props.handleChange(value);
            }}>
                <img src={searchImg} alt="Search icon"></img>
            </button>
        </div>
    )
}