import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
    let location = useLocation();

    return (
        <div className="container">
            <p>Page not found: {location.pathname}</p>
        </div>
    );
}

export default NotFound;
