import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/main.scss";

import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/login">
                        <h1>Login</h1>
                    </Route>
                    <Route exact path="/">
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
