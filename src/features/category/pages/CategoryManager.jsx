import React from 'react'
import { NavLink, Link } from "react-router-dom";

const CategoryManager = ({ categories, onRemove }) => {
    return (
        <div>
            <NavLink className="btn btn-primary" to="category/add" activeclass="active">Add Category</NavLink>
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th width="200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
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

export default CategoryManager
