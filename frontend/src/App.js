import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./styles/main.scss";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Home />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
