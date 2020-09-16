import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import ApiProvider from './ApiProvider';
import { toast } from 'react-toastify';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavClass: '',
            homeMenu: '',
            DashMenu: '',
            token: localStorage.getItem('access_token'),
            count: 0,
            redirect:false,
            home:false,
            about:false,
            pricing:false,
            howitwork:false,
            fssai:false,
            help:false,
            contact:false,
            termsnCond:false,
            sidebarToggle:false,
        }
    }

    componentDidMount() {
        var currentLocation = window.location.href;
        var path = currentLocation.split("/");
        if (path[4] !== "") {
            this.setState({ NavClass: "navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light site-navbar-target scrolled awake fixed-menu" })
        }
        else {
            this.setState({
                home:true
            })
            this.setState({ NavClass: "navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" })
        }

        if (this.state.token === null) {
            this.setState({ homeMenu: "navbar-nav nav ml-auto " })
            this.setState({ DashMenu: "navbar-nav nav ml-auto profile-view" })
        }
        else {
            if (path[4] !== "") {
                this.setState({ homeMenu: "navbar-nav nav ml-auto profile-view" })
            }
            else {
                this.setState({ homeMenu: "navbar-nav nav ml-auto " })
            }
            this.setState({ DashMenu: "navbar-nav ml-auto dash-menu" })
        }

        if (path[4] === "about-lsp" || path[4] ==="about-lb" || path[4] === "about-tna") {
            this.setState({
                about:true
            })
        }
        if (path[4] === "pricing") {
            this.setState({
                pricing:true
            })
        }
        if (path[4] === "benefits" || path[4] === "process-steps" || path[4] === "document-required") {
            this.setState({
                howitwork:true
            })
        }
        if (path[4] === "about-fssai" || path[4] === "fssai-labeling-regulations" || path[4] === "action-against-mislabeling") {
            this.setState({
                fssai:true
            })
        }
        if (path[4] === "faqs") {
            this.setState({
                help:true
            })
        }
        if (path[4] === "contact-us") {
            this.setState({
                contact:true
            })
        }
        if (path[4] === "terms-and-conditions") {
            this.setState({
                termsnCond:true
            })
        }

    }

    logOut = () => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const postData = {
            token: this.state.token,
        };
        Axios.post(ApiProvider.endpoint + `/logout`, postData, {
            headers: headers
        })
            .then(res=> {
                localStorage.clear("access_token");
                this.setState({redirect : true})
                toast.success(res.data.message);
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })        
    }

    sidebarToggle = () => {
        this.setState({
            sidebarToggle: !this.state.sidebarToggle 
        })
        if(this.state.sidebarToggle){
            document.body.classList.add('sb-sidenav-toggled')
        }
        else{
            document.body.classList.remove('sb-sidenav-toggled')
        }
    }


    render() {
        if(this.state.redirect){
            return <Redirect to="/business-operator/login" />;
        }
        return (
            <nav className={this.state.NavClass} id="ftco-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://www.fssai.gov.in" target="_blank">
                        <img src="/images/logo/fssai.png" />
                        {/* <strong>LabelSolutionProvider</strong> */}
                    </a>
                    {/* <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#" onClick={this.sidebarToggle}><i className="fas fa-bars" /></button> */}

                    <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav" >
                        <div className="row header-menu" >
                            <div className="col-sm-6">
                                <Link className="both-logo" to={`/`}>
                                    <img src="/images/logo/lsp-new-logo.png" className="lsp-logo" />
                                </Link>
                            </div>
                            {/* <div className="col-sm-6">
                                <ul className="both-logo both-list">
                                    <li><img src="/images/logo/150gandhi-logo.jpg" className="gandhi-logo" /></li>
                                    <li><img src="/images/logo/mitra-logo.png" className="mitra-logo" /></li>
                                </ul>
                            </div> */}
                            <div className="col-sm-12">
                                {/* Dashboard Menu */}
                                <ul className={this.state.DashMenu}>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {/* <img src="/images/person_1.jpg" alt="Avatar" className="avatar" /> */}
                                            <i className="fas fa-user fa-fw"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                            <Link className="dropdown-item" to={`/user-dashboard`}>My Accounts</Link>
                                            {/* <a className="dropdown-item" href="#">Activity Log</a> */}
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" onClick={this.logOut}>Logout</a>
                                        </div>
                                    </li>
                                </ul>
                                {/* Home Menu */}
                                <ul className={this.state.homeMenu}>
                                    <li className="nav-item">
                                        <Link className={ this.state.home ? "nav-link active": "nav-link"} to={`/`}><span>Home</span></Link>
                                    </li>
                                    <li className={ this.state.about ? "nav-item dropdown active": "nav-item dropdown"}>
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ABOUT US</a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                            <Link className="dropdown-item" to="/about-lsp">ABOUT LSP</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/about-tna">ABOUT TNA</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/about-lb">ABOUT LB</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className={ this.state.pricing ? "nav-link active": "nav-link"}><span>PRICING</span></Link>
                                    </li>
                                    <li className={ this.state.howitwork ? "nav-item dropdown active": "nav-item dropdown"}>
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            HOW IT WORKS</a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                            <Link className="dropdown-item" to="/benefits">Benefits</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/process-steps">Process / Steps</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/document-required">Documents Required</Link>
                                        </div>
                                    </li>
                                    <li className={ this.state.fssai ? "nav-item dropdown active": "nav-item dropdown"}>
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            FSSAI</a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                            <Link className="dropdown-item" to="/about-fssai">About FSSAI</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/fssai-labeling-regulations">FSSAI Labelling Regulations</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/action-against-mislabeling">Action against Mislabelling</Link>
                                        </div>
                                    </li>
                                    <li className={ this.state.help ? "nav-item active": "nav-item"}>
                                        <Link to="/faqs" className="nav-link"><span>HELP / FAQs</span></Link>
                                    </li>
                                    <li className={ this.state.contact ? "nav-item active": "nav-item"}>
                                        <Link to="/contact-us" className="nav-link"><span>GET IN TOUCH</span></Link>
                                    </li>
                                    <li className={ this.state.termsnCond ? "nav-item active": "nav-item"}>
                                        <Link to="/terms-and-conditions" className="nav-link"><span>Terms & Conditions</span></Link>
                                    </li>
                                </ul>                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        )
    }
}
