import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar_v2 extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + "/";
        let imgattr = "logo";
        let anchor = "#";
        return (
            <div>
                <nav className="navbar navbar-area navbar-expand-lg nav-style-02">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <div className="logo-wrapper mobile-logo">
                                <a href={anchor} className="logo">
                                    <img
                                        src={publicUrl + "assets/img/logo.png"}
                                        alt={imgattr}
                                    />
                                </a>
                            </div>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#Riyaqas_main_menu"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggle-icon">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </span>
                            </button>
                        </div>
                        <div
                            className="collapse navbar-collapse"
                            id="Riyaqas_main_menu"
                        >
                            <div className="logo-wrapper desktop-logo">
                                <a href={publicUrl} className="logo">
                                    <img
                                        src={publicUrl + "assets/img/logo.png"}
                                        alt={imgattr}
                                    />
                                </a>
                            </div>
                            <ul className="navbar-nav">
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/services">Solutions</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="body-overlay" id="body-overlay"></div>
                <div className="search-popup" id="search-popup">
                    <form action="index.html" className="search-form">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search....."
                            />
                        </div>
                        <button type="submit" className="submit-btn">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Navbar_v2;
