import React from 'react'
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { read } from "../../../api/categoryAPI";

const CategoryEdit = (props) => {
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
        const getCategory = async () => {
            try {
                // call API lấy thông tin sản phẩm thông qua ID gửi lên
                const { data } = await read(id);
                reset(data);
            } catch (error) { }
        };
        getCategory();
    }, [id, reset]);

    const onSubmit = (data) => {
        props.onUpdate(data);
    };

    const editCategoryForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Tên danh mục"
                        className="form-control my-3 "
                    />
                    {errors.name && <span>Field is required</span>}
                </div>

                <button className="btn btn-primary mr-3">Cập nhật</button>
                <button className="btn btn-primary" onClick={() => navigate(-1)}>Quay lại</button>
            </form>
        );
    };

    return (
        <div>
            {editCategoryForm()}
        </div>
    )
}

export default CategoryEdit
