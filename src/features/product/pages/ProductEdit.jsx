import React from 'react'
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { read } from "../../../api/productAPI";

const ProductEdit = (props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    // Lấy ID trên url thông qua hook useParams
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // khai báo hàm getProduct
        const getProduct = async () => {
            try {
                // call API lấy thông tin sản phẩm thông qua ID gửi lên
                const { data } = await read(id);
                reset(data);
            } catch (error) { }
        };
        getProduct();
    }, [id, reset]);

    const onSubmit = (data) => {
        props.onUpdate(data);
    };

    const editProductForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Tên sản phẩm"
                    />
                    {errors.name && <span>Field is required</span>}
                </div>

                <div>
                    <input
                        type="text"
                        {...register("price")}
                        placeholder="Giá sản phẩm"
                    />
                </div>
                <button>Cập nhật</button>
                <button onClick={() => navigate(-1)}>Quay lại</button>
            </form>
        );
    };

    return (
        <div>
            {editProductForm()}
        </div>
    )
}

export default ProductEdit
