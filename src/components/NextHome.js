import React from "react";
import "./NextHome.css";
import Navbar from "./Navbar";

function NextHome() {
    return (
        <>
            <div className="entry-container2">
                <div className="entry" style={{ backgroundColor: "rgb(212, 245, 247)", backgroundSize: "center", height: "145vh", width: "100%" }}>
                    <Navbar />

                    <div class="navapart">

                        <div class="wordarrange">
                            <h1>Grow you business <br /> with Flutterwave.</h1>
                            <p>The easiest way to make and accept <br />
                                payments from customers anywhere <br />
                                in the world</p>

                        </div>

                        <div className="imagearrange">
                            <img src="images/maxhelmet.png" style={{ width: "200px", paddingRight: "30px", transform: "translate(70px,100px)" }} alt="" />
                            <img src="images/samke-mhlongo.png" style={{ width: "200px", paddingBottom: "20px" }} alt="" />
                            <img src="images/restuarant.png" style={{ width: "290px", padding: "20px", borderRadius: "10px", transform: "translate(-70px,-10px)" }} alt="" />
                            <img src="images/hygeia.png" style={{ width: "230px", height: "150px", borderRadius: "10px", transform: "translateX(-70px)" }} alt="" />

                        </div>

                    </div>


                </div>

                <div>
                    <div>
                        <h1>Create seamless payment <br /> experience for your customers</h1>
                    </div>

                    <div>
                        <div>
                            <img src="images/pospayment.jpg" style={{ width: "100px" }} alt="love" />
                        </div>

                        <div>
                            <div>
                                <h1>Accept payments <br /> anywhere</h1>
                                <p>One platform that lets you sell whereever your customers are - online,in-person, anywhere in the world,and everywhere in-between </p>
                            </div>

                            <div>
                                <div>
                                    <h4>Online(Website and Mobile)</h4>
                                    <p>Sell online with an ecommerce website,Mobile App and More.</p>
                                </div>

                                <div>
                                    <h4>POS(Point Of Sale)</h4>
                                    <p>Sell in-person at your store locations,pop-ups,concerts.</p>
                                </div>
                            </div>

                            <div>
                                <h4>Reach more people with more payment methods</h4>
                                <p>With little to no effort, remove the boundaries to scaling your
                                    business and reach one customer with just one platform</p>
                            </div>

                            <div>
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

            </div>


        </>
    )
};

export default NextHome;