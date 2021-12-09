import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import SidebarAdmin from '../components/SidebarAdmin';

const LayoutAdmin = () => {
    return (
        <div>

            <NavLink to="/" activeclass="active" className="text-red-500">
                Back to website
            </NavLink>

            <div className="container">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <SidebarAdmin />
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar"></span>
                                    This week
                                </button>
                            </div>
                        </div>


                        <Outlet />

                    </main>

                </div>
            </div>

        </div>
    )
}

export default LayoutAdmin
