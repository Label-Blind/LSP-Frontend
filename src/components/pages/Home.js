import React, { Component } from 'react'
import Main from '../Main'
import { Link } from 'react-router-dom'
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { Content, Button } from 'rsuite';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            owner: true,
            mitra: false,
        }
    }

    componentDidMount() {
        document.title = "Label Service Provider | Home"
    }

    handleChange = name => event => {
        if (name === 'business_operator') {
            this.setState({
                owner: event.target.checked,
                mitra: !event.target.checked
            });
        }
        if (name === 'mitra_operator') {
            this.setState({
                owner: !event.target.checked,
                mitra: event.target.checked
            });
        }
    };


    render() {
        return (
            <Main>
                <Content>
                    <section className="home-slider ">
                        <div className="slider-item js-fullheight" style={{ backgroundImage: 'url(images/Food.png)' }}>
                            <div className="overlay" />
                            <div className="container">
                                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center slider-text-head" data-scrollax-parent="true">
                                    <div className="col-md-8 text-center ftco-animate mt-5">
                                        <div className="text">
                                            <div className="subheading">
                                                <span>Label Service Provider</span>
                                            </div>
                                            <Carousel autoPlay>
                                                <div>
                                                    <h5 className="home-title">FoLSol will facilitate Food Business Operators and Food Safety Mitras to generate labels, as ease of doing business, in compliance with Food Safety and Standards (Labelling and Display) Regulations  </h5>
                                                </div>
                                                <div>
                                                    <h5 className="home-title">Create ‘Ready to Print’ food labels for packaged food products (FSSAI  compliant Food Labels, Nutrition Information Labels, Front-of-Pack Labels, Nutrition Calculator.</h5>
                                                </div>

                                            </Carousel>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center login-section">
                            <p className="home-operator">
                                <ul>
                                    <li className="home-login-title">I am a :</li>
                                    <li style={{ textAlign: "center", paddingLeft: "50px" }}>
                                        <FormControlLabel
                                            label="Food Business Operator"
                                            control={
                                                <Checkbox
                                                    value=""
                                                    checked={this.state.owner}
                                                    onChange={this.handleChange('business_operator')}
                                                    color="primary"
                                                />
                                            }
                                        />
                                    </li>
                                    <li style={{ textAlign: "left", paddingLeft: "50px" }}>
                                        <FormControlLabel
                                            label="Food Safety Mitra"
                                            control={
                                                <Checkbox
                                                    value=""
                                                    checked={this.state.mitra}
                                                    onChange={this.handleChange('mitra_operator')}
                                                    color="primary"
                                                />
                                            }
                                        />
                                    </li>
                                </ul>
                            </p>
                            <div className="text-center">
                                <Link to={(this.state.owner) ? "/business-operator/login" : "/mitra-operator/login"}><Button color="orange">SIGN IN</Button></Link>
                                &nbsp;&nbsp;
                                <Link to={(this.state.owner) ? "/business-operator/registration" : "/mitra-operator/registration"}><Button color="orange">SIGN UP</Button></Link>
                                {/* className="btn btn-primary py-2 px-4">SIGN IN</Link> */}
                                {/* className="btn btn-primary btn-outline-primary py-2 px-4">SIGN UP</Link> */}
                            </div>
                        </div>
                    </section>

                </Content>
            </Main>
        )
    }
}
