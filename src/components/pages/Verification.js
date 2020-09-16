import React, { Component } from 'react'
import Main from '../Main'
import { toast } from 'react-toastify';
import Axios from 'axios';
import ApiProvider from '../common/ApiProvider';
import { TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

export default class Verification extends Component {
    constructor(props) {
        super(props)

        this.state = {
            verifyForm: '',
            emailForm: 'none',
            code: '',
            email: '',
            verificationToken:this.props.token,
            token: localStorage.getItem('access_token'),
            redirect:false,
            path: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title = 'Label Service Provider | Verify Profile';
        if (!this.state.token) {
            if (this.state.verificationToken === undefined) {
                this.setState({
                    redirect:true,
                    path:'/register'
                })
                toast.error("Please login or register.");
            }
        }
        else {
            this.setState({
                redirect:true,
                path:'/user-dashboard'
            })
            // this.props.history.push("/user-dashboard");
        }

    }

    handleChange(changeObject) {
        this.setState(changeObject)
    }

    handleSubmit = e => {
        e.preventDefault();
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const postData = {
            // email: this.state.email,
            code: this.state.code,
            token: this.state.verificationToken
        };
        Axios.post(ApiProvider.endpoint + `/verification`, postData, {
            headers: headers
        })
            .then(res => {
                localStorage.setItem('access_token', res.data.accessToken)
                this.setState({
                    redirect:true,
                    path:'/user-dashboard'
                })
                // this.props.history.push('/user-dashboard');
                toast.success(res.data.message);
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })
    }

    sendVerificationCode = e => {
        e.preventDefault();
        var otp = Math.floor(1000 + Math.random() * 9999);
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const verifyData = {
            token: this.state.verificationToken,
            code: otp,
        };
        // console.log(verifyData)
        Axios.post(ApiProvider.endpoint + `/resend-otp`, verifyData, {
            headers: headers
        })
            .then(result => {
                // localStorage.setItem('access_token', res.data.accessToken)
                // this.props.history.push('/user-dashboard');
                toast.success(result.data.message);
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })
    }

    openVerifyForm = () => {
        this.setState({
            verifyForm: "block",
            emailForm: "none"
        })
    }
    openResendForm = () => {
        this.setState({
            verifyForm: "none",
            emailForm: "block"
        });
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.path} />
        }
        return (
            <div>
                <Main>
                    <section className="text-center py-5 grey lighten-4 verify-section">
                        <div className="container verify-container" style={{ display: this.state.verifyForm }}>
                            <div className="wow fadeIn">
                                <h2 className="h1 pt-5 pb-3">OTP Verification</h2>
                                <p />
                            </div>
                            <div className="row center-form">
                                <div className="col-md-6">
                                    <div className="card" style={{ width: '100%' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Verify</h5>
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="row center-form">
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="OTP Code"
                                                            variant="outlined"
                                                            type="number"
                                                            onChange={(e) => this.handleChange({ code: e.target.value })}
                                                            required
                                                        />
                                                        {/* <div className="form-group">
                                                            <label htmlFor="code">Enter the four digit code sent on your email!</label>
                                                            <input type="number" maxLength="4" pattern="[0-9]*" name="code" className="form-control verify-code" placeholder="****" required onChange={(e) => this.handleChange({ code: e.target.value })}  autoComplete="off"/>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>
                                            <p>Didn't receive the code?</p>
                                            <a href="javascript:void(0)" className="resend-link" onClick={this.sendVerificationCode}>Send code again</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Register */}
                            </div>
                        </div>
                    </section >
                </Main>
            </div>
        )
    }
}
