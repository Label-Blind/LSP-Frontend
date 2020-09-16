import React, { Component } from 'react'
import Main from '../Main'
import Axios from 'axios'
import ApiProvider from '../common/ApiProvider';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import { Link, Redirect } from 'react-router-dom';
import { TextField } from '@material-ui/core';

// const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
// const location = useHistory();

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            company_name: '',
            fssai_licence_no: '',
            licence_type: '',
            profile: '',
            employee_size: '',
            revenue: '',
            retail_structure: '',
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
            activeLicenceType: false,
            activeLicenceType1: false,
            activeprofileType: false,
            activeprofileType1: false,
            activeprofileType2: false,
            activeEmployeesize: false,
            activeEmployeesize1: false,
            activeEmployeesize2: false,
            activeEmployeesize3: false,
            activeRevenue: false,
            activeRevenue1: false,
            activeRevenue2: false,
            activeRetailStructure: false,
            activeRetailStructure1: false,
            verificationToken: ''
        }
        this.onLicenceChange = this.onLicenceChange.bind(this);
        this.onProfileChange = this.onProfileChange.bind(this);
        this.onEmployeeChange = this.onEmployeeChange.bind(this);
        this.onRevenueChange = this.onRevenueChange.bind(this);
        this.onRetailChange = this.onRetailChange.bind(this);
        this.onRetailChange = this.onRetailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleChange = this.toggleChange.bind(this);
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
        let licence = this.state.fssai_licence_no;
        let firstDigit = licence.substring(0, 1)
        let secondTwo = licence.substring(1, 3)
        let year = licence.substring(3, 5)
        let registration = licence.substring(5, 8)
        if (licence.length < 14) {
            toast.error("Registration Number Invalid.");
        }
        else if (firstDigit > 2) {
            toast.error("Registration Number Invalid.");
        }
        else if (secondTwo < 0 || secondTwo > 35) {
            toast.error("Registration Number Invalid.");
        }
        else if (year < 1 || secondTwo > 99) {
            toast.error("Registration Number Invalid.");
        }
        else if (registration < 1 || registration > 999) {
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
                    company_name: this.state.company_name,
                    fssai_licence_no: this.state.fssai_licence_no,
                    licence_type: this.state.licence_type,
                    profile: this.state.profile,
                    employee_size: this.state.employee_size,
                    revenue: this.state.revenue,
                    retail_structure: this.state.retail_structure,
                    email: this.state.email,
                    phone: this.state.phone,
                    password: this.state.password,
                    otp: otp,
                    verified: false,
                    operator: "business",
                };
                Axios.post(ApiProvider.endpoint + `/register`, postData, {
                    headers: headers
                })
                    .then(res => {
                        console.log(res)
                        this.setState({
                            verificationToken: res.data.token
                        })
                        // localStorage.setItem('access_token', res.data.accessToken)
                        // this.props.history.push('/verification', { email: this.state.email });
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
            operator: "business",
        };
        Axios.post(ApiProvider.endpoint + `/login`, loginData, {
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

    onLicenceChange(event) {
        this.setState({
            licence_type: event.target.value
        });
    }

    onProfileChange(event) {
        this.setState({
            profile: event.target.value
        });
    }

    onEmployeeChange(event) {
        this.setState({
            employee_size: event.target.value
        });
    }

    onRevenueChange(event) {
        this.setState({
            revenue: event.target.value
        });
    }

    onRetailChange(event) {
        this.setState({
            retail_structure: event.target.value
        });
    }

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }

    // Radio Button On Off 
    toggleLicenceType = () => {
        this.setState({
            licence_type: 'state',
            activeLicenceType: true,
            activeLicenceType1: false,
        })
    }

    toggleLicenceDisable = () => {
        this.setState({
            licence_type: 'central',
            activeLicenceType: false,
            activeLicenceType1: true,
        })
    }

    toggleProfile = () => {
        this.setState({
            profile: 'startup',
            activeprofileType: true,
            activeprofileType1: false,
            activeprofileType2: false,
        })
    }

    toggleProfileDisable = () => {
        this.setState({
            profile: 'sme',
            activeprofileType: false,
            activeprofileType1: true,
            activeprofileType2: false,
        })
    }

    toggleProfileEnable = () => {
        this.setState({
            profile: 'mnc',
            activeprofileType: false,
            activeprofileType1: false,
            activeprofileType2: true,
        })
    }

    toggleEmployeeSize = () => {
        this.setState({
            employee_size: '0-10',
            activeEmployeesize: true,
            activeEmployeesize1: false,
            activeEmployeesize2: false,
            activeEmployeesize3: false,
        })
    }

    toggleEmployeeSize1 = () => {
        this.setState({
            employee_size: '10-100',
            activeEmployeesize: false,
            activeEmployeesize1: true,
            activeEmployeesize2: false,
            activeEmployeesize3: false,
        })
    }

    toggleEmployeeSize2 = () => {
        this.setState({
            employee_size: '100-1000',
            activeEmployeesize: false,
            activeEmployeesize1: false,
            activeEmployeesize2: true,
            activeEmployeesize3: false,
        })
    }

    toggleEmployeeSize3 = () => {
        this.setState({
            employee_size: '1000 or more',
            activeEmployeesize: false,
            activeEmployeesize1: false,
            activeEmployeesize2: false,
            activeEmployeesize3: true,
        })
    }

    toggleRevenue = () => {
        this.setState({
            revenue: '12 lac p.a or more',
            activeRevenue: true,
            activeRevenue1: false,
            activeRevenue2: false,
        })
    }

    toggleRevenue1 = () => {
        this.setState({
            revenue: '12 lac - 2.0 cr p.a',
            activeRevenue: false,
            activeRevenue1: true,
            activeRevenue2: false,
        })
    }

    toggleRevenue2 = () => {
        this.setState({
            revenue: '2.0 cr p.a or more',
            activeRevenue: false,
            activeRevenue1: false,
            activeRevenue2: true,
        })
    }

    toggleRetailStructure = () => {
        this.setState({
            retail_structure: 'single_brand',
            activeRetailStructure: true,
            activeRetailStructure1: false,
        })
    }

    toggleRetailStructure1 = () => {
        this.setState({
            retail_structure: 'multi_brand',
            activeRetailStructure: false,
            activeRetailStructure1: true,
        })
    }

    render() {
        if (this.state.verificationToken) {
            return <Redirect to={'/' + this.state.verificationToken + "/verification"} />
        }
        return (
            <div>
                <Main>
                    <section className="text-center mb-4 login-section" id="about">
                        <div className="container ">
                            <div className="wow fadeIn">
                                <h2 className="h1 pt-5 pb-3">Food Business Operator Registration / Login </h2>
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
                                                            label="Company Name"
                                                            helperText=""
                                                            variant="outlined"
                                                            placeholder=""
                                                            onChange={(e) => this.handleChange({ company_name: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                    {/*  col-md-6   */}
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="FSSAI Licence No"
                                                            helperText=""
                                                            variant="outlined"
                                                            placeholder=""
                                                            type="number"
                                                            onChange={(e) => this.handleChange({ fssai_licence_no: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                    {/*  col-md-6   */}
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div id="registration-wrapper">
                                                            <div className="radio-wrapper">
                                                                <div className="form-grp-title">
                                                                    Licence Type :
                                                                </div>
                                                                <div className={this.state.activeLicenceType ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleLicenceType}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.licence_type === 'state'}
                                                                        onChange={(e) => this.handleChange({ licence_type: e.target.value })}
                                                                        value="state"
                                                                        required
                                                                    />
                                                                    <label htmlFor="square">State</label>
                                                                </div>
                                                                <div className={this.state.activeLicenceType1 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleLicenceDisable}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.licence_type === 'central'}
                                                                        onChange={(e) => this.handleChange({ licence_type: e.target.value })}
                                                                        value="central"
                                                                        required
                                                                    />
                                                                    <label htmlFor="rectangle">Central</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div id="registration-wrapper">
                                                            <div className="radio-wrapper">
                                                                <div className="form-grp-title">
                                                                    Are you a... :
                                                                </div>
                                                                <div className={this.state.activeprofileType ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleProfile}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.profile === "startup"}
                                                                        onChange={this.onProfileChange}
                                                                        value="startup"
                                                                        required
                                                                    />
                                                                    <label htmlFor="square">Startup</label>
                                                                </div>
                                                                <div className={this.state.activeprofileType1 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleProfileDisable}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.profile === "sme"}
                                                                        onChange={this.onProfileChange}
                                                                        value="sme"
                                                                        required
                                                                    />
                                                                    <label htmlFor="rectangle">SME</label>
                                                                </div>
                                                                <div className={this.state.activeprofileType2 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleProfileEnable}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.profile === "mnc"}
                                                                        onChange={this.onProfileChange}
                                                                        value="mnc"
                                                                        required
                                                                    />
                                                                    <label htmlFor="rectangle">MNC</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div id="registration-wrapper">
                                                            <div className="radio-wrapper">
                                                                <div className="form-grp-title">
                                                                    Employee Size :
                                                                </div>
                                                                <div className={this.state.activeEmployeesize ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleEmployeeSize}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.employee_size === "0-10"}
                                                                        onChange={this.onEmployeeChange}
                                                                        value="0-10"
                                                                        required
                                                                    />
                                                                    <label htmlFor="square">0-10</label>
                                                                </div>
                                                                <div className={this.state.activeEmployeesize1 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleEmployeeSize1}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.employee_size === "10-100"}
                                                                        onChange={this.onEmployeeChange}
                                                                        value="10-100"
                                                                        required
                                                                    />
                                                                    <label htmlFor="square">10-100</label>
                                                                </div>
                                                                <div className={this.state.activeEmployeesize2 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleEmployeeSize2}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.employee_size === "100-1000"}
                                                                        onChange={this.onEmployeeChange}
                                                                        value="100-1000"
                                                                        required
                                                                    />
                                                                    <label htmlFor="square">100-1000</label>
                                                                </div>
                                                                <div className={this.state.activeEmployeesize3 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleEmployeeSize3}>
                                                                    <input
                                                                        type="radio"
                                                                        checked={this.state.employee_size === "1000 or more"}
                                                                        onChange={this.onEmployeeChange}
                                                                        value="1000 or more"
                                                                        required
                                                                    />
                                                                    <label htmlFor="square">1000 or more</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div id="registration-wrapper">
                                                            <div className="radio-wrapper">
                                                                <div className="form-grp-title">
                                                                    Revenue :
                                                                </div>
                                                                <div className={this.state.activeRevenue ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleRevenue}>
                                                                    <input
                                                                        type="radio"
                                                                        value="12 lac p.a or more"
                                                                        checked={this.state.revenue === "12 lac p.a or more"}
                                                                        onChange={this.onRevenueChange}
                                                                        required
                                                                    />
                                                                    <label htmlFor="square">12 lac p.a or more</label>
                                                                </div>
                                                                <div className={this.state.activeRevenue1 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleRevenue1}>
                                                                    <input
                                                                        type="radio"
                                                                        value="12 lac - 2.0 Cr p.a"
                                                                        checked={this.state.revenue === "12 lac - 2.0 Cr p.a"}
                                                                        onChange={this.onRevenueChange}
                                                                        required
                                                                    />
                                                                    <label htmlFor="rectangle">12 lac - 2.0 Cr p.a</label>
                                                                </div>
                                                                <div className={this.state.activeRevenue2 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleRevenue2}>
                                                                    <input
                                                                        type="radio"
                                                                        value="2.0 Cr p.a or more"
                                                                        checked={this.state.revenue === "2.0 Cr p.a or more"}
                                                                        onChange={this.onRevenueChange}
                                                                        required
                                                                    />
                                                                    <label htmlFor="rectangle">2.0 Cr p.a or more</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div id="registration-wrapper">
                                                            <div className="radio-wrapper">
                                                                <div className="form-grp-title">
                                                                    Retail Structure :
                                                                </div>
                                                                <div className={this.state.activeRetailStructure ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleRetailStructure}>
                                                                    <input
                                                                        type="radio"
                                                                        value="Single Brand"
                                                                        checked={this.state.retail_structure === "Single Brand"}
                                                                        onChange={this.onRetailChange}
                                                                        required
                                                                    />
                                                                    <label htmlFor="square">Single Brand</label>
                                                                </div>
                                                                <div className={this.state.activeRetailStructure1 ? 'form-grp active-radio' : 'form-grp'} onClick={this.toggleRetailStructure1}>
                                                                    <input
                                                                        type="radio"
                                                                        value="Single Brand"
                                                                        checked={this.state.retail_structure === "Multi Brand"}
                                                                        onChange={this.onRetailChange}
                                                                        required
                                                                    />
                                                                    <label htmlFor="rectangle">Multi Brand</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-12">
                                                        <label htmlFor="contact-preference" className="profile-checkbox">Retail Structure :</label>
                                                        <div className="radio">
                                                            <label>
                                                                <input type="radio" name="retail_structure" value="Single Brand" checked={this.state.retail_structure === "Single Brand"} onChange={this.onRetailChange} required /> Single Brand </label>
                                                        </div>
                                                        <div className="radio">
                                                            <label>
                                                                <input type="radio" name="retail_structure" value="Multi Brand" checked={this.state.retail_structure === "Multi Brand"} onChange={this.onRevenueChange} required /> Multi Brand </label>
                                                        </div>
                                                    </div> */}
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
                                                        {/* <div className="form-group profile-form">
                                                            <label htmlFor="company">Email</label>
                                                            <input type="email" name="email" className="form-control" id="email" placeholder="email" onChange={(e) => this.handleChange({ email: e.target.value })} required />
                                                        </div> */}
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
                                                        {/* <div className="form-group profile-form">
                                                            <label htmlFor="password">Password</label>
                                                            <input type="password" name="password" className="form-control" placeholder="*****" onChange={(e) => this.handleChange({ password: e.target.value })} required />
                                                        </div> */}
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
                                                        {/* <div className="form-group profile-form">
                                                            <label htmlFor="url">Confirm Password</label>
                                                            <input type="password" name="confirm_password" className="form-control" placeholder="*****" onChange={(e) => this.handleChange({ confirm_password: e.target.value })} required />
                                                        </div> */}
                                                    </div>
                                                    {/*  col-md-6   */}
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
