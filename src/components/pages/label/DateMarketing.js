import React, { Component } from 'react'
import DashMain from '../../DashMain'
import { Container, Content, Button } from 'rsuite'
import Sidebar from '../../common/Sidebar'
import e from 'cors'

export default class DateMarketing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            manufacture_date: '',
            expiry_date: '',
            best_before: '',
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
                                    <strong>Date Marketing</strong>
                                </div>
                                <div className="dimention-row">
                                    <div className="inline-flex">
                                        1. Date of manufacture or packaging :
                                        <input type="text" className="wax_name" onChange={e => this.setState({ manufacture_date: e.target.value })} />
                                    </div>
                                    <div className="inline-flex">
                                        2. “Expiry/Use by” :
                                        <input type="text" className="wax_name" onChange={e => this.setState({ expiry_date: e.target.value })} />
                                    </div>
                                    <div className="inline-flex">
                                        3. “Best before” as optional or additional information :
                                        <input type="text" className="wax_name" onChange={e => this.setState({ best_before: e.target.value })} />
                                    </div>
                                    <p className="ingredient-text">DD/MM/YY: For products with a short shelf life of up to 3 months;</p>
                                    <p className="ingredient-text">MM/YY : For products with a shelf life of more than 3 months</p>
                                    <p className="ingredient-text">Month shall be indicated by capital letters and abbreviations (at least first three letters of the month)</p>
                                    <p className="ingredient-text">“Date of manufacture or packaging” and “Expiry /Use by” shall be grouped together and given at one place.</p>
                                    <p className="ingredient-text">“Date and time of manufacture” shall be declared on packed meals served in airlines/railways/mobile catering units </p>
                                </div>
                                <div className="pull-right">
                                    <Button color="orange" onClick={this.handleSubmit}>Save and Next</Button>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Container>
            </DashMain>
        )
    }
}
