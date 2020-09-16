import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import ApiProvider from './ApiProvider'
import { toast } from 'react-toastify'
import { Sidenav, Nav, Dropdown, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export default class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            dashboardMenu: true,
            NewLabelMenu: false,
            IncompleteMenu: false,
            CompleteMenu: false,
            FSSAIREGMenu: false,
            HowMenu: false,
            HelpMenu: false,
            LabelLayout: false,
            CategoryLayout: false,
            FoodLayout: false,
            IngredientLayout: false,
            AllergensLayout: false,
            AdditivesLayout: false,
            NutriInfoLayout: false,
            VegNonVegLayout: false,
            foodAdditives: false,
            mendatoryLayout: false,
            open: true,
            sidebarOpen: '',
        }
    }

    componentDidMount() {
        const currentLocation = window.location.href;
        var path = currentLocation.split("/");
        // console.log(path[5])
        if (path[4] === "dashboard") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: true,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
            })
        }
        else if (path[4] === "new-label") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: true,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                sidebarOpen: 3
            })
        }
        else if (path[4] === "complete-labels") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: true,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
            })
        }
        else if (path[4] === "incomplete-labels") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: true,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
            })
        }
        else if (path[5] === "label-layouts") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: true,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: true,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                sidebarOpen: 3
            })
        }
        else if (path[5] === "selection-of-categories-or-subcategories") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: true,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: true,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
            })
        }
        else if (path[5] === "name-of-foods") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: true,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: true,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
            })
        }
        else if (path[5] === "list-of-ingredients") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: true,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: true,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
            })
        }
        else if (path[5] === "allergens") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: true,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: true,
                AdditivesLayout: false,
                NutriInfoLayout: false,
            })
        }
        else if (path[5] === "additives") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: true,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: true,
                NutriInfoLayout: false,
            })
        }
        else if (path[5] === "nutrition-informations") {
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: true,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: true,
                accountMenu: false,
            })
        }
        else if (path[5] === "declaration-of-veg-non-veg"){
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                accountMenu: false,
                VegNonVegLayout: true
            });
        }
        else if (path[5] === "food-additives"){
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                accountMenu: false,
                VegNonVegLayout: false,
                foodAdditives: true,
            });
        }
        else if (path[5] === "mendatory-declaration"){
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                accountMenu: false,
                VegNonVegLayout: false,
                foodAdditives: false,
                mendatoryLayout: true
            });
        }
        else if (path[5] === "name-and-complete-address"){
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                accountMenu: false,
                VegNonVegLayout: false,
                foodAdditives: false,
                mendatoryLayout: false,
                addressLayout: true
            });
        }
        else if (path[5] === "fotified-or-organic"){
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                accountMenu: false,
                VegNonVegLayout: false,
                foodAdditives: false,
                mendatoryLayout: false,
                addressLayout: false,
                fotifiedLayout: true,
                consumerLayout: false,
                dateLayout: false,
                instructionLayout: false,
            });
        }
        else if (path[5] === "consumer-care-details"){
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                accountMenu: false,
                VegNonVegLayout: false,
                foodAdditives: false,
                mendatoryLayout: false,
                addressLayout: false,
                fotifiedLayout: false,
                consumerLayout: true,
                dateLayout: false,
                instructionLayout: false,
            });
        }
        else if (path[5] === "date-marketing"){
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                accountMenu: false,
                VegNonVegLayout: false,
                foodAdditives: false,
                mendatoryLayout: false,
                addressLayout: false,
                fotifiedLayout: false,
                consumerLayout: false,
                dateLayout: true,
                instructionLayout: false,
            });
        }
        else if (path[5] === "instruction-of-use"){
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                accountMenu: false,
                VegNonVegLayout: false,
                foodAdditives: false,
                mendatoryLayout: false,
                addressLayout: false,
                fotifiedLayout: false,
                consumerLayout: false,
                dateLayout: false,
                instructionLayout: true,
            });
        }
        else if (path[5] === "preview"){
            this.setState({
                dashboardMenu: false,
                NewLabelMenu: false,
                IncompleteMenu: false,
                CompleteMenu: false,
                FSSAIREGMenu: false,
                HowMenu: false,
                HelpMenu: false,
                // -----Label-----
                LabelLayout: false,
                CategoryLayout: false,
                FoodLayout: false,
                IngredientLayout: false,
                AllergensLayout: false,
                AdditivesLayout: false,
                NutriInfoLayout: false,
                accountMenu: false,
                VegNonVegLayout: false,
                foodAdditives: false,
                mendatoryLayout: false,
                addressLayout: false,
                fotifiedLayout: false,
                consumerLayout: false,
                dateLayout: false,
                instructionLayout: false,
                previewLayout: true,
            });
        }
        else{

        }
    }

    logOut = () => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const postData = {
            token: this.state.token,
        };
        Axios.post(ApiProvider.endpoint + `/logout`, postData, {
            headers: headers
        })
            .then(res => {
                localStorage.clear("access_token");
                this.setState({ redirect: true })
                toast.success(res.data.message);
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        if (this.state.redirect) {
            return <Redirect to="/business-operator/login" />;
        }
        return (
            <div className="sidebar-menu">
                <Sidenav defaultOpenKeys={['3']} activeKey="1" >
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />} componentClass={Link} to={`/user-dashboard`} className={this.state.dashboardMenu ? "active-sidebar" : ""}>
                                Dashboard
                                </Nav.Item>

                            <Dropdown eventKey="2" title="My Accounts" icon={<Icon icon="profile" />} className={this.state.accountMenu ? "active-sidebar" : ""}>
                                <Dropdown.Item eventKey="2-1" componentClass={Link} to={`/user-dashboard`}>Account Details</Dropdown.Item>
                                <Dropdown.Item eventKey="2-2" componentClass={Link} to={`/user-dashboard`}>Payment History</Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="3"
                                title="New Label"
                                icon={<Icon icon="plus-square" />}
                            // className={this.state.NewLabelMenu ? this.setState({sidebarOpen:3}) : ""}
                            >
                                <Dropdown.Item componentClass={Link} to={`/label/label-layouts`} eventKey="3-1" className={this.state.LabelLayout ? "active-sidebar" : ""}>Label Layout</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/selection-of-categories-or-subcategories`} eventKey="3-2" className={this.state.CategoryLayout ? "active-sidebar" : ""}>Food Categorisation</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/name-of-foods`} eventKey="3-3" className={this.state.FoodLayout ? "active-sidebar" : ""}>Name of food</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/list-of-ingredients`} eventKey="3-4" className={this.state.IngredientLayout ? "active-sidebar" : ""}>List of ingredients</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/allergens`} eventKey="3-5" className={this.state.AllergensLayout ? "active-sidebar" : ""}>Allergens Information</Dropdown.Item>
                                {/* <Dropdown.Item componentClass={Link} to={`/label/additives`} eventKey="3-6" className={this.state.AdditivesLayout ? "active-sidebar" : ""}>Additives</Dropdown.Item> */}
                                <Dropdown.Item componentClass={Link} to={`/label/nutrition-informations`} eventKey="3-7" className={this.state.NutriInfoLayout ? "active-sidebar" : ""}>Nutrition Information</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/declaration-of-veg-non-veg`} eventKey="3-8" className={this.state.VegNonVegLayout ? "active-sidebar" : ""}>Declaration of Veg / Non-veg</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/food-additives`} eventKey="3-9" className={this.state.foodAdditives ? "active-sidebar" : ""}>Food Additives</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/mendatory-declaration`} eventKey="3-10" className={this.state.mendatoryLayout ? "active-sidebar" : ""}>Mendatory Declaration</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/name-and-complete-address`} eventKey="3-10" className={this.state.addressLayout ? "active-sidebar" : ""}>Name and Complete Address</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/fotified-or-organic`} eventKey="3-11" className={this.state.fotifiedLayout ? "active-sidebar" : ""}>Fortified / Organic</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/consumer-care-details`} eventKey="3-12" className={this.state.consumerLayout ? "active-sidebar" : ""}>Consumer Care Details</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/date-marketing`} eventKey="3-13" className={this.state.dateLayout ? "active-sidebar" : ""}>Date Marketing</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/instruction-of-use`} eventKey="3-14" className={this.state.instructionLayout ? "active-sidebar" : ""}>Instruction-of-use</Dropdown.Item>
                                <Dropdown.Item componentClass={Link} to={`/label/preview`} eventKey="3-15" className={this.state.previewLayout ? "active-sidebar" : ""}>Final Design</Dropdown.Item>
                            </Dropdown>
                            <Nav.Item eventKey="4" componentClass={Link} to={`/incomplete-labels`} icon={<Icon icon="tag" />} className={this.state.IncompleteMenu ? "active-sidebar" : ""}>
                                Incomplete Labels
                                </Nav.Item>
                            <Nav.Item eventKey="5" componentClass={Link} to={`/complete-labels`} icon={<Icon icon="tags" />} className={this.state.CompleteMenu ? "active-sidebar" : ""}>
                                Complete Labels
                                </Nav.Item>
                            <Nav.Item eventKey="6" componentClass={Link} to={`/user-dashboard`} icon={<Icon icon="dashboard" />} className={this.state.FSSAIREGMenu ? "active-sidebar" : ""}>
                                FSSAI Regulations
                                </Nav.Item>
                            <Nav.Item componentClass={Link} eventKey="7" to={`/user-dashboard`} icon={<Icon icon="tasks" />} className={this.state.HowMenu ? "active-sidebar" : ""}>
                                How it Works
                                </Nav.Item>
                            <Nav.Item componentClass={Link} eventKey="8" to={`/user-dashboard`} icon={<Icon icon="help-o" />} className={this.state.HelpMenu ? "active-sidebar" : ""}>
                                Help/FAQs
                                </Nav.Item>
                            <Nav.Item onClick={this.logOut} icon={<Icon icon="sign-out" />} >
                                Log Out
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
        )
    }
}
