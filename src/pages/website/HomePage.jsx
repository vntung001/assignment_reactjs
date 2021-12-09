import React from 'react'
import BannerInfo from '../../components/BannerInfo'
import { NavLink } from 'react-router-dom'
// import Footer from '../../components/Footer'


const HomePage = ({ products }) => {

    return products && (
        <div>
            <BannerInfo />
            <div class="container mx-auto h-[100px] py-2 relative">
                <p class="text-6xl font-bold text-pink-200 absolute transform top-1/2 -translate-y-1/2">PRODUCTS</p>
                <p class="text-xl font-bold absolute transform top-1/2 -translate-y-1/2 z-10 text-current">-SẢN PHẨM BÁN CHẠY</p>
            </div>
            <div className="container mx-auto grid grid-cols-5 gap-1 mt-10 mb-8">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="">
                            <div className="w-[200px] mx-auto">
                                <NavLink activeclass="active" to={`/product/${product.id}`}>   <img className="h-64 object-cover" src={product.image} /> </NavLink>
                            </div>
                            <NavLink activeclass="active" to={`/product/${product.id}`} className="hover:text-red-600 text-gray-800 no-underline">
                                <p className="text-lg font-light ml-4 mt-3">{product.name}</p>
                            </NavLink>
                            <p className="text-lg text-red-500 ml-4">{product.price}đ</p>


                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default HomePage
