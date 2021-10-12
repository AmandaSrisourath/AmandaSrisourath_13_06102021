import '../App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../home/Home";
import Login from "../user/components/Login";
import Profile from "../user/components/Profile";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;