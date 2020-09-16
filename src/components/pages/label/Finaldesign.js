import React, { Component } from 'react'
import DashMain from '../../DashMain'
import { Button, Container, Content, Modal } from 'rsuite'
import Sidebar from '../../common/Sidebar'
import html2canvas from '../../../../node_modules/html2canvas'
import ReactToPrint from 'react-to-print';
import { jsPDF } from "jspdf";
import Draggable from 'react-draggable';

export default class Finaldesign extends Component {
    constructor(props) {
        super(props)

        this.state = {
            zoom: 1,
            show: false,
            showPopup: false
        }
        this.toggle = this.toggle.bind(this);

    }
    zoomIn = () => {
        this.setState({
            zoom: this.state.zoom + 0.1
        })
    }
    zoomOut = () => {
        if (this.state.zoom != 1) {
            this.setState({
                zoom: this.state.zoom - 0.1
            })
        }
    }
    resetZoom = () => {
        this.setState({
            zoom: 1
        })
    }
    toggle(event) {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
    }
    savePreview = (ext) => {
        html2canvas(document.getElementById("final")).then(function (canvas) {
            document.getElementById("img-out").append(canvas);
            if (ext === "AI") {
                var image = canvas.toDataURL("application/pdf");
                var link = document.createElement('a');
                link.download = "my-label.ai";
                link.href = image;
                link.click();
            }
            if (ext === "PDF") {
                var image = canvas.toDataURL("image/png");
                const pdf = new jsPDF("1", "mm", "a2");
                pdf.addImage(image, 'PNG', 0, 0);
                pdf.save("my-label.pdf");
            }
            if (ext === "PNG") {
                var image = canvas.toDataURL("image/png");
                var link = document.createElement('a');
                link.download = "my-label.png";
                link.href = image;
                link.click();
            }
            if (ext === "JPEG") {
                var image = canvas.toDataURL("image/jpeg");
                var link = document.createElement('a');
                link.download = "my-label.jpeg";
                link.href = image;
                link.click();
            }
            if (ext === "TIFF") {
                var image = canvas.toDataURL("image/tiff");
                var link = document.createElement('a');
                link.download = "my-label.tiff";
                link.href = image;
                link.click();
            }
            if (ext === "EPS") {
                var image = canvas.toDataURL("application/postscript");
                var link = document.createElement('a');
                link.download = "my-label.eps";
                link.href = image;
                link.click();
            }
        });
    }
    handleShow = () => {
        this.setState({ show: true })
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    SendEmail = () => {
        alert('Main function is not done')
    }

    print = () => {
        var printContents = document.getElementById('target').innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    ShowButtons = () => {
        this.setState({ showPopup: true })
    }

    handleButtonClose = () =>{
        this.setState({ showPopup: false })
    }

    render() {
        return (
            <div>
                <DashMain>
                    <Container>
                        <Sidebar />
                        <Content className="content-section">
                            <div className="dimention-row">
                                <strong>Label Preview </strong>
                            </div>
                            <div className="row justify-content-center" id="final" style={{ "zoom": this.state.zoom }}>
                                <div className="col-sm-11">
                                    <div className="row no-gutters preview target" ref={el => (this.componentRef = el)}>
                                        <div className="col-sm-4 column">
                                            <div className="ingredients-table-preview p-3">
                                                <section className="nutritionLabel" style={{ width: "100%" }}>
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
                                                    <div className="line m"><b>Amount Per Serving</b></div>
                                                    <div className="line">
                                                        <div className="fr">Calories from Fat 0</div>
                                                        <div><b>Calories</b> 0</div>
                                                    </div>
                                                    <div className="bar2" />
                                                    <div className="line ar"><b>% Daily Value<sup>*</sup></b></div>
                                                    <div className="line">
                                                        <div className="dv"><b>0</b>%</div>
                                                        <b>Total Fat</b> 0g</div>
                                                    <div className="line indent">
                                                        <div className="dv"><b>0</b>%</div>
                                                        Saturated Fat 0g
                                                        </div>
                                                    <div className="line indent">
                                                        <i>Trans</i> Fat 0g
                                                        </div>
                                                    <div className="line indent">Polyunsaturated Fat 0g</div>
                                                    <div className="line indent">Monounsaturated Fat 0g	</div>
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
                                                    <div className="line indent">
                                                        <div className="dv"><b>0</b>%</div>
                                                        Dietary Fiber 0g
                                                        </div>
                                                    <div className="line indent">Sugars 0g</div>
                                                    <div className="line"><b>Protein</b> 0g</div>
                                                    <div className="bar1" />
                                                    <div className="line vitaminA">
                                                        <div className="dv">0%</div>
                                                        Vitamin A
                                                        </div>
                                                    <div className="line vitaminC">
                                                        <div className="dv">0%</div>
                                                        Vitamin C
                                                        </div>
                                                    <div className="line calcium">
                                                        <div className="dv">0%</div>
                                                        Calcium
                                                        </div>
                                                    <div className="line iron">
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
                                            <div className="preview-address">
                                                <address>
                                                    <b>Frito-Lay. INC.</b>
                                                    <p>PLANO, TX 75024-4099 </p>
                                                    <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2020 FRITO-LAY, NORTH AMERICA INC.</p>
                                                </address>
                                                <p><img src="/images/preview/barcode.png" /></p>
                                            </div>

                                        </div>
                                        <div className="col-sm-4 column">
                                            <div className="front-preview p-3">
                                                <img src="/images/preview/veg-logo.png" className="preview-veg-non" />
                                                <h2 >Whole Food Market</h2>
                                                <p><img src="/images/preview/cadbury-logo.jpg" /></p>
                                                <p><img className="extra-image" src="/images/preview/images.png" /></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 column">
                                            <div className="p-3">
                                                <div className="preview-ingredient">
                                                    <h3>INGREDIENTS</h3>
                                                    <p>Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,RaisindRice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind</p>
                                                </div>
                                                <div className="preview-ingredient">
                                                    <h3>DESCRIPTION</h3>
                                                    <p>Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,RaisindRice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind</p>
                                                </div>
                                                <div className="main-sugar-box">
                                                    <div className='sugar-contain'>NO SUGER ADDED</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="preview-magnify">
                                        {/* <a className="btn zoom" onClick={this.zoomIn}><i className="fa fa-search-plus"></i></a>
                                        <a className="btn zoom-out" onClick={this.zoomOut}><i className="fa fa-search-minus"></i></a>
                                        <a className="btn zoom-init" onClick={this.resetZoom}><i className="fa fa-recycle"></i></a> */}
                                        <Button color="orange" className="btn" onClick={this.handleShow}>Preview</Button>
                                        <Button color="orange" className="btn" onClick={this.SendEmail}>Email</Button>
                                        <Button color="orange" className="btn" onClick={this.ShowButtons}>Download</Button>
                                        {/* <Button color="orange" className="btn" onClick={this.savePreview}>Download</Button> */}
                                        <ReactToPrint
                                            trigger={() => <Button color="orange" className="btn">Print</Button>}
                                            content={() => this.componentRef}
                                        />
                                    </div>
                                    <div id="img-out" style={{ display: "none" }}></div>
                                </div>
                                <Modal show={this.state.showPopup} onHide={this.handleButtonClose} className="all-download-buttons">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Downloas AS:</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="text-center">
                                        <Button color="orange" className="btn" onClick={(e) => this.savePreview('AI')}> AI </Button>
                                        <Button color="orange" className="btn" onClick={(e) => this.savePreview('PDF')}> PDF </Button>
                                        <Button color="orange" className="btn" onClick={(e) => this.savePreview('PNG')}> PNG </Button>
                                        <Button color="orange" className="btn" onClick={(e) => this.savePreview('JPEG')}> JPEG </Button>
                                        <Button color="orange" className="btn" onClick={(e) => this.savePreview('TIFF')}> TIFF </Button>
                                        <Button color="orange" className="btn" onClick={(e) => this.savePreview('EPS')}> EPS </Button>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleButtonClose}>Close</Button>
                                    </Modal.Footer>
                                </Modal>

                            </div>
                        </Content>
                    </Container>
                </DashMain>
                {/* Show Modal */}
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Label Preview</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row justify-content-center">
                            <div className="col-sm-11">
                                <div className="row no-gutters preview" id="final" style={{ "zoom": this.state.zoom }}>
                                    <div className="col-sm-4 column">
                                        <div className="ingredients-table-preview p-3">
                                            <section className="nutritionLabel" style={{ width: "100%" }}>
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
                                                <div className="line m"><b>Amount Per Serving</b></div>
                                                <div className="line">
                                                    <div className="fr">Calories from Fat 0</div>
                                                    <div><b>Calories</b> 0</div>
                                                </div>
                                                <div className="bar2" />
                                                <div className="line ar"><b>% Daily Value<sup>*</sup></b></div>
                                                <div className="line">
                                                    <div className="dv"><b>0</b>%</div>
                                                    <b>Total Fat</b> 0g</div>
                                                <div className="line indent">
                                                    <div className="dv"><b>0</b>%</div>
                                                        Saturated Fat 0g
                                                        </div>
                                                <div className="line indent">
                                                    <i>Trans</i> Fat 0g
                                                        </div>
                                                <div className="line indent">Polyunsaturated Fat 0g</div>
                                                <div className="line indent">Monounsaturated Fat 0g	</div>
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
                                                <div className="line indent">
                                                    <div className="dv"><b>0</b>%</div>
                                                        Dietary Fiber 0g
                                                        </div>
                                                <div className="line indent">Sugars 0g</div>
                                                <div className="line"><b>Protein</b> 0g</div>
                                                <div className="bar1" />
                                                <div className="line vitaminA">
                                                    <div className="dv">0%</div>
                                                        Vitamin A
                                                        </div>
                                                <div className="line vitaminC">
                                                    <div className="dv">0%</div>
                                                        Vitamin C
                                                        </div>
                                                <div className="line calcium">
                                                    <div className="dv">0%</div>
                                                        Calcium
                                                        </div>
                                                <div className="line iron">
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
                                        <div className="preview-address">
                                            <address>
                                                <b>Frito-Lay. INC.</b>
                                                <p>PLANO, TX 75024-4099 </p>
                                                <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2020 FRITO-LAY, NORTH AMERICA INC.</p>
                                            </address>
                                            <p><img src="/images/preview/barcode.png" /></p>
                                        </div>

                                    </div>
                                    <div className="col-sm-4 column">
                                        <div className="front-preview p-3">
                                            <img src="/images/preview/veg-logo.png" className="preview-veg-non" />
                                            <h2 >Whole Food Market</h2>
                                            <p><img src="/images/preview/cadbury-logo.jpg" /></p>
                                            <p><img className="extra-image" src="/images/preview/images.png" /></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 column">
                                        <div className="p-3">
                                            <div className="preview-ingredient">
                                                <h3>INGREDIENTS</h3>
                                                <p>Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,RaisindRice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind</p>
                                            </div>
                                            <div className="preview-ingredient">
                                                <h3>DESCRIPTION</h3>
                                                <p>Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,RaisindRice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisins,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind,Rice,Sgar,WholeWheat,Raisind</p>
                                            </div>
                                            <div className="main-sugar-box">
                                                <div className='sugar-contain'>NO SUGER ADDED</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="preview-magnify">
                            <Button color="blue" className="btn zoom" onClick={this.zoomIn}><i className="fa fa-search-plus"></i></Button>
                            <Button color="blue" className="btn zoom-out" onClick={this.zoomOut}><i className="fa fa-search-minus"></i></Button>
                            <Button color="blue" className="btn zoom-init" onClick={this.resetZoom}><i className="fa fa-recycle"></i></Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        {/* <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
