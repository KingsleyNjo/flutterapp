import React from "react";
import Footer from "./individualfooter";

function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link>
                            <img src="images/flutterwave.svg" alt="logo" style={{ width: '150px' }} />
                        </Footer.Link>
                    </Footer.Column>
                    <br/>
                    <Footer.Column>
                        <Footer.Title><b>OUR SOLUTIONS</b></Footer.Title>
                        <Footer.Link>Checkout</Footer.Link>
                        <Footer.Link>Card Issuing</Footer.Link>
                        <Footer.Link>Store</Footer.Link>
                        <Footer.Link>Invoice</Footer.Link>
                        <Footer.Link>Payment Links</Footer.Link>
                        <Footer.Link>Consumers</Footer.Link>
                    </Footer.Column>
                    <br/>
                    <Footer.Column>
                        <Footer.Title><b>COMPANY</b></Footer.Title>
                        <Footer.Link>About Us</Footer.Link>
                        <Footer.Link>Careers</Footer.Link>
                        <Footer.Link>Press & Media</Footer.Link>
                        <Footer.Link>Consumers</Footer.Link>
                        <Footer.Link>Wave Podcast</Footer.Link>
                    </Footer.Column>
                    <br/>
                    <Footer.Column>
                        <Footer.Title><b>LEGAL</b></Footer.Title>
                        <Footer.Link>Terms & Conditions</Footer.Link>
                        <Footer.Link>Privacy Policy</Footer.Link>
                        <Footer.Link>Cookies Policy</Footer.Link>
                        <Footer.Link>Merchant Service Aggrement</Footer.Link>
                        <Footer.Link>Payment Protection Promise</Footer.Link>

                        <Footer.Title><b>CONTACT US</b></Footer.Title>
                        <Footer.Link href="#" style= {{color:'blue'}}>hi@flutterwavego.com</Footer.Link>
                    </Footer.Column>
                     <br/>
                    <Footer.Column>
                        <Footer.Title><b>LAGOS</b></Footer.Title>
                        <Footer.Link>8,Providence street, <br/> 
                            Lekki Phase One,<br/> 
                            Lagos,Nigeria
                        </Footer.Link>
                    </Footer.Column>

                    <br/>
                    <Footer.Column>
                        <Footer.Title><b>DEVELOPERS</b></Footer.Title>
                        <Footer.Link>Documentation</Footer.Link>
                        <Footer.Link>Status</Footer.Link>
                        <Footer.Link>Integration Specialist</Footer.Link>
                    </Footer.Column>

                    <br/>
                    <Footer.Column>
                        <Footer.Title><b>LEARN</b></Footer.Title>
                        <Footer.Link>Integrations</Footer.Link>
                        <Footer.Link>Blog</Footer.Link>
                        <Footer.Link>Pricing</Footer.Link>
                        <Footer.Link>Sitemap</Footer.Link>
                    </Footer.Column>

                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )

}

export default FooterContainer;