import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/login">
                        <div>login</div>
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
