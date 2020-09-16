import React, { Component } from 'react'
import Sidebar from '../../common/Sidebar'
import { TextField } from '@material-ui/core';
import DashMain from '../../DashMain';
import { Link } from 'react-router-dom';
import { Content, Container, Button } from 'rsuite';

import { Stage, Layer, Text, Image, Transformer } from 'react-konva';
import useImage from 'use-image';
import { toast } from 'react-toastify';

const LionImage = () => {
    const [image] = useImage('/images/labels/label.jpg');
    return <Image image={image} name="rectange1"
        x={190}
        y={10}
        width={100}
        height={100}
        draggable />;
};

class TransformerComponent extends React.Component {
    componentDidMount() {
        this.checkNode();
    }
    componentDidUpdate() {
        this.checkNode();
    }
    checkNode() {
        const stage = this.transformer.getStage();
        const { selectedShapeName } = this.props;
        const selectedNode = stage.findOne("." + selectedShapeName);
        // if (selectedNode === this.transformer.node()) {
        //     // return false;
        // }
        if (selectedNode) {
            this.transformer.attachTo(selectedNode);
        } else {
            this.transformer.detach();
        }
        this.transformer.getLayer().batchDraw();
    }
    render() {
        return (
            <Transformer
                ref={node => {
                    this.transformer = node;
                }}
            />
        );
    }
}

export default class FoodName extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            food_image: '',
            brand: '',
            imagesName: '/images/labels/label.jpg',
            image: null,
            width: 500,
            height: 500,
            selectedShapeName: ""
        }
    }

    handleStageClick = e => {
        this.setState({
            selectedShapeName: e.target.name()
        });
    };
    componentDidMount() {
        this.loadImage();
    }

    componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src) {
            this.loadImage();
        }
    }
    componentWillUnmount() {
        this.image.removeEventListener('load', this.handleLoad);
    }

    loadImage() {
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad);
    }

    handleLoad = () => {
        this.setState({
            image: this.image
        });
    };

    handleChange(changeObject) {
        this.setState(changeObject);
    }

    handleSubmit = evt => {
        if (this.state.name === "") {
            toast.error("Please enter Food Name")
            return false;
        }
        if (this.state.name === "") {
            toast.error("Please enter Food Name")
            return false;
        }
    }

    uploadBrand = (event) => {
        this.setState({
            imagesName: event.target.files[0].name
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

    render() {
        return (
            <div>
                <DashMain>
                    <Container>
                        <Sidebar />
                        <Content className="content-section">
                            <div className="dimention-row">
                                <strong>Name of Food : </strong>
                            </div>
                            <div className="top_bx">
                                <div className="col-xs-6 col-sm-6">
                                    <div className="FoodName-section">
                                        <div id="wrapper_">
                                            <h4 className="flex-head">Name of Food</h4>
                                            <div>
                                                <TextField style={{ width: '80%' }}
                                                    id="outlined-read-helper-text"
                                                    label="Name of Food"
                                                    helperText=""
                                                    variant="outlined"
                                                    onChange={(e) => this.handleChange({ name: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div id="wrapper_">
                                            <h4 className="flex-head">Logo</h4>
                                            <div>
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
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6">
                                <Stage
                                    width={this.state.width}
                                    height={this.state.height}
                                    onClick={this.handleStageClick}
                                    style={{
                                        border: "1px solid black",
                                    }}
                                >
                                    <Layer>
                                        <LionImage />
                                        <Text
                                            name="text"
                                            text={this.state.name}
                                            x={120}
                                            y={120}
                                            width={400}
                                            height={80}
                                            draggable
                                            fontSize={50}

                                            fill={this.state.isDragging ? 'green' : 'grey'}

                                        />
                                        <TransformerComponent
                                            selectedShapeName={this.state.selectedShapeName}
                                        />
                                    </Layer>
                                </Stage>
                                </div>
                            </div>
                            <div className="pull-right">
                                {/* <Link to={`/label/selection-of-categories-or-subcategories`}><Button color="orange">Previous</Button></Link> */}
                                <Button color="orange" onClick={this.handleSubmit}> Save and Next</Button>
                            </div>
                        </Content>
                    </Container>
                </DashMain >
            </div >
        )
    }
}
