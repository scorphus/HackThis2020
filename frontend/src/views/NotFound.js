import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
    let location = useLocation();

    return (
        <div>
            <p>Page not found at {location.pathname}</p>
        </div>
    );
}

export default NotFound;
