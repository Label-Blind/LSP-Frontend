import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import ApiProvider from './ApiProvider';
import { toast } from 'react-toastify';
import { Header, Navbar, Nav, Icon, Dropdown } from 'rsuite'

export default class Topbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            NavClass: '',
            homeMenu: '',
            DashMenu: '',
            token: localStorage.getItem('access_token'),
            count: 0,
            redirect: false,
            home: false,
            about: false,
            pricing: false,
            howitwork: false,
            fssai: false,
            help: false,
            contact: false,
            termsnCond: false,
            sidebarToggle: false,
        }
    }

    componentDidMount() {
        var currentLocation = window.location.href;
        var path = currentLocation.split("/");
        if (path[4] !== "") {
            // this.setState({ NavClass: "navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light site-navbar-target scrolled awake fixed-menu" })
        }
        else {
            this.setState({
                home: true
            })
            // this.setState({ NavClass: "navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" })
        }

        if (this.state.token === null) {
            this.setState({ homeMenu: "" })
            this.setState({ DashMenu: "profile-view" })
        }
        else {
            if (path[4] !== "") {
                this.setState({ homeMenu: "profile-view" })
            }
            // else {
            //     this.setState({ homeMenu: "" })
            // }
            this.setState({ DashMenu: "dash-menu" })
        }

        if (path[4] === "about-lsp" || path[4] === "about-lb" || path[4] === "about-tna") {
            this.setState({
                about: true
            })
        }
        if (path[4] === "pricing") {
            this.setState({
                pricing: true
            })
        }
        if (path[4] === "benefits" || path[4] === "process-steps" || path[4] === "document-required") {
            this.setState({
                howitwork: true
            })
        }
        if (path[4] === "about-fssai" || path[4] === "fssai-labeling-regulations" || path[4] === "action-against-mislabeling") {
            this.setState({
                fssai: true
            })
        }
        if (path[4] === "faqs") {
            this.setState({
                help: true
            })
        }
        if (path[4] === "contact-us") {
            this.setState({
                contact: true
            })
        }
        if (path[4] === "terms-and-conditions") {
            this.setState({
                termsnCond: true
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
            .then(res => {
                localStorage.clear("access_token");
                this.setState({ redirect: true })
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
        if (this.state.sidebarToggle) {
            document.body.classList.add('sb-sidenav-toggled')
        }
        else {
            document.body.classList.remove('sb-sidenav-toggled')
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/business-operator/login" />;
        }
        return (
            <div>
                <Header className="top-header">
                    <Navbar>
                        <Navbar.Header>
                            <a className="navbar-brand logo" href="https://www.fssai.gov.in" target="_blank">
                                <img src="/images/logo/fssai.png" alt="FSSAI Logo"/>
                            </a>
                        </Navbar.Header>
                        <Navbar.Body>
                            <Link className="brand-logo" to="/">
                                <img src="/images/logo/lsp-new-logo.png" alt="LSP Logo"/>
                            </Link><br />
                            {/* Dashboard Menu */}
                            <Nav pullRight className={this.state.DashMenu}>
                                <Dropdown icon={<Icon icon="user" />} className={this.state.DashMenu} >
                                    <Dropdown.Item componentClass={Link} to={`/user-dashboard`}>My Account</Dropdown.Item>
                                    <Dropdown.Item onClick={this.logOut}>Log Out</Dropdown.Item>
                                </Dropdown>
                            </Nav>
                            {/* Home Menu */}
                            <Nav pullRight className={this.state.homeMenu}>
                                <Nav.Item componentClass={Link} to={`/`} className={this.state.home ? " active" : ""} icon={<Icon icon="home" />} >
                                    <span className="menu-text">HOME</span>
                                </Nav.Item>
                                <Dropdown title="ABOUT" className={this.state.about ? "active" : ""}>
                                    <Dropdown.Item componentClass={Link} to={`/about-lsp`}>About LSP</Dropdown.Item>
                                    <Dropdown.Item componentClass={Link} to={`/about-tna`}>ABOUT TNA</Dropdown.Item>
                                    <Dropdown.Item componentClass={Link} to={`/about-lb`}>ABOUT LB</Dropdown.Item>
                                </Dropdown>
                                <Nav.Item componentClass={Link} className={this.state.pricing ? " active" : ""} to={`/`}>
                                    <span className="menu-text">PRICING</span>
                                </Nav.Item>
                                <Dropdown title="HOW IT WORKS" className={this.state.howitwork ? "active " : ""}>
                                    <Dropdown.Item componentClass={Link} to={`/benefits`}>Benefits</Dropdown.Item>
                                    <Dropdown.Item componentClass={Link} to={`/process-steps`}>Process / Steps</Dropdown.Item>
                                    <Dropdown.Item componentClass={Link} to={`/document-required`}>Documents Required</Dropdown.Item>
                                </Dropdown>
                                <Dropdown title="FSSAI" className={this.state.fssai ? "active" : ""}>
                                    <Dropdown.Item componentClass={Link} to={`/fssai-labeling-regulations`} >FSSAI Labelling Regulations</Dropdown.Item>
                                    <Dropdown.Item componentClass={Link} to={`/action-against-mislabeling`} >Action against Mislabelling</Dropdown.Item>
                                    <Dropdown.Item componentClass={Link} to={`/about-fssai`}>About FSSAI</Dropdown.Item>
                                </Dropdown>

                                <Nav.Item componentClass={Link} className={this.state.faqs ? " active" : ""} to={`/faqs`}>
                                    <span className="menu-text">HELP & FAQs</span>
                                </Nav.Item>
                                <Nav.Item componentClass={Link} className={this.state.contact ? " active" : ""} to={`/contact-us`}>
                                    <span className="menu-text">GET IN TOUCH</span>
                                </Nav.Item>
                                <Nav.Item componentClass={Link} className={this.state.termsnCond ? " active" : ""} to={`/terms-and-conditions`}>
                                    <span className="menu-text">TERMS AND CONDITIONS</span>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Body>
                    </Navbar>
                </Header>
                <div className="blank-header"></div>
            </div>
        )
    }
}
