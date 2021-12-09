import React from 'react'
import logo from '../asset/images/logo.png'
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="bg-white h-[65px] w-100% shadow-bottom ">
                <div className="container mx-auto grid grid-cols-3">
                    <div>
                        <ul className="mt-4 flex flex-row justify-around items-center">
                            <NavLink to="/" activeclass="active" className="no-underline"><li className="text-gray-600 font-medium hover:text-purple-600 ">Trang Chủ</li></NavLink>
                            <NavLink to="product" activeclass="active" className="no-underline"><li className="text-gray-600 font-medium hover:text-purple-600 ">Sản Phẩm</li></NavLink>
                            <NavLink to="contact" activeclass="active" className="no-underline"><li className="text-gray-600 font-medium hover:text-purple-600 ">Liên Hệ</li></NavLink>
                            <NavLink to="blog" activeclass="active" className="no-underline"><li className="text-gray-600 font-medium hover:text-purple-600 ">Tin Tức</li></NavLink>

                        </ul>
                    </div>
                    <div className="w-[100px] mx-auto">
                        <NavLink to="/" activeclass="active"><img src={logo} width={95} height={45} /></NavLink>
                    </div>
                    <div className="w-300 flex flex-row justify-end">
                        <div className="mx-4 mt-3">
                            <div><i className="fas fa-shopping-bag text-2xl inline-block hover:text-purple-600"></i>(0) </div>
                        </div>
                        <div className="mx-4 mt-3">
                            <div><i className="fas fa-search text-2xl inline-block hover:text-purple-600"></i></div>
                        </div>
                        <div className="mx-4 mt-3">
                            <NavLink to="/admin" activeclass="active"><i className="far fa-user text-2xl inline-block hover:text-purple-600"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />

        </>
    )
}

export default Header
