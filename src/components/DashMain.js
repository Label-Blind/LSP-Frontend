import React, { Component } from 'react'
import AOS from 'aos';
// import Header from './common/Header';
import { ToastContainer } from 'react-toastify';
import { Container, Footer } from 'rsuite';
import Topbar from './common/Topbar';


export default class DashMain extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        AOS.init({
            duration: 800,
            easing: 'slide'
        })
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }

    render() {
        return (
            <div className="show-container">
                <Container>
                    <Topbar />
                    <ToastContainer />
                    {this.props.children}
                    <Container>
                    <Footer className="footer">
                        <p >Copyright © All rights reserved | The Nutrition Alchemy</p>
                    </Footer>
                    </Container>
                    {/* <div class="loader">Loading...</div> */}
                </Container>
            </div>
        )
    }
}
