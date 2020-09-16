import React, { Component } from 'react'
import Sidebar from '../../common/Sidebar'
import DashMain from '../../DashMain';
import { Content, Container, Button } from 'rsuite';

export default class Allergens extends Component {

    constructor(props) {
        super(props)

        this.state = {

            allergens: '',
            made_facility: '',
            imagesName: 'label.jpg',
            dropdown1: [
                { value: "Cereals containing gluten; i.e., wheat, rye, barley, oats, spelt or their hybridized strains and products their", ischecked: false },
                { value: "Crustacean and their products", ischecked: false },
                { value: "Milk & Milk products", ischecked: false },
                { value: "Eggs and egg products", ischecked: false },
                { value: "Fish and fish products", ischecked: false },
                { value: "Peanuts, tree nuts and their products", ischecked: false },
                { value: "Soybeans and their products", ischecked: false },
                { value: "Sulphite (more than 10mg/kg)", ischecked: false },
            ],
            dropdown11: [
                { value: "Wheat (Gluten)", ischecked: false },
                { value: "Rye (Gluten)", ischecked: false },
                { value: "Barley (Gluten)", ischecked: false },
                { value: "Oats (Gluten)", ischecked: false },
                { value: "Spelt (Gluten)", ischecked: false },
                { value: "Gluten", ischecked: false },
            ],
            dropdown21: [
                { value: "Crustaceans ", ischecked: false },
                { value: "Shellfish", ischecked: false },
                { value: "Molluscs", ischecked: false },
                { value: "Prawns", ischecked: false },
                { value: "Shrimp", ischecked: false },
            ],
            dropdown31: [
                { value: "Milk ", ischecked: false },
                { value: "Dairy ", ischecked: false },
                { value: "Lactose", ischecked: false },
            ],
            dropdown41: [
                { value: "Eggs", ischecked: false },
            ],
            dropdown51: [
                { value: "Fish", ischecked: false },
            ],
            dropdown61: [
                { value: "Peanuts ", ischecked: false },
                { value: "Groundnuts", ischecked: false },
                { value: "Tree Nuts", ischecked: false },
            ],
            dropdown71: [
                { value: "Soy ", ischecked: false },
                { value: "Soybean", ischecked: false },
            ],
            dropdown81: [
                { value: "Sulphite ", ischecked: false },
            ],
            dropdown3: [
                { value: "Wheat (Gluten)", ischecked: false },
                { value: "Rye (Gluten)", ischecked: false },
                { value: "Barley (Gluten)", ischecked: false },
                { value: "Oats (Gluten)", ischecked: false },
                { value: "Spelt (Gluten)", ischecked: false },
                { value: "Gluten", ischecked: false },
                { value: "Crustaceans ", ischecked: false },
                { value: "Shellfish", ischecked: false },
                { value: "Molluscs", ischecked: false },
                { value: "Prawns", ischecked: false },
                { value: "Shrimp", ischecked: false },
                { value: "Milk ", ischecked: false },
                { value: "Dairy ", ischecked: false },
                { value: "Lactose", ischecked: false },
                { value: "Eggs", ischecked: false },
                { value: "Fish", ischecked: false },
                { value: "Peanuts ", ischecked: false },
                { value: "Groundnuts", ischecked: false },
                { value: "Tree Nuts", ischecked: false },
                { value: "Soy ", ischecked: false },
                { value: "Soybean", ischecked: false },
                { value: "Sulphite ", ischecked: false },
            ],
            display11: false,
            display21: false,
            display31: false,
            display41: false,
            display51: false,
            display61: false,
            display71: false,
            display81: false,
        }
    }

    componentDidMount() {
        
    }

    handleChange(changeObject) {
        this.setState(changeObject);
    }

    handleSubmit = evt => {
        var allergens1 = []
        this.state.dropdown1.forEach(fruite => {
            if (fruite.ischecked === true) {
                allergens1.push(fruite.value);
            }
        })
        var allergens2 = []
        if (this.state.display11 === true) {
            this.state.dropdown11.forEach(fruite => {
                if (fruite.ischecked === true) {
                    allergens2.push(fruite.value);
                }
            })
        }
        if (this.state.display21 === true) {
            this.state.dropdown21.forEach(fruite => {
                if (fruite.ischecked === true) {
                    allergens2.push(fruite.value);
                }
            })
        }
        if (this.state.display31 === true) {
            this.state.dropdown31.forEach(fruite => {
                if (fruite.ischecked === true) {
                    allergens2.push(fruite.value);
                }
            })
        }
        if (this.state.display41 === true) {
            this.state.dropdown41.forEach(fruite => {
                if (fruite.ischecked === true) {
                    allergens2.push(fruite.value);
                }
            })
        }
        if (this.state.display51 === true) {
            this.state.dropdown51.forEach(fruite => {
                if (fruite.ischecked === true) {
                    allergens2.push(fruite.value);
                }
            })
        }
        if (this.state.display61 === true) {
            this.state.dropdown61.forEach(fruite => {
                if (fruite.ischecked === true) {
                    allergens2.push(fruite.value);
                }
            })
        }
        if (this.state.display71 === true) {
            this.state.dropdown71.forEach(fruite => {
                if (fruite.ischecked === true) {
                    allergens2.push(fruite.value);
                }
            })
        }
        if (this.state.display81 === true) {
            this.state.dropdown81.forEach(fruite => {
                if (fruite.ischecked === true) {
                    allergens2.push(fruite.value);
                }
            })
        }
        var allergens3 = [];
        this.state.dropdown3.forEach(fruite => {
            if (fruite.ischecked === true) {
                allergens3.push(fruite.value);
            }
        })
        let postdata = {
            allergens_dropdown_1: allergens1,
            allergens_dropdown_2: allergens2,
            allergens_dropdown_3: allergens3,
        }
        console.log(postdata);

    };

