import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/main.scss";

import Login from "./views/Login";
import Register from "./views/Register";
import Chat from "./views/Chat";
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
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <React.Fragment>
            <Router>
                <div className="App">
                    <NavigationBar />
                    <Switch>
                        <PrivateRoute inverse exact path="/login" component={Login} alt="/" />
                        <PrivateRoute inverse exact path="/register" component={Register} alt="/" />
                        <PrivateRoute exact path="/chat" component={Chat}/>
                        <PrivateRoute inverse exact path="/" component={Home} alt="/dashboard" />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <Route exact path="/faq" component={Faq} />
                        <Route exact path="/aboutus" component={AboutUs} />
                        <PrivateRoute exact path="/createnew" component={CreateNew} />
                        <PrivateRoute exact path="/info" component={Info} />
                        <PrivateRoute exact path="/reflection" component={Reflection} />
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
