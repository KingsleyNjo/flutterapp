import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown() {

    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    }
    return (

        <>
            <div className={dropdown ? "services-submenu clicked" : "services-submenu"} onClick={handleDropdown}>
                <div className="casey">
                    <p className="short">Our Solutions</p>
                    <p className="shorty">Providing the fastest,most seamless payments solutions to suit your business needs, anywhere in the world.</p>

                    <br />
                    <p className="short">Your Business Category</p>
                    
                    <div className="sippy">
                        <p>Events</p>
                        <p>Transportation</p>
                        <p>Hospitality</p>
                        <p>Individuals</p>

                    </div>

                </div>

                <div className="lovey">
                    <p className="smally">Checkout</p>
                    <p className="smallied">Seamless and quick experience for your customers.</p>

                    <p className="smally">Card Issuing and Management</p>
                    <p className="smallied">Create and manage custom virtual cards.</p>

                    <p className="smally">Store</p>
                    <p className="smallied">Start selling online with Flutterwave store.</p>

                    <p className="smally">Invoices</p>
                    <p className="smallied">Send invoices to your customers via email or whatsapp.</p>

                    <p className="smally">Payment Links</p>
                    <p className="smallied">Recieve payments with ease without a website or integration.</p>

                    <p className="smally">Grow</p>
                    <p className="smallied">Register and incorporate your business from anywhere.</p>

                </div>

            </div>

        </>
    )
}

export default Dropdown;