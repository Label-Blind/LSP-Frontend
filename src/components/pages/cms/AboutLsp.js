import React, { Component } from 'react'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Main from '../../Main';
import ApiProvider from '../../common/ApiProvider';
import { Content } from 'rsuite';

export default class AboutLsp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            subtitle: '',
            description: '',
            redirect: false,
        }
    }

    componentDidMount() {
        document.title = 'Label Service Provider | About LSP';
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        Axios.get(ApiProvider.endpoint + "/cms/about-lsp", {
            headers: headers
        })
            .then(res => {
                this.setState({
                    title: res.data.cms.title,
                    subtitle: res.data.cms.subtitle,
                    description: res.data.cms.description,
                })
            })
            .catch(error => {
                this.setState({ redirect: true })
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <Main>
                    <Content>
                            <section className="ftco-section ftco-services-2" id="services-section">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12 heading-section text-center">
                                            <span className="subheading">{this.state.title}</span>
                                            <h2 className="mb-4">{this.state.subtitle}</h2>
                                            <p ></p>
                                            <span style={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: this.state.description }} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                    </Content>
                </Main>
            </div>
        )
    }
}
