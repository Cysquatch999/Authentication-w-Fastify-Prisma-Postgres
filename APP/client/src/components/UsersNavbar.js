import React from 'react';
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5"

export default function UsersNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        Authentication Demo
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>
                                    Patch Notes
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>
                                    Forum
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/contact'}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/profile/main'}>
                                    <IoPersonCircleOutline size={30} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
