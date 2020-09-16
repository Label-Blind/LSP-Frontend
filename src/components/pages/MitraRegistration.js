import React, { Component } from 'react'
import Main from '../Main'
import Axios from 'axios'
import ApiProvider from '../common/ApiProvider';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import { Link, Redirect } from 'react-router-dom';
import { TextField } from '@material-ui/core';


export default class MitraRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            mitra_name: '',
            fsm_registration_no: '',
            mitra_type: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: '',
            otp: '',
            isChecked: false,
            redirect: false,
            login_email: '',
            pass: '',

            token: localStorage.getItem('access_token'),
            verificationToken: '',
            title: '',
            mitraOperator: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);

    }

    componentDidMount() {
        document.title = 'Label Service Provider | User Registration and Login';
        var currentLocation = window.location.href;
        var path = currentLocation.split("/");
        if ((path[5] === "registration" || path[5] === "login") && this.state.token !== null) {
            this.props.history.replace('/user-dashboard');
        }
    }
    // validateEmail(email) {
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     return re.test(email)
    // }

    handleChange(changeObject) {
        this.setState(changeObject)
    }

    handleSubmit = e => {
        e.preventDefault();
        var otp = Math.floor(1000 + Math.random() * 9000);
        let fsm = this.state.fsm_registration_no;
        let fiveDigit = fsm.substring(0, 5)
        let firstthreeDigit = fsm.substring(0, 3)
        var letters = /^[A-Za-z]+$/;
        if(!letters.test(fiveDigit))
        {
            toast.error("Registration Number Invalid.");
        }
        else if(firstthreeDigit !== "FSM"){
            toast.error("Registration Number Invalid.");
        }
        else if (this.state.isChecked === false) {
            toast.error("Please accept terms and conditions.");
        }
        else {
            if (this.state.password === this.state.confirm_password) {
                const headers = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                };
                const postData = {
                    mitra_name: this.state.mitra_name,
                    fsm_registration_no: this.state.fsm_registration_no,
                    mitra_type: this.state.mitra_type,
                    email: this.state.email,
                    phone: this.state.phone,
                    password: this.state.password,
                    otp: otp,
                    verified: false,
                    operator: "mitra"
                };
                Axios.post(ApiProvider.endpoint + `/mitra-register`, postData, {
                    headers: headers
                })
                    .then(res => {
                        console.log(res)
                        this.setState({
                            verificationToken: res.data.token
                        })
                        toast.success(res.data.message);
                    })
                    .catch(error => {
                        toast.error(error.response.data.message);
                    })
            }
            else {
                toast.error("Password and Confirm password is not matching!");
            }
        }

    };

    login = e => {
        e.preventDefault();
        var otp = Math.floor(1000 + Math.random() * 9000);
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const loginData = {
            email: this.state.login_email,
            password: this.state.pass,
            otp: otp,
            operator: "mitra",
        };
        Axios.post(ApiProvider.endpoint + `/mitra-login`, loginData, {
            headers: headers
        })
            .then(result => {
                this.setState({
                    verificationToken: result.data.token
                })
                // this.props.history.push({
                //     pathname: '/verification',
                //     search: '',
                //     state: { email: this.state.email }
                // })
                // this.props.history.push({pathname:'/verification', state : { email: this.state.email }});
                toast.success(result.data.message);
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })
    };

    toggleMitraType = () => {
        this.setState({
            mitra_type: 'digital_mitra',
            activeMitraType: true,
            activeMitraType1: false,
            activeMitraType2: false,
        })
    }

    toggleMitraType1 = () => {
        this.setState({
            mitra_type: 'trainer_mitra',
            activeMitraType: false,
            activeMitraType1: true,
            activeMitraType2: false,
        })
    }

    toggleMitraType2 = () => {
        this.setState({
            mitra_type: 'hygiene_mitra',
            activeMitraType: false,
            activeMitraType1: false,
            activeMitraType2: true,
        })
    }

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }

    render() {
        if (this.state.verificationToken) {
            return <Redirect to={'/'+this.state.verificationToken + "/verification"} />
        }
        return (
            <div>
                <Main>
                    <section className="text-center mb-4 login-section" id="about">
                        <div className="container ">
                            <div className="wow fadeIn">
                                <h2 className="h1 pt-5 pb-3">Food Safety Mitra Registration / Login </h2>
                                <p />
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{ width: '100%' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">SIGN IN</h5>
                                            <form onSubmit={this.login} method="post" id="login-form">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="Email Id"
                                                            helperText=""
                                                            variant="outlined"
                                                            placeholder=""
                                                            onChange={(e) => this.handleChange({ login_email: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <TextField
                                                            style={{ width: '100%' }}
                                                            id="outlined-read-helper-text"
                                                            label="Password"
                                                            helperText=""
                                                            variant="outlined"
                                                            placeholder=""
                                                            type="password"
                                                            onChange={(e) => this.handleChange({ pass: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Sign In</button>
                                            </form>
                                            <div className="checkbox">
                                                <p>Having Trouble in log in?</p>
                                                <Link to={`/forgot-password`}> Forgot Password</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* Register */}
                                <div className="col-md-8">
                                    <div className="card" style={{ width: '100%' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">REGISTER /SIGN UP</h5>
                                            <form onSubmit={this.handleSubmit} method="post" id="signup-form">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="Name"
                                                            helperText=""
                                                            variant="outlined"
                                                            placeholder=""
                                                            type="text"
                                                            onChange={(e) => this.handleChange({ mitra_name: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                    {/*  col-md-6   */}
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="FSM Registration No"
                                                            helperText=""
                                                            variant="outlined"
                                                            placeholder=""
                                                            type="text"
                                                            onChange={(e) => this.handleChange({ fsm_registration_no: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                    {/*  col-md-6   */}
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div id="registration-wrapper">
                                                            <div className="radio-wrapper" style={{paddingBottom:"10px"}}>
                                                                <div className="form-grp-title">
                                                                    I am a... :
                                                                </div>
                                                                <div className={this.state.activeMitraType ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleMitraType}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.mitra_type === 'digital_mitra'}
                                                                        onChange={(e) => this.handleChange({ mitra_type: e.target.value })}
                                                                        value="digital_mitra"
                                                                        required
                                                                    />
                                                                    <label htmlFor="square">Digital Mitra</label>
                                                                </div>
                                                                <div className={this.state.activeMitraType1 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleMitraType1}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.mitra_type === 'trainer_mitra'}
                                                                        onChange={(e) => this.handleChange({ mitra_type: e.target.value })}
                                                                        value="trainer_mitra"
                                                                        required
                                                                    />
                                                                    <label htmlFor="rectangle">Trainer Mitra</label>
                                                                </div>
                                                                <div className={this.state.activeMitraType2 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleMitraType2}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.mitra_type === 'hygiene_mitra'}
                                                                        onChange={(e) => this.handleChange({ mitra_type: e.target.value })}
                                                                        value="hygiene_mitra"
                                                                        required
                                                                    />
                                                                    <label htmlFor="rectangle">Hygiene Mitra</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="Email"
                                                            helperText=""
                                                            variant="outlined"
                                                            placeholder=""
                                                            type="email"
                                                            onChange={(e) => this.handleChange({ email: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                    {/*  col-md-6   */}
                                                    <div className="col-md-6">
                                                        <div className="form-group profile-form">
                                                            {/* <label htmlFor="phone">Phone Number</label> */}
                                                            <PhoneInput
                                                                placeholder="Enter phone number"
                                                                onChange={phone => this.setState({ phone })} />
                                                            {/* <input type="tel" name="phone" className="form-control" id="phone" placeholder="phone" onChange={(e) => this.handleChange({ phone: e.target.value })} required /> */}
                                                        </div>
                                                    </div>
                                                    {/*  col-md-6   */}
                                                </div>
                                                {/*  row   */}
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="Password"
                                                            helperText=""
                                                            variant="outlined"
                                                            placeholder=""
                                                            type="password"
                                                            onChange={(e) => this.handleChange({ password: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                    {/*  col-md-6   */}
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="Confirm Password"
                                                            helperText=""
                                                            variant="outlined"
                                                            placeholder=""
                                                            type="password"
                                                            onChange={(e) => this.handleChange({ confirm_password: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="declare" value="1" id="newsletter" checked={this.state.isChecked} onChange={this.toggleChange} /> I/We hereby declare that I/we will be responsible for the authenticity of the information provided in this application and are completely accountable for the liability thereof.   </label>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Register</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section >
                </Main >
            </div >
        )
    }
}