    handleCheckedDropdown1 = evt => {
        let dropdown1 = this.state.dropdown1
        dropdown1.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
                if (fruite.ischecked === true) {
                    if (fruite.value === "Cereals containing gluten; i.e., wheat, rye, barley, oats, spelt or their hybridized strains and products their") {
                        this.setState({ display11: true })
                    }
                    if (fruite.value === "Crustacean and their products") {
                        this.setState({ display21: true })
                    }
                    if (fruite.value === "Milk & Milk products") {
                        this.setState({ display31: true })
                    }
                    if (fruite.value === "Eggs and egg products") {
                        this.setState({ display41: true })
                    }
                    if (fruite.value === "Fish and fish products") {
                        this.setState({ display51: true })
                    }
                    if (fruite.value === "Peanuts, tree nuts and their products") {
                        this.setState({ display61: true })
                    }
                    if (fruite.value === "Soybeans and their products") {
                        this.setState({ display71: true })
                    }
                    if (fruite.value === "Sulphite (more than 10mg/kg)") {
                        this.setState({ display81: true })
                    }
                }
                else {
                    if (fruite.value === "Cereals containing gluten; i.e., wheat, rye, barley, oats, spelt or their hybridized strains and products their") {
                        this.setState({ display11: false })
                    }
                    if (fruite.value === "Crustacean and their products") {
                        this.setState({ display21: false })
                    }
                    if (fruite.value === "Milk & Milk products") {
                        this.setState({ display31: false })
                    }
                    if (fruite.value === "Eggs and egg products") {
                        this.setState({ display41: false })
                    }
                    if (fruite.value === "Fish and fish products") {
                        this.setState({ display51: false })
                    }
                    if (fruite.value === "Peanuts, tree nuts and their products") {
                        this.setState({ display61: false })
                    }
                    if (fruite.value === "Soybeans and their products") {
                        this.setState({ display71: false })
                    }
                    if (fruite.value === "Sulphite (more than 10mg/kg)") {
                        this.setState({ display81: false })
                    }
                }
            }
        })
        this.setState({ dropdown1: dropdown1 })
    }
    handleCheckedDropdown11 = evt => {
        let dropdown1 = this.state.dropdown11
        dropdown1.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ dropdown11: dropdown1 })
    }

    handleCheckedDropdown21 = evt => {
        let dropdown1 = this.state.dropdown21
        dropdown1.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ dropdown21: dropdown1 })
    }
    handleCheckedDropdown31 = evt => {
        let dropdown1 = this.state.dropdown31
        dropdown1.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ dropdown31: dropdown1 })
    }
    handleCheckedDropdown41 = evt => {
        let dropdown1 = this.state.dropdown41
        dropdown1.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ dropdown41: dropdown1 })
    }

    handleCheckedDropdown51 = evt => {
        let dropdown1 = this.state.dropdown51
        dropdown1.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ dropdown51: dropdown1 })
    }
    handleCheckedDropdown61 = evt => {
        let dropdown1 = this.state.dropdown61
        dropdown1.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ dropdown61: dropdown1 })
    }
    handleCheckedDropdown71 = evt => {
        let dropdown1 = this.state.dropdown71
        dropdown1.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ dropdown71: dropdown1 })
    }
    handleCheckedDropdown81 = evt => {
        let dropdown1 = this.state.dropdown81
        dropdown1.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ dropdown81: dropdown1 })
    }

    handleCheckedDropdown3 = evt => {
        let dropdown3 = this.state.dropdown3
        dropdown3.forEach(fruite => {
            if (fruite.value === evt.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ dropdown3: dropdown3 })
    }

    render() {
        return (
            <div>
                <DashMain>
                    <Container>
                        <Sidebar />
                        <Content className="content-section">
                            <div className="top_bx">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="dimention-row">
                                        <strong>Allergens Information</strong>
                                    </div>
                                    <div className="dimention-row">
                                        <table className="table table-striped table-bordered ingridient-table">
                                            <thead>
                                                <tr>
                                                    <th>Dropdown 1</th>
                                                    <th>Dropdown 2</th>
                                                    <th>Dropdown 3</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{width:"33%"}}>
                                                        {this.state.dropdown1.map((val, idx) => (
                                                            <p className={idx} key={idx}>
                                                                <label className="container">
                                                                    {val.value}
                                                                    <input
                                                                        type="checkbox"
                                                                        onChange={this.handleCheckedDropdown1}
                                                                        {...val}
                                                                        ischecked={(val.ischecked) ? 'checked' : ''}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </p>
                                                        ))}
                                                    </td>
                                                    <td style={{width:"33%"}}>
                                                        <span style={{ display: (this.state.display11) ? 'block' : 'none' }}>
                                                            {this.state.dropdown11.map((val, idx) => (
                                                                <p className={idx} key={idx}>
                                                                    <label className="container">
                                                                        {val.value}
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={this.handleCheckedDropdown11}
                                                                            {...val}
                                                                            ischecked={(val.ischecked) ? 'checked' : ''}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </p>
                                                            ))}
                                                        </span>
                                                        <span style={{ display: (this.state.display21) ? 'block' : 'none' }}>
                                                            {this.state.dropdown21.map((val, idx) => (
                                                                <p className={idx} key={idx}>
                                                                    <label className="container">
                                                                        {val.value}
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={this.handleCheckedDropdown21}
                                                                            {...val}
                                                                            ischecked={(val.ischecked) ? 'checked' : ''}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </p>
                                                            ))}
                                                        </span>
                                                        <span style={{ display: (this.state.display31) ? 'block' : 'none' }}>
                                                            {this.state.dropdown31.map((val, idx) => (
                                                                <p className={idx} key={idx}>
                                                                    <label className="container">
                                                                        {val.value}
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={this.handleCheckedDropdown31}
                                                                            {...val}
                                                                            ischecked={(val.ischecked) ? 'checked' : ''}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </p>
                                                            ))}
                                                        </span>
                                                        <span style={{ display: (this.state.display41) ? 'block' : 'none' }}>
                                                            {this.state.dropdown41.map((val, idx) => (
                                                                <p className={idx} key={idx}>
                                                                    <label className="container">
                                                                        {val.value}
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={this.handleCheckedDropdown41}
                                                                            {...val}
                                                                            ischecked={(val.ischecked) ? 'checked' : ''}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </p>
                                                            ))}
                                                        </span>
                                                        <span style={{ display: (this.state.display51) ? 'block' : 'none' }}>
                                                            {this.state.dropdown51.map((val, idx) => (
                                                                <p className={idx} key={idx}>
                                                                    <label className="container">
                                                                        {val.value}
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={this.handleCheckedDropdown51}
                                                                            {...val}
                                                                            ischecked={(val.ischecked) ? 'checked' : ''}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </p>
                                                            ))}
                                                        </span>
                                                        <span style={{ display: (this.state.display61) ? 'block' : 'none' }}>
                                                            {this.state.dropdown61.map((val, idx) => (
                                                                <p className={idx} key={idx}>
                                                                    <label className="container">
                                                                        {val.value}
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={this.handleCheckedDropdown61}
                                                                            {...val}
                                                                            ischecked={(val.ischecked) ? 'checked' : ''}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </p>
                                                            ))}
                                                        </span>
                                                        <span style={{ display: (this.state.display71) ? 'block' : 'none' }}>
                                                            {this.state.dropdown71.map((val, idx) => (
                                                                <p className={idx} key={idx}>
                                                                    <label className="container">
                                                                        {val.value}
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={this.handleCheckedDropdown71}
                                                                            {...val}
                                                                            ischecked={(val.ischecked) ? 'checked' : ''}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </p>
                                                            ))}
                                                        </span>
                                                        <span style={{ display: (this.state.display81) ? 'block' : 'none' }}>
                                                            {this.state.dropdown81.map((val, idx) => (
                                                                <p className={idx} key={idx}>
                                                                    <label className="container">
                                                                        {val.value}
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={this.handleCheckedDropdown81}
                                                                            {...val}
                                                                            ischecked={(val.ischecked) ? 'checked' : ''}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </p>
                                                            ))}
                                                        </span>
                                                    </td>
                                                    <td style={{width:"33%"}}>
                                                        {this.state.dropdown3.map((val, idx) => (
                                                            <p className={idx} key={idx}>
                                                                <label className="container">
                                                                    {val.value}
                                                                    <input
                                                                        type="checkbox"
                                                                        onChange={this.handleCheckedDropdown3}
                                                                        {...val}
                                                                        ischecked={(val.ischecked) ? 'checked' : ''}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </p>
                                                        ))}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
            </div >
        )
    }
}
