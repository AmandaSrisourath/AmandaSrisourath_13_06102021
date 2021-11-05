import '../App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
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

                <PrivateRoute path="/profile">
                    <Profile />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;