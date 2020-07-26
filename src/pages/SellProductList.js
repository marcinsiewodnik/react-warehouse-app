import React from 'react';
import SellProduct from '../components/SellProduct'

const SellProductList = ({ products, sell }) => {

    products = products.map(product => {

        return (

            <SellProduct key={product.id} product={product} sell={sell} />
        )
    });

    return (

        <div className="products">

            <h2>Sell product</h2>

            {products}

        </div>
    );

}

export default SellProductList;