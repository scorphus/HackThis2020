import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/main.scss";

import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Profile from "./views/Profile";
import Faq from "./views/FAQ";
import NotFound from "./views/NotFound";
import CreateNew from "./views/CreateNew";

import { NavigationBar } from './components/navbar';

function App() {
    return (
        <React.Fragment>
            <Router>
                <NavigationBar />
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/faq" component={Faq} />
                        <Route exact path="/aboutus" component={AboutUs} />
                        <Route component={NotFound} />
                        <Route exact path="/createnew" render={(props) => (<CreateNew {...props} topic="Pythagorean Theorem"/>)} />
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default App;
