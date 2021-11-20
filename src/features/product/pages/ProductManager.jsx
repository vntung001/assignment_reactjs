import React from 'react'
import { Link } from "react-router-dom";

const ProductManager = ({ products, onRemove }) => {
    return (
        <div>
            <table>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={() => onRemove(item._id)}>Remove</button>
                                    <Link to={`${item._id}/edit`}>Edit</Link>
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
