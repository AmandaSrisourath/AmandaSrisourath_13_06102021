import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/argentBankLogo.png";
import { setInfos, setToken } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";

function ProfileHeader() {
    const dispatch = useDispatch();
    const history = useHistory();
    const firstName = useSelector((state) => state.user.infos.firstName);

    const onSignOut = () => {
        dispatch(setToken(''));
        dispatch(setInfos({}));
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
                <p>{firstName}</p>
            </Link>

            <div onClick={onSignOut} className="main-nav-item">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <p>Sign Out</p>
            </div>
        </div>
    )
}

export default ProfileHeader;