import React from 'react'
import { useForm } from 'react-hook-form'

const CategoryAdd = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.onAdd(data);
    };

    const addCategoryForm = () => {
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

                <button className="btn btn-primary">Thêm</button>
            </form>
        );
    };
    return (
        <div>
            {addCategoryForm()}
        </div>
    )
}

export default CategoryAdd
