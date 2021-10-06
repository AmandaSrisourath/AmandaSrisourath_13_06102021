import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../Assets/Images/argentBankLogo.png";

class UserHeader extends React.Component {
    render() {
        return (
            <div className="main-nav">
                <Link to={`/home`} className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                <Link to={`/user`} className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <p>Tony</p>
                </Link>

                <Link to={`/home`} className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign Out</p>
                </Link>
            </div>
        )
    }
}

export default UserHeader;