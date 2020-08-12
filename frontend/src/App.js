import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/main.scss";

import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Profile from "./views/Profile";
import Faq from "./views/FAQ";
import NotFound from "./views/NotFound";
import Reflection from "./views/Reflection";

import { NavigationBar } from './components/navbar';

function App() {
    return (
        <React.Fragment>
            <Router>
                <div className="App">
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/faq" component={Faq} />
                        <Route exact path="/aboutus" component={AboutUs} />
                        <Route exact path="/reflection" component={Reflection} />
                        <Route exact path="/queue" component={Queue}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default App;
