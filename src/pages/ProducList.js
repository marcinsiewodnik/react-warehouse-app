import React from 'react';
import Product from '../components/Product';

const ProductList = ({ products, changeProduct, add }) => {

    products = products.map(product => {

        return (

            <Product key={product.id} product={product} changeProduct={changeProduct} add={add} />
        )
    })

    return (

        <div>

            <h2>Products</h2>

            <div>

                {products}

            </div>

        </div>
    );

}

export default ProductList;