import React, { Component } from 'react'
import DashMain from '../../DashMain'
import { Container, Content, Button } from 'rsuite'
import Sidebar from '../../common/Sidebar'

export default class Declaration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            veg: false,
            non_veg: false,
            contain_egg: false,
        }
    }

    changeCheckbox = e => {
        if (e.target.value === "veg") {
            this.setState({
                veg: true,
                non_veg: false,
                contain_egg: false,
                declaration_of_veg: 'veg'
            })
        }
        if (e.target.value === "non-veg") {
            this.setState({
                veg: false,
                non_veg: true,
                contain_egg: false,
                declaration_of_veg: 'non-veg'
            })
        }
        if (e.target.value === "contain-egg") {
            this.setState({
                veg: false,
                non_veg: false,
                contain_egg: true,
                declaration_of_veg: 'contain_egg'
            })
        }
    }

    componentDidMount(){

    }

    handleSubmit = e => {
        var postData = {
            "declaration_of_veg": this.state.declaration_of_veg
        }
        console.log(postData)
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
                                    <strong>Declaration of Veg / Non-Veg : </strong>
                                </div>
                                <div className="dimention-row">
                                    <p className="ingredient-text"><b>Please select if your product is Vegetarian / Non vegetarian reading the below instructions</b></p>
                                    <p className="ingredient-text">If the food ingredients, including the food additives, processing aid is of animal origin then food is declared non vegetarian
                                    Similarly, if the same is of plant origin than food is declared vegetarian
                                    Any article of food contains egg only as Non-Vegetarian ingredient, the manufacturer, or packer or seller may give declaration to this effect in addition to the said symbol.</p>
                                </div>
                                <div className="dimention-row veg-non">
                                    <div className="veg-type">
                                        <div className="veg-title">Veg</div>
                                        <br />
                                        <img className="veg-logo" src="/images/shapes/veg-logo.png" alt="veg" />
                                        <br />
                                        <label className="container">
                                            <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="veg"
                                                onChange={this.changeCheckbox}
                                                checked={(this.state.veg === true) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="non-veg-type">
                                        <div className="veg-title">Non-veg</div>
                                        <br />
                                        <img className="veg-logo" src="/images/shapes/non-veg.png" alt="veg" />
                                        <br />
                                        <label className="container">
                                            <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="non-veg"
                                                onChange={this.changeCheckbox}
                                                checked={(this.state.non_veg) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="non-veg-type">
                                        <br />
                                        <br />
                                        <img className="veg-logo" src="/images/shapes/non-veg.png" alt="veg" />
                                        <div className="veg-title">Contain Egg</div>
                                        <label className="container">
                                            <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="contain-egg"
                                                onChange={this.changeCheckbox}
                                                checked={(this.state.contain_egg) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="pull-right">
                                    {/* <Button color="orange"> Previous</Button> */}
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
