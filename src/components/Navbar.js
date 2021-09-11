import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    const [click] = useState(false);
    const [button, setButton] = useState(true);


    return (
        <>
            <div className="navbar">
                <div className="navbar-container">

                    <Link to="/nexthome" className="navbar-logo">
                        <img src="images/flutterwave.svg" style={{ width: '150px' }} />

                    </Link>
                    <div className="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                Our Solutions
                            </Link>

                        </li>

                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                Developers
                            </Link>

                        </li>

                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                Resources
                            </Link>

                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Pricing
                            </Link>

                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Sign In
                            </Link>

                        </li>

                        <li className="nav-item">
                            {button && <Button buttonStyle="btn--outline">CREATE ACOUNT</Button>}

                        </li>

                    </ul>

                </div>
            </div>


        </>

    );

}

export default Navbar;