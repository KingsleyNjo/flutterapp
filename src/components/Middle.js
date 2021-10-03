import React from "react";
import { Link } from "react-router-dom";
import './Middle.css';

const Middlevideo = () => {
    return (
        <>
            <div className="overallbody">
                <div className="middlebody">

                    <div className="image-arrange">
                        <img src="images/samke-mhlongo.png" style={{ width: '450px' }} alt="" />
                    </div>

                    <div className="word-arrange">
                        <h1>So easy and seemless,you'll be up and running in minutes</h1>
                        <p>In minutes, you can set up an online store straight from your flutterwave dashboard. Here's how:</p>

                        <div>
                            <Link to="/" className="middle-links">1. Create or Login to your Flutterwave account</Link>
                            <p className="sameword">To get your online store up and running, you need to be logged in your flutterwave account.
                                Dont have one? You can create an individual or business account here for free
                            </p>

                            <br />

                            <Link to="/" className="middle-links case">2. Go to (Store) on your dashboard and create a store</Link>
                            <p className="sameword">
                                Create your store, add products, and specifications, including images and take your store online
                            </p>

                            <br />
                            <Link to="/" className="middle-links">3. You're all set up!</Link>
                            <p className="sameword">
                                Now that your store is up and running, share the news with everyone. Send to customers,
                                add it to your social media channels and start selling immediately

                            </p>

                            <br />

                            <Link to="/signup" className="middle-btn">CREATE A FLUTTERWAVE ACCOUNT</Link>
                        </div>


                    </div>

                </div>

                <br />

                <div className="missi">
                    <div className="middletwo">
                        <p> <b className="bold">Everything</b> you need to provide the best shopping experience for your customer.</p>
                    </div>
                    <div>
                        <img src="images/file.png"/>
                    </div>

                </div>

                <br />

                <div className="secondmiddlebody">
                    <div>
                        <img src="images/person.png" style={{ width: '300px', marginTop: "120px", marginLeft: "180px" }} alt="" />

                    </div>

                    <div className="wordpart">
                        <h1>Fast and easy delivery with our partners.</h1>
                        <p>You no longer have to worry about cumbersome delivery set up, or payments with
                            Flutterwave Store, we have sorted it for you.</p>

                        <div className="separatediv">
                            <div>
                                <Link to="/" className="separatedlinks">Skip the setup</Link>
                                <p>Start shipping as soon as you get your first order.</p>
                            </div>

                            <div>
                                <Link to="/" className="separatedlinks">Use default rates at checkout</Link>
                                <p>Feel confident about what you charge customers.</p>
                            </div>

                        </div>

                        <div className="checkone">
                            <Link to="/" className="separatedlinks">Reach more people with more payment methods</Link>
                            <p>With little to no effort, remove the boundaries to scale your business and reach
                                more customers with just one platform</p>

                            <div className="separateanchor">
                                <div>
                                    <ul>
                                        <li>Debit and credit cards</li>
                                        <li>Mobile Money</li>
                                        <li>M-Pesa</li>
                                        <li>Bank Transfer</li>
                                    </ul>

                                </div>

                                <div className="secondanchor">
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

                <div className="anotherseparate">
                    <div>
                        <img src="images/phone.png"/>
                    </div>

                    <div className="arrangenow">
                        <h1>Beautiful, smart and secure checkout.</h1>
                        <p>Provides your users with the most seamless and delightful payment experience online.
                            With various payment methods enabled on Flutterwave, your business can cater to all your customer needs.
                        </p>

                        <ul>
                            <li>Fast, secure and seamless checkout experience</li>
                            <li>Supports <b>Andriod, ios</b> and <b>desktop</b></li>
                            <li className="ul">Allows various payment methods, including Bank Transfers</li>
                            <li>Compatible with eCommerce stores like <b>WooCommerce</b>,<b>Shopify</b></li>
                        </ul>

                        <Link to="/" className="middle-link">SEE THE FLUTTERWAVE CHECKOUT IN ACTION</Link>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Middlevideo;
