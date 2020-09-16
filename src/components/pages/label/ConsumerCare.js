import React, { Component } from 'react'
import DashMain from '../../DashMain'
import { Container, Content, Button } from 'rsuite'
import Sidebar from '../../common/Sidebar'

export default class ConsumerCare extends Component {
    constructor(props) {
        super(props)

        this.state = {
            net_qty: '',
            retail_sale_price: '',
            consumer_care: '',
            special_condition_storage: '',
            opening_pack_specified: '',

        }
    }

    handleSubmit = e => {
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
                                    <strong>Net quantity, Retail Sale Price and Consumer Care details</strong>
                                </div>
                                <div className="dimention-row">
                                    <strong>Lot/Code/Batch identification</strong>
                                </div>
                                <div className="dimention-row">
                                    <div className="inline-flex">
                                        1. Net Quanity :
                                            <input type="text" className="wax_name" onChange={e => this.setState({ net_qty: e.target.value })} />
                                    </div>
                                    <div className="inline-flex">
                                        2. Retail Sale Price :
                                            <input type="text" className="wax_name" onChange={e => this.setState({ retail_sale_price: e.target.value })} />
                                    </div>
                                    <div className="inline-flex">
                                        3. Consumer Care :
                                            <input type="text" className="wax_name" onChange={e => this.setState({ consumer_care: e.target.value })} />
                                    </div>
                                    <p className="ingredient-text">Details shall be as provided in Legal Metrology Act, 2009 (1 of 2010)</p>
                                    <br></br>
                                    <div className="inline-flex">
                                        4. Any special conditions for the storage of the food shall be declared on the label if the validity of the date depends thereon :
                                        <input type="text" className="wax_name" onChange={e => this.setState({ special_condition_storage: e.target.value })} />
                                    </div>
                                    <div className="inline-flex">
                                        5. If required, storage conditions after opening the pack may also be specified :
                                        <input type="text" className="wax_name" onChange={e => this.setState({ opening_pack_specified: e.target.value })} />
                                    </div>
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
