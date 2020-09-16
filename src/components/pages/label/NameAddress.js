import React, { Component } from 'react'
import DashMain from '../../DashMain'
import { Container, Button, Content } from 'rsuite'
import Sidebar from '../../common/Sidebar'
import { Select, MenuItem, FormControl } from '@material-ui/core'

export default class NameAddress extends Component {
    constructor(props) {
        super(props)

        this.state = {
            manufacturedChecked: false,
            manufacturerNameError: false,
            manufacturerAddressError: false,
            manufacturerLicenceError: false,
            manufacturer_name: '',
            manufacturer_address: '',
            manufacturer_licence_no: '',
            packedChecked: false,
            packedNameError: false,
            packedAddressError: false,
            packedLicenceError: false,
            packed_name: '',
            packed_address: '',
            packed_licence_no: '',
            marketedChecked: false,
            marketedNameError: false,
            marketedAddressError: false,
            marketedLicenceError: false,
            marketed_name: '',
            marketed_address: '',
            marketed_licence_no: '',
            importedChecked: false,
            importedNameError: false,
            importedAddressError: false,
            importedLicenceError: false,
            imported_name: '',
            imported_address: '',
            imported_licence_no: '',
            countryChecked: false,
            country: '',
            countrySelection: false,
            fssai_logo: null
        }
    }


    checkmarketed = event => {
        if (event.target.value === "Manufactured by") {
            this.setState({
                manufacturedChecked: !this.state.manufacturedChecked
            })
        }
        if (event.target.value === "Packed by") {
            this.setState({
                packedChecked: !this.state.packedChecked
            })
        }
        if (event.target.value === "Marketed by") {
            this.setState({
                marketedChecked: !this.state.marketedChecked
            })
        }
        if (event.target.value === "Imported by") {
            this.setState({
                importedChecked: !this.state.importedChecked,
                countryChecked: !this.state.countryChecked
            })
        }
    }

    setName = (dt, val) => {
        if(val === "Manufactured by"){
            this.setState({
                manufacturer_name: dt
            })
        }
        if(val === "Packed by"){
            this.setState({
                packed_name: dt
            })
        }
        if(val === "Marketed by"){
            this.setState({
                marketed_name: dt
            })
        }
        if(val === "Imported by"){
            this.setState({
                imported_name: dt
            })
        }
    }

    setAddress = (dt, val) => {
        if(val === "Manufactured by"){
            this.setState({
                manufacturer_address: dt
            })
        }
        if(val === "Packed by"){
            this.setState({
                packed_address: dt
            })
        }
        if(val === "Marketed by"){
            this.setState({
                marketed_address: dt
            })
        }
        if(val === "Imported by"){
            this.setState({
                imported_address: dt
            })
        }
    }

    setLicence = (dt, val) => {
        if(val === "Manufactured by"){
            this.setState({
                manufacturer_licence_no: dt
            })
        }
        if(val === "Packed by"){
            this.setState({
                packed_licence_no: dt
            })
        }
        if(val === "Marketed by"){
            this.setState({
                marketed_licence_no: dt
            })
        }
        if(val === "Imported by"){
            this.setState({
                imported_licence_no: dt
            })
        }
    }

