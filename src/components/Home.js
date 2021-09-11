import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Middlevideo from "./Middle";


function Home() {
    return (
        <>
            <div className="entry-container">
                <div className="entry" style={{ backgroundImage: "url(/images/cafe.png)", backgroundSize: "center", height: "100vh", width: "100%" }}>
                        <Navbar/>
                        <h1>Start Selling online now<br />with flutter wave store.</h1>
                        <p>Set up your store in minutes and bring your brand your <br/><p className="clarify">brand to life.</p></p>

                </div>

            </div>
            <Middlevideo />
        </>

    );
}

export default Home;