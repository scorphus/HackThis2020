import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./styles/main.scss";

import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Profile from "./views/Profile";
import Faq from "./views/FAQ";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Register from "./views/Register";
import Chat from "./views/Chat";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
                        <Route exact path="/chat" component={Chat} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default App;
