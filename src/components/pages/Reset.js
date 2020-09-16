import React, { Component } from 'react'
import Main from '../Main'
import Axios from 'axios'
import ApiProvider from '../common/ApiProvider'
import { toast } from 'react-toastify'
import { TextField } from '@material-ui/core'

export default class Reset extends Component {
    constructor(props) {
        super(props)

        this.state = {
            new_pass: '',
            conf_pass: '',
            token: this.props.token,
            redirect: false
        }
    }

    componentDidMount() {
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
            new_pass: this.state.new_pass,
            conf_pass: this.state.conf_pass,
        };
        Axios.post(ApiProvider.endpoint + `/reset-password/` + this.state.token, postData, {
            headers: headers
        })
            .then(result => {
                setTimeout(this.red, 3000);
                toast.success(result.data.message);
            })
            .catch(error => {
                toast.error(error.response.data.message);
            });
    }

    red() {
        return window.location.href = '/login';
    }

    render() {
        return (

            <div>
                <Main>
                    <section className="text-center mb-4 verify-section">
                        <div className="container verify-container" style={{ display: this.state.verifyForm }}>
                            <div className="wow fadeIn">
                                <h2 className="h1 pt-5 pb-3">Reset Password</h2>
                                <p />
                            </div>
                            <div className="row center-form">
                                <div className="col-md-6">
                                    <div className="card" style={{ width: '100%' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Reset Password</h5>
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="row form-center">
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="New Password"
                                                            helperText=""
                                                            variant="outlined"
                                                            type="password"
                                                            onChange={(e) => this.handleChange({ new_pass: e.target.value })}
                                                            required
                                                            style={{paddingBottom: "20px"}}
                                                        />
                                                        {/* <div className="form-group">
                                                            <label htmlFor="code">New Password!</label>
                                                            <input type="password" className="form-control verify-code" placeholder="*****" required onChange={(e) => this.handleChange({ new_pass: e.target.value })} autoComplete="off" />
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div className="row form-center">
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="New Password"
                                                            helperText=""
                                                            variant="outlined"
                                                            type="password"
                                                            onChange={(e) => this.handleChange({ conf_pass: e.target.value })}
                                                            required
                                                        />
                                                        {/* <div className="form-group">
                                                            <label htmlFor="code">Confirm Password!</label>
                                                            <input type="password" className="form-control verify-code" placeholder="*****" required onChange={(e) => this.handleChange({ conf_pass: e.target.value })} autoComplete="off" />
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>
                                            {/* <p>Didn't receive the code?</p> */}
                                            {/* <a className="resend-link" onClick={this.sendVerificationCode}>Send code again</a> */}
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
