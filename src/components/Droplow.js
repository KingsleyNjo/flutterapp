import React, { useState } from "react";
import "./Droplow.css";

function Droplow() {

    const [droplow, setDroplow] = useState(false);

    const handleDroplow = () => {
        setDroplow(!droplow);
    }
    return (

        <>
            <div className={droplow ? "services-submenu clicked" : "services-submenuu"} onClick={handleDroplow}>
                <div className="caseyy">
                    <p className="shortt">Resources</p>
                    <p className="shortyy">Everything you need to learn about Flutterwave,from our APIs,integration to guides,blogs and support.</p>

                    <br />
                    <p className="shortt">For Developers</p>
                    
                    <div className="sippyy">
                        <p>Get Started</p>
                        <p>Documentation</p>
                        <p>Referrals</p>

                    </div>

                </div>

                <div className="loveyy">
                    <p className="chicky">Learning Information</p>
                    <p className="smallyy">Why you got charged</p>
                    <p className="smalliedd">See why and where you got charged by Flutterwave.</p>

                    <p className="smallyy">Integrations</p>
                    <p className="smalliedd">Integrate powerful tools and products that aid your business growth.</p>

                    <p className="smallyy">Blogs</p>
                    <p className="smalliedd">Developer stories,merchant stories,product features, and more.</p>

                    <p className="smallyy">Support</p>
                    <p className="smalliedd">Access our knowledge base fpr help with your rave sandbox or live account.</p>

                    <p className="smallyy">Wave Podcast</p>
                    <p className="smalliedd">Listen to conversations with people about finance,business,failures and more.</p>

                </div>

            </div>

        </>
    )
}

export default Droplow;