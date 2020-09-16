import React, { Component } from 'react'
import Sidebar from '../../common/Sidebar'
import { NativeSelect, InputBase, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DashMain from '../../DashMain';
import Axios from 'axios';
import ApiProvider from '../../common/ApiProvider';
import { Content, Container, Button } from 'rsuite';
import { toast } from 'react-toastify';

const BootstrapInput = withStyles((theme) => ({
    root: {
        width: '380px',
        'label + &': {
            marginTop: theme.spacing(3),

        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

export default class SelectionCategories extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categories: [],
            sub_categories: [],
            sub_sub_categories: [],
            sub_sub_sub_categories: [],
            category_code: '',
            sub_category_code: '',
            sub_sub_category_code: '',
            sub_sub_sub_category_code: '',
            selectedcategory:'',
            selectedSubcategory:'',
            selectedSubSubcategory:'',
            selectedSubSubSubcategory:'',
        }
    }

    componentDidMount() {
        this.getAllCategory();
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        Axios.get(ApiProvider.endpoint + "/categories", {
            headers: headers
        })
            .then(result => {
                this.setState({
                    categories: result.data.category
                   
                })
            })
            .catch(error => {
            })
    }

    getAllCategory() {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        Axios.get(ApiProvider.endpoint + "/all-categories", {
            headers: headers
        })
            .then(result => {
                this.setState({
                    sub_categories: result.data.category,
                    sub_sub_categories: result.data.category,
                    sub_sub_sub_categories: result.data.category
                })
            })
            .catch(error => {
            })
    }

    handleChange(changeObject) {
        this.setState(changeObject);
    }

    handleSubmit = evt => {
        if(this.state.category_code === ""){
            toast.error('Please Choose Category.');
            return false;
        }
        if(this.state.sub_category_code === ""){
            toast.error('Please Choose Sub Category (Label 2).');
            return false;
        }
        if(this.state.sub_sub_category_code === ""){
            toast.error('Please Choose Sub Category (Label 3).');
            return false;
        }
        if(this.state.sub_sub_sub_category_code === ""){
            toast.error('Please Choose Sub Category (Label 4).');
            return false;
        }

        let postData = {
            category_code: this.state.category_code,
            sub_category_code: this.state.sub_category_code,
            sub_sub_category_code: this.state.sub_sub_category_code,
            sub_sub_sub_category_code: this.state.sub_sub_sub_category_code,
        }
        console.log(postData)
    };

    changeCategory = (e) => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const postData = {
            "category": e
        }
        Axios.post(ApiProvider.endpoint + "/sub-categories", postData, {
            headers: headers
        })
            .then(result => {
                this.setState({
                    sub_categories: result.data.category,
                    category_code: result.data.code
                })
            })
            .catch(error => {
            })
    }

    changeSubCategory = (e) => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const postData = {
            "category": e
        }
        Axios.post(ApiProvider.endpoint + "/sub-categories", postData, {
            headers: headers
        })
            .then(result => {
                this.setState({
                    sub_sub_categories: result.data.category,
                    sub_category_code: result.data.code
                })
            })
            .catch(error => {
            })
    }

    changeSubSubCategory = (e) => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const postData = {
            "category": e
        }
        Axios.post(ApiProvider.endpoint + "/sub-categories", postData, {
            headers: headers
        })
            .then(result => {
                this.setState({
                    sub_sub_sub_categories: result.data.category,
                    sub_sub_category_code: result.data.code
                })
            })
            .catch(error => {
            })
    }

    changeSubSubSubCategory = (e) => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const postData = {
            "category": e
        }
        Axios.post(ApiProvider.endpoint + "/sub-categories", postData, {
            headers: headers
        })
            .then(result => {
                this.setState({
                    sub_sub_sub_categories: result.data.category,
                    sub_sub_sub_category_code: result.data.code
                })
            })
            .catch(error => {
            })
    }

    changeCode = (e,type) => {
        console.log(type)
        if(type==='category'){
            this.setState({ category_code: e })
        }
        if(type==='sub_category'){
            this.setState({ sub_category_code: e })
        }
        if(type==='sub_sub_category'){
            this.setState({ sub_sub_category_code: e })
        }
        if(type==='sub_sub_sub_category'){
            this.setState({ sub_sub_sub_category_code: e })
        }
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const postData = {
            "code": e
        }
        Axios.post(ApiProvider.endpoint + "/get-category-from-code", postData, {
            headers: headers
        })
            .then(result => {
                if(type==='category'){
                    this.setState({ 
                        selectedcategory: result.data.category.category,
                     })
                }
                if(type==='sub_category'){
                    this.setState({ 
                        selectedSubcategory: result.data.category.category,
                    })
                }
                if(type==='sub_sub_category'){
                    this.setState({ 
                        selectedSubSubcategory: result.data.category.category,
                    })
                }
                if(type==='sub_sub_sub_category'){
                    this.setState({ 
                        selectedSubSubSubcategory: result.data.category.category,
                    })
                }
            })
            .catch(error => {
            })
    }

    render() {
        return (
            <div>
                <DashMain>
                    <Container>
                        <Sidebar />
                        <Content className="content-section">
                            <div className="top_bx">
                                <div className="col-xs-12 col-sm-12">
                                    <div className="shape-type dimention-row">
                                        <strong>Food Categorisation : </strong>
                                    </div>
                                    <div className="dimention-row text-center">
                                        <div className="code-row">
                                            <TextField
                                                value={(this.state.category_code) ? this.state.category_code : ""}
                                                // error={(this.state.rectHeighterror) ? true : false}
                                                id="shape-code"
                                                label="Category Code"
                                                type="text"
                                                variant="outlined"
                                                onChange={e => this.changeCode(e.target.value,'category')}
                                                // onChange={e => this.setState({ category_code: e.target.value })}
                                            />
                                            <NativeSelect
                                                id="demo-customized-select-native"
                                                onChange={(e) => this.changeCategory(e.target.value)}
                                                input={<BootstrapInput />}
                                            >
                                                <option>---Category (Lavel 1)---</option>
                                                {this.state.categories.map((cat, idx) => (
                                                    <option key={idx} value={cat.category}>{cat.name}</option>
                                                ))}
                                            </NativeSelect>
                                        </div>
                                        <div className="code-row">
                                            <TextField
                                                value={(this.state.sub_category_code) ? this.state.sub_category_code : ""}
                                                id="shape-code"
                                                label="Category Code"
                                                type="text"
                                                variant="outlined"
                                                onChange={e => this.changeCode(e.target.value,'sub_category')}
                                            />
                                            <NativeSelect
                                                id="demo-customized-select-native"
                                                onChange={(e) => this.changeSubCategory(e.target.value)}
                                                input={<BootstrapInput />}
                                                value={this.state.selectedSubcategory}
                                            >
                                                {/* <option aria-label="None" value="" /> */}
                                                <option>---Sub Category (Lavel 2)---</option>
                                                {this.state.sub_categories.map((cat, idx) => (
                                                    <option key={idx} value={cat.category}>{cat.name}</option>
                                                ))}
                                            </NativeSelect>
                                        </div>
                                        <div className="code-row">
                                            <TextField
                                                value={(this.state.sub_sub_category_code) ? this.state.sub_sub_category_code : ""}
                                                id="shape-code"
                                                label="Category Code"
                                                type="text"
                                                variant="outlined"
                                                onChange={e => this.changeCode(e.target.value,'sub_sub_category')}
                                            />
                                            <NativeSelect
                                                id="demo-customized-select-native"

                                                onChange={(e) => this.changeSubSubCategory(e.target.value)}
                                                input={<BootstrapInput />}
                                            >
                                                {/* <option aria-label="None" value="" /> */}
                                                <option>---Sub Sub-Category (Lavel 3)---</option>
                                                {this.state.sub_sub_categories.map((cat, idx) => (
                                                    <option key={idx} value={cat.category}>{cat.name}</option>
                                                ))}
                                            </NativeSelect>
                                        </div>
                                        <div className="code-row">
                                            <TextField
                                                value={(this.state.sub_sub_sub_category_code) ? this.state.sub_sub_sub_category_code : ""}
                                                id="shape-code"
                                                label="Category Code"
                                                type="text"
                                                variant="outlined"
                                                onChange={e => this.changeCode(e.target.value,'sub_sub_sub_category')}

                                            />
                                            <NativeSelect
                                                id="demo-customized-select-native"
                                                onChange={(e) => this.changeSubSubSubCategory(e.target.value)}
                                                input={<BootstrapInput />}
                                            >
                                                {/* <option aria-label="None" value="" /> */}
                                                <option>---Sub Sub-Category (Lavel 4)---</option>
                                                {this.state.sub_sub_sub_categories.map((cat, idx) => (
                                                    <option key={idx} value={cat.category}>{cat.name}</option>
                                                ))}
                                            </NativeSelect>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        {/* <Link to={`/label/label-layouts`}><Button color="orange">Previous</Button></Link> */}
                                        <Button color="orange" onClick={this.handleSubmit}>Save and Next</Button>
                                    </div>
                                </div>
                            </div>
                        </Content>
                    </Container>
                </DashMain>
            </div>
        )
    }
}
