import React, { Component } from 'react'
import Sidebar from '../../common/Sidebar'
import DashMain from '../../DashMain';
import { Content, Container, Button } from 'rsuite';

export default class NutritionInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            serving_size: '',
            mendatory_nutrition: [
                { name: "Energy (kcals)", value: '', serve: '' },
                { name: "Protein (g)", value: '', serve: '' },
                { name: "Carbohydrate (g)", value: '', serve: '' },
                { name: "Sugars (g)", value: '', serve: '' },
                { name: "Added Sugar (g)", value: '', serve: '' },
                { name: "Total Fat (g)", value: '', serve: '' },
                { name: "Sat Fat (g)", value: '', serve: '' },
                { name: "*MUFA (g)", value: '', serve: '' },
                { name: "*PUFA (g)", value: '', serve: '' },
                { name: "*Omega 3 fatty acids (g)", value: '', serve: '' },
                { name: "*Omega 6 fatty acids (g)", value: '', serve: '' },
                { name: "Trans Fat (g)", value: '', serve: '' },
                { name: "Cholesterol (mg)", value: '', serve: '' },
                { name: "Sodium", value: '', serve: '' },
            ],
            non_mendatory_nutrition: [
                { name: "Dietary Fibre", value: '', serve: '' },
                { name: "Calcium", value: '', serve: '' },
                { name: "Iron", value: '', serve: '' },
                { name: "Zinc", value: '', serve: '' },
                { name: "Vitamin A", value: '', serve: '' },
                { name: "Vitamin D", value: '', serve: '' },
                { name: "Vitamin C", value: '', serve: '' },
            ],
            non_mendatory_nutrition_add: [
                { value: '', name: "", serve: "" },
            ],
            lab_report: 'null',
            table_type: '',
            step: 'first',

        }
    }

    componentDidMount() {
    }

    setMendatoryValue = (dt, val) => {
        let mendatory_nutrition = this.state.mendatory_nutrition;
        mendatory_nutrition.forEach(fruite => {
            if (fruite.name === val) {
                fruite.value = dt
            }
        })
        this.setState({ mendatory_nutrition: mendatory_nutrition })
    };

    setMendatoryServe = (dt, val) => {
        let mendatory_nutrition = this.state.mendatory_nutrition;
        mendatory_nutrition.forEach(fruite => {
            if (fruite.name === val) {
                fruite.serve = dt
            }
        })
        this.setState({ mendatory_nutrition: mendatory_nutrition })
    };

    // Non Mendatory
    setNonMendatoryValue = (dt, val) => {
        let non_mendatory_nutrition = this.state.non_mendatory_nutrition;
        non_mendatory_nutrition.forEach(fruite => {
            if (fruite.name === val) {
                fruite.value = dt
            }
        })
        this.setState({ non_mendatory_nutrition: non_mendatory_nutrition })
    };

    setNonMendatoryServe = (dt, val) => {
        let non_mendatory_nutrition = this.state.non_mendatory_nutrition;
        non_mendatory_nutrition.forEach(fruite => {
            if (fruite.name === val) {
                fruite.serve = dt
            }
        })
        this.setState({ non_mendatory_nutrition: non_mendatory_nutrition })
    };

    // Add Non Mendatory Values
    handleExtraValName(e, id) {
        let non_mendatory_nutrition_add = this.state.non_mendatory_nutrition_add;
        non_mendatory_nutrition_add[id].name = e.target.value;

        this.setState({ non_mendatory_nutrition_add: non_mendatory_nutrition_add })
    }

    handleExtraValValue(e, id) {
        let non_mendatory_nutrition_add = this.state.non_mendatory_nutrition_add;
        non_mendatory_nutrition_add[id].value = e.target.value;

        this.setState({ non_mendatory_nutrition_add: non_mendatory_nutrition_add })
    }
    handleExtraValServe(e, id) {
        let non_mendatory_nutrition_add = this.state.non_mendatory_nutrition_add;
        non_mendatory_nutrition_add[id].serve = e.target.value;

        this.setState({ non_mendatory_nutrition_add: non_mendatory_nutrition_add })
    }

    handleAddShareholder = () => {
        this.setState({
            non_mendatory_nutrition_add: this.state.non_mendatory_nutrition_add.concat([{ value: "", name: "", serve: "" }])
        });
    };

    handleRemoveShareholder = idx => () => {
        this.setState({
            ingredientList: this.state.ingredientList.filter((s, sidx) => idx !== sidx)
        });
    };

    handleChange(object) {
        this.setState(object);
    }

    handleSubmit = evt => {
        let postData = {
            serving_size: this.state.serving_size,
            mendatory_nutrient: this.state.mendatory_nutrition,
            non_mendatory_nutrient: this.state.non_mendatory_nutrition,
            non_mendatory_nutrient_extra: this.state.non_mendatory_nutrition_add,
            lab_report: this.state.lab_report,
            table_type: this.state.table_type,
        }
        console.log(postData);
    };

    uploadReport = (event) => {
        this.setState({
            lab_report: event.target.files[0]
        })
        var fileName = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("preview-report");
        var previewImg = document.createElement("img");
        previewImg.setAttribute("height", "140px");
        previewImg.setAttribute("width", "140px");
        previewImg.setAttribute("src", fileName);
        preview.innerHTML = "";
        preview.appendChild(previewImg);
    }

    drag = () => {
        document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
    }
    drop = () => {
        document.getElementById('uploadFile').parentNode.className = 'dragBox';
    }

    changeType = e => {
        if (e.target.value === "table") {
            this.setState({
                table: true,
                pree_formatted: false,
                table_type: "table"
            })
        }
        if (e.target.value === "pre-formatted") {
            this.setState({
                table: false,
                pree_formatted: true,
                table_type: "pre-formatted"
            })
        }
    }

    render() {
        return (
            <DashMain>
                <Container>
                    <Sidebar />
                    <Content className="content-section">
                        <div className="top_bx row">
                            <div className="col-xs-12 col-sm-12">
                                <div className="dimention-row">
                                    <strong>Nutrition Information : </strong>
                                </div>
                                <div style={{ display: (this.state.step === 'first') ? 'block' : 'none' }}>
                                    <div className="dimention-row inline-textbox">
                                        <strong className="text-title">Serving Size : </strong>&nbsp;&nbsp;
                                        <input
                                            id="outlined-read-helper-text"
                                            label="Serving Size"
                                            variant="outlined"
                                            type="Number"
                                            onChange={(e) => this.handleChange({ serving_size: e.target.value })}
                                        />&nbsp;&nbsp;
                                        <select>
                                            <option value="GM">GM</option>
                                            <option value="ML">ML</option>
                                        </select>
                                    </div>
                                    <div className="dimention-row inline-textbox">
                                        <div>
                                            <div className="uploadOuter">
                                                <span className="dragBox">
                                                    Upload Lab Report with Nutrition Values
                                                    <input type="file" onChange={this.uploadReport} onDragOver={this.drag} onDrop={this.drop} id="uploadFile" />
                                                </span>
                                            </div>
                                            <div id="preview"></div>
                                        </div>
                                        <div style={{ marginTop: "4%" }}>
                                            <span className="uploadOuter"><b>OR</b></span>
                                        </div>
                                        <div>
                                            <a href="http://3.16.180.84:4000/" target="_blank">
                                                <div className="uploadOuter">
                                                    <Button color="orange" style={{ marginTop: "10%" }}>
                                                        Calculate approx. Nutrition Values for my product
                                                    </Button>
                                                </div>
                                            </a>
                                        </div>
                                        <div id="preview-report"></div>
                                    </div>
                                    <div className="dimention-row">
                                        <p className="ingredient-text"><b>Please fill the values of the nutrients present per 100g/100 ml of the product.</b></p>
                                        <p className="ingredient-text">(Please take note of the units while entering the values. The nutrients shall have the tolerance of maximum minus (-) 10% of the value declared within the shelf life of the product)</p>
                                    </div>
                                    <div className="dimention-row">
                                        <div className="table">
                                            <div className="responsive-table">
                                                <table className="table table-striped table-bordered ingridient-table">
                                                    <thead>
                                                        <tr className="ui-state-default">
                                                            <th>Mandatory Nutrients</th>
                                                            <th>Per 100 gm/ml</th>
                                                            <th>Per Serve	</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.mendatory_nutrition.map((data, idx) => (
                                                            <tr className={idx} key={idx}>
                                                                <td>{data.name}</td>
                                                                <td>
                                                                    <input
                                                                        id="serving"
                                                                        label="Serving Size"
                                                                        variant="outlined"
                                                                        type="Number"
                                                                        onChange={(e) => this.setMendatoryValue(e.target.value, data.name)}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        id="serving"
                                                                        label="Serving Size"
                                                                        variant="outlined"
                                                                        type="Number"
                                                                        onChange={(e) => this.setMendatoryServe(e.target.value, data.name)}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th colSpan={3}>
                                                                <p className="ingredient-text">*Optional here,  but will be mandatory FOR edible oils, interesterified vegetable fat, both hydrogenated or partially hydrogenated oils, edible fats, margarine and fat spreads (mixed fat spread and vegetable fat spread) and package of food in which fats, oils and fat emulsions is used as an ingredient</p>
                                                            </th>
                                                        </tr>

                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dimention-row">
                                        <div className="table">
                                            <div className="responsive-table">
                                                <table className="table table-striped table-bordered ingridient-table">
                                                    <thead>
                                                        <tr className="ui-state-default">
                                                            <th>Non Mandatory Nutrients</th>
                                                            <th>Per 100 gm/ml</th>
                                                            <th>Per Serve	</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.non_mendatory_nutrition.map((data, idx) => (
                                                            <tr className={idx} key={idx}>
                                                                <td>{data.name}</td>
                                                                <td>
                                                                    <input
                                                                        id="serving"
                                                                        label="Serving Size"
                                                                        variant="outlined"
                                                                        type="Number"
                                                                        onChange={(e) => this.setNonMendatoryValue(e.target.value, data.name)}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        id="serving"
                                                                        label="Serving Size"
                                                                        variant="outlined"
                                                                        type="Number"
                                                                        onChange={(e) => this.setNonMendatoryServe(e.target.value, data.name)}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        {this.state.non_mendatory_nutrition_add.map((data, idx) => (
                                                            <tr className={idx} key={idx}>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        onChange={(e) => this.handleExtraValName(e, idx)}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        id="serving"
                                                                        label="Serving Size"
                                                                        variant="outlined"
                                                                        type="Number"
                                                                        onChange={(e) => this.handleExtraValValue(e, idx)}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        id="serving"
                                                                        label="Serving Size"
                                                                        variant="outlined"
                                                                        type="Number"
                                                                        onChange={(e) => this.handleExtraValServe(e, idx)}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th colSpan={3}>
                                                                <Button id="btnAdd" color="orange" data-toggle="tooltip" data-original-title="Add more controls" onClick={this.handleAddShareholder}>Add New</Button>
                                                            </th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-nutrient text-center" onClick={e => this.setState({ step: "second" })}>
                                        <p>SHOW PRODUCT NUTRITION TABLE</p>
                                    </div>
                                </div>
                                <div style={{ display: (this.state.step === 'second') ? 'block' : 'none' }}>
                                    <table className="table table-striped table-bordered ingridient-table text-center">
                                        <thead>
                                            <tr>
                                                <th>Nutrition Information</th>
                                                <th>Per 100 gm</th>
                                                <th>Per Serve</th>
                                                <th>%DV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Energy (kcals)</td>
                                                <td>364</td>
                                                <td></td>
                                                <td>18.2%</td>
                                            </tr>
                                            <tr>
                                                <td>Carbohydrate (g)</td>
                                                <td>59</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Total Sugars (g)</td>
                                                <td>4</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Added Sugars (g)</td>
                                                <td>2</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Added Sugar (sucrose) (g)</td>
                                                <td>2</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Dietary Fibre (g)</td>
                                                <td>3</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Protein (g)</td>
                                                <td>9</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Total Fat (g)</td>
                                                <td>30</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Saturated Fat (g)</td>
                                                <td>14</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>MUFA (g)</td>
                                                <td>8</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>PUFA (g)</td>
                                                <td>8</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Cholesterol (mg)</td>
                                                <td>40</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Trans Fat (g)</td>
                                                <td>0.1</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Sodium (mg)</td>
                                                <td>687.9</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="pull-right">
                                        <Button color="orange" onClick={e => this.setState({ step: "first" })}>previous</Button>
                                        <Button color="orange" onClick={e => this.setState({ step: "third" })}>Next</Button>
                                    </div>
                                </div>
                                <div style={{ display: (this.state.step === 'third') ? 'block' : 'none' }}>
                                    <div className="dimention-row">
                                        <strong>Select Table</strong>
                                        <br></br>
                                        <label className="container">
                                            Table
                                            <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="table"
                                                onChange={this.changeType}
                                                checked={(this.state.table) ? 'checked' : ''}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            Pre-Formatted Table
                                            <input
                                                id="checkbox"
                                                type="checkbox"
                                                value="pre-formatted"
                                                onChange={this.changeType}
                                                checked={(this.state.pree_formatted) ? 'checked' : ''}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="multi-table row">
                                        <div className="col-sm-4">
                                            <table className="table table-striped table-bordered ingridient-table text-center">
                                                <thead>
                                                    <tr>
                                                        <th>Nutrition Information</th>
                                                        <th>Per 100 gm</th>
                                                        <th>Per Serve</th>
                                                        <th>%DV</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Energy (kcals)</td>
                                                        <td>364</td>
                                                        <td></td>
                                                        <td>18.2%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Carbohydrate (g)</td>
                                                        <td>59</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Sugars (g)</td>
                                                        <td>4</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Added Sugars (g)</td>
                                                        <td>2</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Added Sugar (sucrose) (g)</td>
                                                        <td>2</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dietary Fibre (g)</td>
                                                        <td>3</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Protein (g)</td>
                                                        <td>9</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Fat (g)</td>
                                                        <td>30</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Saturated Fat (g)</td>
                                                        <td>14</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>MUFA (g)</td>
                                                        <td>8</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>PUFA (g)</td>
                                                        <td>8</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cholesterol (mg)</td>
                                                        <td>40</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Trans Fat (g)</td>
                                                        <td>0.1</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sodium (mg)</td>
                                                        <td>687.9</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-sm-3">
                                            <section className="nutritionLabel">
                                                <h1>Nutrition Facts</h1>
                                                <div className="cf">
                                                    <div className="rel servingSizeField">
                                                        <div className="setter">
                                                            <a href="Increase the quantity" className="unitQuantityUp" rel="nofollow" />
                                                            <a href="Decrease the quantity" className="unitQuantityDown" rel="nofollow" />
                                                        </div>{/* closing class="setter" */}
                                                        <input type="text" defaultValue={1} className="unitQuantityBox" />
                                                    </div>{/* closing class="servingSizeField" */}
                                                    <div className="name inline">Item / Ingredient Name</div>
                                                </div>{/* closing class="cf" */}
                                                <div className="serving">
                                                    <div className="cf">
                                                        <div className="servingSizeText fl">Serving Size</div>
                                                        <div className="servingUnitQuantity fl">1/2 cup</div>
                                                    </div>{/* closing class="cf" */}
                                                </div>{/* closing class="serving" */}
                                                <div className="bar1" />
                                                <div className="nutri-line m"><b>Amount Per Serving</b></div>
                                                <div className="line">
                                                    <div className="fr">Calories from Fat 0</div>
                                                    <div><b>Calories</b> 0</div>
                                                </div>
                                                <div className="bar2" />
                                                <div className="nutri-line ar"><b>% Daily Value<sup>*</sup></b></div>
                                                <div className="line">
                                                    <div className="dv"><b>0</b>%</div>
                                                    <b>Total Fat</b> 0g</div>
                                                <div className="nutri-line indent">
                                                    <div className="dv"><b>0</b>%</div>
                                                    Saturated Fat 0g
                                                    </div>
                                                <div className="nutri-line indent">
                                                    <i>Trans</i> Fat 0g
                                                    </div>
                                                <div className="nutri-line indent">Polyunsaturated Fat 0g</div>
                                                <div className="nutri-line indent">Monounsaturated Fat 0g	</div>
                                                <div className="line">
                                                    <div className="dv"><b>0</b>%</div>
                                                    <b>Cholesterol</b> 0mg
                                                    </div>
                                                <div className="line">
                                                    <div className="dv"><b>0</b>%</div>
                                                    <b>Sodium</b> 0mg
                                                    </div>
                                                <div className="line">
                                                    <div className="dv"><b>0</b>%</div>
                                                    <b>Total Carbohydrates</b> 0g
                                                    </div>
                                                <div className="nutri-line indent">
                                                    <div className="dv"><b>0</b>%</div>
                                                    Dietary Fiber 0g
                                                    </div>
                                                <div className="nutri-line indent">Sugars 0g</div>
                                                <div className="line"><b>Protein</b> 0g</div>
                                                <div className="bar1" />
                                                <div className="nutri-line vitaminA">
                                                    <div className="dv">0%</div>
                                                    Vitamin A
                                                    </div>
                                                <div className="nutri-line vitaminC">
                                                    <div className="dv">0%</div>
                                                    Vitamin C
                                                    </div>
                                                <div className="nutri-line calcium">
                                                    <div className="dv">0%</div>
                                                    Calcium
                                                    </div>
                                                <div className="nutri-line iron">
                                                    <div className="dv">0%</div>
                                                    Iron
                                                </div>
                                                <div className="dvCalorieDiet line">
                                                    <div className="calorieNote">
                                                        <span className="star">*</span> Percent Daily Values are based on a 2000 calorie diet.
                                                        <br />
                                                        <div className="ingredientListDiv">
                                                            <b className="active" id="ingredientList">INGREDIENTS:</b>
                                                            None
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="naTooltip">Data not available</div>
                                            </section>
                                        </div>
                                        <div className="col-sm-5">
                                            <section className="nutritionLabel">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h3>Nutrition Facts</h3>
                                                        <div className="cf">
                                                            <div className="name inline"> 1 Item / Ingredient Name</div>
                                                        </div>{/* closing class="cf" */}
                                                        <div className="serving">
                                                            <div className="cf">
                                                                <div className="servingSizeText fl">Serving Size</div>
                                                                <div className="servingUnitQuantity fl">1/2 cup</div>
                                                            </div>{/* closing class="cf" */}
                                                        </div>{/* closing class="serving" */}
                                                        <div className="bar1" />
                                                        <div className="dvCalorieDiet line">
                                                            <div className="calorieNote">
                                                                <span className="star">*</span> Percent Daily Values are based on a 2000 calorie diet.
                                                                <br />
                                                                <div className="ingredientListDiv">
                                                                    <b className="active" id="ingredientList">INGREDIENTS:</b>None
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="naTooltip">Data not available</div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="bar1" />
                                                        <div className="nutri-line m"><b>Amount Per Serving</b></div>
                                                        <div className="line">
                                                            <div className="fr">Calories from Fat 0</div>
                                                            <div><b>Calories</b> 0</div>
                                                        </div>
                                                        <div className="bar2" />
                                                        <div className="nutri-line ar"><b>% Daily Value<sup>*</sup></b></div>
                                                        <div className="line">
                                                            <div className="dv"><b>0</b>%</div>
                                                            <b>Total Fat</b> 0g</div>
                                                            <div className="nutri-line indent">
                                                            <div className="dv"><b>0</b>%</div>
                                                            Saturated Fat 0g
                                                        </div>
                                                        <div className="nutri-line indent"><i>Trans</i> Fat 0g</div>
                                                        <div className="nutri-line indent">Polyunsaturated Fat 0g</div>
                                                        <div className="nutri-line indent">Monounsaturated Fat 0g	</div>
                                                        <div className="line">
                                                            <div className="dv"><b>0</b>%</div>
                                                            <b>Cholesterol</b> 0mg
                                                        </div>
                                                        <div className="line">
                                                            <div className="dv"><b>0</b>%</div>
                                                            <b>Sodium</b> 0mg
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="line">
                                                            <div className="dv"><b>0</b>%</div>
                                                            <b>Total Carbohydrates</b> 0g
                                                    </div>
                                                        <div className="nutri-line indent">
                                                            <div className="dv"><b>0</b>%</div>
                                                    Dietary Fiber 0g
                                                    </div>
                                                        <div className="nutri-line indent">Sugars 0g</div>
                                                        <div className="line"><b>Protein</b> 0g</div>
                                                        <div className="bar1" />
                                                        <div className="nutri-line vitaminA">
                                                            <div className="dv">0%</div>
                                                            Vitamin A
                                                        </div>
                                                        <div className="nutri-line vitaminC">
                                                            <div className="dv">0%</div>
                                                            Vitamin C
                                                        </div>
                                                        <div className="nutri-line calcium">
                                                            <div className="dv">0%</div>
                                                            Calcium
                                                        </div>
                                                        <div className="nutri-line iron">
                                                            <div className="dv">0%</div>
                                                            Iron
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <Button color="orange" onClick={(e) => this.setState({ step: "first" })}>Edit</Button>
                                        <Button color="orange" onClick={this.handleSubmit}>Save and Next</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Container>
            </DashMain >
        )
    }
}
