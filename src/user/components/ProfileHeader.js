import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/argentBankLogo.png";
import { setToken } from "../userSlice";
import { useDispatch } from "react-redux";

function ProfileHeader() {
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(setToken(''));
        history.push("/");
    }

    return (
        <div className="main-nav">
            <Link to={`/`} className="main-nav-logo">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <Link to={`/profile`} className="main-nav-item">
                <FontAwesomeIcon icon={faUserCircle} />
                <p>Tony</p>
            </Link>

            <div onClick={onSubmit} className="main-nav-item">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <p>Sign Out</p>
            </div>
        </div>
    )
}

export default ProfileHeader;