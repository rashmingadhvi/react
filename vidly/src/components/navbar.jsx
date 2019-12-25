import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = ({currentUser, appName}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">{appName}</span>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    {
                        currentUser? <React.Fragment>
                                <li className="nav-item">
                                    <NavLink to="/movies" className="nav-link">Movies</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/customers" className="nav-link">Customers</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/rentals" className="nav-link">Rentals</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/logout" className="nav-link">Logout</NavLink>
                                </li>
                            </React.Fragment> :
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link">Login</NavLink>
                                </li>
                            </React.Fragment>
                    }


                </ul>
            </div>

            <div className="badge badge-pill badge-light">Welcome {currentUser?currentUser.name:""} !</div>
        </nav>
    );

}
export default Navbar;