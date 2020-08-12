import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/main.scss";

import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Search from "./views/Search";
import CreateNew from "./views/CreateNew";
import Info from "./views/Info";
import Reflection from "./views/Reflection";
import AboutUs from "./views/AboutUs";
import Faq from "./views/FAQ";
import NotFound from "./views/NotFound";

import { NavigationBar } from './components/navbar';

function App() {
    return (
        <React.Fragment>
            <Router>
                <div className="App">
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/profile" render={(props) => (<Profile {...props}/>)} />
                        <Route exact path="/faq" component={Faq} />
                        <Route exact path="/aboutus" component={AboutUs} />
                        <Route exact path="/createnew" render={(props) => (<CreateNew {...props}/>)} />
                        <Route exact path="/info" render={(props) => (<Info {...props}/>)} />
                        <Route exact path="/reflection" component={Reflection} />
                        <Route exact path="/search" component={Search}/>
                        {/* 404 page MUST be last */}
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default App;
