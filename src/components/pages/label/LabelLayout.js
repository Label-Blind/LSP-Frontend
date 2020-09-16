import React, { Component } from 'react'
import DashMain from '../../DashMain'
import Sidebar from '../../common/Sidebar'
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core'
import { Content, Container, Form, Button, } from 'rsuite'
import { toast } from 'react-toastify'
import { Stage, Layer, Rect, Line, RegularPolygon } from 'react-konva';

export default class LabelLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rectWidth: '',
            rectHeight: '',
            cylnWidth: '',
            cylnHeight: '',
            triWidth: '',
            triHeight: '',
            otherWidth: '',
            otherHeight: '',
            retail: 'retail',
            selectedLabelShape: '',
            selectedPart: '',
            selectedShape: '',
            step: 'first',
            height: '',
            width: '',
            label_height: '',
            label_width: '',
            diameter: '',
            // Preview            
            backo1: [
                { value: "List of Ingredients", ischecked: false },
                { value: "Nutritional Information", ischecked: false },
                { value: "Allergens", ischecked: false },
                { value: "Food Additives", ischecked: false },
                { value: "Name and Complete Address of Manufacturer / Packer / Marketer ", ischecked: false },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Retail Sale Price", ischecked: false },
                { value: "Consumer Care Details", ischecked: false },
                { value: "Lot / Code / Batch Identification", ischecked: false },
                { value: "Date Marking", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
                { value: "Instructions of Use ", ischecked: false },
            ],
            front: [
                { value: "Name of Food", ischecked: true },
                { value: "Declaration of Veg / Non-Veg", ischecked: true },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
            ],
            backo2: [
                { value: "List of Ingredients", ischecked: false },
                { value: "Nutritional Information", ischecked: false },
                { value: "Allergens", ischecked: false },
                { value: "Food Additives", ischecked: false },
                { value: "Name and Complete Address of Manufacturer / Packer / Marketer ", ischecked: false },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Retail Sale Price", ischecked: false },
                { value: "Consumer Care Details", ischecked: false },
                { value: "Lot / Code / Batch Identification", ischecked: false },
                { value: "Date Marking", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
                { value: "Instructions of Use ", ischecked: false },
            ],
            back_two: [
                { value: "List of Ingredients", ischecked: false },
                { value: "Nutritional Information", ischecked: false },
                { value: "Allergens", ischecked: false },
                { value: "Food Additives", ischecked: false },
                { value: "Name and Complete Address of Manufacturer / Packer / Marketer ", ischecked: false },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Retail Sale Price", ischecked: false },
                { value: "Consumer Care Details", ischecked: false },
                { value: "Lot / Code / Batch Identification", ischecked: false },
                { value: "Date Marking", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
                { value: "Instructions of Use ", ischecked: false },
            ],
            front_two: [
                { value: "Name of Food", ischecked: true },
                { value: "Declaration of Veg / Non-Veg", ischecked: true },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
            ],
            back_three: [
                { value: "List of Ingredients", ischecked: false },
                { value: "Nutritional Information", ischecked: false },
                { value: "Allergens", ischecked: false },
                { value: "Food Additives", ischecked: false },
                { value: "Name and Complete Address of Manufacturer / Packer / Marketer ", ischecked: false },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Retail Sale Price", ischecked: false },
                { value: "Consumer Care Details", ischecked: false },
                { value: "Lot / Code / Batch Identification", ischecked: false },
                { value: "Date Marking", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
                { value: "Instructions of Use ", ischecked: false },
            ],
            front_three: [
                { value: "Name of Food", ischecked: true },
                { value: "Declaration of Veg / Non-Veg", ischecked: true },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
            ],
            side_three: [
                { value: "List of Ingredients", ischecked: false },
                { value: "Nutritional Information", ischecked: false },
                { value: "Allergens", ischecked: false },
                { value: "Food Additives", ischecked: false },
                { value: "Name and Complete Address of Manufacturer / Packer / Marketer ", ischecked: false },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Retail Sale Price", ischecked: false },
                { value: "Consumer Care Details", ischecked: false },
                { value: "Lot / Code / Batch Identification", ischecked: false },
                { value: "Date Marking", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
                { value: "Instructions of Use ", ischecked: false },
            ],
            back_four: [
                { value: "List of Ingredients", ischecked: false },
                { value: "Nutritional Information", ischecked: false },
                { value: "Allergens", ischecked: false },
                { value: "Food Additives", ischecked: false },
                { value: "Name and Complete Address of Manufacturer / Packer / Marketer ", ischecked: false },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Retail Sale Price", ischecked: false },
                { value: "Consumer Care Details", ischecked: false },
                { value: "Lot / Code / Batch Identification", ischecked: false },
                { value: "Date Marking", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
                { value: "Instructions of Use ", ischecked: false },
            ],
            front_four: [
                { value: "Name of Food", ischecked: true },
                { value: "Declaration of Veg / Non-Veg", ischecked: true },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
            ],
            side_one_four: [
                { value: "List of Ingredients", ischecked: false },
                { value: "Nutritional Information", ischecked: false },
                { value: "Allergens", ischecked: false },
                { value: "Food Additives", ischecked: false },
                { value: "Name and Complete Address of Manufacturer / Packer / Marketer ", ischecked: false },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Retail Sale Price", ischecked: false },
                { value: "Consumer Care Details", ischecked: false },
                { value: "Lot / Code / Batch Identification", ischecked: false },
                { value: "Date Marking", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
                { value: "Instructions of Use ", ischecked: false },
            ],
            side_two_four: [
                { value: "List of Ingredients", ischecked: false },
                { value: "Nutritional Information", ischecked: false },
                { value: "Allergens", ischecked: false },
                { value: "Food Additives", ischecked: false },
                { value: "Name and Complete Address of Manufacturer / Packer / Marketer ", ischecked: false },
                { value: "FSSAI Logo and License Number", ischecked: false },
                { value: "Net Quantity", ischecked: false },
                { value: "Retail Sale Price", ischecked: false },
                { value: "Consumer Care Details", ischecked: false },
                { value: "Lot / Code / Batch Identification", ischecked: false },
                { value: "Date Marking", ischecked: false },
                { value: "Country of Origin of Imported Food", ischecked: false },
                { value: "Instructions of Use ", ischecked: false },
            ],
            selectedRect: false,
            selectedCircle: false,
            selectedOval: false,
        }

        // this.handleCheckChieldElement = this.handleCheckChieldElement.bind(this);
        // this.handleCheckFrontElement = this.handleCheckFrontElement.bind(this);
    }    

    createCheckboxes = () => (
        this.state.back_01.map(this.createCheckbox)
    )

    createFrontCheckboxes = () => (
        this.state.front.map(this.createFrontCheckbox)
    )
    BusinessType = (val) => {
        this.setState({
            retail: val
        })
    }

    checkShape = (val) => {
        this.setState({
            selectedShape: val
        })
    }

    checkPart = (val) => {
        this.setState({
            selectedPart: val
        })
    }

    checkLabel = (val) => {
        console.log(val)
        if (val === "rect") {
            this.setState({
                selectedLabelShape: val,
                selectedRect: true,
                selectedCircle: false,
                selectedOval: false,
            })
        }
        if (val === "circle") {
            this.setState({
                selectedLabelShape: val,
                selectedRect: false,
                selectedCircle: true,
                selectedOval: false,
            })
        }
        if (val === "oval") {
            this.setState({
                selectedLabelShape: val,
                selectedRect: false,
                selectedCircle: false,
                selectedOval: true,
            })
        }
    }

    componentDidMount() {

    }

    handleChange(changeObject) {
        this.setState(changeObject);
    }

    handleSubmit = evt => {
        if (!this.state.selectedShape) {
            toast.error('Please select my package.');
            return false;
        }
        if (this.state.selectedShape === "1") {
            if (this.state.rectHeight === "") {
                this.setState({
                    rectHeighterror: 'error',
                })
                toast.error('Enter height of rectangular package.');
                return false;
            }
            if (this.state.rectWidth === "") {
                this.setState({
                    rectWidtherror: 'error'
                })
                toast.error('Enter width of rectangular package');
                return false;
            }
        }
        if (this.state.selectedShape === "2") {
            if (this.state.cylnHeight === "") {
                this.setState({
                    cylHeighterror: 'error'
                })
                toast.error('Enter height of cylindrical package.');
                return false;
            }
            if (this.state.cylnWidth === "") {
                this.setState({
                    cylWidtherror: 'error'
                })
                toast.error('Enter width of cylindrical package');
                return false;
            }
        }
        if (this.state.selectedShape === "3") {
            if (this.state.triHeight === "") {
                this.setState({
                    triHeighterror: 'error'
                })
                toast.error('Enter height of triangle package.');
                return false;
            }
            if (this.state.triWidth === "") {
                this.setState({
                    triWidtherror: 'error'
                })
                toast.error('Enter width of triangle package');
                return false;
            }
        }
        if (!this.state.selectedPart) {
            toast.error('Please select the label part.');
            return false;
        }
        if (!this.state.selectedLabelShape) {
            toast.error('Please select the label shape.');
            return false;
        }
        if (this.state.selectedLabelShape === "circle") {
            if (this.state.diameter === "") {
                toast.error('Please select diameter of the label.');
                return false;
            }
        }
        if (this.state.selectedLabelShape === "rect" || this.state.selectedLabelShape === "oval") {
            if (this.state.label_height === "") {
                toast.error('Please select height of the label.');
                return false;
            }
            if (this.state.label_height === "") {
                toast.error('Please select width of the label.');
                return false;
            }
        }
        this.setState({
            step: 'two'
        })
    };

    handleSubmitSave = evt => {
        var stored_front = [];
        var stored_back = [];
        var stored_side1 = [];
        var stored_side2 = [];
        // 1-Piece
        if (this.state.selectedPart === "1-PIECE") {
            this.state.backo1.forEach((element) => {
                if (element.ischecked === true) {
                    stored_back.push(element.value);
                }
            })
            this.state.front.forEach((element) => {
                if (element.ischecked === true) {
                    stored_front.push(element.value);
                }
            })
            this.state.backo2.forEach((element) => {
                if (element.ischecked === true) {
                    stored_side1.push(element.value);
                }
            })
            if (stored_front.length < 1) {
                toast.error('Please Choose front label layout .');
                return false;
            }

            if (stored_back.length < 1) {
                toast.error('Please Choose back label layout .');
                return false;
            }
            if (stored_side1.length < 1) {
                toast.error('Please Choose Side label layout .');
                return false;
            }
        }
        // 2-piece
        if (this.state.selectedPart === "2-PIECE") {
            this.state.front_two.forEach((element) => {
                if (element.ischecked === true) {
                    stored_front.push(element.value);
                }
            })
            this.state.back_two.forEach((element) => {
                if (element.ischecked === true) {
                    stored_back.push(element.value);
                }
            })
            if (stored_front.length < 1) {
                toast.error('Please Choose front label layout .');
                return false;
            }

            if (stored_back.length < 1) {
                toast.error('Please Choose back label layout .');
                return false;
            }
        }
        // 3-piece
        if (this.state.selectedPart === "3-PIECE") {
            this.state.front_three.forEach((element) => {
                if (element.ischecked === true) {
                    stored_front.push(element.value);
                }
            })
            this.state.back_three.forEach((element) => {
                if (element.ischecked === true) {
                    stored_back.push(element.value);
                }
            })
            this.state.side_three.forEach((element) => {
                if (element.ischecked === true) {
                    stored_side1.push(element.value);
                }
            })
            if (stored_front.length < 1) {
                toast.error('Please Choose front label layout .');
                return false;
            }

            if (stored_back.length < 1) {
                toast.error('Please Choose back label layout .');
                return false;
            }
            if (stored_side1.length < 1) {
                toast.error('Please Choose Side label layout .');
                return false;
            }
        }
        // 4-piece
        if (this.state.selectedPart === "4-PIECE") {
            this.state.front_four.forEach((element) => {
                if (element.ischecked === true) {
                    stored_front.push(element.value);
                }
            })
            this.state.back_four.forEach((element) => {
                if (element.ischecked === true) {
                    stored_back.push(element.value);
                }
            })
            this.state.side_one_four.forEach((element) => {
                if (element.ischecked === true) {
                    stored_side1.push(element.value);
                }
            })
            this.state.side_two_four.forEach((element) => {
                if (element.ischecked === true) {
                    stored_side2.push(element.value);
                }
            })
            if (stored_front.length < 1) {
                toast.error('Please Choose front label layout .');
                return false;
            }

            if (stored_back.length < 1) {
                toast.error('Please Choose back label layout .');
                return false;
            }
            if (stored_side1.length < 1) {
                toast.error('Please Choose Side label layout .');
                return false;
            }

            if (stored_side2.length < 1) {
                toast.error('Please Choose side2 label layout .');
                return false;
            }
        }

        let postData = {
            business_type: (this.state.retail === true) ? "retail" : "non_retail",
            package_name: (this.state.selectedShape === "1") ? 'rectangle' : (this.state.selectedShape === "2") ? 'cylindrical' : (this.state.selectedShape === "3") ? 'triangle' : (this.state.selectedShape === "4") ? 'other' : 'less_than_10_cubic_centimeter',
            height: (this.state.selectedShape === "1") ? this.state.rectHeight : (this.state.selectedShape === "2") ? this.state.cylnHeight : (this.state.selectedShape === "3") ? this.state.triHeight : (this.state.selectedShape === "4") ? this.state.otherHeight : '',
            width: (this.state.selectedShape === "1") ? this.state.rectWidth : (this.state.selectedShape === "2") ? this.state.cylnWidth : (this.state.selectedShape === "3") ? this.state.triWidth : (this.state.selectedShape === "4") ? this.state.otherWidth : '',
            label_part: this.state.selectedPart,
            label_shape: this.state.selectedLabelShape,
            label_height: (this.state.selectedLabelShape !== "circle") ? this.state.label_height : '',
            label_width: (this.state.selectedLabelShape !== "circle") ? this.state.label_width : '',
            diameter: (this.state.selectedLabelShape === "circle") ? this.state.diameter : '',
            front: stored_front,
            back: stored_back,
            side1: stored_side1,
            side2: stored_side2,
        }
        console.log(postData);
    }

    selectRetail = event => {
        let retail = this.state.retail
        console.log(retail)

        retail.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
    }

    // 1 PIECE Layout
    handleCheckChieldElement = (event) => {
        let backo1 = this.state.backo1
        backo1.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ backo1: backo1 })
        let front = this.state.front
        front.forEach(front => {
            if (front.value === event.target.value) {
                if (front.ischecked === true) {
                    front.ischecked = !front.ischecked
                }
            }
        })
        this.setState({ front: front })
        let backo2 = this.state.backo2
        backo2.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ backo2: backo2 })
    }

    handleCheckFrontElement = (event) => {
        let front = this.state.front
        front.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ front: front })
        let backo1 = this.state.backo1
        backo1.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ backo1: backo1 })
        let backo2 = this.state.backo2
        backo2.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ backo2: backo2 })
    }

    handleCheckBackElement = (event) => {
        let backo2 = this.state.backo2
        backo2.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ backo2: backo2 })
        let backo1 = this.state.backo1
        backo1.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ backo1: backo1 })
        let front = this.state.front
        front.forEach(front => {
            if (front.value === event.target.value) {
                if (front.ischecked === true) {
                    front.ischecked = !front.ischecked
                }
            }
        })
        this.setState({ front: front })
        console.log(backo2)
    }

    // 2 PIECE Layout
    handleBackTwoElement = (event) => {
        let back_two = this.state.back_two
        back_two.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ back_two: back_two })
        let front_two = this.state.front_two
        front_two.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ front_two: front_two })
    }

    handleCheckFrontTwoElement = (event) => {
        let front = this.state.front_two
        front.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ front_two: front })
        let backo1 = this.state.back_two
        backo1.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
    }

    // 3 PIECE Layout
    handleCheckChieldThreeElement = (event) => {
        let back_three = this.state.back_three
        back_three.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ back_three: back_three })
        let front_three = this.state.front_three
        front_three.forEach(front => {
            if (front.value === event.target.value) {
                if (front.ischecked === true) {
                    front.ischecked = !front.ischecked
                }
            }
        })
        this.setState({ front_three: front_three })
        let side_three = this.state.side_three
        side_three.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ side_three: side_three })
    }

    handleCheckFrontThreeElement = (event) => {
        let front_three = this.state.front_three
        front_three.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ front_three: front_three })
        let back_three = this.state.back_three
        back_three.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ back_three: back_three })
        let side_three = this.state.side_three
        side_three.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ side_three: side_three })
    }

    handleCheckSideThreeElement = (event) => {
        let side_three = this.state.side_three
        side_three.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ side_three: side_three })
        let back_three = this.state.back_three
        back_three.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ back_three: back_three })
        let front_three = this.state.front_three
        front_three.forEach(front => {
            if (front.value === event.target.value) {
                if (front.ischecked === true) {
                    front.ischecked = !front.ischecked
                }
            }
        })
        this.setState({ front_three: front_three })
    }

    // 4 PIECE Layout
    handleCheckChieldFourElement = (event) => {
        let back_four = this.state.back_four
        back_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ back_four: back_four })
        let front_four = this.state.front_four
        front_four.forEach(front => {
            if (front.value === event.target.value) {
                if (front.ischecked === true) {
                    front.ischecked = !front.ischecked
                }
            }
        })
        this.setState({ front_four: front_four })
        let side_one_four = this.state.side_one_four
        side_one_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ side_one_four: side_one_four })
        let side_two_four = this.state.side_two_four
        side_two_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ side_two_four: side_two_four })
    }

    handleCheckFrontFourElement = (event) => {
        let front_four = this.state.front_four
        front_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ front_four: front_four })
        let back_four = this.state.back_four
        back_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ back_four: back_four })
        let side_one_four = this.state.side_one_four
        side_one_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ side_one_four: side_one_four })
        let side_two_four = this.state.side_two_four
        side_two_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ side_two_four: side_two_four })
    }

    handleCheckSideOneFourElement = (event) => {
        let side_one_four = this.state.side_one_four
        side_one_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ side_one_four: side_one_four })
        let back_four = this.state.back_four
        back_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        let side_two_four = this.state.side_two_four
        side_two_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ side_two_four: side_two_four })
        let front_four = this.state.front_four
        front_four.forEach(front => {
            if (front.value === event.target.value) {
                if (front.ischecked === true) {
                    front.ischecked = !front.ischecked
                }
            }
        })
        this.setState({ front_four: front_four })
    }

    handleCheckSideTwoFourElement = (event) => {
        let side_two_four = this.state.side_two_four
        side_two_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                fruite.ischecked = !fruite.ischecked
            }
        })
        this.setState({ side_two_four: side_two_four })
        let back_four = this.state.back_four
        back_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        let side_one_four = this.state.side_one_four
        side_one_four.forEach(fruite => {
            if (fruite.value === event.target.value) {
                if (fruite.ischecked === true) {
                    fruite.ischecked = !fruite.ischecked
                }
            }
        })
        this.setState({ side_one_four: side_one_four })
        let front_four = this.state.front_four
        front_four.forEach(front => {
            if (front.value === event.target.value) {
                if (front.ischecked === true) {
                    front.ischecked = !front.ischecked
                }
            }
        })
        this.setState({ front_four: front_four })
    }

    render() {
        return (
            <DashMain>
                <Container>
                    <Sidebar />
                    <Content className="content-section">
                        <div className="top_bx">
                            <div className="col-xs-12 col-sm-12">
                                <div className="step-first" style={{ display: (this.state.step === "first") ? '' : 'none' }}>
                                    <Form>
                                        <div className="shape-type dimention-row">
                                            <strong>BUSINESS TYPE : </strong><br /><br />
                                            <FormControlLabel
                                                label="Retail"
                                                control={
                                                    <Checkbox
                                                        value="retail"
                                                        checked={(this.state.retail === "retail") ? true : false}
                                                        onChange={e => this.BusinessType(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="Non Retail"
                                                control={
                                                    <Checkbox
                                                        value="non_retail"
                                                        checked={(this.state.retail === "non_retail") ? true : false}
                                                        onChange={e => this.BusinessType(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </div>
                                        <div className="shape-type dimention-row">
                                            <strong>MY PACKAGE : </strong><br /><br />
                                            <FormControlLabel
                                                label="Rectangle"
                                                control={
                                                    <Checkbox
                                                        value="1"
                                                        checked={(this.state.selectedShape === "1") ? true : false}
                                                        onChange={e => this.checkShape(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="Cylindrical"
                                                control={
                                                    <Checkbox
                                                        value="2"
                                                        checked={(this.state.selectedShape === "2") ? true : false}
                                                        onChange={e => this.checkShape(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="Triangle"
                                                control={
                                                    <Checkbox
                                                        value="3"
                                                        checked={(this.state.selectedShape === "3") ? true : false}
                                                        onChange={e => this.checkShape(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="Other"
                                                control={
                                                    <Checkbox
                                                        value="4"
                                                        checked={(this.state.selectedShape === "4") ? true : false}
                                                        onChange={e => this.checkShape(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="My Package is less than 10 Cubic Centimeters"
                                                control={
                                                    <Checkbox
                                                        value="5"
                                                        checked={(this.state.selectedShape === "5") ? true : false}
                                                        onChange={e => this.checkShape(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </div>
                                        <div className="shape-images">
                                            <img src="/images/shapes/rectangle.png" alt="rectangle" className="rect-shape" style={{ display: (this.state.selectedShape === "1") ? 'block' : 'none' }} />
                                            <img src="/images/shapes/cylindrical-cut.png" alt="Cylindrical" className="cylinder-shape" style={{ display: (this.state.selectedShape === "2") ? 'block' : 'none' }} />
                                            <img src="/images/shapes/triangle.png" alt="triangle" className="triangle-shape" style={{ display: (this.state.selectedShape === "3") ? 'block' : 'none' }} />
                                            <img src="/images/shapes/cone.png" alt="other" className="other-shape" style={{ display: (this.state.selectedShape === "4") ? 'block' : 'none' }} />
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="dimention-row">
                                            <strong>DIMENSION OF PACKAGE : </strong>
                                        </div>
                                        <div className="shapes" style={{ display: (this.state.selectedShape === "1") ? 'block' : 'none' }}>
                                            <strong>Rectangle (in cm) : </strong>
                                            <TextField
                                                error={(this.state.rectHeighterror) ? true : false}
                                                id="shape-height"
                                                placeholder="Height"
                                                type="Number"
                                                onChange={e => this.setState({ rectHeight: parseInt(e.target.value, 10) })}
                                            />
                                            <TextField
                                                error={(this.state.rectWidtherror) ? true : false}
                                                id="shape-width"
                                                placeholder="Width"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ rectWidth: parseInt(e.target.value, 10) })}
                                            />
                                            <div className="dynamic-name">
                                                <p className="height-cm">{this.state.rectHeight ? this.state.rectHeight + " cm" : ''}</p>
                                                <Stage width={400} height={300} style={{ border: "1px solid #eee" }}>
                                                    <Layer>
                                                        <Line
                                                            x={25}
                                                            y={50}
                                                            points={[0, 200, 0, 0, 0, 0]}
                                                            tension={0.5}
                                                            stroke="black"
                                                        />
                                                        <Rect
                                                            x={40}
                                                            y={50}
                                                            width={this.state.rectWidth}
                                                            height={this.state.rectHeight}
                                                            fill="orange"
                                                            shadowBlur={10}
                                                            draggable
                                                        />
                                                        <Line
                                                            x={100}
                                                            y={250}
                                                            points={[0, 0, 0, 0, 250, 0]}
                                                            tension={0.5}
                                                            stroke="black"
                                                        />
                                                    </Layer>
                                                </Stage>
                                                {/* <img src="/images/shapes/rect1.png" alt="rectangle" style={{height: this.state.rectHeight + "px", width: this.state.rectWidth + "px" }}></img> */}
                                                <p className="width-cm">{this.state.rectWidth ? this.state.rectWidth + " cm" : ''}</p>
                                            </div>
                                        </div>
                                        <div className="shapes" style={{ display: (this.state.selectedShape === "2") ? 'block' : 'none' }}>
                                            <strong>Cylinder (in cm) : </strong>
                                            <TextField
                                                error={(this.state.cylHeighterror) ? true : false}
                                                id="shape-height"
                                                placeholder="Height"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ cylnHeight: parseInt(e.target.value, 10) })}
                                            />
                                            <TextField
                                                error={(this.state.cylWidtherror) ? true : false}
                                                id="shape-width"
                                                placeholder="Circumference"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ cylnWidth: parseInt(e.target.value, 10) })}
                                            />
                                            <div className="dynamic-name">
                                                <p className="cyln-height-cm">{this.state.cylnHeight ? this.state.cylnHeight + " cm" : ''}</p>
                                                <Stage width={400} height={300} style={{ border: "1px solid #eee" }}>
                                                    <Layer>
                                                        <Line
                                                            x={25}
                                                            y={50}
                                                            points={[0, 200, 0, 0, 0, 0]}
                                                            tension={0.5}
                                                            stroke="black"
                                                        />
                                                        <Rect
                                                            x={40}
                                                            y={50}
                                                            width={this.state.cylnWidth}
                                                            height={this.state.cylnHeight}
                                                            fill="orange"
                                                            shadowBlur={10}
                                                            draggable
                                                        />
                                                        <Line
                                                            x={100}
                                                            y={250}
                                                            points={[0, 0, 0, 0, 250, 0]}
                                                            tension={0.5}
                                                            stroke="black"
                                                        />
                                                    </Layer>
                                                </Stage>
                                                {/* <img src="/images/shapes/cylind1.png" alt="rectangle"></img> */}
                                                <p className="cyln-width-cm">{this.state.cylnWidth ? this.state.cylnWidth + " cm" : ''}</p>
                                            </div>
                                        </div>
                                        <div className="shapes" style={{ display: (this.state.selectedShape === "3") ? 'block' : 'none' }}>
                                            <strong>Triangle (in cm) : </strong>
                                            <TextField
                                                error={(this.state.triHeighterror) ? true : false}
                                                id="shape-height"
                                                placeholder="Height"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ triHeight: parseInt(e.target.value, 10) })}
                                            />
                                            <TextField
                                                error={(this.state.triWidtherror) ? true : false}
                                                id="shape-width"
                                                placeholder="Width"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ triWidth: parseInt(e.target.value, 10) })}
                                            />
                                            <div className="dynamic-name">
                                                {/* <img src="/images/shapes/trio1.png" alt="rectangle"></img> */}
                                                <p className="trio-height-cm">{this.state.triHeight ? this.state.triHeight + " cm" : ''}</p>
                                                <Stage width={400} height={300} style={{ border: "1px solid #eee" }}>
                                                    <Layer>
                                                        <Line
                                                            x={25}
                                                            y={50}
                                                            points={[0, 200, 0, 0, 0, 0]}
                                                            tension={0.5}
                                                            stroke="black"
                                                        />
                                                        <RegularPolygon
                                                            x={150}
                                                            y={150}
                                                            sides={3}
                                                            radius={0.5 * this.state.triWidth * this.state.triHeight}
                                                            fill="green"
                                                            stroke="black"
                                                            strokeWidth={4}
                                                            draggable
                                                        />
                                                        <Line
                                                            x={100}
                                                            y={250}
                                                            points={[0, 0, 0, 0, 250, 0]}
                                                            tension={0.5}
                                                            stroke="black"
                                                        />
                                                    </Layer>
                                                </Stage>
                                                <p className="trio-width-cm">{this.state.triWidth ? this.state.triWidth + " cm" : ''}</p>
                                            </div>
                                            {/* <img src="images/shapes/trio.png" alt="rectangle"></img> */}
                                        </div>
                                        <div className="shapes" style={{ display: (this.state.selectedShape === "4") ? 'block' : 'none' }}>
                                            <strong>Other (in cm) : </strong>
                                            <TextField
                                                error={(this.state.otherHeighterror) ? true : false}
                                                id="shape-height"
                                                placeholder="Height"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ otherHeight: parseInt(e.target.value, 10) })}
                                            />
                                            <TextField
                                                error={(this.state.otherWidtherror) ? true : false}
                                                id="shape-width"
                                                placeholder="Width"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ otherWidth: parseInt(e.target.value, 10) })}
                                            />
                                            <div className="dynamic-name">
                                                {/* <img src="/images/shapes/trio1.png" alt="rectangle"></img> */}
                                                <p className="trio-height-cm">{this.state.otherHeight ? this.state.otherHeight + " cm" : ''}</p>
                                                <Stage width={400} height={300} style={{ border: "1px solid #eee" }}>
                                                    <Layer>
                                                        <Line
                                                            x={25}
                                                            y={50}
                                                            points={[0, 200, 0, 0, 0, 0]}
                                                            tension={0.5}
                                                            stroke="black"
                                                        />
                                                        <Rect
                                                            x={40}
                                                            y={50}
                                                            width={this.state.otherWidth}
                                                            height={this.state.otherHeight}
                                                            fill="orange"
                                                            shadowBlur={10}
                                                            draggable
                                                        />
                                                        <Line
                                                            x={100}
                                                            y={250}
                                                            points={[0, 0, 0, 0, 250, 0]}
                                                            tension={0.5}
                                                            stroke="black"
                                                        />
                                                    </Layer>
                                                </Stage>
                                                <p className="trio-width-cm">{this.state.otherWidth ? this.state.otherWidth + " cm" : ''}</p>
                                            </div>
                                            {/* <img src="images/shapes/trio.png" alt="rectangle"></img> */}
                                        </div>
                                        <div className="dimention-row">
                                            <strong>PART OF THE LABEL : </strong><br /><br />
                                            <FormControlLabel
                                                label="1-PIECE"
                                                control={
                                                    <Checkbox
                                                        value="1-PIECE"
                                                        checked={(this.state.selectedPart === "1-PIECE") ? true : false}
                                                        onChange={e => this.checkPart(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="2-PIECE"
                                                control={
                                                    <Checkbox
                                                        value="2-PIECE"
                                                        checked={(this.state.selectedPart === "2-PIECE") ? true : false}
                                                        onChange={e => this.checkPart(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="3-PIECE"
                                                control={
                                                    <Checkbox
                                                        value="3-PIECE"
                                                        checked={(this.state.selectedPart === "3-PIECE") ? true : false}
                                                        onChange={e => this.checkPart(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="4-PIECE"
                                                control={
                                                    <Checkbox
                                                        value="4-PIECE"
                                                        checked={(this.state.selectedPart === "4-PIECE") ? true : false}
                                                        onChange={e => this.checkPart(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </div>
                                        <div className="single-box" style={{ display: (this.state.selectedPart === "1-PIECE") ? 'block' : 'none' }}>
                                            <img src="/images/shapes/single.png" alt="single-box" />
                                        </div>
                                        <div className="double-box" style={{ display: (this.state.selectedPart === "2-PIECE") ? 'block' : 'none' }}>
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                        </div>
                                        <div className="triple-box" style={{ display: (this.state.selectedPart === "3-PIECE") ? 'block' : 'none' }}>
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                        </div>
                                        <div className="four-box" style={{ display: (this.state.selectedPart === "4-PIECE") ? 'block' : 'none' }}>
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                        </div>
                                        <div className="dimention-row">
                                            <strong>SHAPE OF THE LABEL : </strong><br /><br />
                                            <FormControlLabel
                                                label="Rectangle/ Square"
                                                control={
                                                    <Checkbox
                                                        value="rect"
                                                        checked={(this.state.selectedRect) ? true : false}
                                                        onChange={e => this.checkLabel(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="Circle"
                                                control={
                                                    <Checkbox
                                                        value="circle"
                                                        checked={(this.state.selectedCircle) ? true : false}
                                                        onChange={e => this.checkLabel(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label="Oval"
                                                control={
                                                    <Checkbox
                                                        value="oval"
                                                        checked={(this.state.selectedOval) ? true : false}
                                                        onChange={e => this.checkLabel(e.target.value)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </div>
                                        <div className="single-box" style={{ display: (this.state.selectedLabelShape === "rect") ? 'block' : 'none' }}>
                                            <img src="/images/shapes/single.png" alt="single-box" />
                                            <img src="/images/shapes/square.png" alt="single-box" style={{ width: "100px" }} />
                                        </div>
                                        <div className="circle-box" style={{ display: (this.state.selectedLabelShape === "circle") ? 'block' : 'none' }}>
                                            <img src="/images/shapes/square.png" alt="single-box" />
                                        </div>
                                        <div className="oval-box" style={{ display: (this.state.selectedLabelShape === "oval") ? 'block' : 'none' }}>
                                            <img src="/images/shapes/square.png" alt="single-box" className="oval-1" />
                                            <img src="/images/shapes/square.png" alt="single-box" className="oval-2" />
                                        </div>
                                        <div className="dimention-row">
                                            <strong>DIMENSION OF THE LABEL : </strong>
                                        </div>
                                        <div className="shapes" style={{ display: (this.state.selectedLabelShape === "rect" || this.state.selectedLabelShape === "oval") ? 'block' : 'none' }}>
                                            <strong>Rectangle/square/oval (in cm) : </strong>
                                            <TextField
                                                id="shape-height"
                                                placeholder="Height"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ label_height: e.target.value })}
                                            />
                                            <TextField
                                                id="shape-width"
                                                placeholder="Width"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ label_width: e.target.value })}
                                            />
                                        </div>
                                        <div className="shapes" style={{ display: (this.state.selectedLabelShape === "circle") ? 'block' : 'none' }}>
                                            <strong>Circle (in cm) : </strong>
                                            <TextField
                                                id="shape-height"
                                                placeholder="Diameter"
                                                // helperText=""
                                                // variant="outlined"
                                                type="Number"
                                                onChange={e => this.setState({ diameter: e.target.value })}
                                            />
                                        </div>
                                        <div className="pull-right">
                                            <Button color="orange" onClick={this.handleSubmit}>Next</Button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="step-two" style={{ display: (this.state.step === "two") ? '' : 'none' }}>
                                    <div className="dimention-row">
                                        <strong>Your Label preview </strong>
                                    </div>
                                    <div className="row label-place" style={{ display: (this.state.selectedPart === "1-PIECE") ? '' : 'none' }}>
                                        <div className="col-lg-3 col-sm-3 left-preview">
                                            <h4 className="label-demo-preview">Back 01</h4>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 center-preview">
                                            <h4 className="label-demo-preview">FRONT</h4>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 right-preview">
                                            <h4 className="label-demo-preview">Back 02</h4>
                                        </div>
                                    </div>
                                    <div className="row piece-preview-2" style={{ display: (this.state.selectedPart === "2-PIECE") ? '' : 'none' }}>
                                        <div className="col-lg-5 col-sm-5 label-place-2-piece-left">
                                            <h4 className="label-demo-preview">FRONT</h4>
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-5 col-sm-5 label-place-2-piece-right">
                                            <h4 className="label-demo-preview">BACK</h4>
                                        </div>
                                    </div>
                                    <div className="row piece-preview-3" style={{ display: (this.state.selectedPart === "3-PIECE") ? '' : 'none' }}>
                                        <div className="col-lg-3 col-sm-3 label-place-3-piece-left">
                                            <h4 className="label-demo-preview">FRONT</h4>
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-3 col-sm-3 label-place-3-piece-right">
                                            <h4 className="label-demo-preview">BACK</h4>
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-3 col-sm-3 label-place-3-piece-side">
                                            <h4 className="label-demo-preview">Side</h4>
                                        </div>
                                    </div>
                                    <div className="row piece-preview-4" style={{ display: (this.state.selectedPart === "4-PIECE") ? '' : 'none' }}>
                                        <div className="col-lg-2 col-sm-2 label-place-3-piece-left">
                                            <h4 className="label-demo-preview">FRONT</h4>
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-2 col-sm-2 label-place-3-piece-right">
                                            <h4 className="label-demo-preview">BACK</h4>
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-2 col-sm-2 label-place-3-piece-side1">
                                            <h4 className="label-demo-preview">Side1</h4>
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-2 col-sm-2 label-place-3-piece-side2">
                                            <h4 className="label-demo-preview">Side2</h4>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <Button color="orange" onClick={(e) => this.setState({ step: "first" })}>Previous</Button>
                                        <Button color="orange" onClick={(e) => this.setState({ step: "three" })}>Next</Button>
                                    </div>
                                </div>
                                <div className="step-three" style={{ display: (this.state.step === "three") ? '' : 'none' }}>
                                    <div className="dimention-row">
                                        <strong>Select Position</strong>
                                    </div>
                                    <div className="row label-place" style={{ display: (this.state.selectedPart === "1-PIECE") ? '' : 'none' }}>
                                        <div className="col-lg-3 col-sm-3 left">
                                            <h4>Back 01</h4>
                                            {
                                                this.state.backo1.map((backo1, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {backo1.value}
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckChieldElement}
                                                                    {...backo1}
                                                                    ischecked={(backo1.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="col-lg-6 col-sm-6 center">
                                            <h4>Front</h4>
                                            {
                                                this.state.front.map((front, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {front.value}
                                                                <input
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckFrontElement}
                                                                    {...front}
                                                                    ischecked={(front.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="col-lg-3 col-sm-3 right">
                                            <h4>Back 02</h4>
                                            {
                                                this.state.backo2.map((backo2, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {backo2.value}
                                                                <input
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckBackElement}
                                                                    {...backo2}
                                                                    ischecked={(backo2.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="row piece-preview-2" style={{ display: (this.state.selectedPart === "2-PIECE") ? '' : 'none' }}>
                                        <div className="col-lg-5 col-sm-5 label-place-2-piece-left-selected">
                                            <h4>Front</h4>
                                            {
                                                this.state.front_two.map((front_two, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {front_two.value}
                                                                <input
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckFrontTwoElement}
                                                                    {...front_two}
                                                                    ischecked={(front_two.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-5 col-sm-5 label-place-2-piece-right-selected">
                                            <h4>Back</h4>
                                            {
                                                this.state.back_two.map((back_two, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {back_two.value}
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    onChange={this.handleBackTwoElement}
                                                                    {...back_two}
                                                                    ischecked={(back_two.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="row piece-preview-3-selected" style={{ display: (this.state.selectedPart === "3-PIECE") ? '' : 'none' }}>
                                        <div className="col-lg-3 col-sm-3 label-place-3-piece-left-selected">
                                            <h4>Front</h4>
                                            {
                                                this.state.front_three.map((front, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {front.value}
                                                                <input
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckFrontThreeElement}
                                                                    {...front}
                                                                    ischecked={(front.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-3 col-sm-3 label-place-3-piece-back-selected">
                                            <h4>Back</h4>
                                            {
                                                this.state.back_three.map((backo1, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {backo1.value}
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckChieldThreeElement}
                                                                    {...backo1}
                                                                    ischecked={(backo1.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-3 col-sm-3 label-place-3-piece-side-selected">
                                            <h4>Side</h4>
                                            {
                                                this.state.side_three.map((backo2, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {backo2.value}
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckSideThreeElement}
                                                                    {...backo2}
                                                                    ischecked={(backo2.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="row piece-preview-4-selected" style={{ display: (this.state.selectedPart === "4-PIECE") ? '' : 'none' }}>
                                        <div className="col-lg-2 col-sm-2 label-place-4-piece-left-selected">
                                            <h4>FRONT</h4>
                                            {
                                                this.state.front_four.map((backo1, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {backo1.value}
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckFrontFourElement}
                                                                    {...backo1}
                                                                    ischecked={(backo1.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-2 col-sm-2 label-place-4-piece-right-selected">
                                            <h4>Back</h4>
                                            {
                                                this.state.back_four.map((backo1, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {backo1.value}
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckChieldFourElement}
                                                                    {...backo1}
                                                                    ischecked={(backo1.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-2 col-sm-2 label-place-4-piece-side1-selected">
                                            <h4>Side 1</h4>
                                            {
                                                this.state.side_one_four.map((backo1, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {backo1.value}
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckSideOneFourElement}
                                                                    {...backo1}
                                                                    ischecked={(backo1.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        &nbsp;
                                        <div className="col-lg-2 col-sm-2 label-place-4-piece-side2-selected">
                                            <h4>Side 2</h4>
                                            {
                                                this.state.side_two_four.map((backo1, index) => {
                                                    return (
                                                        <p key={index}>
                                                            <label className="container">
                                                                {backo1.value}
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    onChange={this.handleCheckSideTwoFourElement}
                                                                    {...backo1}
                                                                    ischecked={(backo1.ischecked === true) ? 'checked' : ''}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <Button color="orange" onClick={(e) => this.setState({ step: "two" })}>Previous</Button>
                                        <Button color="orange" onClick={this.handleSubmitSave}>Save and Next</Button>
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
