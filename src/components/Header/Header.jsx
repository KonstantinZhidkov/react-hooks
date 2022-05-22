import React from "react";
import {Link, NavLink} from 'react-router-dom';

import {CurrentUserContext} from "contexts/currentUser";


const Header = () => {
    const [currentUserState] = React.useContext(CurrentUserContext);

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Logo
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact="true">
                            Home
                        </NavLink>
                    </li>
                    {currentUserState.isLoggedIn === false && (
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">
                                    Sign in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">
                                    Sign up
                                </NavLink>
                            </li>
                        </React.Fragment>
                    )}
                    {currentUserState.isLoggedIn && (
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink to="/articles/new" className="nav-link">
                                    <i className="ion-compose"></i>
                                    &nbsp; New Post
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/profiles/${currentUserState.currentUser.username}`} className="nav-link">
                                    <img className="user-pic" src={currentUserState.currentUser.image} alt="User avatar" />
                                    &nbsp;
                                    {currentUserState.currentUser.username}
                                </NavLink>
                            </li>
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Header;