    uploadBrand = (event) => {
        this.setState({
            fssai_logo: event.target.files[0]
        })
        var fileName = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("preview");
        var previewImg = document.createElement("img");
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

    handleSubmit= () => {
        if(this.state.manufacturedChecked){
            if(!this.state.manufacturer_name){
                this.setState({
                    manufacturerNameError: true
                })
                this.manufacturerName.focus();
                return;
            }
            if(!this.state.manufacturer_address){
                this.setState({
                    manufacturerAddressError: true
                })
                this.manufacturerAddress.focus();
                return;
            }
            if(!this.state.manufacturer_licence_no){
                this.setState({
                    manufacturerLicenceError: true
                })
                this.manufacturerLicence.focus();
                return;
            }
            
        }
        if(this.state.packedChecked){
            if(!this.state.packed_name){
                this.setState({
                    packedNameError: true
                })
                this.packedName.focus();
                return;
            }
            if(!this.state.packed_address){
                console.log("Hello")
                this.setState({
                    packedAddressError: true
                })
                this.packedAddress.focus();
                return;
            }
            if(!this.state.packed_licence_no){
                this.setState({
                    packedLicenceError: true
                })
                this.packedLicence.focus();
                return;
            }
        }
        if(this.state.marketedChecked){
            if(!this.state.marketed_name){
                this.setState({
                    marketedNameError: true
                })
                this.marketedName.focus();
                return;
            }
            
            if(!this.state.marketed_address){
                this.setState({
                    marketedAddressError: true
                })
                this.marketedAddress.focus();
                return;
            }
            if(!this.state.marketed_licence_no){
                this.setState({
                    marketedLicenceError: true
                })
                this.marketedLicence.focus();
                return;
            }
        }
        if(this.state.importedChecked){
            if(!this.state.imported_name){
                this.setState({
                    importedNameError: true
                })
                this.importedName.focus();
                return;
            }
            if(!this.state.imported_address){
                this.setState({
                    importedAddressError: true
                })
                this.importedAddress.focus();
                return;
            }
            if(!this.state.imported_licence_no){
                this.setState({
                    importedLicenceError: true
                })
                this.importedLicence.focus();
                return;
            }
        }
        const postData = {
            manufactured_by: this.state.manufacturedChecked,
            manufacurer_name: this.state.manufacturer_name,
            manufacurer_address: this.state.manufacturer_address,
            manufacurer_licence_no: this.state.manufacturer_licence_no,
            packed_by:  this.state.packedChecked,
            packers_name: this.state.packed_name,
            packers_address: this.state.packed_address,
            packers_licence_no: this.state.packed_licence_no,
            marketed_by:  this.state.marketedChecked,
            marketers_name: this.state.marketed_name,
            marketers_address: this.state.marketed_address,
            marketers_licence_no: this.state.marketed_licence_no,
            imported_by:  this.state.importedChecked,
            importers_name: this.state.imported_name,
            importers_address: this.state.imported_address,
            importers_licence_no: this.state.imported_licence_no,
            country:  this.state.country,
            fssai_logo : this.state.fssai_logo 
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
                                    <strong>Name and complete address : </strong>
                                </div>
                                <div className="dimention-row">
                                    <strong>Please enter the following :  <i>(select all that apply)</i></strong>
                                    <div className="table">
                                        <div className="responsive-table">
                                            <table className="table table-striped table-bordered ingridient-table">
                                                <thead>
                                                    <tr className="ui-state-default">
                                                        <th></th>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>FSSAI License no</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p><label className="container">
                                                                Manufactured By
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    value="Manufactured by"
                                                                    onChange={this.checkmarketed}
                                                                    checked={this.state.manufacturedChecked}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label></p>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.manufacturerNameError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                name="name"
                                                                ref={(input) => { this.manufacturerName = input; }}
                                                                onChange={e => this.setName(e.target.value, "Manufactured by")}
                                                            />
                                                            <small style={{ display: (this.state.manufacturerNameError) ? 'block' : 'none' }} className="error">Name field is required</small>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.manufacturerAddressError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                ref={(input) => { this.manufacturerAddress = input; }}
                                                                onChange={(e) => this.setAddress(e.target.value, "Manufactured by")}
                                                            />
                                                            <small style={{ display: (this.state.manufacturerAddressError) ? 'block' : 'none' }} className="error">Address field is required</small>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.manufacturerLicenceError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                ref={(input) => { this.manufacturerLicence = input; }}
                                                                onChange={(e) => this.setLicence(e.target.value, "Manufactured by")}
                                                            />
                                                            <small style={{ display: (this.state.manufacturerLicenceError) ? 'block' : 'none' }} className="error">Licence No field is required</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><label className="container">
                                                                Packed By
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    value="Packed by"
                                                                    onChange={this.checkmarketed}
                                                                    checked={this.state.packedChecked}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label></p>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.packedNameError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                name="name"
                                                                ref={(input) => { this.packedName = input; }}
                                                                onChange={e => this.setName(e.target.value, "Packed by")}
                                                            />
                                                            <small style={{ display: (this.state.packedNameError) ? 'block' : 'none' }} className="error">Name field is required</small>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.packedAddressError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                ref={(input) => { this.packedAddress = input; }}
                                                                onChange={(e) => this.setAddress(e.target.value, "Packed by")}
                                                            />
                                                            <small style={{ display: (this.state.packedAddressError) ? 'block' : 'none' }} className="error">Address field is required</small>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.packedLicenceError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                ref={(input) => { this.packedLicence = input; }}
                                                                onChange={(e) => this.setLicence(e.target.value, "Packed by")}
                                                            />
                                                            <small style={{ display: (this.state.packedLicenceError) ? 'block' : 'none' }} className="error">Licence No field is required</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><label className="container">
                                                                Marketed By
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    value="Marketed by"
                                                                    onChange={this.checkmarketed}
                                                                    checked={this.state.marketedChecked}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label></p>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.marketedNameError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                name="name"
                                                                ref={(input) => { this.marketedName = input; }}
                                                                onChange={e => this.setName(e.target.value, "Marketed by")}
                                                            />
                                                            <small style={{ display: (this.state.marketedNameError) ? 'block' : 'none' }} className="error">Name field is required</small>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.marketedAddressError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                ref={(input) => { this.marketedAddress = input; }}
                                                                onChange={(e) => this.setAddress(e.target.value, "Marketed by")}
                                                            />
                                                            <small style={{ display: (this.state.marketedAddressError) ? 'block' : 'none' }} className="error">Address field is required</small>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.marketedLicenceError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                ref={(input) => { this.marketedLicence = input; }}
                                                                onChange={(e) => this.setLicence(e.target.value, "Marketed by")}
                                                            />
                                                            <small style={{ display: (this.state.marketedLicenceError) ? 'block' : 'none' }} className="error">Licence No field is required</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><label className="container">
                                                                Imported By
                                                                <input
                                                                    id="checkbox"
                                                                    type="checkbox"
                                                                    value="Imported by"
                                                                    onChange={this.checkmarketed}
                                                                    checked={this.state.importedChecked}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label></p>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.importedNameError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                name="name"
                                                                ref={(input) => { this.importedName = input; }}
                                                                onChange={e => this.setName(e.target.value, "Imported by")}
                                                            />
                                                            <small style={{ display: (this.state.importedNameError) ? 'block' : 'none' }} className="error">Name field is required</small>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.importedAddressError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                ref={(input) => { this.importedAddress = input; }}
                                                                onChange={(e) => this.setAddress(e.target.value, "Imported by")}
                                                            />
                                                            <small style={{ display: (this.state.importedAddressError) ? 'block' : 'none' }} className="error">Address field is required</small>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id={(this.state.importedLicenceError) ? 'validation-error' : "serving-detail"}
                                                                variant="outlined"
                                                                type="text"
                                                                ref={(input) => { this.importedLicence = input; }}
                                                                onChange={(e) => this.setLicence(e.target.value, "Imported by")}
                                                            />
                                                            <small style={{ display: (this.state.importedLicenceError) ? 'block' : 'none' }} className="error">Licence No field is required</small>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="inline-flex country-table" style={{ display: this.state.countryChecked ? 'block' : 'none' }}>
                                        Country of Origin:
                                        &nbsp; &nbsp; &nbsp;
                                            <select onChange={e => this.setState({ country: e.target.value,countrySelection: false })}>
                                                <option>Select Country</option>
                                                <option value="USA" >USA</option>
                                                <option value="INDIA">INDIA</option>
                                            </select>
                                    </div>
                                </div>
                                <div className="dimention-row">
                                    Upload FSSAI logo with Brand owner license number
                                        <div id="wrapper_">
                                        <div className="uploadOuter">
                                            <label htmlFor="uploadFile" className="btn btn-primary">Upload Image</label>
                                            <strong>OR</strong>
                                            <span className="dragBox">
                                                Drag and Drop image here
                                                <input type="file" onChange={this.uploadBrand} onDragOver={this.drag} onDrop={this.drop} id="uploadFile" />
                                            </span>
                                        </div>
                                        <div id="preview"></div>
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
