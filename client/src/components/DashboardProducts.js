import React from 'react'
import { useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './DashboardProducts.css';
import { useDeleteProductMutation } from '../services/appApi';

function DashboardProducts() {
    const products = useSelector((state) => state.products);
    const user = useSelector((state) => state.user);
    
    // removing the product
    const [deleteProduct, {isLoading, isSuccess}] = useDeleteProductMutation();
    function handleDeleteProduct(id){
        // logic here
        if(window.confirm("Are you sure?")) deleteProduct({ product_id: id, user_id: user._id});
    }

  return (
    <Container>
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr>
                        <td><img className='dashboard-product-preview' src={product.pictures[0].url} /></td>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>
                                <Button onClick={() => handleDeleteProduct(product._id,user._id)} disabled={isLoading}>Delete</Button>
                                <Link to={`/product/${product._id}/edit`} className="btn btn-warning">Edit</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
  )
}

export default DashboardProducts