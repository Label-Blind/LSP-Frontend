import React, { Component } from 'react'
import Sidebar from '../../common/Sidebar'
import DashMain from '../../DashMain';
import { Content, Container, Button } from 'rsuite';
import { colors } from '@material-ui/core';

export default class Additives extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colours: [
                { number: '', name: '', type: '' },
                { number: '', name: '', type: '' },
            ],
            flavours: [
                { number: '', name: '', type: '' },
                { number: '', name: '', type: '' },
            ],
            other_additives: [
                { class: '', name: '', number: '' },
                { class: '', name: '', number: '' },
            ],
            imagesName: 'label.jpg',
        }
    }

    componentDidMount() {
        // var currentLocation = window.location.href;
        // var path = currentLocation.split("/");
        // console.log(path[5])
    }

    handleSubmit = evt => {
        console.log(this.state)
    };

    handleAddColour = evt => {
        this.setState({
            colours: this.state.colours.concat([{ number: "", name: "" }])
        });
    }

    handleAddFlavour = evt => {
        this.setState({
            flavours: this.state.flavours.concat([{ number: "", name: "" }])
        });
    }

    handleAddOtherAdditives = evt => {
        this.setState({
            other_additives: this.state.other_additives.concat([{ name: "", number: "" }])
        });
    }

    // Color

    handleColorNumber = (val, e) => {
        let colours = this.state.colours;
        colours.forEach((color, id) => {
            if (id === e) {
                color.number = val
            }
        })
        this.setState({ colours: colours })
    }

    handleColorName = (val, e) => {
        let colours = this.state.colours;
        colours.forEach((color, id) => {
            if (id === e) {
                color.name = val
            }
        })
        this.setState({ colours: colours })
    }

    changeColorType = (val, e) => {
        let colours = this.state.colours;
        colours.forEach((color, id) => {
            if (id === e) {
                color.type = val
            }
        })
        this.setState({ colours: colours })
    }

    // Flavour

    handleflavoursNumber = (val, e) => {
        let flavours = this.state.flavours;
        flavours.forEach((flavour, id) => {
            if (id === e) {
                flavour.number = val
            }
        })
        this.setState({ flavours: flavours })
    }

    handleflavoursName = (val, e) => {
        let flavours = this.state.flavours;
        flavours.forEach((flavour, id) => {
            if (id === e) {
                flavour.name = val
            }
        })
        this.setState({ flavours: flavours })
    }

    changeFlavourType = (val, e) => {
        let flavours = this.state.flavours;
        flavours.forEach((flavour, id) => {
            if (id === e) {
                flavour.type = val
            }
        })
        this.setState({ flavours: flavours })
    }

    // Other

    handleOtherClass = (val, e) => {
        let other_additives = this.state.other_additives;
        other_additives.forEach((other, id) => {
            if (id === e) {
                other.class = val
            }
        })
        this.setState({ other_additives: other_additives })
    }

    handleOtherNumber = (val, e) => {
        let other_additives = this.state.other_additives;
        other_additives.forEach((other, id) => {
            if (id === e) {
                other.number = val
            }
        })
        this.setState({ other_additives: other_additives })
    }

    handleOtherName = (val, e) => {
        let other_additives = this.state.other_additives;
        other_additives.forEach((other, id) => {
            if (id === e) {
                other.name = val
            }
        })
        this.setState({ other_additives: other_additives })
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
                                    <strong>Food Additives :</strong>
                                </div>
                                <div className="table">
                                    <div className="responsive-table">
                                        <table className="table table-striped table-bordered ingridient-table">
                                            <thead>
                                                <tr className="ui-state-default">
                                                    <th colSpan={4}>COLOUR</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.colours.map((data, idx) => (
                                                    <tr className={idx} key={idx}>
                                                        <td>INS</td>
                                                        <td>
                                                            <input
                                                                id="serving"
                                                                label="Serving Size"
                                                                variant="outlined"
                                                                type="Number"
                                                                placeholder="INS Code"
                                                                onChange={(e) => this.handleColorNumber(e.target.value, idx)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                id="serving"
                                                                label="Serving Size"
                                                                variant="outlined"
                                                                type="text"
                                                                placeholder="Common Name"
                                                                onChange={(e) => this.handleColorName(e.target.value, idx)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <div style={{ display: "flex" }}>
                                                                <label className="container">
                                                                    Natural
                                                                    <input
                                                                        id="checkbox"
                                                                        type="checkbox"
                                                                        value="Natural"
                                                                        name="color"
                                                                        onChange={e => this.changeColorType(e.target.value, idx)}
                                                                        checked={(data.type === "Natural")}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                                <label className="container">
                                                                    Nature Identical
                                                                    <input
                                                                        id="checkbox"
                                                                        type="checkbox"
                                                                        value="Nature Identical"
                                                                        name="color"
                                                                        onChange={e => this.changeColorType(e.target.value, idx)}
                                                                        checked={(data.type === "Nature Identical")}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                                <label className="container">
                                                                    Artificial
                                                                    <input
                                                                        id="checkbox"
                                                                        type="checkbox"
                                                                        value="Artificial"
                                                                        name="color"
                                                                        onChange={e => this.changeColorType(e.target.value, idx)}
                                                                        checked={(data.type === "Artificial")}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colSpan={4}>
                                                        <Button id="btnAdd" color="orange" data-toggle="tooltip" data-original-title="Add more controls" onClick={this.handleAddColour}>Add More</Button>
                                                    </th>
                                                </tr>

                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className="table">
                                    <div className="responsive-table">
                                        <table className="table table-striped table-bordered ingridient-table">
                                            <thead>
                                                <tr className="ui-state-default">
                                                    <th colSpan={4}>FLAVOUR</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.flavours.map((flavour, idx) => (
                                                    <tr className={idx} key={idx}>
                                                        <td>INS</td>
                                                        <td>
                                                            <input
                                                                id="serving"
                                                                label="Serving Size"
                                                                variant="outlined"
                                                                type="Number"
                                                                placeholder="INS Code"
                                                                onChange={(e) => this.handleflavoursNumber(e.target.value, idx)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                id="serving"
                                                                label="Serving Size"
                                                                variant="outlined"
                                                                type="text"
                                                                placeholder="Common Name"
                                                                onChange={(e) => this.handleflavoursName(e.target.value, idx)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <div style={{ display: "flex" }}>
                                                                <label className="container">
                                                                    Natural
                                                                    <input
                                                                        id="checkbox"
                                                                        type="checkbox"
                                                                        value="Natural"
                                                                        name="flavour"
                                                                        onChange={e => this.changeFlavourType(e.target.value, idx)}
                                                                        checked={flavour.type === "Natural"}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                                <label className="container">
                                                                    Nature Identical
                                                                    <input
                                                                        id="checkbox"
                                                                        type="checkbox"
                                                                        value="Nature Identical"
                                                                        name="flavour"
                                                                        onChange={e => this.changeFlavourType(e.target.value, idx)}
                                                                        checked={flavour.type === "Nature Identical"}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                                <label className="container">
                                                                    Artificial
                                                                    <input
                                                                        id="checkbox"
                                                                        type="checkbox"
                                                                        value="Artificial"
                                                                        name="flavour"
                                                                        onChange={e => this.changeFlavourType(e.target.value, idx)}
                                                                        checked={flavour.type === "Artificial"}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colSpan={4}>
                                                        <Button id="btnAdd" color="orange" data-toggle="tooltip" data-original-title="Add more controls" onClick={this.handleAddFlavour}>Add More</Button>
                                                    </th>
                                                </tr>

                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className="table">
                                    <div className="responsive-table">
                                        <table className="table table-striped table-bordered ingridient-table">
                                            <thead>
                                                <tr className="ui-state-default">
                                                    <th colSpan={4}>OTHER ADDITIVES</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.other_additives.map((data, idx) => (
                                                    <tr className={idx} key={idx}>
                                                        <td><input
                                                            id="serving"
                                                            label="Serving Size"
                                                            variant="outlined"
                                                            type="text"
                                                            placeholder="class name"
                                                            onChange={(e) => this.handleOtherClass(e.target.value, idx)}
                                                        /></td>
                                                        <td>
                                                            <input
                                                                id="serving"
                                                                label="Serving Size"
                                                                variant="outlined"
                                                                type="Number"
                                                                placeholder="INS Code"
                                                                onChange={(e) => this.handleOtherNumber(e.target.value, idx)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                id="serving"
                                                                label="Serving Size"
                                                                variant="outlined"
                                                                type="text"
                                                                placeholder="Common Name"
                                                                onChange={(e) => this.handleOtherName(e.target.value, idx)}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colSpan={4}>
                                                        <Button id="btnAdd" color="orange" data-toggle="tooltip" data-original-title="Add more controls" onClick={this.handleAddOtherAdditives}>Add More</Button>
                                                    </th>
                                                </tr>

                                            </tfoot>
                                        </table>
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
