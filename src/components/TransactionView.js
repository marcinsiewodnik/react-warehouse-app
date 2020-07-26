import React from 'react';

const TransactionView = ({ transaction }) => {

    const { id, type, productId, productName, productCategory, productUnitPrice, quantity } = transaction;

    return (

        <div className="transaction-view">

            <p><span>Id: </span><span>{id}</span></p>
            <p><span>Type: </span><span>{type}</span></p>
            <p><span>Product id: </span><span>{productId}</span></p>
            <p><span>Product name: </span><span>{productName}</span></p>
            <p><span>Product category: </span><span>{productCategory}</span></p>
            <p><span>Product unit price: </span><span>{productUnitPrice}</span></p>
            <p><span>Quantity: </span><span>{quantity}</span></p>

        </div>
    );

}

export default TransactionView;