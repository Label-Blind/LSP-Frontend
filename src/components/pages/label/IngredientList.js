import React, { Component } from 'react'
import Sidebar from '../../common/Sidebar'
import { TextField } from '@material-ui/core';
import DashMain from '../../DashMain';
import { Content, Container, Button } from 'rsuite';

export default class IngredientList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            edible_ingredient: '',
            vegetable_ingredient: '',
            animal_ingredient: '',
            all_type_ingredient: '',

            edible_ingredientChecked: false,
            vegetable_ingredientChecked: false,
            animal_ingredientChecked: false,
            all_type_ingredientChecked: false,

            edibleIngredientError: false,
            vegetableIngredientError: false,
            animalIngredientError: false,
            allIngredientError: false,

            ingredients: [
                { value: "Starches, other than chemically modified starches", ischecked: false, data: "starch" },
                { value: "All species of fish where the fish constitutes an ingredient of another food and provided that the labelling and presentation of such food does not refer to a species of fish", ischecked: false, data: "fish" },
                { value: "All types of cheese where cheese or mixture of cheese constitute an ingredient of another food and provided that the labelling and presentation of such a food does not refer to a specific type of cheese", ischecked: false, data: "cheese" },
                { value: "All spices and condiments and their extracts", ischecked: false, data: "spice and condiments of mixed spices/condiments as appropriate" },
                { value: "All types of gum or preparations used in the manufacture of gum base for chewing gum", ischecked: false, data: "Gum base" },
                { value: "Anhydrous dextrose and dextrose monohydrate", ischecked: false, data: "Dextrose or Glucose" },
                { value: "All types of sucrose", ischecked: false, data: "Sugar" },
                { value: "All types of caseinates", ischecked: false, data: "Caseinates" },
                { value: "Press, expeller or refined cocoa butter", ischecked: false, data: "Cocoa Butter" },
                { value: "All crystallized fruits/vegetables", ischecked: false, data: "Crystalized fruit/ vegetables" },
                { value: "All milk and milk products derived solely from milk", ischecked: false, data: "milk solids" },
                { value: "Cocoa bean, Cocoa nib, Cocoa mass, Cocoa press cakes, Cocoa powder (Fine/dust)", ischecked: false, data: "cocoa solids" },
                { value: "All vitamins", ischecked: false, data: "Vitamines" },
                { value: "All minerals and trace elements", ischecked: false, data: "Minerals" },
            ],
            ingredientList: [],
            imagesName: 'label.jpg',
            step: 'first',
        }
        this.saveIngredient = this.saveIngredient.bind(this);
    }

    componentDidMount() {

    }

    createCheckboxes = () => (
        this.state.ingredients.map(this.createCheckbox)
    )

    checkIngredient = (event) => {
        let ingredients = this.state.ingredients
        ingredients.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
                if (fruite.ischecked === true) {
                    if (fruite.data) {
                        this.setState({
                            ingredientList: this.state.ingredientList.concat([{ ingredient: fruite.data, ischecked:false }])
                        });
                    }
                }
                if (fruite.ischecked === false) {
                    let list = this.state.ingredientList;
                    list.map((item, key) => {
                        if (fruite.data === item.ingredient) {
                            this.state.ingredientList.splice(key, 1);
                        }
                    });
                }
            }
        })
        this.setState({ ingredients: ingredients })
    }

    checktextBoxIngredient = e => {
        if (e.target.value === "edible_oil") {
            this.setState({
                edible_ingredientChecked: !this.state.edible_ingredientChecked,
            })
        }
        if (e.target.value === "edible_fat") {
            this.setState({
                vegetable_ingredientChecked: !this.state.vegetable_ingredientChecked,
            })
        }
        if (e.target.value === "animal_fat") {
            this.setState({
                animal_ingredientChecked: !this.state.animal_ingredientChecked,
            })
        }
        if (e.target.value === "all_type") {
            this.setState({
                all_type_ingredientChecked: !this.state.all_type_ingredientChecked,
            })
        }
    }

    checkCompound = (event) => {
        let compound = this.state.ingredientList;      
        compound.forEach(fruite => {
            if (fruite.ingredient === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ ingredientList: compound })
    }

    compoundValue = (dt,val) =>{
        let compoundVal = this.state.ingredientList;
        compoundVal.forEach(fruite => {
            if (fruite.ingredient === val) {
                fruite.text_value = dt
            }
        })
        this.setState({ ingredientList: compoundVal })
    }

    handleChange(changeObject) {
        this.setState(changeObject);
    }

    handleingredientChange = evt => {
        this.setState({ ingredient: evt.target.value });
    };

    handleShareholderIngredientChange = idx => evt => {
        const newingredientList = this.state.ingredientList.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, ingredient: evt.target.value};
        });
        this.setState({ ingredientList: newingredientList });
    };

    handleShareholderPropotionChange = (dt,val) => {
        let proportion = this.state.ingredientList;
        proportion.forEach(fruite => {
            if (fruite.ingredient === val) {
                fruite.proprtion = dt
            }
        })
        this.setState({ ingredientList: proportion })
    };

    handleAddShareholder = () => {
        this.setState({
            ingredientList: this.state.ingredientList.concat([{ ingredient: "", ischecked: false, text_value:"" }])
        });
    };

    handleRemoveShareholder = idx => () => {
        this.setState({
            ingredientList: this.state.ingredientList.filter((s, sidx) => idx !== sidx)
        });
    };

    handleSubmit = evt => {
        const postData = {
            "edible_vegetable_oil_ingredients": this.state.edible_ingredient,
            "edible_vegetable_fat_ingredients": this.state.vegetable_ingredient,
            "animal_fat_ingredients":this.state.animal_ingredient,
            "all_type_meat_ingredients":this.state.all_type_ingredient,
            "ingedient_list":this.state.ingredientList
        }
        console.log(postData)
    };

    setRecordValue = (val, e) => {
        if (val === "Edible Vegetable Oil") {
            this.setState({
                edible_ingredient: e,
            })
        }
        if (val === "Edible vegetable fat") {
            this.setState({
                vegetable_ingredient: e,
            })
        }
        if (val === "Animal fat / oil other than milk fat") {
            this.setState({
                animal_ingredient: e,
            })
        }
        if (val === "all_type_meat") {
            this.setState({
                all_type_ingredient: e,
            })
        }
    }

    saveIngredient = evt => {
        if (this.state.edible_ingredientChecked && this.state.edible_ingredient === "") {
            this.setState({
                edibleIngredientError: true
            })
            document.getElementById("edible_oil").focus();
        }
        else if (this.state.vegetable_ingredientChecked && this.state.vegetable_ingredient === "") {
            this.setState({
                vegetableIngredientError: true
            })
            document.getElementById("edible_fat").focus();
        }
        else if (this.state.animal_ingredientChecked && this.state.animal_ingredient === "") {
            this.setState({
                animalIngredientError: true
            })
            document.getElementById("animal_fat").focus();
        }
        else if (this.state.all_type_ingredientChecked && this.state.all_type_ingredient === "") {
            this.setState({
                allIngredientError: true
            })
            document.getElementById("all_type").focus();
        }
        else {
            const arr = []
            if (this.state.edible_ingredientChecked && this.state.edible_ingredient !== "") {
                arr.push({ ingredient: this.state.edible_ingredient, ischecked: false, text_value:"" })
            }
            if (this.state.vegetable_ingredientChecked && this.state.vegetable_ingredient !== "") {
                arr.push({ ingredient: this.state.vegetable_ingredient, ischecked: false, text_value:"" })
            }
            if (this.state.animal_ingredientChecked && this.state.animal_ingredient !== "") {
                arr.push({ ingredient: this.state.animal_ingredient, ischecked: false, text_value:"" })
            }
            if (this.state.all_type_ingredientChecked && this.state.all_type_ingredient !== "") {
                arr.push({ ingredient: this.state.all_type_ingredient, ischecked: false, text_value:"" })
            }
            this.setState({
                ingredientList: this.state.ingredientList.concat(arr),
                step: "second"
            });
        }

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
                                    <div className="first-step" style={{ display: (this.state.step === "first") ? '' : 'none' }}>
                                        <div className="shape-type dimention-row">
                                            <strong className="part">PART A : </strong>
                                            <p className="ingredient-text">Except for single ingredient foods, a list of ingredients shall be declared on the label in the following manner:-</p>
                                            <p className="ingredient-text">(a) The list of ingredients shall contain an appropriate title, such as the term “Ingredients/List of Ingredients”. </p>
                                            <p className="ingredient-text">(b) The name of ingredients used in the product shall be listed in descending order of their composition by weight or volume, as the case may be at the time of its manufacture.</p>
                                            <p className="ingredient-text">(c) A food additive carried over into a food in an amount sufficient to perform a technological function in that food as a result of the use of raw material or other ingredients in which the additives was used shall be included in the list of ingredient.</p>
                                            <p className="ingredient-text">(d) A specific name shall be used for ingredients in the list of ingredients.</p>
                                        </div>
                                        <div className="shape-type dimention-row">
                                            <strong className="part">PART B : </strong>
                                            <p className="ingredient-text">Does you product contain any of the following ? (Kindly select all that Apply)</p>
                                            <table className="table table-striped table-bordered ingridient-table">
                                                <thead>
                                                    <tr className="">
                                                        <th>#</th>
                                                        <th>Ingredient</th>
                                                        <th>Ingredients value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td className="td-left">
                                                            <label className="container">
                                                                Edible Vegetable Oil
                                                                    <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    value="edible_oil"
                                                                    onChange={this.checktextBoxIngredient}
                                                                    checked={(this.state.edible_ingredientChecked) ? "checked" : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td className="td-width">
                                                            <div style={{ display: (this.state.edible_ingredientChecked) ? 'block' : 'none' }}>
                                                                <TextField
                                                                    id="edible_oil"
                                                                    variant="outlined"
                                                                    type="text"
                                                                    onChange={e => this.setRecordValue("Edible Vegetable Oil", e.target.value)}
                                                                    error={this.state.edibleIngredientError}
                                                                    helperText={(this.state.edibleIngredientError) ? 'Edible Oil is mendatory (*).' : ''}
                                                                    ref={el => {
                                                                        this.edible_oil = el;
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td className="td-left">
                                                            <label className="container">
                                                                Edible vegetable fat
                                                                    <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    value="edible_fat"
                                                                    onChange={this.checktextBoxIngredient}
                                                                    checked={(this.state.vegetable_ingredientChecked) ? "checked" : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td className="td-width">
                                                            <div style={{ display: (this.state.vegetable_ingredientChecked) ? 'block' : 'none' }}>
                                                                <TextField
                                                                    id="edible_fat"
                                                                    variant="outlined"
                                                                    type="text"
                                                                    onChange={e => this.setRecordValue("Edible vegetable fat", e.target.value)}
                                                                    error={this.state.vegetableIngredientError}
                                                                    helperText={(this.state.vegetableIngredientError) ? 'Edible fat is mendatory (*).' : ''}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td className="td-left">
                                                            <label className="container">
                                                                Animal fat / oil other than milk fat
                                                                    <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    value="animal_fat"
                                                                    onChange={this.checktextBoxIngredient}
                                                                    checked={(this.state.animal_ingredientChecked) ? "checked" : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td className="td-width">
                                                            <div style={{ display: (this.state.animal_ingredientChecked) ? 'block' : 'none' }}>
                                                                <TextField
                                                                    // error={(ing.ischecked) ? true : ''}
                                                                    id="animal_fat"
                                                                    variant="outlined"
                                                                    type="text"
                                                                    onChange={e => this.setRecordValue("Animal fat / oil other than milk fat", e.target.value)}
                                                                    error={this.state.animalIngredientError}
                                                                    helperText={(this.state.animalIngredientError) ? 'Animal fat is mendatory (*).' : ''}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td className="td-left">
                                                            <label className="container">
                                                                All types of meat where such meat constitutes an ingredient of another food and provided that the labelling and presentation of such a food does not refer to a specific type of meat
                                                                    <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    value="all_type"
                                                                    onChange={this.checktextBoxIngredient}
                                                                    checked={(this.state.all_type_ingredientChecked) ? "checked" : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td className="td-width">
                                                            <div style={{ display: (this.state.all_type_ingredientChecked) ? 'block' : 'none' }}>
                                                                <TextField
                                                                    id="all_type"
                                                                    variant="outlined"
                                                                    type="text"
                                                                    onChange={e => this.setRecordValue("all_type_meat", e.target.value)}
                                                                    error={this.state.allIngredientError}
                                                                    helperText={(this.state.allIngredientError) ? 'All types of meat is mendatory (*).' : ''}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {this.state.ingredients.map((ing, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{index + 5}</td>
                                                                <td key={index} className="td-left">
                                                                    <label className="container">
                                                                        {ing.value}
                                                                        <input
                                                                            id="checkbox"
                                                                            type="checkbox"
                                                                            onChange={this.checkIngredient}
                                                                            {...ing}
                                                                            ischecked={(ing.ischecked === true) ? 'checked' : ''}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </td>
                                                                <td></td>
                                                            </tr>
                                                        )
                                                    })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <Button color="orange" onClick={this.saveIngredient} className="pull-right">Next</Button>
                                    </div>
                                    <div className="second-step" style={{ display: (this.state.step === "second") ? 'block' : 'none' }}>
                                        <div className="ingridient-section ">
                                            <strong className="part">PART C : </strong>
                                            <div id="wrapper_">
                                                <h4 className="flex-head">List of Ingredients</h4>
                                                <div>
                                                    <div className="table">
                                                        <div className="responsive-table">
                                                            <table className="table table-striped table-bordered ingridient-table">
                                                                <thead>
                                                                    <tr className="ui-state-default">
                                                                        <th>Drag Row</th>
                                                                        <th>Ingredient</th>
                                                                        <th>Proportion (%)</th>
                                                                        <th>Remove</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {this.state.ingredientList.map((shareholder, idx) => (
                                                                        <tr className={idx} key={idx}>
                                                                            <td><i className="fa fa-bars" /></td>
                                                                            <td>
                                                                                <TextField id="outlined-read-helper-text"
                                                                                    label="Ingredients"
                                                                                    value={shareholder.ingredient}
                                                                                    helperText=""
                                                                                    variant="outlined"
                                                                                    placeholder=""
                                                                                    onChange={this.handleShareholderIngredientChange(idx)}
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <TextField
                                                                                    id="outlined-read-helper-text"
                                                                                    value={shareholder.propotion}
                                                                                    label="Proportion"
                                                                                    helperText=""
                                                                                    variant="outlined"
                                                                                    type="Number"
                                                                                    onChange={e => this.handleShareholderPropotionChange(e.target.value,shareholder.ingredient)}
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <button type="button" className="btn btn-danger remove" onClick={this.handleRemoveShareholder(idx)}>
                                                                                    <i className="fas fa-trash-alt"></i>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <th colSpan={4}>
                                                                            <Button id="btnAdd" color="orange" data-toggle="tooltip" data-original-title="Add more controls" onClick={this.handleAddShareholder}>Add New</Button>
                                                                        </th>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right">
                                            <Button color="orange" onClick={e => this.setState({ step: "first" })}>Previous</Button>
                                            <Button color="orange" onClick={(e) => this.setState({ step: "third" })}>Next</Button>
                                        </div>
                                    </div>
                                    <div className="third-step" style={{ display: (this.state.step === "third") ? 'block' : 'none' }}>
                                        <div className="dimention-row">
                                            <strong className="part">PART D : </strong>
                                            <p className="ingredient-text">Are any of the following `compound ingredients`?</p>
                                            {this.state.ingredientList.map((shareholder, idx) => (
                                                <div key={idx} style={{ paddingBottom: "20px" }}>
                                                    <label className="container">
                                                        {shareholder.ingredient}
                                                        <input
                                                            id="checkbox"
                                                            type="checkbox"
                                                            value={shareholder.ingredient}
                                                            onChange={this.checkCompound}
                                                            {...shareholder}
                                                            ischecked={(shareholder.ischecked) ? "checked" : ""}
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <div style={{ display:(shareholder.ischecked === true) ? "block" : "none" }}>
                                                        <p className="ingredient-text" style={{paddingBottom:"10px"}}>List of Ingredients of the compound ingredient (if more than 5% of the food) ?</p>
                                                        <div>
                                                            <TextField id="outlined-read-helper-text"
                                                                style={{ width: "500px" }}
                                                                label="Compoung Ingredient Detail"
                                                                helperText=""
                                                                variant="outlined"
                                                                placeholder=""
                                                                onChange={e => this.compoundValue(e.target.value, shareholder.ingredient) }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                            ))}

                                        </div>
                                        <div className="pull-right">
                                            <Button color="orange" onClick={e => this.setState({ step: "second" })}>Previous</Button>
                                            <Button color="orange" onClick={this.handleSubmit}>Save and Next</Button>
                                        </div>
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
