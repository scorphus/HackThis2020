import React, { useState, useEffect } from 'react';

import colors from '../../styles/colors.scss'
import './topicSelector.scss';

const Entry = (props) => {
    const [selected, setSelected] = useState(false);

    const unselectedStyles = {
        border: `${colors.basegrey} solid 1px`,
        backgroundColor: "#fafafa",
        color: "black",
    }

    const selectedStyles = {
        border: `${colors.basegrey} solid 1px`,
    }

    return (
        <button className={props.disabled && !selected ? "entry-disabled" : "entry"} 
            disabled={props.disabled && !selected} 
            style={selected ? selectedStyles : unselectedStyles} 
            onClick={() => {
                setSelected(!selected);
                props.onClick(!selected);
        }}>
            <p>{props.text}</p>
        </button>
    )
}

export default function TopicSelector(props) {
    const [disableAll, setDisableAll] = useState(false);
    const [numSelected, setNumSelected] = useState(0);

    function changeNumSelected(posOrNeg) {
        setNumSelected(numSelected + (posOrNeg ? 1 : -1));
    }

    useEffect(() => {
        setDisableAll(numSelected >= props.selectLimit);
    }, [numSelected]);

    return (
        <div className="topicSelector" style={props.style}>
            {props.results.map((result, index) => <Entry 
                    key={index} text={result} disabled={disableAll}
                    onClick={changeNumSelected}
                />)}
        </div>
    )
}