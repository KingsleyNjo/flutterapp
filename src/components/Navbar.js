import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from "react-router-dom";
import './Navbar.css';
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import Droplow from "./Droplow";


function Navbar() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    const [droplow, setDroplow] = useState(false);
    

    const handleClick=()=>{
        setClick(!click)
    }

    const handleMouse=()=>{
        setDropdown(true);
    }

    const handleLeave=()=>{
        setDropdown(false);
    }

    const handleMouses=()=>{
        setDroplow(true);
    }

    const handleLeaves=()=>{
        setDroplow(false);
    }


    return (
        <>
            <div className="navbar">
                <div className="navbar-container">

                    <Link to="/nexthome" className="navbar-logo">
                        <img src="images/flutterwave.svg" style={{ width: '150px' }} />

                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {navItems.map((item)=>{
                            if(item.title==="Our Solutions"){
                                return (
                                    <li key={item.id} className={item.cName} onMouseEnter={handleMouse} onMouseLeave={handleLeave}>
                                      <Link to={item.path} className={item.ccName}>{item.title}<i className="fas fa-caret-down"></i></Link>
                                      {dropdown && <Dropdown/>}
                                    </li>
                                );

                            }else if(item.title==="Resources"){
                                return(
                                    <li key={item.id} className={item.cName} onMouseEnter={handleMouses} onMouseLeave={handleLeaves}>
                                      <Link to={item.path} className={item.ccName}>{item.title}<i className="fas fa-caret-down"></i></Link>
                                      {droplow && <Droplow/>}
                                    </li>
                                    
                                )
                            }
                            return (
                                <li key={item.id} className={item.cName}>
                                  <Link to={item.path} className={item.ccName}>{item.title}</Link>
                                </li>
                            );
                        })}
                        

                        <li className="nav-items">
                            {button && <Button buttonStyle="btn--outline">CREATE ACOUNT</Button>}

                        </li>

                    </ul>

                </div>
            </div>


        </>

    );

}

export default Navbar;