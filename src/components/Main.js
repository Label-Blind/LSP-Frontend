import React, { Component } from 'react'
// import Header from './common/Header'
// import Footer from './common/Footer'
import { ToastContainer } from 'react-toastify'
import AOS from 'aos';
import 'react-toastify/dist/ReactToastify.css'
import Topbar from './common/Topbar';
import { Footer } from 'rsuite';

export default class Main extends Component {
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
            <div>
                <Topbar />
                <ToastContainer />
                {this.props.children}
                {/* <div class="loader">Loading...</div> */}
                <Footer className="footer">
                    <p>Copyright © All rights reserved | The Nutrition Alchemy</p>
                </Footer>

            </div>
        )
    }
}
