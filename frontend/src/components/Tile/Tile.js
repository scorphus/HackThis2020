import React from 'react';

import './tile.css';

export default function Tile(props) {
    const mainStyles = {
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        boxShadow: props.boxShadow,
    }

    return (
        <div className="tile" style={{...mainStyles, ...props.style}}>
            {props.children}
        </div>
    )
}