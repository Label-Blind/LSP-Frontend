import React, { Component } from 'react'
import Sidebar from '../common/Sidebar'
import { Link } from 'react-router-dom'
import DashMain from '../DashMain'
import { Breadcrumb, Content } from 'rsuite'

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            token: localStorage.getItem('access_token')
        }
    }

    componentDidMount() {
        document.title = 'Label Service Provider | user Dashboard';
        // if (this.state.token === null) {
        //     this.props.history.push("/");
        // }
    }

    render() {
        return (
            <div>
                <DashMain>
                    <Sidebar />
                    <div className="left-blank-menu"></div>
                    <Content className="content-section">
                        <Breadcrumb>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </Breadcrumb>
                        <div className="top_bx">
                            <div className="col-xs-4 col-sm-4">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">
                                        <i className="fa fa-plus-square" />
                                        <Link to={'/new-label'} ><span className="_notxt"> Create New Label </span></Link>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body">
                                        <i className="fa fa-tag" />
                                        <Link to={'/incomplete-labels'} ><span className="_notxt"> Ongoing Label </span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">
                                        <i className="fa fa-tags" />
                                        <Link to={'/complete-labels'} ><span className="_notxt"> Completed Label </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </DashMain >
            </div >
        )
    }
}
