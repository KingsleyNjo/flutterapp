import React, { useState } from "react";
import "./NextHome.css";
import Navbar from "./Navbar";
import FooterContainer from './Footer/FooterContainer';
import { Link } from "react-router-dom";
import { Button } from './Button';

function NextHome() {
    const [button] = useState(true);
    return (
        <>
            <div className="entry-container2">
                <div className="entry" style={{ backgroundColor: "rgb(212, 245, 247)", backgroundSize: "center", height: "140vh", width: "100%" }}>
                    <Navbar />

                    <div class="navapart">

                        <div class="wordarrange">
                            <h1>Grow you business <br /> with Flutterwave.</h1>
                            <p>The easiest way to make and accept <br />
                                payments from customers anywhere <br />
                                in the world</p>

                            <div className="pads">
                                {button && <Button buttonStyle="btn--outline">CREATE ACCOUNT</Button>}

                                <Link to="">
                                    <button className="whites">SPEAK WITH US</button>

                                </Link>

                            </div>

                        </div>

                        <div className="imagearrange">
                            <img src="images/maxhelmet.png" style={{ width: "200px", paddingRight: "30px", transform: "translate(70px,100px)" }} alt="" />
                            <img src="images/samke-mhlongo.png" style={{ width: "200px", paddingBottom: "20px" }} alt="" />
                            <img src="images/restuarant.png" style={{ width: "290px", padding: "20px", borderRadius: "10px", transform: "translate(-70px,-10px)" }} alt="" />
                            <img src="images/hygeia.png" style={{ width: "230px", height: "150px", borderRadius: "10px", transform: "translateX(-70px)" }} alt="" />

                        </div>

                    </div>


                </div>

                <div className="wholesection">
                    <div className="sectiontop">
                        <h1>Create seamless payment <br /> experience for your customers</h1>
                    </div>

                    <div className="sectiondiv">
                        <div>
                            <img src="images/pospayment.jpg" style={{ width: "450px", height: "550px", borderRadius: "10px", marginLeft: "120px" }} alt="love" />
                        </div>

                        <div className="spacediv">
                            <div className="spacep">
                                <h1>Accept payments <br /> anywhere.</h1>
                                <p>One platform that lets you sell whereever your customers <br /> are - online,in-person, anywhere in the world,and everywhere in-between </p>
                            </div>

                            <div className="caseclosed">
                                <div className="shifted">
                                    <h4>Online(Website and Mobile)</h4>
                                    <p>Sell online with an ecommerce website,Mobile App and More.</p>
                                </div>

                                <div className="shift">
                                    <h4>POS(Point Of Sale)</h4>
                                    <p>Sell in-person at your store locations,pop-ups,concerts.</p>
                                </div>
                            </div>

                            <div className="anotherone">
                                <h4>Reach more people with more payment methods</h4>
                                <p>With little to no effort, remove the boundaries to scaling your
                                    business <br /> and reach one customer with just one platform</p>
                            </div>

                            <div className="separateul">
                                <div>
                                    <ul>
                                        <li>Debit and credit cards</li>
                                        <li>Mobile Money</li>
                                        <li>M-Pesa</li>
                                        <li>Bank Transfer</li>
                                    </ul>

                                </div>

                                <div>
                                    <ul>
                                        <li>Bank Account</li>
                                        <li>POS</li>
                                        <li>Visa QR</li>
                                        <li>USSD</li>
                                    </ul>

                                </div>

                            </div>


                        </div>


                    </div>


                </div>

                <div className="thirdsection">

                    <div className="thirdwidth">
                        <h1>Issue cards, create new businesses.</h1>
                        <p>Create cards for your team, add spending limits, make then site-specific and so much more</p>

                        <div>
                            <h6 className="colorblue">Create virtual Mastercard and Visa cards</h6>
                            <p>Using the flutterwave API, you can easily create and manage virtual cards. Cards can be
                                used instantly through mobile wallets and global websites
                            </p>

                            <h6 className="colorblue">Create new FinTech businesses</h6>
                            <p>With just a few lines of Issuing API code, the possibilities for your new FInTech business(es) are endless.
                            </p>

                            <Link to="/" className="connect">LEARN MORE ABOUT CARD ISSUEING</Link>
                        </div>

                    </div>

                    <video autoPlay loop muted id="video" width="750" height="500">
                        <source src="videos/videoroll.mp4" type="video/mp4" />
                    </video>

                </div>

                <br />

                <div className="fourthsection">
                    <video autoPlay loop muted id="video" width="750" height="500">
                        <source src="videos/radar.mp4" type="video/mp4" />
                    </video>

                    <div className="fourthwidth">
                        <h1>Safety and security guaranteed.</h1>
                        <p>At flutterwave, we take security seriously so every payment made on our platform is 100% secure,even
                            exceeding industry standard.</p>

                        <div>
                            <h6 className="colorblue">ISO 27001 & 22301 Certification</h6>
                            <p>The ISO 27001 & 22301 certification means that we have acceptible business practices and processes,
                                including a robust business continuity plan
                            </p>

                            <h6 className="colorblue">PA DSS & PCI DSS Compliant</h6>
                            <p>This certification is proof that flutterwave gateway processor has satisfied higfhest level of
                                security audit
                            </p>

                        </div>

                    </div>

                </div>

                <div className="lastsection">
                    <div>
                        <h1>Get started now to grow your business.</h1>
                        <p>Create an account or get in touch with us.</p>
                    </div>

                    <div className="pad">
                        {button && <Button buttonStyle="btn--outline">GET STARTED</Button>}
                        <Link to="">
                            <button className="white">SPEAK WITH US</button>

                        </Link>

                    </div>

                </div>

            </div>

            <FooterContainer />


        </>
    )
};

export default NextHome;