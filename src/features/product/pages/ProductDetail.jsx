import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../../../api/productAPI";
import imgdetails from "../../../asset/images/imgdetail.png";
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        // khai báo hàm getProduct
        const getProduct = async () => {
            try {
                // call API lấy thông tin sản phẩm thông qua ID gửi lên
                const { data } = await read(id);
                setProduct(data);
            } catch (error) { }
        };
        getProduct();
    }, [id]);
    return (
        <div>
            <div className="container mx-auto h-[690px]  my-8 grid grid-cols-[10%,50%,40%] gap-3">
                <div className="mx-auto h-[675px] grid grid-rows-5 gap-3">
                    <div>
                        <img src={"https://bizweb.dktcdn.net/thumb/medium/100/438/408/products/kid4027-xtr-4.jpg"} width={100} />
                    </div>
                    <div>
                        <img src={"https://bizweb.dktcdn.net/thumb/medium/100/438/408/products/kid4027-xtr-1.jpg"} width={100} />
                    </div>
                    <div>
                        <img src={"https://bizweb.dktcdn.net/thumb/medium/100/438/408/products/kid4027-xtr-2.jpg"} width={100} />
                    </div>
                    <div>
                        <img src={"https://bizweb.dktcdn.net/thumb/medium/100/438/408/products/kid4027-xtr-2.jpg"} width={100} />
                    </div>
                    <div>
                        <img src={"https://bizweb.dktcdn.net/thumb/medium/100/438/408/products/kid4027-xtr-5.jpg"} width={100} />
                    </div>
                </div>
                <div className="px-10">
                    <img src={product.image} width="550" />
                </div>
                <div className="mt-4">
                    <p className="text-2xl font-semibold mb-4">{product.name}</p>
                    <p className="text-lg font-semibold mb-4 text-purple-700">{product.price}đ</p> <hr />
                    <div className="mb-7 mt-4"><input className="border border-red-700 h-10 w-14 text-xl font-bold px-2" type="number" defaultValue={1} min={1} max={100} step={1} /></div>
                    <div className="h-12 w-full grid grid-cols-2 gap-3 mb-8">
                        <button className="bg-purple-500  h-12 font-semibold outline-none text-base rounded text-white">THÊM VÀO GIỎ</button>
                        <button className="bg-purple-500  h-12 font-semibold outline-none text-base rounded text-white">MUA NGAY</button>
                    </div>
                    <div className="h-[180px] w-full grid grid-rows-2 mb-5">
                        <div className="grid grid-cols-2">
                            <div className="border border-gray-300"><div className="flex flex-row justify-around items-center h-full">
                                <div className="w-20%">
                                    <i className="fas fa-shopping-bag text-purple-400 text-2xl"></i>
                                </div>
                                <div className="w-80%">
                                    <p className="text-base font-medium">Giao hàng</p>
                                    <p className="text-xs font-thin">Miễn phí ship với đơn hàng > 239K</p>
                                </div>
                            </div>
                            </div>
                            <div className="border border-gray-300"><div className="flex flex-row justify-around items-center h-full">
                                <div className="w-20%">
                                    <i className="far fa-credit-card text-purple-400 text-2xl"></i>
                                </div>
                                <div className="w-80%">
                                    <p className="text-base font-medium">Thanh toán COD</p>
                                    <p className="text-xs font-thin">Thanh toán khi nhận hàng (COD)</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="border border-gray-300"><div className="flex flex-row justify-around items-center h-full">
                                <div className="w-20%">
                                    <i className="far fa-gem text-purple-400 text-2xl"></i>
                                </div>
                                <div className="w-80%">
                                    <p className="text-base font-medium">Khách hàng VIP</p>
                                    <p className="text-xs font-thin">Ưu đãi dành cho khách hàng VIP</p>
                                </div>
                            </div>
                            </div>
                            <div className="border border-gray-300"><div className="flex flex-row justify-around items-center h-full">
                                <div className="w-20%">
                                    <i className="fas fa-hand-holding-heart text-purple-400 text-2xl"></i>
                                </div>
                                <div className="w-80%">
                                    <p className="text-base font-medium">Hỗ trợ đổi trả</p>
                                    <p className="text-xs font-thin">Đổi trả hàng trực tất cả các store</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <p className="font-semibold text-xl mb-4">Đặc điểm sản phẩm</p>
                    <p>{product.description}</p>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail
