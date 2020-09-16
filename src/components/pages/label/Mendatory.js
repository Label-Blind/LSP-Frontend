import React, { Component } from 'react'
import { Content, Container, Button } from 'rsuite'
import DashMain from '../../DashMain'
import Sidebar from '../../common/Sidebar'

export default class Mendatory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            part_1: [
                { value: "10% or more polyols", ischecked: false },
                { value: "10% or more polydextrose", ischecked: false },
                { value: "Added caffeine", ischecked: false },
                { value: "Isomaltulose", ischecked: false },
            ],
            ShowFrozenCheckbox: false,
            CommonSalt: false,
            FreshFruit: false,
            // part 2
            maida_treated: false,
            dried_glucose: false,
            fruit_squash: false,
            bakery_and_industrial: false,
            flavour_emulsion: false,
            cheese: false,
            frozen_dessert: false,
            common_salt: false,
            fresh_fruit: false,
            gelatin_meant: false,
            edible_vegetable_oil: false,
            vegetable_fat: false,
            iodisation: false,
            iron_fortification: false,
            animal_use: false,
            medicine: false,
            industrial_use: false,
            wax_name: '',
            // part 3
            pan_masala: false,
            supari: false,
            sweetener_aspartame: false,
            sweetner_name: '',
            table_top_aspartame: false,
            // Part 4
            food_permitted: false,
            non_nutritive_sweetener: false,
            mixture_aspartame: false,
            monosodium_glutamate: false,
            non_nutritive_sweetener_name: '',
            mixture_aspartame_sweetener_name: '',

            // Part 5
            plant_stanol: false,
            plant_sterols: false,
            trehalose: false,
            dextrin_soluble_fibre: false,
            plant_stanol_qty: '',
            plant_sterols_qty: '',

            // part 6
            product_irradiated: false,
            gluten_free: false,
            product_name: '',
            purpose_of_radiation_processing: '',
            operating_licence_no: '',
            batch_identification_no: '',
            date_of_processing: '',

        }
    }

    checkPart1 = event => {
        let part_1 = this.state.part_1
        part_1.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ part_1: part_1 })
    }

    checkPart2 = event => {
        if (event.target.value === "maida_treated") {
            this.setState({ maida_treated: !this.state.maida_treated })
        }
        if (event.target.value === "dried_glucose") {
            this.setState({ dried_glucose: !this.state.dried_glucose })
        }
        if (event.target.value === "fruit_squash") {
            this.setState({ fruit_squash: !this.state.fruit_squash })
        }
        if (event.target.value === "bakery_and_industrial") {
            this.setState({ bakery_and_industrial: !this.state.bakery_and_industrial })
        }
        if (event.target.value === "flavour_emulsion") {
            this.setState({ flavour_emulsion: !this.state.flavour_emulsion })
        }
        if (event.target.value === "cheese") {
            this.setState({ cheese: !this.state.cheese })
        }
        if (event.target.value === "frozen_dessert") {
            this.setState({
                frozen_dessert: !this.state.frozen_dessert,
                ShowFrozenCheckbox: !this.state.ShowFrozenCheckbox
            })
        }
        if (event.target.value === "edible_vegetable_oil") {
            this.setState({
                edible_vegetable_oil: !this.state.edible_vegetable_oil,
            })
        }
        if(event.target.value === "vegetable_fat"){
            this.setState({
                vegetable_fat: !this.state.vegetable_fat,
            })
        }
        if (event.target.value === "common_salt") {
            this.setState({
                common_salt: !this.state.common_salt,
                CommonSalt: !this.state.CommonSalt
            })
        }
        if (event.target.value === "iodisation") {
            this.setState({
                iodisation: !this.state.iodisation,
            })
        }
        if (event.target.value === "iron_fortification") {
            this.setState({
                iron_fortification: !this.state.iron_fortification,
            })
        }
        if (event.target.value === "animal_use") {
            this.setState({
                animal_use: !this.state.animal_use,
            })
        }
        if (event.target.value === "medicine") {
            this.setState({
                medicine: !this.state.medicine,
            })
        }
        if (event.target.value === "industrial_use") {
            this.setState({
                industrial_use: !this.state.industrial_use,
            })
        }
        if (event.target.value === "fresh_fruit") {
            this.setState({
                fresh_fruit: !this.state.fresh_fruit,
                FreshFruit: !this.state.FreshFruit
            })
        }
        if (event.target.value === "gelatin_meant") {
            this.setState({ gelatin_meant: !this.state.gelatin_meant })
        }
        // part 3
        if (event.target.value === "pan_masala") {
            this.setState({ pan_masala: !this.state.pan_masala })
        }
        if (event.target.value === "supari") {
            this.setState({ supari: !this.state.supari })
        }
        if (event.target.value === "sweetener_aspartame") {
            this.setState({
                sweetener_aspartame: !this.state.sweetener_aspartame,
                sweetener: !this.state.sweetener
            })
        }
        if (event.target.value === "table_top_aspartame") {
            this.setState({ table_top_aspartame: !this.state.table_top_aspartame })
        }

        // Part 4
        if (event.target.value === "food_permitted") {
            this.setState({ food_permitted: !this.state.food_permitted })
        }
        if (event.target.value === "non_nutritive_sweetener") {
            this.setState({
                non_nutritive_sweetener: !this.state.non_nutritive_sweetener,
                non_nutritive_sweetener_name: !this.state.non_nutritive_sweetener_name
            })
        }
        if (event.target.value === "mixture_aspartame") {
            this.setState({
                mixture_aspartame: !this.state.mixture_aspartame,
                mixture_aspartame_sweetener: !this.state.mixture_aspartame_sweetener
            })
        }
        if (event.target.value === "monosodium_glutamate") {
            this.setState({ monosodium_glutamate: !this.state.monosodium_glutamate })
        }

        // Part 5
        if (event.target.value === "plant_stanol") {
            this.setState({
                plant_stanol: !this.state.plant_stanol,
            })
        }
        if (event.target.value === "plant_sterols") {
            this.setState({
                plant_sterols: !this.state.plant_sterols,
            })
        }
        if (event.target.value === "trehalose") {
            this.setState({
                trehalose: !this.state.trehalose,
            })
        }
        if (event.target.value === "dextrin_soluble_fibre") {
            this.setState({
                dextrin_soluble_fibre: !this.state.dextrin_soluble_fibre,
            })
        }
        if (event.target.value === "product_irradiated") {
            this.setState({
                product_irradiated: !this.state.product_irradiated,
            })
        }
        if (event.target.value === "gluten_free") {
            this.setState({
                gluten_free: !this.state.gluten_free,
            })
        }
    }

    handleSubmit = e => {
        const postData = {
            package_of_food_containing:this.state.package_of_food_containing, 
            maida_treated:this.state.maida_treated,
            dried_glucose:this.state.dried_glucose,
            fruit_squash:this.state.fruit_squash,
            bakery_and_industrial:this.state.bakery_and_industrial,
            flavour_emulsion:this.state.flavour_emulsion,
            cheese:this.state.cheese,
            frozen_dessert:this.state.frozen_dessert,
            edible_vegetable_oil:this.state.edible_vegetable_oil,
            vegetable_fat:this.state.vegetable_fat,
            common_salt:this.state.common_salt,
            iodisation:this.state.iodisation,
            iron_fortification:this.state.iron_fortification,
            animal_use:this.state.animal_use,
            medicine:this.state.medicine,
            industrial_use:this.state.industrial_use,
            gelatin_meant: this.state.gelatin_meant,
            wax_name: this.state.wax_name,
            pan_masala: this.state.pan_masala,
            supari: this.state.supari,
            sweetener_aspartame: this.state.sweetener_aspartame,
            sweetner_name: this.state.sweetner_name,
            table_top_aspartame: this.state.table_top_aspartame,
            food_permitted: this.state.food_permitted,
            non_nutritive_sweetener: this.state.non_nutritive_sweetener,
            mixture_aspartame: this.state.mixture_aspartame,
            monosodium_glutamate: this.state.monosodium_glutamate,
            non_nutritive_sweetener_name: this.state.non_nutritive_sweetener_name,
            mixture_aspartame_sweetener_name: this.state.mixture_aspartame_sweetener_name,
            plant_stanol: this.state.plant_stanol,
            plant_sterols: this.state.plant_sterols,
            trehalose: this.state.trehalose,
            dextrin_soluble_fibre: this.state.dextrin_soluble_fibre,
            plant_stanol_qty: this.state.plant_stanol_qty,
            plant_sterols_qty: this.state.plant_sterols_qty,
            product_irradiated: this.state.product_irradiated,
            gluten_free: this.state.gluten_free,
            product_name: this.state.product_name,
            purpose_of_radiation_processing: this.state.purpose_of_radiation_processing,
            operating_licence_no: this.state.operating_licence_no,
            batch_identification_no: this.state.batch_identification_no,
            date_of_processing: this.state.date_of_processing,
        }
        console.log(postData);     
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
                                    <strong>Mendatory Declarations : </strong>
                                </div>
                                <div className="dimention-row">
                                    <strong className="part">PART 1</strong>
                                    <div>Every package of food containing the following ingredients/additives shall bear the following declarations on the label in a rectangular box </div>
                                    {this.state.part_1.map((shareholder, idx) => (
                                        <div key={idx}><label className="container">
                                            {shareholder.value}
                                            <input
                                                id="checkbox"
                                                type="checkbox"
                                                onChange={this.checkPart1}
                                                value={shareholder.value}
                                                checked={(shareholder.ischecked === true) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label></div>
                                    ))}
                                </div>
                                <div className="dimention-row">
                                    <strong className="part">PART 2</strong>
                                    <div>Every package containing the following articles of food shall bear the following declarations on the label in a rectangular box – </div>
                                    <div key="1">
                                        <label className="container">
                                            Maida treated with improver or bleaching agents
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="maida_treated"
                                                onChange={this.checkPart2}
                                                checked={(this.state.maida_treated) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div key="2">
                                        <label className="container">
                                            Dried Glucose Syrup containing sulphur dioxide exceeding 40 ppm
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="dried_glucose"
                                                onChange={this.checkPart2}
                                                checked={(this.state.dried_glucose) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div key="3">
                                        <label className="container">
                                            Fruit squash by whatever name it is sold, containing additional sodium or potassium salt
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="fruit_squash"
                                                onChange={this.checkPart2}
                                                checked={(this.state.fruit_squash) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div key="4">
                                        <label className="container">
                                            Bakery and Industrial Margarine made from more than 30 per cent of Rice Bran Oil
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="bakery_and_industrial"
                                                onChange={this.checkPart2}
                                                checked={(this.state.bakery_and_industrial) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div key="5">
                                        <label className="container">
                                            Flavour emulsion and flavour paste meant for use in carbonated or non-carbonated beverages
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="flavour_emulsion"
                                                onChange={this.checkPart2}
                                                checked={(this.state.flavour_emulsion) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div key="6">
                                        <label className="container">
                                            Cheese(s), if coated/packed in food grade waxes
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="cheese"
                                                onChange={this.checkPart2}
                                                checked={(this.state.cheese) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div key="7">
                                        <label className="container">
                                            Frozen Dessert/Frozen Confection
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="frozen_dessert"
                                                onChange={this.checkPart2}
                                                checked={(this.state.frozen_dessert) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="inline-flex" style={{ display: this.state.ShowFrozenCheckbox ? 'block' : 'none' }}>
                                            <label className="container">
                                                Edible Vegetable Oil
                                                    <input
                                                    id="checkbox"
                                                    type="checkbox"
                                                    onChange={this.checkPart2}
                                                    value="edible_vegetable_oil"
                                                    checked={(this.state.edible_vegetable_oil) ? "checked" : ""}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">
                                                Vegetable FAT
                                                    <input
                                                    id="checkbox"
                                                    type="checkbox"
                                                    value="vegetable_fat"
                                                    onChange={this.checkPart2}
                                                    checked={(this.state.vegetable_fat) ? "checked" : ""}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div key="8">
                                        <label className="container">
                                            Common Salt
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="common_salt"
                                                onChange={this.checkPart2}
                                                checked={(this.state.common_salt) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="inline-flex" style={{ display: this.state.CommonSalt ? 'block' : 'none' }}>
                                            <label className="container">
                                                Common salt for iodisation
                                                    <input
                                                    id="checkbox"
                                                    type="checkbox"
                                                    value="iodisation"
                                                    onChange={this.checkPart2}
                                                    checked={(this.state.iodisation) ? "checked" : ""}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">
                                                Iron Fortification
                                                    <input
                                                    id="checkbox"
                                                    type="checkbox"
                                                    value="iron_fortification"
                                                    onChange={this.checkPart2}
                                                    checked={(this.state.iron_fortification) ? "checked" : ""}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">
                                                Animal Use
                                                    <input
                                                    id="checkbox"
                                                    type="checkbox"
                                                    value="animal_use"
                                                    onChange={this.checkPart2}
                                                    checked={(this.state.animal_use) ? "checked" : ""}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">
                                                Medicine
                                                    <input
                                                    id="checkbox"
                                                    type="checkbox"
                                                    onChange={this.checkPart2}
                                                    value="medicine"
                                                    checked={(this.state.medicine) ? "checked" : ""}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">
                                                Industrial Use
                                                    <input
                                                    id="checkbox"
                                                    type="checkbox"
                                                    value="industrial_use"
                                                    onChange={this.checkPart2}
                                                    checked={(this.state.industrial_use) ? "checked" : ""}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div key="9">
                                        <label className="container">
                                            Fresh fruit if coated with wax
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="fresh_fruit"
                                                onChange={this.checkPart2}
                                                checked={(this.state.fresh_fruit) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="inline-flex" style={{ display: this.state.FreshFruit ? 'block' : 'none' }}>
                                            Name of Wax :
                                                <input type="text" className="wax_name" name="wax_name" onChange={e => this.setState({ wax_name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div key="10">
                                        <label className="container">
                                            Gelatin meant for human consumption
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="gelatin_meant"
                                                onChange={this.checkPart2}
                                                checked={(this.state.gelatin_meant) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>

                                </div>
                                <div className="dimention-row">
                                    <strong className="part">PART 3</strong>
                                    <div>Every package containing the following articles of food and advertisement relating thereto shall carry the warning and/or declaration, in a rectangular box</div>
                                    <div>
                                        <label className="container">
                                            Pan Masala
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="pan_masala"
                                                onChange={this.checkPart2}
                                                checked={(this.state.pan_masala) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="container">
                                            Supari
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="supari"
                                                onChange={this.checkPart2}
                                                checked={(this.state.supari) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="container">
                                            Aspartame (Methyl ester), Acesulfame Potassium, Sucralose and Saccharin Sodium, Neotame marketed as “Table Top Sweetener”
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="sweetener_aspartame"
                                                onChange={this.checkPart2}
                                                checked={(this.state.sweetener_aspartame) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="inline-flex" style={{ display: this.state.sweetener ? 'block' : 'none' }}>
                                            Name of Sweetener :
                                                <input type="text" className="wax_name" name="sweetner_name" onChange={e => this.setState({ sweetner_name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="container">
                                            Aspartame (Methyl ester), marketed as “Table Top Sweetener”
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="table_top_aspartame"
                                                onChange={this.checkPart2}
                                                checked={(this.state.table_top_aspartame) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="dimention-row">
                                    <strong className="part">PART 4</strong>
                                    <div>Every package of food containing the following ingredients/additives and advertisement relating thereto shall carry the following warning and declaration, in a rectangular box</div>
                                    <div>
                                        <label className="container">
                                            My food product is permitted to contain artificial sweetener as mentioned in Food Safety and Standards (Food Products standards and Food Additive) Regulations, 2011
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="food_permitted"
                                                onChange={this.checkPart2}
                                                checked={(this.state.food_permitted) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="container">
                                            Artificial/non-nutritive sweeteners mentioned in Food Safety and standards (Food Products Standards and Food Additive) Regulations, 2011
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="non_nutritive_sweetener"
                                                onChange={this.checkPart2}
                                                checked={(this.state.non_nutritive_sweetener) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="inline-flex" style={{ display: this.state.non_nutritive_sweetener_name ? 'block' : 'none' }}>
                                            Name of the Artificial/Non-Nutritive Sweeteners :
                                                <input type="text" className="wax_name" onChange={e => this.setState({ non_nutritive_sweetener_name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="container">
                                            Mixture of Aspartame (Methyl Ester) and Acesulfame Potassium Sweeteners mentioned in Food Safety and Standards (Food Products Standards and Food Additive) Regulations, 2011
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="mixture_aspartame"
                                                onChange={this.checkPart2}
                                                checked={(this.state.mixture_aspartame) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="inline-flex" style={{ display: this.state.mixture_aspartame_sweetener ? 'block' : 'none' }}>
                                            Name of the Artificial/Non-Nutritive Sweeteners :
                                                <input type="text" className="wax_name" onChange={e => this.setState({ mixture_aspartame_sweetener_name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="container">
                                            Monosodium Glutamate
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="monosodium_glutamate"
                                                onChange={this.checkPart2}
                                                checked={(this.state.monosodium_glutamate) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="dimention-row">
                                    <strong className="part">PART 5</strong>
                                    <div>My products contains the following –</div>
                                    <div>
                                        <label className="container">
                                            Plant Stanol Esters
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="plant_stanol"
                                                onChange={this.checkPart2}
                                                checked={(this.state.plant_stanol) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="inline-flex" style={{ display: this.state.plant_stanol ? 'block' : 'none' }}>
                                            Quantity:
                                                <input type="number" className="wax_name" onChange={e => this.setState({ plant_stanol_qty: e.target.value })} />
                                                gm per 100 gm / ml
                                            </div>
                                    </div>
                                    <div>
                                        <label className="container">
                                            Plant Sterols
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="plant_sterols"
                                                onChange={this.checkPart2}
                                                checked={(this.state.plant_sterols) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="inline-flex" style={{ display: this.state.plant_sterols ? 'block' : 'none' }}>
                                            Quantity:
                                                <input type="number" className="wax_name" onChange={e => this.setState({ plant_sterols_qty: e.target.value })} />
                                                gm per 100 gm / ml
                                            </div>
                                    </div>
                                    <div>
                                        <label className="container">
                                            Trehalose
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="trehalose"
                                                onChange={this.checkPart2}
                                                checked={(this.state.trehalose) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="container">
                                            Dextrin soluble Fibre
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="dextrin_soluble_fibre"
                                                onChange={this.checkPart2}
                                                checked={(this.state.dextrin_soluble_fibre) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="dimention-row">
                                    <strong className="part">PART 6</strong>
                                    <div>
                                        <label className="container">
                                            My products is IRRADIATED
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="product_irradiated"
                                                onChange={this.checkPart2}
                                                checked={(this.state.product_irradiated) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="inline-flex" style={{ display: this.state.product_irradiated ? 'block' : 'none' }}>
                                            Name of the Product:
                                                <input type="text" className="wax_name" onChange={e => this.setState({ product_name: e.target.value })} />
                                        </div>
                                        <div className="inline-flex" style={{ display: this.state.product_irradiated ? 'block' : 'none' }}>
                                            Purpose of Radiation Processing:
                                                <input type="text" className="wax_name" onChange={e => this.setState({ purpose_of_radiation_processing: e.target.value })} />
                                        </div>
                                        <div className="inline-flex" style={{ display: this.state.product_irradiated ? 'block' : 'none' }}>
                                            Operating License No.:
                                                <input type="text" className="wax_name" onChange={e => this.setState({ operating_licence_no: e.target.value })} />
                                        </div>
                                        <div className="inline-flex" style={{ display: this.state.product_irradiated ? 'block' : 'none' }}>
                                            Batch Identification No. (BIN) (as provided by facility):
                                                <input type="text" className="wax_name" onChange={e => this.setState({ batch_identification_no: e.target.value })} />
                                        </div>
                                        <div className="inline-flex" style={{ display: this.state.product_irradiated ? 'block' : 'none' }}>
                                            Date of Processing:
                                                <input type="text" className="wax_name" onChange={e => this.setState({ date_of_processing: e.target.value })} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="container">
                                            My products is GLUTEN FREE
                                                <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="gluten_free"
                                                onChange={this.checkPart2}
                                                checked={(this.state.gluten_free) ? "checked" : ""}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
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
