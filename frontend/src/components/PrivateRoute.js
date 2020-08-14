import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

const PrivateRoute = ({ component: Component, inverse, alt, ...rest }) => { 
    
    let shouldRender = !!Cookies.get("username")

    if(inverse) shouldRender = !shouldRender;

    return (<Route
        {...rest}
        render={(props) =>
            (shouldRender) ? (
                <Component {...props} />
            ) : (
                <Redirect to={alt || "/login"} />
            )
        }
    />)
 };

export default PrivateRoute;
