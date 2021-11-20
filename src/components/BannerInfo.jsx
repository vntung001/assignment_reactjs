import React from 'react'
import banner from '../asset/images/banner.jpg'
const BannerInfo = () => {
    return (
        <>
            <div className="">
                <img src={banner} />
            </div>
            <div className="container h-16 mx-auto bg-gray-50 grid grid-cols-4 gap-3 mt-4">
                <div className="shadow-xl">
                    <div className="flex flex-row justify-around items-center h-full">
                        <div className="w-20%">
                            <i className="fas fa-shopping-bag text-purple-400 text-2xl"></i>
                        </div>
                        <div className="w-80%">
                            <p className="text-base font-medium">Miễn phí giao hàng</p>
                            <p className="text-xs font-thin">Miễn phí giao hàng với đơn hàng > 239K</p>
                        </div>
                    </div>
                </div>

                <div className="shadow-xl">
                    <div className="flex flex-row justify-around items-center h-full">
                        <div className="w-20%">
                            <i className="far fa-credit-card text-purple-400 text-2xl"></i>
                        </div>
                        <div className="w-80%">
                            <p className="text-base font-medium">Thanh toán COD</p>
                            <p className="text-xs font-thin">Thanh toán khi nhận hàng (COD)</p>
                        </div>
                    </div>
                </div>
                <div className="shadow-xl">
                    <div className="flex flex-row justify-around items-center h-full">
                        <div className="w-20%">
                            <i className="far fa-gem text-purple-400 text-2xl"></i>
                        </div>
                        <div className="w-80%">
                            <p className="text-base font-medium">Khách hàng VIP</p>
                            <p className="text-xs font-thin">Ưu đãi dành cho khách hàng VIP</p>
                        </div>
                    </div>
                </div><div className="shadow-xl">
                    <div className="flex flex-row justify-around items-center h-full">
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
        </>
    )
}

export default BannerInfo
