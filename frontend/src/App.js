import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/main.scss";

import Login from "./views/Login";
import Register from "./views/Register";
import Chat from "./views/Chat";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import AboutUs from "./views/AboutUs";
import Profile from "./views/Profile";
import Faq from "./views/FAQ";
import NotFound from "./views/NotFound";
import CreateNew from "./views/CreateNew";
import Info from "./views/Info";

import { NavigationBar } from './components/navbar';

function App() {
    return (
        <React.Fragment>
            <Router>
                <div className="App">
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/chat" component={Chat}/>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/profile" render={(props) => (<Profile {...props}/>)} />
                        <Route exact path="/faq" component={Faq} />
                        <Route exact path="/aboutus" component={AboutUs} />
                        <Route exact path="/createnew" render={(props) => (<CreateNew {...props}/>)} />
                        <Route exact path="/info" render={(props) => (<Info {...props}/>)} />
                        {/* 404 page MUST be last */}
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default App;
