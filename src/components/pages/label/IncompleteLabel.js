import React, { Component } from 'react'
import Sidebar from '../../common/Sidebar'
import DashMain from '../../DashMain'

export default class IncompleteLabel extends Component {
    render() {
        return (
            <div>
                <DashMain>
                    <div className="sb-nav-fixed bg-light" >
                        <div id="layoutSidenav">
                            <Sidebar />
                            <div id="layoutSidenav_content">
                                <main>
                                    <div className="container-fluid">
                                        {/* <h1 className="mt-4">In-Complete Labels</h1> */}
                                        <ol className="breadcrumb ">
                                            <li className="breadcrumb-item active">All In-Completed Labels</li>
                                        </ol>
                                        <div className="card mb-4">
                                            <div className="card-header"><i className="fas fa-table mr-1" />In-Completed Labels Table</div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                                        <thead>
                                                            <tr>
                                                                <th>Food Name</th>
                                                                <th>Position</th>
                                                                <th>Office</th>
                                                                <th>Age</th>
                                                                <th>Start date</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tfoot>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Position</th>
                                                                <th>Office</th>
                                                                <th>Age</th>
                                                                <th>Start date</th>
                                                                <th>Salary</th>
                                                            </tr>
                                                        </tfoot>
                                                        <tbody>
                                                            <tr>
                                                                <td>Tiger Nixon</td>
                                                                <td>System Architect</td>
                                                                <td>Edinburgh</td>
                                                                <td>61</td>
                                                                <td>2011/04/25</td>
                                                                <td>$320,800</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Garrett Winters</td>
                                                                <td>Accountant</td>
                                                                <td>Tokyo</td>
                                                                <td>63</td>
                                                                <td>2011/07/25</td>
                                                                <td>$170,750</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ashton Cox</td>
                                                                <td>Junior Technical Author</td>
                                                                <td>San Francisco</td>
                                                                <td>66</td>
                                                                <td>2009/01/12</td>
                                                                <td>$86,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Cedric Kelly</td>
                                                                <td>Senior Javascript Developer</td>
                                                                <td>Edinburgh</td>
                                                                <td>22</td>
                                                                <td>2012/03/29</td>
                                                                <td>$433,060</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Airi Satou</td>
                                                                <td>Accountant</td>
                                                                <td>Tokyo</td>
                                                                <td>33</td>
                                                                <td>2008/11/28</td>
                                                                <td>$162,700</td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                                {/* <footer className="py-4 bg-light mt-auto">
                                    <div className="container-fluid">
                                        <div className="d-flex align-items-center justify-content-between small">
                                            <div className="text-muted">Copyright © TMS </div>
                                            <div>
                                                <a href="#">Privacy Policy</a>·<a href="#">Terms &amp; Conditions</a>
                                            </div>
                                        </div>
                                    </div>
                                </footer> */}
                            </div>

                        </div>
                    </div>
                </DashMain>
            </div>
        )
    }
}
