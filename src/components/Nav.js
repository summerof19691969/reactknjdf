import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"
import logo from './images/smtmonitor.gif';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <img src={logo} alt="a" height="145"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/Login">Login</Link>
                            <Link className="nav-link" to="/Signup">Signup</Link>
                            <Link className="nav-link" to="/Catch">Catch</Link>
                            <Link className="nav-link" to="/Battle">Battle</Link>
                            <Link className="nav-link" to="/Lore">Lore</Link>
                            <Link className="nav-link" to="/Profile">Profile</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
};
