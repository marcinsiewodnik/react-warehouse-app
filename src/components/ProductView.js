import React from 'react';

const ProductView = ({ product }) => {

    const { id, name, category, unitPrice, quantityInStock } = product;

    return (

        <div className="product-view">

            <p><span>Id: </span><span>{id}</span></p>
            <p><span>Name: </span><span>{name}</span></p>
            <p><span>Category: </span><span>{category}</span></p>
            <p><span>Price: </span><span>{unitPrice}</span></p>
            <p><span>Quantity: </span><span>{quantityInStock}</span></p>

        </div>
    );

}

export default ProductView;