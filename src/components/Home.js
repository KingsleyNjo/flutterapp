import React, { useState } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Middlevideo from "./Middle";
import FooterContainer from './Footer/FooterContainer';
import { Button } from './Button';
import { Link } from "react-router-dom";


function Home() {
    const [button] = useState(true);
    return (
        <>
        <div className="all">
            <div className="entry-container">
                <div className="entry" style={{ backgroundImage: "url(/images/cafe.png)", backgroundSize: "center", height: "100vh", width: "100%" }}>
                    <Navbar />
                    <h1>Start Selling online now<br />with flutter wave store.</h1>
                    <p className="life">Set up your store in minutes and bring your brand to life.</p>

                    <Link to="" className="design">
                        <button>SET UP YOUR STORE FOR FREE</button>
                    </Link>


                </div>

            </div>
            <Middlevideo />

            <br />

            <div className="lastsection">
                <div>
                    <p className="sweety">Get started now to grow your business.</p>
                    <p className="sweet">Create an account or get in touch with us.</p>
                </div>

                <div className="pad">
                    {button && <Button buttonStyle="btn--outline">GET STARTED</Button>}

                    <Link to="">
                        <button className="white">SPEAK WITH US</button>
                    </Link>

                </div>

            </div>

            <FooterContainer />
        </div>
        </>

    );
}

export default Home;