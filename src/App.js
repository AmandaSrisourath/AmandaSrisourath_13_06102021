import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import User from "./Components/User/User";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/sign-in">
                    <SignIn />
                </Route>

                <Route path="/user">
                    <User />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;