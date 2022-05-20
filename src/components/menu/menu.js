import React from 'react';
import './menu.scss'
import {
    Link
} from "react-router-dom";

function Menu() {
    return (
        <section>
            <div className="nav-logo">
                <h1 className="logo-star">Star Wars</h1>
            </div>
            <header className="navigation">
                <div className="container-menu">
                    <ul className="nav-box">
                        <li className="border-nav">
                            <Link className="nav-menu" to="/">Home</Link>
                        </li>
                        <li className="border-nav">
                            <Link className="nav-menu" to="/people">People</Link>
                        </li>
                        <li className="border-nav">
                            <Link className="nav-menu" to="/info">Info</Link>
                        </li>
                    </ul>
                </div>

            </header>
        </section>
    );
}

export default Menu;