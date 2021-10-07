import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Assets/Images/argentBankLogo.png";

class UserHeader extends React.Component {
    render() {
        return (
            <div className="main-nav">
                <Link to={`/`} className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                <Link to={`/user`} className="main-nav-item">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <p>Tony</p>
                </Link>

                <Link to={`/`} className="main-nav-item">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <p>Sign Out</p>
                </Link>
            </div>
        )
    }
}

export default UserHeader;