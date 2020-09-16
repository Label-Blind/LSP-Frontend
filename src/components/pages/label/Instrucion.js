import React, { Component } from 'react'
import DashMain from '../../DashMain'
import { Container, Content, Button } from 'rsuite'
import Sidebar from '../../common/Sidebar'

export default class Instrucion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            instruction:'',
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
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
                                    <strong>Instructions of Use </strong>
                                </div>
                                <div className="dimention-row">
                                    <p><strong>Instructions of Use </strong></p>
                                        Instructions for use, including reconstitution, where applicable, shall be included on the label, to ensure proper utilization of the food or where such food requires directions for reasons for health and safety (eg. ‘Refrigerate after opening’).
                                        <br></br>
                                    <br></br>
                                    <input type="text" className="instruction_name" onChange={e => this.setState({ instruction: e.target.value })} />
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
