
import React, { Component } from 'react';
import './login.css';
import LeftImage from './login1.jpg';
import Logo from './logo.png';
class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="row">
                    <div className="left-panel col-sm-9 col-md-9 col-lg-9">
                        <img className="imgLeft img-fluid" alt="Responsive image" src={LeftImage}/>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div className="row right-panel justify-content-center">

                            <img className="logo img-fluid" alt="Responsive image" src={Logo}/>
                            <div className="text"><h4>Sri Lanka Institute of Information Technology</h4></div><br/>
                            <div class="card col-md-10 col-sm-10 col-lg-10">
                                <div class="card-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Username</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                        </div>
                                        <button type="submit" class="btn btn-primary col-md-12 col-sm-12 col-lg-12">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;

