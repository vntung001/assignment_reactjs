import React from 'react'
import { NavLink, Link } from "react-router-dom";

const ProductManager = ({ products, onRemove }) => {
    return (
        <div>
            <NavLink className="btn btn-primary" to="product/add" activeclass="active">Add Product</NavLink>
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th width="200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><img src={item.image} width={100} height={100} /></td>

                                <td>
                                    <button onClick={() => onRemove(item.id)} class="btn btn-danger mr-3">Remove</button>
                                    <Link to={`${item.id}/edit`} className="btn btn-primary">Edit</Link>
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default ProductManager
