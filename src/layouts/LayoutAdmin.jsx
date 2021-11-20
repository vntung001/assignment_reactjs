import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    return (
        <div>
            <div className="flex space-x-5">
                <NavLink to="dashboard" activeclass="active">
                    Dashboard
                </NavLink>
                <NavLink to="product" activeclass="active">
                    Quản lý sản phẩm
                </NavLink>
                <NavLink to="product/add" activeclass="active">
                    Thêm sản phẩm
                </NavLink>
                <NavLink to="/" activeclass="active" className="text-red-500">
                    Back to website
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default LayoutAdmin
