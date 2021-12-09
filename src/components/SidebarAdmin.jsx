import React from 'react'
import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
    return (
        <div>
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to="dashboard" activeclass="active" >
                            <span data-feather="home"></span>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="product" activeclass="active">
                            <span data-feather="file"></span>
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="category" activeclass="active">
                            <span data-feather="file"></span>
                            Categories
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarAdmin
