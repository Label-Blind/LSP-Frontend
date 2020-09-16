import React, { Component } from 'react'
import Main from '../Main'
import Axios from 'axios';
import ApiProvider from '../common/ApiProvider';
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { TextField, TextareaAutosize } from '@material-ui/core';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            comp_name:'',
            email: '',
            phone: '',
            subject: '',
            message: '',
        }

        this.sendQuery = this.sendQuery.bind(this);
    }

    componentDidMount() {
        document.title = 'Label Service Provider | Get In Touch';
    }

    handleChange(changeObject) {
        this.setState(changeObject)
    }

    sendQuery = e => {
        e.preventDefault();
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const contactData = {
            name: this.state.name,
            email: this.state.email,
            company_name:this.state.comp_name,
            phone: this.state.phone,
            subject: this.state.subject,
            message: this.state.message,
        };
        Axios.post(ApiProvider.endpoint + `/send-query`, contactData, {
            headers: headers
        })
            .then(res => {
                document.getElementById("contact-form").reset();
                this.props.history.push('/contact-us');
                toast.success(res.data.message);
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })

    }

    render() {
        return (
            <div>
                <Main>
                    <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                        <div className="container">
                            <div className="row justify-content-center mb-5 pb-3">
                                <div className="col-md-7 heading-section text-center ftco-animate">
                                    <span className="subheading">Contact us</span>
                                    <h2 className="mb-4">Contact Me</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                </div>
                            </div>
                            <div className="row block-9">
                                <div className="col-md-7 order-md-last d-flex">
                                    <form onSubmit={this.sendQuery} method="post" className="bg-light p-4 p-md-5 contact-form" id="contact-form">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <TextField
                                                    id="outlined-read-helper-text"
                                                    label="Name"
                                                    helperText=""
                                                    variant="outlined"
                                                    type="text"
                                                    onChange={(e) => this.handleChange({ name: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <TextField
                                                    id="outlined-read-helper-text"
                                                    label="Company Name"
                                                    helperText=""
                                                    variant="outlined"
                                                    type="text"
                                                    onChange={(e) => this.handleChange({ comp_name: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <TextField
                                                    id="outlined-read-helper-text"
                                                    label="Email"
                                                    helperText=""
                                                    variant="outlined"
                                                    type="email"
                                                    onChange={(e) => this.handleChange({ email: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <PhoneInput placeholder="Enter phone number" onChange={phone => this.setState({ phone })} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <TextField
                                                    id="outlined-read-helper-text"
                                                    label="Subject"
                                                    helperText=""
                                                    variant="outlined"
                                                    type="text"
                                                    onChange={(e) => this.handleChange({ subject: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <TextareaAutosize
                                                    id="outlined-multiline-Message"
                                                    label="Message"
                                                    helperText=""
                                                    variant="outlined"
                                                    placeholder="type your message"
                                                    multiline
                                                    rows="5"
                                                    rowsMax={5}
                                                    type="text"
                                                    onChange={(e) => this.handleChange({ message: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        
                                        {/* <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name" onChange={(e) => this.handleChange({ name: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Email" onChange={(e) => this.handleChange({ email: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <PhoneInput placeholder="Enter phone number" onChange={phone => this.setState({ phone })} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" onChange={(e) => this.handleChange({ subject: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" cols={30} rows={7} className="form-control form__field" placeholder="Message" defaultValue={""} onChange={(e) => this.handleChange({ message: e.target.value })} />
                                        </div> */}
                                        <div className="form-group">
                                            <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-5 d-flex">
                                    <div className="row d-flex contact-info mb-5">
                                        <div className="col-md-12 ftco-animate">
                                            <div className="box p-2 px-3 bg-light d-flex">
                                                <div className="icon mr-3">
                                                    <span className="icon-map-signs" />
                                                </div>
                                                <div>
                                                    <h3 className="mb-3">Address</h3>
                                                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 ftco-animate">
                                            <div className="box p-2 px-3 bg-light d-flex">
                                                <div className="icon mr-3">
                                                    <span className="icon-phone2" />
                                                </div>
                                                <div>
                                                    <h3 className="mb-3">Contact Number</h3>
                                                    <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 ftco-animate">
                                            <div className="box p-2 px-3 bg-light d-flex">
                                                <div className="icon mr-3">
                                                    <span className="icon-paper-plane" />
                                                </div>
                                                <div>
                                                    <h3 className="mb-3">Email Address</h3>
                                                    <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 ftco-animate">
                                            <div className="box p-2 px-3 bg-light d-flex">
                                                <div className="icon mr-3">
                                                    <span className="icon-globe" />
                                                </div>
                                                <div>
                                                    <h3 className="mb-3">Website</h3>
                                                    <p><a href="#">yoursite.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Main>
            </div>
        )
    }
}
