import React from "react";
import axios from 'axios';
import "./Login.css";
import {Link} from "react-router-dom";


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (e) => {
        e.preventDefault();

        let request = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        axios.post('https://waveclone.herokuapp.com/app/login', request)
            .then(response => {
                alert(response.data.message)
                if(response.data.message==="Password incorrect!" || response.data.message==="User not found!"){
                    window.location="/404";
                }
                else{
                    window.location="/nexthome"
                }
            })
            .catch(err => console.log(err));

    }
    render() {
        return (
            <div>
                <img src="images/flutterwave.svg" style={{ width: '150px', margin: "50px auto", display: "flex", justifyContent: "center", alignItems: "center" }} />
                <div className="alignform">
                    <h4>Login to your dashboard</h4>

                    <form onSubmit={this.handleSubmit}>
                        <div className="sweat">
                            <label className="label">Email address</label><br />
                            <input className="input" type="text" id="email" placeholder="Email Address"/>

                        </div>

                        <div className="sweet">
                            <label className="label">Password</label><br />
                            <input className="input" type="password" id="password" placeholder="Password"/>
                        </div>

                        <Link to="">
                            <small className="extra">Forgot your password?</small>
                        </Link>

                        <div>
                            <button className="submit">Login to your dashboard</button>
                        </div>
                        <br/>
                        <p className="ash">Dont have a Flutterave account? <Link to="/signup" className="david">Sign up</Link></p>

                    </form>

                </div>


            </div>

        

        )
    }
}

export default Login;