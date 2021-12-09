import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const CategoryPage = ({ products, categories }) => {
    const { id } = useParams()


    return products && (
        <div>
            <div className="container mx-auto grid grid-cols-[25%,75%]">
                <div className="p-6 h-[380px]">
                    <div className="w-full h-full p-4 shadow-xl">
                        <p className="font-semibold text-lg mb-4">Danh Mục Sản Phẩm</p>
                        {categories.map(category => {
                            return (
                                <div className="border-b h-10 leading-10 pl-6 ">

                                    <p className="font-light text-base mb-3 hover:text-purple-600 "><NavLink className="no-underline" to={`/category/${category.id}`}>{category.name}</NavLink></p>
                                </div>
                            )
                        })
                        }

                    </div>
                </div>


                <div className=" grid grid-cols-4 gap-3 mt-10 mb-8">

                    {products.filter(product => product.categoryId == id).map((product, index) => {
                        return (
                            <div key={index} className="">
                                <div className="w-[200px] mx-auto">
                                    <img className="h-64 object-cover" src={product.image} />
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

        </div>
    )
}

export default CategoryPage
