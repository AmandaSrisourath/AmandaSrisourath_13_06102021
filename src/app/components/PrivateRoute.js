import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute(props) {
    const { path, children } = props;
    const token = useSelector((state) => state.user.token);
    if (token) {
        return (
            <Route exact path={path}>
                {children}
            </Route>
        )
    }
    return <Redirect to="/login" />
}

export default PrivateRoute;