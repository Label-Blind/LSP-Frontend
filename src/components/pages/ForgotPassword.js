import React, { Component } from 'react'
import Main from '../Main'
import Axios from 'axios'
import { toast } from 'react-toastify'
import ApiProvider from '../common/ApiProvider'
import { TextField } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reset_email: '',
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
            email: this.state.reset_email,
        };
        Axios.post(ApiProvider.endpoint + `/forgot-password`, postData, {
            headers: headers
        }).then(result=> {
            console.log(result)
                this.setState({
                    redirect:true
                })
                // this.props.history.replace('/login');
                toast.success(result.data.message);
            }).catch(error => {
                toast.error(error.response.data.message);
            })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/login" />
        }
        return (
            <div>
                <Main>
                    <section className="text-center mb-4 verify-section">
                        <div className="container verify-container" style={{ display: this.state.verifyForm }}>
                            <div className="wow fadeIn">
                                <h2 className="h1 pt-5 pb-3">Forgot Password</h2>
                                <p />
                            </div>
                            <div className="row center-form">
                                <div className="col-md-6">
                                    <div className="card" style={{ width: '100%' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Send Reset Link</h5>
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="row form-center">
                                                    <div className="col-md-6">
                                                        <TextField
                                                            id="outlined-read-helper-text"
                                                            label="Email"
                                                            helperText=""
                                                            variant="outlined"
                                                            type="email"
                                                            onChange={(e) => this.handleChange({ reset_email: e.target.value })}
                                                            required
                                                        />
                                                        {/* <div className="form-group">
                                                            <label htmlFor="code">Enter your email !</label>
                                                            <input type="email" className="form-control verify-code" placeholder="your email" required onChange={(e) => this.handleChange({ email: e.target.value })} autoComplete="off" />
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>
                                            <p>Return to Login?</p>
                                            <Link className="resend-link" to={`/business-operator/login`}>Click Here</Link>
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
