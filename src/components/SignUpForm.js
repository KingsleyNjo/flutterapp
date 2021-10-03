import React, {Component} from "react";
import axios from 'axios';
import "./SignUpForm.css";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
    constructor(){
        super()
        this.state={
            fullName:"",
            tradingname:"",
            email:"",
            country:"",
            words:"",
            password:"",

        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeTradingName = this.changeTradingName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeCountry = this.changeCountry.bind(this)
        this.changeWord = this.changeWord.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit= this.onSubmit.bind(this)

        
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeTradingName(event){
        this.setState({
            tradingname:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changeCountry(event){
        this.setState({
            country:event.target.value
        })
    }

    changeWord(event){
        this.setState({
            words:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName:this.state.fullName,
            tradingname:this.state.tradingname,
            email:this.state.email,
            country:this.state.country,
            words:this.state.words,
            password:this.state.password,
        }
        axios.post('https://waveclone.herokuapp.com/app/signup', registered)
         .then(response => console.log(response.data))
         .catch(error => console.log(error))
        window.location='/login'

    }


    render() {
        return (
            <>
                <div class="signupcontain">
                    <img src="images/flutterwave.svg" style={{ width: '150px', margin: "50px auto", display: "flex", justifyContent: "center", alignItems: "center" }} />

                    <div className="signupwrapper">
                        <h3>Lets get you started with your flutterwave account</h3>

                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label className="label">Full name</label><br />
                                <input className="input" type="text"  value={this.state.fullName} onChange={this.changeFullName} placeholder="Firstname Lastname" />
                            </div>

                            <br />

                            <div>
                                <label className="label">Trading name</label><br />
                                <input className="input" type="text" value={this.state.tradingname} onChange={this.changeTradingName} />
                            </div>

                            <br />

                            <div>

                                <label className="label">Email address</label><br />
                                <input className="input" type="text" value={this.state.email} onChange={this.changeEmail} placeholder="aasir_makena@flutterwave.com" />
                            </div>

                            <br />

                            <div>
                                <label className="label">What country is your business based?</label><br />
                                <input className="input" type="text" value={this.state.country} onChange={this.changeCountry} placeholder="Nigeria" />
                            </div>

                            <br />

                            <div>
                                <label className="label">How did you hear about Flutterwave?</label><br />
                                <input className="input" type="text" value={this.state.words} onChange={this.changeWord} />
                            </div>

                            <br />

                            <div>
                                <label className="label">Get a referral code?(optional)</label><br />
                                <input className="input" type="text" placeholder="Enter referral code" />
                            </div>

                            <br />

                            <div>
                                <label className="label">Choose a Password</label><br />
                                <input className="input" type="password" value={this.state.password} onChange={this.changePassword} placeholder="Please enter your password" />
                            </div>

                            <br />

                            <div>
                                <button className="submit">Get started</button>
                            </div>

                            <br />
                            <div className="small">
                                <input type="checkbox" className="checkpos"/>
                                <label>send me marketting and promotional emails</label>
                                <br/>
                                <input type="checkbox" className="checkpos"/> 
                                <label id="sapa">I acknowledge that i have read and do hereby accept the terms and 
                                    conditions in the Flutterwave's Terms of usage</label>
                                <p>Already have an account? <Link to="/login" className="loginlink"><b>Login</b></Link></p>
                            </div>
                        </form>

                    </div>

                </div>


            </>
        )

    }


}

export default SignUpForm;