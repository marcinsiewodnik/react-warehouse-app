import React from 'react';
import "../styles/WarehouseState.sass"

const Warehouse = ({ products }) => {

    const productList = products.map(product => {

        // Product -> we can't modyfiy its fields -> we can only modify fields though mehtods

        const { id, name, category, currentQuantity, soldQuantity, unitPrice } = product.getProductData();

        return (

            <li key={id}> id: {id} | name: {name} | category: {category} | quantity: {currentQuantity} | sold: {soldQuantity} | price: {unitPrice}</li>
        )
    });

    return (

        <div>

            <p>Products</p>

            <ul>

                {productList}

            </ul>

        </div>

    );
}

export default Warehouse;