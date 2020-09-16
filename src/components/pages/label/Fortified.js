import React, { Component } from 'react'
import DashMain from '../../DashMain'
import { Container, Content, Button } from 'rsuite'
import Sidebar from '../../common/Sidebar'

export default class Fortified extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fortified: false,
            fortified_with: '',
            organic: '',
        }
    }

    handleSubmit = e =>{
        console.log(this.state)
    }

    render() {
        return (
            <DashMain>
                <Container>
                    <Sidebar />
                    <Content className="content-section">
                        <div className="top_bx">
                            <div className="col-xs-12 col-sm-12">
                                <div className="dimention-row">
                                    <strong>Fortified /Organic : </strong>
                                </div>
                                <div className="dimention-row">
                                    Is your product FORTIFIED:
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" name="fortified" onChange={e => this.setState({ fortified: !this.state.fortified })} /> Yes
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" name="fortified" onChange={e => this.setState({ fortified: !this.state.fortified })} /> NO
                                        <div className="inline-flex" style={{ display: this.state.fortified ? 'block' : 'none' }}>
                                        Fortified with :
                                            <input type="text" className="wax_name" onChange={e => this.setState({ fortified_with: e.target.value })} />
                                    </div>
                                </div>
                                <div className="dimention-row">
                                    Is your product ORGANIC:
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="radio" name="organic" onChange={e => this.setState({ organic: !this.state.organic })} /> Yes
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="radio" name="organic" onChange={e => this.setState({ organic: !this.state.organic })} /> NO
                                            <div className="inline-flex" style={{ display: this.state.organic ? 'block' : 'none' }}>
                                        <img src="images/shapes/jaivik_bharat.png" alt="Jaivik Bharat" className="jaivik-img" />
                                    </div>
                                </div>
                                <div className="pull-right">
                                    <Button color="orange" onClick={this.handleSubmit}>Save and Next</Button>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Container>
            </DashMain >
        )
    }
}
