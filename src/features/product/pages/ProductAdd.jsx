import React from 'react'
import { useForm } from 'react-hook-form'
// import { read } from "../../../api/productAPI";
import { useNavigate } from 'react-router-dom';

// import firebase from "../../../firebase"

const ProductAdd = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // const onSubmit = async (data) => {

    //     try {
    //         const file = data.photo[0]
    //         let storeRef = firebase.storage().ref(`images/${file.name}`);
    //         storeRef.put(file).then((e) => {
    //             storeRef.getDownloadURL().then(async (url, e) => {
    //                 console.log(url);
    //                 const newData = {
    //                     ...data,
    //                     photo: url
    //                 }
    //                 props.onAdd(newData)
    //                 navigate.push("/admin/product");
    //             });
    //         });


    //     } catch (error) {
    //         console.log(error.response.data.error);

    //     }

    // }




    const onSubmit = (data) => {
        props.onAdd(data);
    };

    const addProductForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="inputCity" className="form-label">Tên Sản Phẩm:</label>
                    <input
                        type="text"
                        {...register("name", { required: true, maxLength: 255 })}
                        placeholder="Tên sản phẩm"
                        className="form-control my-3 "
                    />
                    {errors.name && <span>Field is required</span>}
                </div>

                <div>
                    <label htmlFor="inputCity" className="form-label">Giá Sản Phẩm:</label>
                    <input
                        type="text"
                        {...register("price")}
                        placeholder="Giá sản phẩm"
                        className="form-control my-3 "
                    />
                </div>

                <div>
                    <label htmlFor="inputCity" className="form-label">Mô Tả Sản Phẩm:</label>
                    <input
                        type="text"
                        {...register("description", { required: true })}
                        placeholder="Mô tả sản phẩm"
                        className="form-control my-3 "
                    />
                    {errors.name && <span>Field is required</span>}
                </div>
                <div>
                    <label htmlFor="inputCity" className="form-label">Link Ảnh:</label>
                    <input
                        type="text"
                        {...register("image", { required: true })}
                        placeholder="Link Ảnh"
                        className="form-control my-3 "
                    />
                    {errors.name && <span>Field is required</span>}
                </div>
                <div>
                    <label htmlFor="inputCity" className="form-label">Danh mục</label>
                    <select id="product_categoryId" className="form-control" {...register("categoryId")}>
                        {props.category.map((cate) => {
                            return (<option value={cate.id}>{cate.name}</option>)
                        })}
                    </select>
                </div>


                <button className="btn btn-primary mt-3">Thêm</button>
            </form>
        );
    };
    return (
        <div>
            {addProductForm()}
        </div>
    )
}

export default ProductAdd
