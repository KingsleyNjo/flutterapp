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
                <div className="entry" style={{ backgroundColor: "#dadef5", backgroundSize: "center", height: "140vh", width: "100%" }}>
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
                            <img className="imageone" src="images/maxhelmet.png" alt="" />
                            <img className="imagetwo" src="images/samke-mhlongo.png" alt="" />
                            <img className="imagethree" src="images/restuarant.png" alt="" />
                            <img className="imagefour" src="images/hygeia.png" alt="" />

                        </div>

                    </div>


                </div>

                <div className="wholesection">
                    <div className="sectiontop">
                        <h1>Create seamless payment experience for your customers.</h1>
                    </div>

                    <div className="sectiondiv">
                        <div>
                            <img src="images/pospayment.jpg" style={{ width: "450px", height: "530px", borderRadius: "10px", marginLeft: "120px",marginTop:"150px" }} alt="love" />
                        </div>

                        <div className="spacediv">
                            <div className="spacep">
                                <h1>Accept payments anywhere.</h1>
                                <p>One platform that lets you sell whereever your customers are - online,in-person, anywhere in the world,and everywhere in-between </p>
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
                                    business and reach one customer with just one platform</p>
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
                        <p className="thirdwid">Create cards for your team, add spending limits, make then site-specific and so much more</p>

                        <div className="thirdnew">
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
                        <p className="need">Safety and security guaranteed.</p>
                        <p className="wowwu">At flutterwave, we take security seriously so every payment made on our platform is 100% secure,even
                            exceeding industry standard.</p>

                        <div>
                            <h6 className="colorblue">ISO 27001 & 22301 Certification</h6>
                            <p className="wowwu">The ISO 27001 & 22301 certification means that we have acceptible business practices and processes,
                                including a robust business continuity plan
                            </p>

                            <h6 className="colorblue">PA DSS & PCI DSS Compliant</h6>
                            <p className="wowwu">This certification is proof that flutterwave gateway processor has satisfied higfhest level of
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