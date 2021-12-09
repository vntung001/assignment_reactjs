import React from 'react'
import logo from '../asset/images/logo.png'

const Footer = () => {
    return (
        <>
            <div className="bg-gray-50 h-[270px] py-[50px] mt-20">
                <div className="container mx-auto h-[200px] grid grid-cols-4 ">
                    <div className="container mx-auto h-28 px-4">
                        <p className="font-bold mb-3 py-3">TỔNG ĐÀI HỖ TRỢ</p>
                        <p className="text-sm my-2">Liên hệ đặt hàng:<span className="font-semibold"> 0123456789</span> </p>
                        <p className="text-sm my-2">Thắc mắc đơn hàng: <span className="font-semibold"> 0123456789</span></p>
                        <p className="text-sm my-2">Góp ý, khiếu nại: <span className="font-semibold"> 0123456789</span></p>
                    </div>
                    <div className="container mx-auto h-28 px-4">
                        <p className="font-bold mb-3 py-3">VỀ YODY</p>
                        <p className="text-sm my-2">Giới thiệu</p>
                        <p className="text-sm my-2">Liên hệ</p>
                        <p className="text-sm my-2">Tuyển dụng</p>
                        <p className="text-sm my-2">Tin tức</p>
                        <p className="text-sm my-2">Hệ thống cửa hàng</p>

                    </div><div className="container mx-auto h-28 px-4">
                        <p className="font-bold mb-3 py-3">CHĂM SÓC KHÁCH HÀNG</p>
                        <p className="text-sm my-2">Chính sách đổi trả</p>
                        <p className="text-sm my-2">Chính sách bảo hành</p>
                        <p className="text-sm my-2">Chính sách hoàn tiền</p>
                    </div><div className="container mx-auto h-28 px-4">
                        <div>
                            <img src={logo} width={150} />
                        </div>
                        <p className="text-sm mt-4">“Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn cùng YODY tiến bước”</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
